import styles from './home.module.css'

import posts from '../../Components/json/posts.json'
import Post from '../../Components/PostCard'


function Home(){
    return(
        

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
            
        
    )
}

export default Home