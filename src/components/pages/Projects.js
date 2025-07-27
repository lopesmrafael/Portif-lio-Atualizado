import styles from "./Projects.module.css";

import { FaGithub, FaChrome } from "react-icons/fa";

function Project() {
  const projects = [
    {
      img: require("../../img/Costs.png"),
      nome: "Projeto curso React",
      descricao: (
        <p>
          Projeto desenvolvido com o objetivo de fixar os conteúdos aprendidos
          no curso, como o uso de props, componentes, map, state lift, além de
          aprimorar meu conhecimento em JavaScript.
        </p>
      ),
      github: "https://github.com/lopesmrafael/Meu-projeto-do-curso-react.git",
      site: "https://lopesmrafael.github.io/Meu-projeto-do-curso-react/",
    },
    {
      img: require("../../img/Ogani.png"),
      nome: "Ogani",
      descricao: (
        <p>
          Ogani é uma réplica de um site de supermercado de Nova York, criada
          com base nas orientações do professor em sala (Cotemig). Foi essencial
          para reforçar meus conhecimentos em HTML, CSS e JavaScript.
        </p>
      ),
      github: "https://github.com/lopesmrafael/Ogani.git",
      site: "https://lopesmrafael.github.io/Ogani/",
    },
    {
      img: require("../../img/TabelaPeriodica.png"),
      nome: "Tabela Periódica",
      descricao: (
        <p>
          Um dos meus primeiros projetos, feito em HTML e CSS puro. Desenvolvido
          para facilitar a consulta à tabela periódica e fixar conceitos de
          display grid e suas propriedades.
        </p>
      ),
      github: "https://github.com/lopesmrafael/TabelaPeriodica.git",
      site: "https://lopesmrafael.github.io/TabelaPeriodica/",
    },
    {
      img: require("../../img/SaborExpresso.png"),
      nome: "Sabor Expresso",
      descricao: (
        <p>
          Meu primeiro projeto na programação web, usando apenas HTML e CSS.
          Nele comecei a me familiarizar com o Figma e com o processo de
          transformar layouts em código.
        </p>
      ),
      github: "https://github.com/lopesmrafael/saborexpresso.git",
      site: "https://lopesmrafael.github.io/saborexpresso/",
    },
    {
      img: require("../../img/controledefinanças.png"),
      nome: "Controle de finanças",
      descricao: (
        <p>
          Controle de Finanças é um projeto desenvolvido para praticar e fixar
          habilidades em React e JavaScript. A aplicação permite registrar e
          visualizar entradas e saídas financeiras.
        </p>
      ),
      github: "https://github.com/lopesmrafael/caucula-finan-as-react",
      site: "https://caucula-finan-as-react.vercel.app/",
    },
  ];

  return (
    <section className={styles.project_section}>
      <h1 className={styles.project_title}>Meus projetos!</h1>
      <div className={styles.project}>
        {projects.map((proj, index) => (
          <div className={styles.card} key={index}>
            <img
              src={proj.img}
              alt={`Preview de ${proj.nome}`}
              className={styles.card_img}
            />
            <h2 className={styles.card_name}>{proj.nome}</h2>
            <p className={styles.card_text}>{proj.descricao}</p>
            <ul className={styles.card_icons}>
              <li>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href={proj.site} target="_blank" rel="noreferrer">
                  <FaChrome />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
