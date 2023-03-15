import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const products = useSelector(state => state.allProducts.products)
  console.log(products)

  const RednerProducts = products.map(pro => {
    const {id, title, price, image, category} = pro;
    return (
        <div className='four wide column'>
            <Link to={`/product/${id}`}>
                <div className="ui links cards" >
                    <div className="card" key={id}>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content"> 
                            <div className="header">
                                {title}
                            </div>
                            <div className="meta price">
                                {price}$
                            </div>
                            <div className="meta">
                                {category}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
  })
  return<>{RednerProducts}</>
}

export default AllProducts