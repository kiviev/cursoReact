import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
class App extends Component {
  render() {
      return (
       <Router>
          <div>
           <Links />
            <div className='content'>
              <Route exact path="/" component ={Home} />
              <Route path="/home" component ={Home} />
              <Route path="/home/name" component ={Name} />
              <Route path="/address" component ={Address} />
              <Route path="/address/city" component ={AddressCity} />
              <Route path="/address/country" component ={AddressCountry} />
            </div>
         </div>
       </Router>
    );
  }
}

const CustomLink = ({ activeStyle, children, className, to, activeOnlyWhenExact }) => (
 <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
 <Link to={to} className={className} style={match && activeStyle}>{children}</Link>
 )}/>
);

const Links = () => (
 <div className="links">
     <ul className="elementMenu">
      <li>
        <CustomLink activeStyle={{color: 'red'}} to='/home' activeOnlyWhenExact>Home</CustomLink>
      </li>
      <li>
        <CustomLink activeStyle={{color: 'red'}} to='/home/name' activeOnlyWhenExact>Mi nombre</CustomLink>
      </li>
      
    </ul>
    <ul className="elementMenu">
      <li>
        <CustomLink activeStyle={{color: 'red'}} to='/address' activeOnlyWhenExact>Dirección</CustomLink>
      </li>
      <li>
        <CustomLink activeStyle={{color: 'red'}} to='/address/city' activeOnlyWhenExact>Ciudad</CustomLink>
      </li>
      <li>
        <CustomLink activeStyle={{color: 'red'}} to='/address/country' activeOnlyWhenExact>Pais</CustomLink>
      </li>
    </ul>
 </div>
)

const AddressCity = () => (
    <div>
      <h2> En la ciudad de Madrid </h2>
    </div>
  );

const AddressCountry = () => (
    <div>
      <h3> En España</h3>
    </div>
  );

const Name = () => (
  <div>
    <h3>Mi nombre es Paco Alba!</h3>

  </div>
  );
const Home = () => (
  <div>
    <h1>Hola desde Home!</h1>

  </div>
  );

const Address = () => (
    <div>
      <h1>Nos encontramos en la Avenida de Valencia.</h1>
    </div>

  );



export default App