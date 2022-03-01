import React from 'react'
import { useAppContext } from '../../context/CartContext';

export async function getServerSideProps(context) {
    const { params } = context
    
    return {
        props: { id: params.id }, // will be passed to the page component as props
    }
}

export default function Description(props) {
    console.log(props)
    console.log('bananana')
    const { id: path } = props
    const { prices } = useAppContext()
    console.log(prices)
    const product = prices.filter(val => val.id === path.replace('/', ''))[0]
    console.log(product)
    if (product === undefined) { return <div className='pt-40 select-none grid place-items-center'>LOADING...</div> }
    return (
        <div className='mx-auto w-fit flex flex-wrap justify-center'>
            <img src={product.product.images[0]} alt={product.product.id} style={{ maxHeight: '600px' }} />
            <div className='px-10 min-w-min whitespace-nowrap'>
                <h1 className='text-sm py-3 font-light tracking-wide text-4xl '>
                    {product.product.name}
                </h1>
                <p className='text-sm font-extralight'>${product.unit_amount / 100}</p>
                <hr />

            </div>
        </div>
    )
}
