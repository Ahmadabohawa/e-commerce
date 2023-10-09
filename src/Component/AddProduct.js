import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '../redux/action';

const AddProduct=()=> {
    const [name,setName] = useState("");
    const [file,setFile] = useState();
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    const dispatch=useDispatch();

    const addProduct=({name,file,price,description})=>{
        return(
       dispatch(additem({name,file,price,description}))
        )
    }
    
    return (
    <>
        <div className='col-sm-6 offset-sm-3'>
            <br/>
          <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)}
           placeholder="Name..."/>  
          <input type="file" className='form-control' onChange={(e)=>setFile(e.target.value)}
           placeholder="image..."/>
           <input type="text" className='form-control' onChange={(e)=>setPrice(e.target.value)}
           placeholder="Price..."/>
           <input type="text" className='form-control' onChange={(e)=>setDescription(e.target.value)}
           placeholder="Description..."/>  
           <button onClick={()=>addProduct({name,file,price,description})} className="btn btn-outline-dark">Add Product</button>
        </div>

        <div>
          
        </div>    
        </>
    );
}

export default AddProduct;