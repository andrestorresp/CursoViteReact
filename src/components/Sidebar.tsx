import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Icono o logo superior */}
      <div className="sidebar-icon">logo</div>

      {/* Lista de enlaces de navegación */}
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#podcast">TikTok</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
