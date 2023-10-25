import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Cart() {
    const [total,setTotal] = useState(0)
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getCartTotal = ()=>{
    if(cartArray.length){
         setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

    }else{
      setTotal(0)
    }
  }

   const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order Successfully Placed...Thank you for Shopping with us!!")
    navigate('/')
   }

  useEffect(()=>{
   getCartTotal()
  },[cartArray])

  return (
    <div className='container text-light' style={{marginTop:'100px'}}>
    <div className='row mt-5'>
      <div className='col-lg-8'>
        {cartArray?.length>0?  <table className='table'>
            <thead>
              <th>Product Name</th>
              <th>Image</th>
              
              <th>Price</th>
              <th>Delete</th>
            </thead>
            <tbody>
            
          {
            cartArray.map((product,index)=>(
              
              <tr key={index}   >
                <td className='text-body'>
                  {product?.title}
                </td>
                <td>
                  <img style={{width:'100px',height:'100px'}} src={product?.thumbnail} alt="" />
                  </td>
                  <td className='text-body'>{product?.price}</td>
                  <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn btn-light'><FontAwesomeIcon
              icon={faTrash}
              size="lg"
              style={{ color: "red" ,width:'50px' }}
            /></button></td>
              </tr>
               
            ))
    
          } </tbody>
         
    
    
         </table>:<div style={{height:'60vh',width:'100%'}} className='w-100 d-flex justify-content-center flex-column align-items-center'>
              <img style={{width:'300px',height:'300px'}} src="https://live-mmb-public.s3.ap-south-1.amazonaws.com/assets/img/empty-cart.png" alt="" />
              <h4 className='fw-bold'>Your Cart is Empty !</h4>
              <Link to={'/'} className='btn btn-primary mt-3' style={{textDecoration:'none'}} >Home</Link>
            </div>}
      </div>
      <div className='col-lg-4'>
       <div className='p-3 border rounded text-body'>
          <h4 className='text-center '>Cart Summary</h4>
          <h5 className='mt-3'>Total Products:{cartArray.length}</h5>
          <h5>Total Amount: ₹{total}</h5>
          <div className='d-grid'>
            <button className='btn btn-success' onClick={handleCart} >CheckOut</button>
          </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Cart