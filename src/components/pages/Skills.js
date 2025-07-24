import styles from "./Skills.module.css";

import SkillsTec from "../Layout/SkillsTec";
import SkillsPes from "../Layout/SkillsPes";

function Skills() {
  return (
    <section className={styles.style_container}>
      <SkillsTec />
      <SkillsPes />
    </section>
  );
}

export default Skills;
