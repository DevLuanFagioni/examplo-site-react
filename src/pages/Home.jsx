import styles from './Home.module.css'
import Usuario from '../components/Usuario';

function Home() {
    return(
        <>
            <h1 className={styles.titulo} >Usuarios</h1>
            <p className={styles.paragrafo} >Abaixo terá uma lista de usuarios</p>

            <Usuario
                nome='Luan'
                idade={23}
                peso={90}
                altura={1.90}
                profissao='Professor'
                habilidades='HTML, CSS, JS'
            />

            <Usuario
                nome='João'
                idade={30}
                peso={70}
                altura={1.80}
                profissao='Designer'
                habilidades='UI/UX, Design'
            />

            
        </>
    )
}

export default Home