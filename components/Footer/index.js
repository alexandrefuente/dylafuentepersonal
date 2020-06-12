import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer-website">
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
        </div>
    )
}

export default Footer