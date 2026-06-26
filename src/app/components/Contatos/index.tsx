import Link from "next/link"
import styles from './footer.module.css'

const Contato = () => {
    return(
        <footer id="contato" className={styles.footer}>
            <h2 className={styles.footer_header}>Contatos</h2>
            <Link className={styles.footer_link} href={'https://github.com/Nanaya612'} target="_blank">GitHub</Link>
        </footer>
    )
}

export default Contato