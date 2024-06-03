import styles from "./Materias.module.css";

//importe dos icones ai o "lu" é a categoria q eu escolhi ai entre chaves é o nome
//do icone ai a categoria seria lucida

import { LuBookMarked } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { LuHome } from "react-icons/lu";

function Materias() {
  return (
    <>
      <div className={styles.containerpai}>
        <div className={styles.navbar}>
          <div className={styles.text}>
            <LuHome className={styles.home} />
            <p> Inicio</p>
          </div>
          <div className={styles.text}>
            <LuBookMarked className={styles.atividade} />
            <p> Atividade</p>
          </div>
          <div className={styles.text}>
            <LuTrophy className={styles.trofeu} />
            <p> Conquistas</p>
          </div>
          <div className={styles.text}>
            <LuMessageCircle className={styles.chat} />
            <p> Chat</p>
          </div>
          <div className={styles.text}>
            <LuBell className={styles.notificacao} />
            <p> Notificação</p>
          </div>
          <div className={styles.text}>
            <LuUser2 className={styles.perfil} />
            <p> Perfil</p>
          </div>
        </div> 

        <div className={styles.caixatitle}>
          <div className={styles.title}>
            <p>sdasdas</p>
          </div>
          </div>
      </div>
    </>
  );
}

export default Materias;
