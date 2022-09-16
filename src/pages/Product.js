import axios from 'axios'
import React,{useState,useEffect} from 'react'

import Products from '../components/Products'

const Product = () => {
const [data, setdata] = useState([])


useEffect(() => {
  loadmore()
}, [])
const loadmore=()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>
  setdata(res.data)
  )
}

  return (
    <>
    <div className='productsWrapper'>
      {
       data.map(pro=><Products key={pro.id}  pro={pro} />)
      }
    </div>
    </>
  )
}

export default Product