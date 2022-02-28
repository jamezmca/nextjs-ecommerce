import React from 'react'
import Router from 'next/router'
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
        <div onClick={checkout}>{products.length}</div>
    )
}
