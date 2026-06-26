import Habilidades from "./components/Habilidades";
import ListaProjetos from "./components/ListaProjetos";
import SobreMim from "./components/SobreMim";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SobreMim/>
      <ListaProjetos/>
      <Habilidades/>
   </main>
  );
}
