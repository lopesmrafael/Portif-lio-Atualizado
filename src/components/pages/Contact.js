import styles from "./Contact.module.css";

import { useState } from "react";

import emailjs from "@emailjs/browser";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_q95wd9r",
        "template_p2wir6v",
        templateParams,
        "FGtnAAuz66OgE0cxP"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <div className={styles.contact_container}>
      <div className={styles.form_container}>
        <h1 className={styles.title}>Formulario de Contato</h1>
        <h2 className={styles.title}>Envie-me uma mensagem de contato!</h2>

        <form className={styles.form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className={styles.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className={styles.button} type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
