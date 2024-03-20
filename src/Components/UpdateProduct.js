import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const UpdateProduct = () => { 
const navigate=useNavigate()
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const params = useParams();

  useEffect(() => {
    console.log("params"+params);
    getproductdetails();
  }, []);

  const getproductdetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:6062/products/${params.id}`);
    result = await result.json();
    setname(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompany(result.company);

  }

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:6062/products/${params.id}`, {
      method: 'Put',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    setname(result.name);
    navigate('/')
  }

  return (
    <div className='product'>
         <h1 className='head'>Update Product</h1>
      <input type='text' placeholder='Enter product name' value={name} className='inbox' onChange={(e) => setname(e.target.value)} />

      <input type='text' placeholder='Enter product price' value={price} className='inbox' onChange={(e) => setprice(e.target.value)} />

      <input type='text' placeholder='Enter product category' value={category} className='inbox' onChange={(e) => setcategory(e.target.value)} />

      <input type='text' placeholder='Enter product company' value={company} className='inbox' onChange={(e) => setcompany(e.target.value)} />

      <button className='addbutton' onClick={updateProduct}>Update</button>

    </div>
  )
}

export default UpdateProduct; 
