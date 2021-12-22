import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={closeMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
