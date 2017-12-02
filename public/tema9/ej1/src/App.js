import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';

import Slider from 'react-slick';
import SlidesData from './slides.js';
import './slider.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notifications : OrderedSet(),
      count : 0
    }
    this.removeNotification=this.removeNotification.bind(this);
    this.images = SlidesData;

  }

  addNotification() {
    const { notifications, count } = this.state;
    const id = notifications.size + 1;
    const newCount = count + 1;
    return this.setState({
      count: newCount,
      notifications: notifications.add({
          message: `Mi notificacion ${id}`,
          key: newCount,
          action: 'Close',
          dismissAfter: 4000,
          onClick: () => this.removeNotification(newCount),
      })
    });
  }

  removeNotification (count) {
    const { notifications } = this.state;
    this.setState({
      notifications: notifications.filter(n => n.key !== count)
    })
  }

  render () {
    let settings = {
      dots: true,
      speed: 500,
      adaptiveHeight : true,
      arrows : true,
      slidesToScroll: 1,
       centerMode : true
    };
    return (
      <div>
        <div className="notificaciones">
          <button onClick={this.addNotification.bind(this)}>
            Añadir notificación
          </button>
          <NotificationStack
            notifications={this.state.notifications.toArray()}
            onDismiss={notification => this.setState({
                notifications:this.state.notifications.delete(notification)
              })}
          />
        </div>
        <div className="slider">
          <Slider  {...settings}>
              <div className="slide">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/4qoXKqxSeHc" frameborder="0" allowfullscreen></iframe>
              </div>
            {
              this.images.map((image) => {
                  return ( <div className="slide"><img src={image.src} alt={image.alt}></img></div>)
              })
            }
          </Slider>
        </div>
      </div>
      );
    }
}

export default App;
