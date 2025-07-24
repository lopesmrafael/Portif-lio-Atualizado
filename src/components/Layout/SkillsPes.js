import style from "./SkillsPes.module.css";

function SkillsPes() {
  const softSkills = [
    {
      title: "Dedicado",
      description: "Sou persistente e comprometido com cada projeto até o fim.",
    },
    {
      title: "Proativo",
      description:
        "Tomo iniciativas e busco soluções antes que surjam problemas.",
    },
    {
      title: "Ambicioso",
      description:
        "Estou sempre em busca de crescer e evoluir como desenvolvedor.",
    },
    {
      title: "Independente",
      description: "Resolvo desafios por conta própria com autonomia.",
    },
    {
      title: "Organizado",
      description: "Planejo bem minhas tarefas e mantenho tudo estruturado.",
    },
    {
      title: "Adaptável",
      description:
        "Sou rapido para lidar com mudanças e aprender novas tecnologias.",
    },
    {
      title: "Comunicativo",
      description:
        "Consigo expressar ideias técnicas com clareza e objetividade.",
    },
    {
      title: "Colaborativo",
      description: "Gosto de trabalhar em equipe e contribuir com o grupo.",
    },
  ];

  return (
    <section className={style.skills_section}>
      <h2 className={style.skills_title}>Habilidades pessoais</h2>
      <div className={style.skills_pes}>
        {softSkills.map((skill, index) => (
          <div className={style.card} key={index}>
            <h3 className={style.card_title}>{skill.title}</h3>
            <p className={style.card_text}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPes;
