import styles from './sobreMim.module.css'
import PostModelo from "../../Components/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"
import fotoSobreMim from '../../assets/sobre_mim_foto.png'

function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas
            </h3>

            <img src={fotoSobreMim} 
            alt='Foto do Lucas de casaco'
            className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou um programador júnior formado pela Imã Learning Place em Novembro de 2022
            </p>

            <p className={styles.paragrafo}>
                Minha jornada porém, comecou muito antes, em Agosto de 2021. Com apoio de familiares e amigos comecei a estudar programação através dos cursos do Gustavo Guanabara(no qual o aconselho para você que também está pensando em iniciar nessa área).
            </p>

            <p className={styles.paragrafo}> 
                Comecei realmente do início, estudando algoritos, usando o visuallog. Hoje tenho inúmeros cursos através da Alura e me venho me aperfeiçoando a cada dia.
            </p>
            <p className={styles.paragrafo}>
                Hoje, me sinto muito preparado para o mercado que essa área oferece, com disposição e vontade para aprender cada vez mais.
            </p>
            
        </PostModelo>
    )
}

export default SobreMim