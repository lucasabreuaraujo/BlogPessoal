import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.JPG'

function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Bem-vindo ao meu espaço pessoal! Eu sou Lucas Abreu Araujo, programador junior. Aqui compartilho um pouco sobre mim e o que já vi na vasta área de programação.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img className={styles.minhaFoto}
                     src={minhaFoto}
                     alt='foto do Lucas'

                /> 
            </div>
        </div>
    )
}

export default Banner