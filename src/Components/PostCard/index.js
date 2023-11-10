import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import Botao from '../Botao'

function PostCard({ post }){
    return(

        <Link to={`/posts/${post.id}`}> 
             <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt='imagem da capa do post'
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <Botao>
                Ler
            </Botao>

            </div>
        </Link>
       
    )
}
export default PostCard