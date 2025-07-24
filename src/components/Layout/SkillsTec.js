import style from "./SkillsTec.module.css";

const skills = [
  { nome: "HTML", img: require("../../img/html.png") },
  { nome: "CSS", img: require("../../img/css.png") },
  { nome: "JavaScript", img: require("../../img/js.png") },
  { nome: "React", img: require("../../img/react.png") },
  { nome: "Node.js", img: require("../../img/node.png") },
  { nome: "Csharp", img: require("../../img/Csharp.png") },
  { nome: "MySQL", img: require("../../img/sql.png") },
  { nome: "PHP", img: require("../../img/php.png") },
  { nome: "TypeScript", img: require("../../img/typescript.png") },
  { nome: "Flutter", img: require("../../img/flutter.png") },
];

function SkillsTec() {
  return (
    <section className={style.skills_section}>
      <h2 className={style.skills_title}>Habilidades Técnicas</h2>
      <div className={style.skills_tec}>
        {skills.map((skill, index) => (
          <div className={style.skills_cards} key={index}>
            <img
              src={skill.img}
              alt={skill.nome}
              className={style.skill_icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsTec