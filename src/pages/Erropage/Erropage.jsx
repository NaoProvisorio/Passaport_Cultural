import styles from "./erropage.module.css";
import { Link } from 'react-router-dom';

function Erropage() {
  return (
    <>
      <div className={styles.containerpai}>
        <div className={styles.containerfilho}>
          <h1 className={styles.erro}>404</h1>
          <p className={styles.text}>
            Parece que a pagina que você acessou não existe. Por favor volte ao
            inicio
          </p>

          <Link to="/Login">
          <button className={styles.button}> Voltar ao inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Erropage;
