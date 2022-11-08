
import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    axios.get(`http://fakestoreapi.com/products`)
      .then(res => {
        setData(res.data);
        setFilter(res.data)
        console.log('hi')

      }).catch((err) => {
        console.log(err)
      })
  }, [])

const filterProduct = (cat)=>{
  // console.log(cat)
  const updateList = data.filter((x)=>x.category === cat)
  // console.log(updateList)
  setFilter(updateList)
  console.log(data)

  // console.log( "filter", filter)
}


const hello = (id)=>{

  const upidList = data.filter((e)=> e.id === id)
  console.log(upidList)
  setFilter(upidList)
  
  
  console.log('id ',id)
}


  return (
    <>

      <h1 className='text-center container text-center  mt-2 p-2 border-bottom border-2 '>PRODUCTS</h1>


      <div className="container text-center my-3">      
        <button type="button" className="btn btn-outline-dark m-2" onClick={()=>{setFilter(data) 
          }}>All</button>
        <button type="button" className="btn btn-outline-dark m-2" onClick={()=>filterProduct("men's clothing")
      }>Men' Clothing</button>
        <button type="button" className="btn btn-outline-dark m-2" onClick={()=>filterProduct("women's clothing")
      }>Women's Clothing</button>
        <button type="button" className="btn btn-outline-dark m-2" onClick={()=>filterProduct("jewelery")
      }>Jewelery</button>
        <button type="button" className="btn btn-outline-dark m-2" onClick={()=>filterProduct("electronics")
      }>Electronic</button>
      </div>


      { filter.map((data) => {
        // console.log(data)
        return ( 
          <>
            <div className="colo_flex_class" onClick={()=>hello(data.id)} >
              
              <div className="col-md-3">
                <div className="card">
                  <img src={data.image} className="card-flex-img" height='300px' width='300px' alt={data.title} />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">$ {data.price}</p>
                    <p className="btn btn-dark">Buy</p>
                  </div>
                </div>
              </div>
            </div>
            </>
        )   }
        
        
       )}
      
     </>   
   )} ;

export default App;
