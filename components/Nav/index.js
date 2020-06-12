import Link from 'next/link'

const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link href="/">
                    <a>
                        <img src="/static/logo.png" alt="Instagram" className="logo-img" />
                    </a>
                </Link>
            </div>
            <div className="navigation">
                <ul className="nav-list">
                    <li>
                        <Link href="/sobre">
                            <a>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicos">
                            <a>Serviços</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos">
                            <a>Vídeos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dicas">
                            <a>Dicas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a>Contato</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="social-media">
                <ul className="midia-list">
                    <li>
                        <Link href="/contato">
                            <a>
                                <img src="/static/Youtube.png" alt="YouTube" className="" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a>
                                <img src="/static/Instagram.png" alt="Instagram" className="nav-instagram" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato">
                            <a>
                                <img src="/static/whatsapp.png" alt="Whatsapp" className="" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
{/* 
            <style global jsx>{`
                .logo {
                    flex-shrink: 0;
                    height: 60px;
                    margin-top: -45px;
                    margin-bottom: 20px;
                    width: 100px;
                }
                .logo-img {

                }
                .navigation {
                    flex-shrink: 1;
                }
                .navigation .nav-list {
                    list-style: none;
                }
                .navigation .nav-list li {
                    padding: 16px 8px;
                    background:
                    linear-gradient(
                      to bottom, #900 0%,
                      #900 100%
                    );
                   background-position: 0 100%;
                   background-repeat: repeat-x;
                   background-size: 0px 0px;
                   transition: background-size .3s;
                }
                .navigation .nav-list a {
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 600;
                    text-decoration: none;
                }
                .navigation .nav-list li:hover {
                    background-size: 4px 50px;
                }
                .social-media {
                    flex-shrink: 0;
                    margin-top: 20px;
                }
                .social-media .midia-list {
                    list-style: none;
                }
                .social-media .midia-list li {
                    display: inline;
                    padding: 5px 7px;
                }
                .social-media .midia-list li a .nav-instagram {
                    height: 26px;
                    margin-bottom: 2px;
                }
            `}</style> */}

        </div>
    )
}

export default Nav