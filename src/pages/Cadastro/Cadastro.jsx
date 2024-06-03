import styles from "./cadastro.module.css";
import Logocad from "../../assets/logocad.jpg";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <>
      <div className={styles.containerpai}>
        <img src={Logocad} className={styles.foto}></img>

        <div className={styles.containerdireitapai}>
          <span className={styles.text}> Cadastrar</span>

          <div className={styles.containerdire}>
            <input
              className={styles.containerInput}
              type="text"
              placeholder="Nome"
            />
            <input
              className={styles.containerInput}
              type="text"
              placeholder="Sobrenome"
            />
            <input
              className={styles.containerInput}
              type="DateInput"
              placeholder="Data de Nascimento"
            />
            <input
              className={styles.containerInput}
              type="NumberInput"
              placeholder="CPF"
            />
            <input
              className={styles.containerInput}
              type="text"
              placeholder="Escola"
            />
            <input
              className={styles.containerInput}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.containerInput}
              type="password"
              placeholder="Senha"
            />
            <input
              className={styles.containerInput}
              type="password"
              placeholder="Confirmar senha"
            />
          </div>

        
            <Link to={"/Login"}>
            <h2 className={styles.button}> Cadastrar</h2>
          </Link>

        </div>

      </div>
    </>
  );
}

export default Cadastro;
