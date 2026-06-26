'use client'
import { useEffect, useState } from "react"
import styles from './toggleThema.module.css'

const ToggleTheme = () => {
    //Cria um Estado booleano de acordo com o tema salvo no localStorage
    const [isDark, setDark] = useState(() => {
        if(typeof window !== 'undefined') {
        const savedThema:string | null = localStorage.getItem('theme')
        return savedThema === 'dark'
        }
        return false
    })
    //Adiciona a classe de acordo com o valor do Estado 
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(styles.dark)
            }
            
        else {
            document.documentElement.classList.remove(styles.dark)
            }
    },[isDark])
    //Quando chamada muda e salva no localStorage o Estado 
    const toggleThema = () => {
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme)
            setDark(!isDark)
    }
    return(<button className={styles.button} onClick={() => toggleThema()}></button>)
}

export default ToggleTheme