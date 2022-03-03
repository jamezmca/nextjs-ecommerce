import React from 'react'
import { useAppContext } from '../../context/CartContext';

export async function getServerSideProps(context) {
    const { params } = context

    return {
        props: { id: params.id }, // will be passed to the page component as props
    }
}

export default function Description(props) {
    const { id: path } = props
    const { state: { prices } = [] } = useAppContext()
    const product = prices.filter(val => val.id === path.replace('/', ''))[0]
    console.log(product)
    if (product === undefined) { return <div className='pt-40 select-none grid place-items-center'>LOADING...</div> }
    return (
        <div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6'>
            <img src={product.product.images[0]} alt={product.product.id} style={{ maxHeight: '600px' }} />
            <div className='min-w-min whitespace-nowrap'>
                <h1 className='text-sm py-3 font-light tracking-wide text-xl lg:text-3xl '>
                    {product.product.name}
                </h1>
                <p className='text-sm font-extralight text-center pb-8'>${product.unit_amount / 100}</p>
                <hr />

            </div>
        </div>
    )
}
