import styles from './Botao.module.css'

function Botao( {children}){
    return(
        <button className={styles.botaoLer}>
            {children}
        </button>
    )
}

export default Botao