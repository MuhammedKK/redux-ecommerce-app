import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedProduct } from '../redux/actions/Product-Actions'

const ProductDetails = () => {
  const {id} = useParams();
  const product = useSelector(state => state.product)
  const dispatch = useDispatch();
  const getSelectedProduct = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => console.log(err));
    console.log(dispatch(selectedProduct(response.data)))
  }
  

  // console.log(product)


  useEffect(() => {
    getSelectedProduct(id) 
  }, [id])

  return (
    <>
        <div className='four wide column'>
            <div className="ui links cards" >
                <div className="card" key={product.id}>
                    <div className="image">
                        <img src={product.image} alt={product.id} />
                    </div>
                    <div className="content"> 
                        <div className="header">
                            {product.title}
                        </div>
                        <div className="meta price">
                            {product.price}$
                        </div>
                        <div className="meta">
                            {product.category}
                        </div>
                        <div className="desc">
                            {product.description}
                        </div>
                        <Link to={`/cart/${product.id}`} className="add_to_cart">
                            Add To Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Link to={`/`} className="four wide column">
            Back To Home
        </Link>
    </>
  )
}

export default ProductDetails