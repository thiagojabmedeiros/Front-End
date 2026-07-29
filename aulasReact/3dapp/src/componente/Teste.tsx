import { useEffect, useState } from "react";
import styles from "./Teste.module.css";

export default function Teste() {
  const text =
    "Opáa! Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.Este texto já existe no componente. Agora ele faz pequenas pausas para parecer que está sendo digitado.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (index >= text.length) return;

      setDisplayedText((prev) => prev + text[index]);

      let delay = 35;

      if (text[index] === " ") delay = 70;
      if (text[index] === ",") delay = 250;
      if (text[index] === "." || text[index] === "!" || text[index] === "?") {
        delay = 600;
      }

      index++;
      timeout = setTimeout(type, delay);
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.typewriter}>
        {displayedText}
        <span className={styles.cursor}>|</span>
      </p>
    </div>
  );
}