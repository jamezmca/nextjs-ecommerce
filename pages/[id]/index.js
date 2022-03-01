import React from 'react'
import Router from 'next/router';
import { useAppContext } from '../../context/CartContext';

export default function Description(props) {
    const { asPath: path } = Router
    const { prices } = useAppContext()
    console.log(prices, path)
    const product = prices.filter(val => val.id === path.replace('/', ''))[0]
    console.log(product)

    return (
        <div className='flex max-w-screen flex-col sm:flex-row'>
            <div></div>
            <img src={product.product.images[0]} alt={product.product.id} style={{maxHeight: '600px'}}/>
        </div>
    )
}
