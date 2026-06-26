import Data from '@/api/projetos.json'
import styles from './projeto.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    slug: string
}
const Projeto = ({slug}:Props) => {
    //Recebe o slug via props e busca o projeto correspondente
    const Details = Data.find(projeto => projeto.projeto_slug == slug)
    
    return(
        <main className={styles.projeto}>
            <h1 className={styles.projeto_title}>{Details?.projeto_nome}</h1>
            <ul className={styles.projeto_list}>
                <li className={styles.list_item}>
                    <h2 id='objetivo' className={styles.item_title}>Objetivo</h2>
                    <p className={styles.item_content}>{Details?.projeto_descricao.objetivo}</p>
                    <Image className={styles.list_img} src={'/'+Details?.projeto_img.img1.path} alt='foto projeto 1' width={Details?.projeto_img.img1.w} height={Details?.projeto_img.img1.h}/>
                </li>
                
                <li className={styles.list_item}>
                    <h2 id='processo' className={styles.item_title}>Processo</h2>
                    <p className={styles.item_content}>{Details?.projeto_descricao.processo}</p>
                    <Image className={styles.list_img} src={'/'+Details?.projeto_img.img2.path} alt='foto projeto 2' width={Details?.projeto_img.img2.w} height={Details?.projeto_img.img2.h}/>
                </li>
                
                <li className={styles.list_item}>
                    <h2 id='tecnologia' className={styles.item_title}>Tecnologias</h2>
                    <p className={styles.item_content}>{Details?.projeto_descricao.tecnologias}</p>
                </li>
            </ul>
            <Link href={''+ Details?.projeto_link} target='_blank' className={styles.projeto_link}><h2 className={styles.projeto_link_text}>Visitar Repositório</h2></Link>
            <Link href={'/'} className={styles.projeto_link}><h2 className={styles.projeto_link_text}>Voltar ao Início</h2></Link>
        </main>
    )
}
export default Projeto