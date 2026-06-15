import React, { useState } from 'react';
import styles from './SkillsCertification.module.css';

const certifications = [
    { nome: "Introduction to IOT", img: require("../../img/introduction-to-iot.png") },
    { nome: "Computer Hardware Basics", img: require("../../img/computer-hardware-basics.png") },
    { nome: "Introduction to Cybersecurity", img: require("../../img/introduction-to-cybersecurity.png") },
    { nome: "Network Academy", img: require("../../img/networking-academy-learn-a-thon-2024.png") },
    { nome: "Digital Awareness", img: require("../../img/digital-awareness.png") },
    { nome: "Typescript", img: require("../../img/certificacaoTypescript.png") },
];

function SkillsCertification() {
    const [selected, setSelected] = useState(null);

    return (
        <section className={styles.style_container}>
            <h2 className={styles.cert_title}>Meus Certificados</h2>
            <p className={styles.cert_subtitle}>Aqui estão todos os meus certificados de alguns cursos concluídos.</p>
            <div className={styles.certifications}>
                {certifications.map((cert, index) => (
                    <div className={styles.cert_card} key={index} onClick={() => setSelected(cert)}>
                        <img src={cert.img} alt={cert.nome} className={styles.cert_icon} />
                    </div>
                ))}
            </div>

            {selected && (
                <div className={styles.modal_backdrop} onClick={() => setSelected(null)}>
                    <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                        <button className={styles.modal_close} onClick={() => setSelected(null)}>✕</button>
                        <img src={selected.img} alt={selected.nome} className={styles.modal_img} />
                        <p className={styles.modal_name}>{selected.nome}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default SkillsCertification;