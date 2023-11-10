import './style.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from '../../Components/json/posts.json'
import PostModelo from "../../Components/PostModelo"
import Markdown from "react-markdown"
import Notfound from '../NotFound'
import PaginaPadrao from '../../Components/PaginaPadrao'

function Post() {

    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <Notfound />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className="post-container">
                        <Markdown>
                            {post.texto}
                        </Markdown>
                    </div>

                </PostModelo>
                } />

            </Route>
        </Routes>
    )

}

export default Post