import Layout from '../layouts/Main'
const About = () => {
    return (
        <Layout title="Sobre Dy La Fuente Personal Trainer">
            <div className="about">
                <div>
                    <h1 className="primary-title-all-site center-text">Dy La Fuente Personal Trainer</h1>
                    <div className="align-content">
                        <p>
                            É um projeto que tem como objetivo oferecer um serviço especializado para realização, de atividades
                            físicas. Visando o bem estar de cada pessoal, utilizando planejamento adequado para melhorar e motivar
                            as pessoas à uma rotina diária de atividades.
                        </p>
                        <strong>
                            Termos um compromisso e para alcança-lo seguimos junto a cada aluno os seguintes pricípios:
                        </strong>
                    </div>
                    <div className="align-content mission">
                        <div className="mission-item">
                            <h3>Planejamento</h3>
                            <img src="/static/study.png" alt="Planejamento" />
                            <p>
                                Precisamos pensar no texto para adicionar
                            </p>
                        </div>
                        <div className="mission-item">
                            <h3>Disciplina</h3>
                            <img src="/static/fitness.png" alt="Disciplina" />
                            <p>
                                Precisamos pensar no texto para adicionar
                            </p>
                        </div>
                        <div className="mission-item">
                            <h3>Foco</h3>
                            <img src="/static/brain.png" alt="Foco" />
                            <p>
                                Precisamos pensar no texto para adicionar
                            </p>
                        </div>
                        <div className="mission-item">
                            <h3>Resultado</h3>
                            <img src="/static/muscle.png" alt="Resultado" />
                            <p>
                                Precisamos pensar no texto para adicionar
                            </p>
                        </div>
                    </div>
                    <div className="align-content">
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            É possível alcançar o resultado desejado. Vamos juntos em busca deste caminho.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About