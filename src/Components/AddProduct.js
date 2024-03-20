import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const AddProduct = () => { 

    const [name,setname]= useState("");
    const [price,setprice]=useState("");
    const [ category,setcategory]=useState("");
    const [ company,setcompany]=useState("");
    const [ error,seterror]=useState(false);
    const navigate = useNavigate();
    
    const addProduct= async()=>{
      console.warn(name,price,category,company);
         if(!name || !price || !category || !company)
         {
          seterror(true)
          return false;
         }

        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);

        let result = await fetch("http://localhost:6062/add-product",{
          method:"post",
          body:JSON.stringify({name,price,category,company}),
          headers:{'Content-Type':'application/json'}
        });
       result=await result.json();
       console.warn(result);
       localStorage.setItem("user",JSON.stringify(result))
       navigate('/')

    }
  return (
    <div className='product'>
      <h1 className='head'>Add Product</h1>
        <input type='text' placeholder='Enter product name' value={name} className='inbox'  onChange={(e)=>setname(e.target.value)}/>
       {error &&  !name && <span className='invalid-input'> Enter valid name</span>}

        <input type='text' placeholder='Enter product price'value={price} className='inbox' onChange={(e)=>setprice(e.target.value)}/>
        {error &&  !price && <span className='invalid-input'> Enter valid name</span>}
        <input type='text' placeholder='Enter product category'value={category}className='inbox' onChange={(e)=>setcategory(e.target.value)}/>
        {error &&  !category && <span className='invalid-input'> Enter valid name</span>}
        <input type='text' placeholder='Enter product company'value={company}className='inbox' onChange={(e)=>setcompany(e.target.value)}/>
        {error &&  !company && <span className='invalid-input'> Enter valid name</span>}
        <button className='addbutton' onClick={addProduct}>Add Product</button>

    </div>
    
  )
}

export default AddProduct; 