import React from 'react'
import { useAppContext } from '../context/CartContext'

export default function Header() {
    const { products, setProducts } = useAppContext()
    return (
        <div>Header</div>
    )
}
