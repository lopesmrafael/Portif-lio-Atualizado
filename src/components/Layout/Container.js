import styles from "./Container.module.css";

function Container(props) {
  return (
    <div className={`${styles.bg} ${styles.container}`}>
      {props.children}
    </div>
  );
}

export default Container;
