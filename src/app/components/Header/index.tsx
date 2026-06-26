'use client'
import Link from "next/link"
import styles from './header.module.css'
import { usePathname } from "next/navigation"
import ToggleTheme from "../ToggleTheme"


const Header = () => {
    const pathname = usePathname()
    // Usa o usePathname para conferir se esta na página principal e ajusta o Header de acordo.
    if (pathname === '/') return(
        <header className={styles.header}>
            <h1 className={styles.header_title}><Link href={'/'} className={styles.header_title_link}>Portfólio</Link></h1>
            <nav className={styles.header_nav}>
                <Link href={'#sobremim'} className={styles.nav_link}>Sobre Mim</Link>
                <Link href={'#projeto'}  className={styles.nav_link}>Projetos</Link>
                <Link href={'#habilidade'} className={styles.nav_link}>Habilidades</Link>
                <Link href={'#contato'} className={styles.nav_link}>Contatos</Link>
                <ToggleTheme/>
            </nav>
            
        </header>
    )
    else return(
        <header className={styles.header}>
            <h1 className={styles.header_title}><Link href={'/'} className={styles.header_title_link}>Portfólio</Link></h1>
            <nav className={styles.header_nav}>
                <Link href={'#objetivo'} className={styles.nav_link}>Objetivo</Link>
                <Link href={'#processo'} className={styles.nav_link}>Processo</Link>
                <Link href={'#tecnologia'} className={styles.nav_link}>Tecnologias</Link>
                <ToggleTheme/>
            </nav>
        </header>
    )
}

export default Header