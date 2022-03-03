import React from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'


export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen relative'>
            <Header />
            <div className='flex-1'>
                {children}
            </div>
            <footer className={styles.footer}>
                <a href="#">
                    <i className="fa-brands fa-codepen"></i>
                </a>
            </footer>
        </div>
    )
}
