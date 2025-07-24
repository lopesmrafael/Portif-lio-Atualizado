import styles from "./AboutMe.module.css";

function AboutMe(params) {
  return (
    <section className={styles.about}>
      <h1>Rafael Lopes Monteiro</h1>
      <h2>Sobre mim</h2>
      <p>
        Sou desenvolvedor web e mobile, apaixonado por criar interfaces
        intuitivas e performáticas. Trabalho com tecnologias como React,
        Flutter, Kotlin, C#, HTML e CSS. Estou sempre em busca de novos
        aprendizados e atualmente atuo em projetos pessoais, freelas e na
        colaboração com equipes ágeis.
      </p>
    </section>
  );
}

export default AboutMe;
