import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const ParticlesSetting = {

  particles: {
    collisions: {
      enable: true,
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 3,
        size_min: 0.3
      }
    },
    move: {
      random: true,
      speed: 1,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      },
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch(' https://safe-earth-86770.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: this.state.input })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          fetch(' https://safe-earth-86770.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: this.state.user.id })
          })
            .then(data => data.json())
            .then(count => this.setState(Object.assign(this.state.user, { entries: count })))
            .catch(console.log)
        }
        return this.calculateFaceLocation(data)
      })
      .then(data => this.displayFaceBox(data))
      .catch(err => {
        console.log(err);
        alert('Did not detect any valid human face. Please try again.')
      });
  }

  calculateFaceLocation = (data) => {
    const faces = data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return faces.map(face => {
      let clarifyFace = face.region_info.bounding_box;
      return {
        leftCol: clarifyFace.left_col * width,
        topRow: clarifyFace.top_row * height,
        rightCol: width * (1 - clarifyFace.right_col),
        bottomRow: height * (1 - clarifyFace.bottom_row)
      }
    })
  }

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  loadUser = (profile) => {
    this.setState({
      user: {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        entries: profile.entries,
        joined: profile.joined
      }
    })
  }

  render() {
    const { imageUrl, boxes, route, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={ParticlesSetting} />
        {
          route === 'home'
            ? <div>
              <Navigation style={{ zIndex: 0 }} onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} boxes={this.state.boxes} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>
            : (
              route === 'signin'
                ? <div>
                  <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
                  <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                </div>
                : <div>
                  <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
                  <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                </div>
            )
        }
      </div>
    )
  }
}

export default App;
