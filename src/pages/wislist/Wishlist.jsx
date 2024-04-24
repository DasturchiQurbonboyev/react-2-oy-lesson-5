import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';

const Wishlist = () => {
    const wishes = useSelector(state => state.wishlist.value)
    console.log(wishes);
    return (
        <div>
            {!wishes.lenght ?
                <Products data={wishes} wishlistTitle={false} str={`Wishlist (${wishes.length})`} />
                :
                <h2>Emty </h2>
            }
        </div>
    )
}

export default Wishlist