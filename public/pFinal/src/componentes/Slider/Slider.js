
import React, { Component } from 'react';

import {Row , Col ,Carousel} from 'react-bootstrap';

import SlidesData from './slides.json.js';

class MySlider extends Component{

  constructor(props){
    super(props);

    this.images = SlidesData;
  }

	render(){
       let settings = {
          height : 500,
          width : '100%'
        };
		return(
            <Row>
              <Col lg={12}>
                <Carousel>
                  {
                  this.images.map((image) => {
                      return ( 
                        <Carousel.Item>
                            <img width={settings.width} height={settings.height} alt={image.alt} src={image.src}/>
                            <Carousel.Caption>
                              <h3>{image.label}</h3>
                              <p>{image.desc}</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        )
                  })
                }
                  <Carousel.Item>
                    <iframe width={settings.width} height={settings.height}  src="https://www.youtube.com/embed/4qoXKqxSeHc" frameborder="0" title='youtube'></iframe>
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>

			)
	}
}

export default MySlider;