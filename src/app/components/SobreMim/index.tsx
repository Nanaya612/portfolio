import Image from 'next/image'
import styles from './sobremim.module.css'

const SobreMim = () => {
    return(
        <section className={styles.section}>
            <h2 className={styles.section_title}>Sobre Mim</h2>
            <div className={styles.section_container}>
            <p className={styles.section_text}>
                Meu nome é Pedro Américo, sou Desenvolvedor Junior atualmente focado em frontend. Hoje meu foco é o estudo da Biblioteca do React e do Framework do Next.js,
                ja tenho conhecimento em JavaScript, HTML, CSS e TypeScript. Pretendo me tornar um bom Desenvolvedor Full-stack e me aprofundar na arte da Engenharia de Software.
                <strong className={styles.section_strong}> Contato: pedrobravo1406@gmail.com</strong>
            </p>
            
            <Image className={styles.section_img} src={'/IMG/profile_img.jpeg'} alt='profile image' width={500} height={350}/>
            </div>
        </section>
    )
}

export default SobreMim