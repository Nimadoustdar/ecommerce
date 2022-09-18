import React from 'react'
import { ApiTopPropduct } from '../service/TopProductsApi'
import Product from './Product'

const Products = () => {
    return (
        <div className='flex flex-wrap p-5 items-center justify-center'>
            {ApiTopPropduct.map((product, index) =>   (
                <Product key={index} item={product} />
               ) )}
        </div>
    )
}

export default Products