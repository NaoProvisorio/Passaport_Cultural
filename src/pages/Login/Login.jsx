import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
// import { Container } from './styles';

function Login() {
  return (
    <>
      <div className={styles.Mcontainer}>
        <div className={styles.Pcontainer}>
          <h1 className={styles.container}>Login</h1>

          <input
            className={styles.containerInput}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.containerInputS}
            type="password"
            placeholder="Senha"
          />

          <Link to={"/Senha"}>
            <p className={styles.a}>Esqueci minha senha</p>
          </Link>

          <button className={styles.button1}>
            <h2>Entrar</h2>
          </button>

          <Link to={"/Cadastro"}>
            <p className={styles.a}>Crie sua conta</p>
          </Link>

          <div className={styles.containerlinha}>
            <div className={styles.linha}></div>
            <span className={styles.textoou}>OU</span>
            <div className={styles.linha}></div>
          </div>

          <div className={styles.google}></div>
        </div>

        <img src={Logo} className={styles.foto}></img>
      </div>
    </>
  );
}

export default Login;
