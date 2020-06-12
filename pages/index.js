import { useState } from 'react'
import Link from 'next/link'
import Layout from '../layouts/Main'
import ModalVideo from 'react-modal-video'
import '../styles/sass/styles.scss'

export default function Home() {
  const [ isOpen, setIsOpen ] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <Layout>
          <div className="intro-site">
            <div className="bio">
                <h1 className="primary-title">
                  OLÁ, EU SOU SIMONE <br />DY LA FUENTE
                </h1>
                <p className="intro-bio-text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                  'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                   use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                </p>
                <div className="actions-about">
                  <button className="btn-more">
                    SAIBA MAIS
                  </button>
                  <ModalVideo channel='youtube' 
                    isOpen={ isOpen } 
                    videoId='L61p2uyiMSo'
                    onClose={() => setIsOpen(false) } />
                  <div className="play-about">
                    <img 
                      src="/static/play-about.png" 
                      title="Vídeo sobre Simone Dy La Fuente" 
                      className="play-about"
                      onClick={ openModal }
                      />
                  </div>
                </div>
            </div>
            <div className="bio-photo">
              <img src="/static/h2-team-11.png" title="Simone Dy La Fuente" className="bio-photo-profile" />
              <div className="bio-social-media">
                <ul>
                  <li>
                    <Link href="/">
                      <a>
                        <img src="/static/facebook.png" alt="Instagram" className="nav-instagram" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <img src="/static/instagram-profile.png" alt="Instagram" className="nav-instagram" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bio-skills">
                  <h6>Especialidades:</h6>
                  <h4>Personal trainer</h4>
                  <h4>Professora de dança</h4>
              </div>
            </div>
          </div>
          <div className="exercises">
            <div className="photo-exercises">
              <div className="text-exercises">
                <h4>Planejamento</h4>
                <p>
                  Aprenda planejar o melhor treino para o seu perfil.
                </p>
              </div>
              {/* <img src="/static/exercise-01.png" alt="Instagram" className="img-01" /> */}
            </div>
            <div className="photo-exercises">
              <div className="text-exercises">
                <h4>Disciplina</h4>
                <p>
                  Tenha disciplina para execução do planejamento.
                </p>
              </div>
              {/* <img src="/static/exercise-02.png" alt="Instagram" className="img-02" /> */}
            </div>
            <div className="photo-exercises">
              <div className="text-exercises">
                <h4>Foco</h4>
                <p>
                  Mantenha sempre o foco para realizar o que foi planejado.
                </p>
              </div>
              {/* <img src="/static/exercise-03.png" alt="Instagram" className="img-03" /> */}
            </div>
            <div className="photo-exercises">
              <div className="text-exercises">
                <h4>Resultados</h4>
                <p>
                  Os resultados serão alcançados seguindo a risca todos os passos.
                </p>
              </div>
              {/* <img src="/static/exercise-04.png" alt="Instagram" className="img-04" /> */}
            </div>
          </div>
          {/* FOLLOW  */}
          <div className="follow">
            <div className="follow-video">
              {/* <img src="/static/zumba.png" alt="Vídeo aula de Zumba" className="follow-class-zumba" /> */}
              <img src="/static/play-white.png" alt="Play para o vídeo de Zumba" className="follow-play-white" />
            </div>
            <div className="follow-text">
                <h3>
                    ACOMPANHE MEU CANAL NO <span className="text-red">YOUTUBE</span>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="follow-button">
                  <button className="btn-red-text-white">
                    ACESSAR
                  </button>
                </div>
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
                <button className="btn-red-text-white">
                  SAIBA MAIS
                </button>
              </div>
            </div>
            <div className="service">
              <div className="service-img">
                <img src="/static/woman1.png" alt="Musculação" className="" />
              </div>
              <div className="service-text">
                <h3>MUSCULAÇÃO</h3>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                <button className="btn-red-text-white">
                  SAIBA MAIS
                </button>
              </div>
            </div>
            <div className="service">
              <div className="service-img">
                <img src="/static/exercise1.png" alt="Divas" className="" />
              </div>
              <div className="service-text">
                <h3>DIVAS</h3>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                <button className="btn-red-text-white">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
      </Layout>
    </div>
  )
}
