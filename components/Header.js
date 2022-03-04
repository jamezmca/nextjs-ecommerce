import React, { useState, useRef } from 'react'
import Router from 'next/router'
import styles from './header.module.css'
import { useAppContext } from '../context/CartContext'

export default function Header() {
    const [displayCheckout, setDisplayCheckout] = useState(false)
    const modalRef = useRef()
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
        <nav className='flex items-center white shadow-lg sticky top-0 relative z-50 bg-white relative'>
            {displayCheckout && <div ref={modalRef} className='absolute bg-white shadow border border-gray-200 border-solid z-50 top-0 h-screen w-screen sm:w-80 right-0 flex flex-col gap-2 px-2'>
                <div className='overflow-auto flex-1'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-4xl py-4'>CART</h1>
                        <div className='ml-auto w-fit p-2 cursor-pointer select-none transition duration-300 opacity-50' onClick={() => setDisplayCheckout(false)}>╳</div>
                    </div>
                    <hr className='py-2'/>
                    {Object.keys(state.products).map((productId, index) => {
                        const product = state.prices.find(val => val.id === productId)
                        const size = ''
                        const number = ''
                        return <div key={index} className="border-l border-solid border-gray-100 text-xs font-extralight p-2">
                            <div className='flex items-center justify-between'>
                                <p className='truncate'>{product.product.name}</p>
                                <p>${product.unit_amount / 100}</p>
                            </div>
                            <p></p>
                        </div>
                    })}
                </div>
                <button className=' m-1 shadow bg-black text-white font-light text-sm py-2 transition duration-300 hover:opacity-50 select-none'>CHECKOUT</button>
            </div>}
            <h1 onClick={() => Router.push('/')}
                className={'px-4 py-6 sm:py-14 pl-14 font-normal select-none flex-1 text-center sm:text-4xl cursor-pointer transition hover:opacity-80 ' + ` ${styles.title}`}>
                MOONGLADE
            </h1>
            <div className='relative cursor-pointer grid place-items-center' onClick={() => setDisplayCheckout(!displayCheckout)}>
                <i className="fa-solid fa-bag-shopping px-2 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300"></i>
                {Object.keys(state.products).length > 0 && <div className='absolute inset-0 mx-auto top-1.5 h-2 w-2 rounded-full bg-rose-400 z-20' />}
            </div>
        </nav>
    )
}
