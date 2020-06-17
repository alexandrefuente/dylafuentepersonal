import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

const NavCategory = () => {
    return (
        <div className='menu-right'>
        <Menu right>
            <div className="nav-mobile-category">
                <ul>
                    <li>
                        <Link href="/videos">
                            <a>Zumba</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicvideosos">
                            <a>Divas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos">
                            <a>Musculação</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos">
                            <a>Alongamento</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Menu>
        </div>
    )
}

export default NavCategory
