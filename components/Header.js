import React, { useState, useRef } from 'react'
import Router from 'next/router'
import styles from './header.module.css'
import { useAppContext } from '../context/CartContext'

export default function Header() {
    const [displayCheckout, setDisplayCheckout] = useState(false)
    const { state } = useAppContext()
    console.log(state)
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
            <div className='relative cursor-pointer grid place-items-center' onClick={() => setDisplayCheckout(!displayCheckout)}>
                <i className="fa-solid fa-bag-shopping px-2 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300"></i>
                <div className='absolute top-6 left-3 ml-0.5 mt-0.5 grid place-items-center text-xs text-white z-20 text-center'>{state.products.length}</div>
                {displayCheckout && <div className='absolute bg-white shadow border border-gray-200 border-solid z-50 top-full h-52 w-52 right-5 flex flex-col gap-2'>
                    <div className='overflow-auto flex-1'>
                        {state.products.map((product, index) => {
                            console.log(product)
                            return <div key={index} className="border-b border-solid border-gray-100 flex justify-between items-center text-xs font-extralight px-2 py-2">
                                <p className='truncate'>{product.product.name}</p>
                                <p>${product.unit_amount / 100}</p>
                            </div>
                        })}
                    </div>
                    <button className=' m-1 shadow bg-black text-white font-light text-sm py-2 transition duration-300 hover:opacity-50 select-none'>CHECKOUT</button>
                </div>}
            </div>
        </nav>
    )
}
