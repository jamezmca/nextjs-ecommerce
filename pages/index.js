import Head from 'next/head'
import Stripe from 'stripe'
import Header from '../components/Header'
import { useAppContext } from '../context/CartContext'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  })

  const res = await stripe.prices.list({
    limit: 10,
    expand: ['data.product']
  })

  const prices = res.data.filter(price => {
    return price.active
  })

  return {
    props: { prices }, // will be passed to the page component as props
  }
}

export default function Home({ prices }) {
  const { products, setProducts } = useAppContext()

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Moonglade Apparel</title>
        <meta name="description" content="Nextjs ecommerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <i className="fa-brands fa-codepen" onClick={() => setProducts([prices[0]])}></i>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
