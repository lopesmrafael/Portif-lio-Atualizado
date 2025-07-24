import styles from "./Home.module.css";

import AboutMe from "../Layout/AboutMe";

import MyPhoto from "../../img/MyPhoto.png"

function Home() {
  return (
    <section className={styles.home_container}>
      <img src={MyPhoto} alt="My"/>
      <AboutMe />
    </section>
  );
}

export default Home;