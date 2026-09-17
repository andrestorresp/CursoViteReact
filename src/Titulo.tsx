function Titulo() {
  //jsx
  const mundo = "andres ahora si";
  if (mundo) {
    return <h1>hola {mundo}</h1>;
  }
  return <p>hola mundo</p>;
}

export default Titulo;
