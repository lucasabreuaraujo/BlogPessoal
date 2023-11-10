import styles from './Notfound.module.css'
import error404 from '../../assets/erro_404.png'
import Botao from '../../Components/Botao'
import { useNavigate } from 'react-router-dom'

function Notfound() {

    const navegar = useNavigate()

    return (

        <>
            <div className={styles.conteudoContainer}>

                <span className={styles.texto404}> 404 </span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que era isso que estava procurando?
                    Recarregue a página ou volte a página anterior.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar( -1 )}
                >

                    <Botao> Voltar </Botao>

                </div>

                <img
                    className={styles.imagemCachorro}
                    src={error404}
                    alt='cachorro de óculos'

                />

            </div>

            <div className={styles.espacoEmBranco}></div>

        </>

    )
}

export default Notfound