import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Sidebar from '../components/Nav/Sidebar'
import NavCategory from '../components/Nav/NavCategory'
import Footer from '../components/Footer'
import '../styles/sass/styles.scss'


export default ({ children, title = 'Dy La Fuente - Personal Trainer'}) => {
    const router = useRouter()
    return (
    <>
    <div className="header-nav">
        <Sidebar />
        { router.pathname === '/videos' && <NavCategory /> }
    </div>
    <div id="main" className="container">
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Dy La Fuente - Personal Trainer."/>
            <meta name="keywords" content="Personal, Emagreça, Qualidade de Vida"/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"></link>
            <title>{ title }</title>

            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
            <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
            <meta name="theme-color" content="#317EFB"/>
        </Head>
        <a className="skip-link" href="#main">Skip to main</a>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <nav className="nav">
            <Nav />
        </nav>
        <div id="page-container">
            {/* <div class="full-page-loader" role="Loading page">
                <img width="200" src="logo192.png" alt="Logo Govan" />
            </div> */}

            <main className="main-container">
                { children }
            </main>

            <footer className="main-footer">
                <Footer />
            </footer>
        </div>
    </div>
    </>
    )
}