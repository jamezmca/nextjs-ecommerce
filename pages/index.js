import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Moonglade Apparel</title>
        <meta name="description" content="Nextjs ecommerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <i class="fa-brands fa-codepen"></i>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
