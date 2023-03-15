import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {setProduct} from '../redux/actions/Product-Actions'
import AllProducts from './AllProducts'
const Products = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch(err => console.log(err));
    // dispatch(response.data);
    dispatch(setProduct(response.data))
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div className='ui grid container'>
      <AllProducts />
    </div>
  )
}

export default Products