import '../styles/sass/styles.scss'

export default function App({ Component, pageProps }) {
    return <Component { ...pageProps } />
}