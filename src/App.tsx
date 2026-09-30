import "./App.css";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <div className="portfolio-layout">
      {/* menu lateral izquierda */}
      <Sidebar />

      {/* Contenedor principal de la derecha */}
      <main className="main-content">
        <h1>Aquí irá nuestro Mosaico pronto...</h1>
      </main>
    </div>
  );
}

export default App;
