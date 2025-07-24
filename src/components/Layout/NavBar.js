import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./NavBar.module.css";
import MyPhoto from "../../img/MyPhoto.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={MyPhoto} alt="My" />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/skills">Habilidade</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/project">Projetos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
