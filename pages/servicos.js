import Layout from '../layouts/Main'

const Services = () => {
    return (
        <Layout title="Serviços Dy La Fuente Personal Trainer, conheça os serviços">
            <div className="service-page">
                <h1 className="primary-title-all-site center-text">
                    <span className="focus">Serviços</span> oferecidos
                </h1>
                <div className="service-info">
                    <div className="service-info-column">
                        <h3>
                            Os <span className="focus">serviços</span> oferecidos são adaptados para cada pessoa.
                        </h3>
                    </div>
                    <div className="service-info-column">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            layout. 
                        </p>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="list-services">
                    <div className="service">
                        <div className="service-img">
                            <img src="/static/zumba1.png" alt="Aulas de dança" className="" />
                        </div>
                        <div className="service-text">
                            <h3>AULAS DE DANÇA</h3>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            {/* <button className="btn-red-text-white">
                            SAIBA MAIS
                            </button> */}
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-img">
                            <img src="/static/woman1.png" alt="Musculação" className="" />
                        </div>
                        <div className="service-text">
                            <h3>MUSCULAÇÃO</h3>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            {/* <button className="btn-red-text-white">
                            SAIBA MAIS
                            </button> */}
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-img">
                            <img src="/static/exercise1.png" alt="Divas" className="" />
                        </div>
                        <div className="service-text">
                            <h3>DIVAS</h3>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            {/* <button className="btn-red-text-white">
                            SAIBA MAIS
                            </button> */}
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Services