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
    const { state: { prices } = [], dispatch } = useAppContext()
    const product = prices.filter(val => val.id === path.replace('/', ''))[0]
    console.log('james', product)
    if (product === undefined) { return <div className='pt-40 select-none grid place-items-center'>LOADING...</div> }

    const tempSizes = ['S', 'M', 'L', 'XL', '2XL']
    console.log(dispatch)
    function addToBasket(id) {
        console.log(id)
        return () => dispatch({ type: 'add_product', value: id })
    }

    return (
        <div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6'>
            <img src={product.product.images[0]} alt={product.product.id} style={{ maxHeight: '600px' }} />
            <div className='min-w-min whitespace-nowrap'>
                <h1 className='text-sm py-3 font-light tracking-wide text-xl lg:text-3xl '>
                    {product.product.name}
                </h1>
                <p className='text-sm font-extralight'>${product.unit_amount / 100}</p>
                <p className='text-sm pt-4 pb-2'>SIZE</p>
                <div className='flex text-sm items-center font-light pb-4 flex-wrap gap-2'>
                    {tempSizes.map((size, index) => {
                        return <div className='border border-solid border-gray-200 px-2 select-none cursor-pointer transition duration-300 hover:bg-slate-100 py-1' key={index}>
                            {size}
                        </div>
                    })}
                </div>
                <hr />
                <button onClick={addToBasket(product)}
                    className='w-full my-4 p-4 border border-solid border-gray-100 shadow bg-slate-100 text-slate-700 font-light transition duration-300 hover:opacity-50'>
                    Add To Basket
                </button>
            </div>
        </div>
    )
}
