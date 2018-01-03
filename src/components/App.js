// DEPENDENCIES
import React, { Component } from 'react';

// COMPONENTS
import  Header from './global/Header'  //importamos el componente Header que se encuentra dentro de global
import  Content from './global/Content'  //importamos el componente Content que se encuentra dentro de global
import  Footer from './global/Footer'  //importamos el componente Foo que se encuentra dentro de global

// DATA
import items from '../Data/menu'   // 4.1

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header title='Ejercicio en React' items={items}/> 
        < Content/>
        < Footer copyright="&copy; Jorge Guzman 2017 "/>
      </div>
    );
  }
}

export default App;
