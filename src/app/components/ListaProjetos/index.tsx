import Link from "next/link"
import styles from "./listaprojetos.module.css"
import Image from "next/image"
import Data from "@/api/projetos.json"

const ListaProjetos = () => {
    //Separa os 3 projetos em ordem para serem listados 
    const Projeto1 = Data[0]
    const Projeto2 = Data[1]
    const Projeto3 = Data[2]
    return(
        <section id="projeto" className={styles.section}>
            <h2 className={styles.section_title}>Projetos</h2>
            <ul className={styles.section_list}>
                <li className={styles.list_item}>
                    <h2>To do List</h2>
                    <Link href={'/projeto/'+Projeto1.projeto_slug} className={styles.list_item_link}><h4 className={styles.list_item_link_text}>Ver Projeto</h4></Link>
                    <p className={styles.list_item_desc}>Uma aplicação feita com React para orgaizar tarefas por usuário, podendo filtrar em tarefas feitas e não feitas.</p>
                    <Image className={styles.list_item_img} src={'/IMG/print_proj1.png'} alt='print_projeto' width={1200} height={700}/>
                </li>
                <li className={styles.list_item}>
                    <h2>Blog Pescaria</h2>
                    <Link href={'/projeto/'+Projeto2.projeto_slug} className={styles.list_item_link}><h4 className={styles.list_item_link_text}>Ver Projeto</h4></Link>
                    <p className={styles.list_item_desc}>Uma aplicação feita com Next.js para simular um blog fictício com temática de pesca.</p>
                    <Image className={styles.list_item_img} src={'/IMG/print_proj2.png'} alt='print_projeto' width={1200} height={700}/>
                </li>
                <li className={styles.list_item}>
                    <h2>Previsão Temporal</h2>
                    <Link href={'/projeto/'+Projeto3.projeto_slug} className={styles.list_item_link}><h4 className={styles.list_item_link_text}>Ver Projeto</h4></Link>
                    <p className={styles.list_item_desc}>Uma aplicação feita com Next.js para mostrar a previsão do tempo atual de uma cidade na lista da aplicação.</p>
                    <Image className={styles.list_item_img} src={'/IMG/print_proj3.png'} alt='print_projeto' width={1200} height={700}/>
                </li>
            </ul>
        </section>
    )
}
export default ListaProjetos