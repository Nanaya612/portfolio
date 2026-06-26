import styles from './habilidades.module.css'

const Habilidades = () => {
    return(
        <section id='habilidade' className={styles.section}>
            <h2 className={styles.section_title}>Habilides</h2>
            <p className={styles.section_context}>Com meu tempo estudando a area desenvolvi algumas habilidades como Desenvolvedor Frontend:</p>
            <ul className={styles.section_list}>
                <li>Adquiri habilidades de código ao programar nas linguagens de JavaScript e TypeScript, também adquiri crescente domínio de estruturação e estilização com CSS e HTML.</li>
                <li>Obtive domínio das ferramentas do React e Next.js para desenvolvimento e estruturação de projetos.</li>
                <li>Aprendi técnicas de armazenamento com localStorage, técnicas de manipulação de estado com useState e outros hooks de React e também técnicas de chamadas de API para utilização de dados.</li>
                <li>Estudei metodos para medir e analizar a performace de aplicações como Core Web Vitals e aprendi metodos para aprimorar e garantir performace para essas aplicações como minificação e utilização de formatos de arquivos leves.</li>
            </ul>
        </section>
    )
}
export default Habilidades