import React, { useEffect, useState } from 'react';
import "./table.css"
import axios from "axios";

const Table = () =>{
  const [data,setData]=useState([])

  
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(res=>{
  console.log(res.data,"res")
  setData(res.data)
}).catch(err=>{
  console.log(err,"err")
})
},[])

const SearchName=(title)=>{
const name =  data.filter((item)=>item.title === title)
setData(name)
}

    return(
        <div>
          

<h2>My Customers</h2>


<input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"onChange={(e)=>SearchName(e.target.value)}></input>


<table id="myTable">

  <tr class="header">
    <th >ID</th>
    <th >Title</th>
    <th >Action</th>
  </tr>
  {data.map((item)=>{
    return(
  
  <tr>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  )
})}
  
  
 
</table>

</div>
)
}
export default Table;


