
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';

import { ToDoComponent , Home , Tiempo ,MySlider , Notifications}from './index';

// bootstrap
import { Nav ,Navbar, NavItem} from 'react-bootstrap';

const CustomLink = ({ activeStyle, children, className, to, activeOnlyWhenExact }) => (
 <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
 <Link to={to} className={className} style={match && activeStyle}>{children}</Link>
 )}/>
);

const Links = () => (
 <Navbar className="links">
     <Navbar.Header>
      <Navbar.Brand>
        <CustomLink activeStyle={{color: 'red'}} to='/' activeOnlyWhenExact>Paco Alba App</CustomLink>
      </Navbar.Brand>
    </Navbar.Header>
     <Nav>
      <NavItem eventKey={1}>
        <CustomLink activeStyle={{color: 'red'}} to='/home' activeOnlyWhenExact>Home</CustomLink>
      </NavItem>

      <NavItem eventKey={2}>
        <CustomLink activeStyle={{color: 'red'}} to='/tasks' activeOnlyWhenExact>Tareas</CustomLink>
      </NavItem>

      <NavItem eventKey={3}>
        <CustomLink activeStyle={{color: 'red'}} to='/wheather' activeOnlyWhenExact>El Tiempo</CustomLink>
      </NavItem>

      <NavItem eventKey={4}>
        <CustomLink activeStyle={{color: 'red'}} to='/slider' activeOnlyWhenExact>Imágenes</CustomLink>
      </NavItem>
    
    </Nav>
 </Navbar>
)

const AuthButton = withRouter(({ history }) => {
  return ( <Notifications notification={history.location.pathname}  />)

})



class MyNav extends Component{

	render(){

		return(
		<Router>
          <div>
    <AuthButton />
           <Links/>
            <div className='content'>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/tasks" component={ToDoComponent} />
              <Route path="/wheather" component={Tiempo} />
              <Route path="/slider" component={MySlider} />
            </div>
         </div>
        </Router>
			)
	}
}

export default MyNav ;