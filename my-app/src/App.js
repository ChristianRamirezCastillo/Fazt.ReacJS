import React from 'react';
import './App.css';

/* function HelloWorld(prop) {
  return (
    <div id="hello">
      <h3>{prop.subittulo}</h3>
      {prop.miTexto}
    </div>
  );
} */

function App() {
  return (
    <div >
      Este es mi componente:
      <HelloWorld miTexto="Hola CR" subittulo="react js" />
      <HelloWorld miTexto="Hola CR2"/>
      <HelloWorld miTexto="Hola CR3"/>
    </div>
  );
}

class HelloWorld extends React.Component {
  state = {
    show: true
  }

  toggleShow = ()=> {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{ this.props.subittulo }</h3>
          { this.props.miTexto }
          <button onClick={ this.toggleShow }>Cambiar estado</button>
        </div>
      );
    }else {
      return <h1>No hay elementos
        <button onClick={ this.toggleShow }>Cambiar estado</button>
      </h1>
    }
  }
}

export default App;
