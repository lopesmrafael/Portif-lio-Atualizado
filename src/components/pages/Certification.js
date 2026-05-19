import React from "react";
import styles from "./Certification.module.css";

import SkillsCertification from "../Layout/SkillsCertification";

function Certification() {
    return(
        <section className={styles.style_container}>
            <SkillsCertification />
        </section>
    );
}

export default Certification;