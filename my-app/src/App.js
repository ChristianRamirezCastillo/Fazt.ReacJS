import React from 'react';
import './App.css';

function HelloWorld(prop) {
  return (
    <div id="hello">
      <h3>{prop.subittulo}</h3>
      {prop.miTexto}
    </div>
  );
}

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


export default App;
