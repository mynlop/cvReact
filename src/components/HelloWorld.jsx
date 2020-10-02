//import React, { Component } from 'react';
//
//class HelloWorld extends Component{
//  state = {
//    active: true
//  }
//
//  handleClick = () => {
//    this.setState({
//      active: !this.state.active,
//    });
//  }
//
//  render(){
//  return(
//    <div>
//      <button onClick={this.handleClick}>Ocultar</button>
//      { this.state.active && 
//	<h1>Hola mundo!!</h1>	
//      }
//    </div>
//  );
// }
//};
//
//export default HelloWorld;
//
//react hooks

import React, { useState } from 'react';

const HelloWorld = () => {
  
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div>
      <button onClick={handleClick}>Ocultar</button>
      {active &&
	<h1>Hola Mundo!!!</h1>
      }
    </div>
  );
}

export default HelloWorld;
