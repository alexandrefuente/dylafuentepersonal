import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <div className="nav-mobile">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="/static/logo.png" alt="Instagram" className="logo-img" />
                        </a>
                    </Link>
                </div>
                <ul>
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
                    {/* <li>
                        <Link href="/dicas">
                            <a>Dicas</a>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/contato">
                            <a>Contato</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Menu>
    )
}

export default Sidebar