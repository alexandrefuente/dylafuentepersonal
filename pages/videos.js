import Layout from '../layouts/Main'
import ReactPlayer from 'react-player/lazy'

const Videos = () => {
    return (
        <Layout title="Vídeos - Dy La Fuente Personal Trainer">
             <div className="videos-page">
                <h1 className="primary-title-all-site center-text">
                    Acompanhe todos o <span className="focus">vídeos</span>
                </h1>
                <div className="videos">
                    <div className="list-videos">
                        <div className="item-video">
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=HRkNfdlm5Qs'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="item-video">
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=fiArR6PlfqE'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="item-video">
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=Diddxm9hYEY'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                    <div className="category-videos">
                        <h3>Categorias</h3>
                        <div className="list-category">
                            <ul>
                                <li className="item-category">Zumba</li>
                                <li className="item-category">Divas</li>
                                <li className="item-category">Musculação</li>
                                <li className="item-category">Alongamento</li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
        </Layout>
    )
}

export default Videos
