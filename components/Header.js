import React from 'react'
import Router from 'next/router'
import styles from './header.module.css'
import { useAppContext } from '../context/CartContext'

export default function Header() {
    const { products, setProducts } = useAppContext()

    async function checkout() {
        const lineItems = products.map(product => {
            return {
                price: product.id,
                quantity: 1
            }
        })

        const res = await fetch('api/checkout', {
            method: 'POST',
            body: JSON.stringify({ lineItems })
        })

        const data = await res.json()

        Router.push(data.session.url)
    }

    return (
        // <div onClick={checkout}>{products.length}</div>
        <nav className='flex items-center white shadow sticky top-0 relative z-50 bg-white'>
            <h1 onClick={() => Router.push('/')} 
            className={'px-4 py-6 pl-14 font-normal select-none flex-1 text-center sm:text-4xl cursor-pointer transition hover:opacity-80 ' + ` ${styles.title}`}>
                MOONGLADE
            </h1>
            <div className='relative cursor-pointer '>
                <i className="fa-solid fa-bag-shopping px-2 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300"></i>
            </div>
        </nav>
    )
}
