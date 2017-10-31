import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  persona = {
    nombre: 'Alberto',
    edad : 50
  }

  getPersonaText(){
    return (<div>¡Hola! Soy {this.persona.nombre} y tengo {this.persona.edad} años.</div>)
  }

  Ejercicios(num){
    let obj = {'titulo':'hola', 'texto' : 'xxxx'};
    let uno = {
      titulo : "Hola Mundo",
      texto : "Esta es mi primera aplicación con React."
    };

    let dos = {
      titulo : "Hola Mundo",
      texto : this.getPersonaText()
    };

    switch(num){
     case 1 :
      obj = uno
      break;
    case 2 :
      obj = dos
      break;
    case 3 :
      return (<div><h2>{this.getPersonaText()}</h2></div>)
      break;
    }

    let plantilla = (<div className="App">
                        <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          <h1 className="App-title">
                          {obj.titulo}
                          </h1>
                        </header>
                        <p className="App-intro">
                          {obj.texto}
                        </p>
                      </div>);
    return plantilla;
   
  }

  render() {
    // para probar los diferentes ejercicios cambiar el número 
    return this.Ejercicios(1) ;
  }
}

export default App;
