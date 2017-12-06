import React, { Component } from 'react';

import { Grid ,Row , Col ,Jumbotron } from 'react-bootstrap';

class Home extends Component{


	render(){

		return(
			<Grid>
        <Row>
          <Col md={12} >
          	<Jumbotron className="padded">
          		<h2 className="text-center">Bienvenido</h2>
          	</Jumbotron>
             
          </Col>
        </Row>
      </Grid> 
			)


	}

}


export default Home;