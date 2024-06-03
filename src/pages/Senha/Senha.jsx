import styles from "./senha.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Livro2.jpg";

function Senha() {
 return ( <> 
 <div className={styles.container}>
    <div className={styles.containerText}>
    
    <div className={styles.text}>
    <h1>Esqueceu sua senha?</h1>
    <p>Esqueceu sua senha? Digite aqui para alterar sua senha</p>
    </div>
    <div className={styles.perfil}></div>
    
    <input type="Text" placeholder="Email" className={styles.input} />

   <button className={styles.button}><h2>Confirmar</h2></button>
  </div>


<img src={Logo} className={styles.foto}/>
  
  </div>
</>
)
}

export default Senha;