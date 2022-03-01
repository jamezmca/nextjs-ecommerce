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
        <div className='mx-auto w-fit'>
            <div className='flex flex-col md:flex-row justify-center'>
                <img src={product.product.images[0]} alt={product.product.id} style={{ maxHeight: '600px' }} />
                <div className='px-10'>
                    <h1 className='text-sm py-3 font-light tracking-wide'>
                        {product.product.name}
                    </h1>
                    <p className='text-sm font-extralight'>${product.unit_amount / 100}</p>
                    <hr/>
                </div>

            </div>
        </div>
    )
}
