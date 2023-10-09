import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkOut, plusItem } from '../redux/action';
import { deleteitem } from '../redux/action';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Cart = () => {
  const dispatch = useDispatch();

  const handlePlus = (product) => {
    return (
      dispatch(plusItem(product))
    )
  }

  const handleMin = (product) => {
    return (
      dispatch(deleteitem(product))
    )
  }

  const handleCheckout = () => {
    return (
      dispatch(checkOut())
    )
  }
  const state = useSelector((state) => state.handleCart);

  const emptyCart = () => {
    return(
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>
    )
}
const cartItems = (product) => {
  return(
      <>
          <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
              <div className="row justify-content-center">
                  <div className="col-md-4">
                      <img src={product.image} alt={product.title} height="200px" width="180px" />
                  </div>
                  <div className="col-md-4">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                          {product.qty} X ${product.price} = {product.qty * product.price} $
                      </p>
                      <button className="btn btn-outline-dark me-4" onClick={()=>handleMin(product)}>
                          <i className="fa fa-minus"></i>
                      </button>
                      <button className="btn btn-outline-dark" onClick={()=> handlePlus(product)}>
                          <i className="fa fa-plus"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      </>
  )

}
const buttons = () => {
  return(
      <>
          <div className="container">
              <div className="row">
                <button style={{border:'none'}} onClick={handleCheckout}  className="mb-5 w-25 mx-auto">
                  <NavLink to="/" style={{textDecoration:'none'}} className='btn btn-outline-dark py-3 px-4'>
                      Proceed to Checkout
                  </NavLink>
                  </button>
              </div>
          </div>
      </>
  )
}


  return (
  
    <div>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && buttons()}
</div>
  )
}

export default Cart;