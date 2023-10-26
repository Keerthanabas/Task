import React, { useEffect, useState } from 'react';
import "./table.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Table = () =>{
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const navigate = useNavigate()
  

  
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(res=>{
  console.log(res.data,"res")
  setData(res.data)
}).catch(err=>{
  console.log(err,"err")
})
},[])

useEffect(()=>{
 const name = data.filter(item=>
    {
      console.log(item,"items")
      return(
      item.title.toLowerCase().includes(search.toLowerCase()))
    }
     )
setData(name)

},[search])

const deleteTitle = (title) =>{
  const id = data.filter((item)=>item.title !== title)
  setData(id)
  }

  const editTile =(title)=>{
    navigate("/edit", {
      itemId: 86,
      otherParam: 'anything you want here',
    })
  }





// const SearchName=(value)=>{
//   value.preventDefault()
// // const name =  data.filter((item)=>item.title !== title)

// let name = data.filter(item=>
//   {
//     console.log(item,"items")
//     return(
//     item.title.toLowerCase().match(value.target.value.toLowerCase()))
//   }
//    )
// setData(name)
// console.log(value,name,"checking")
// }
// const SearchName = data.filter((item=>
//   item.title().includes(data.toLowerCase())))

    return(
        <div>
          

<h2>My Customers</h2>


<input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"onChange={(e)=>setSearch(e.target.value)}></input>


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
        <button onClick={() => editTile(item.title)}>Edit</button>
        <button onClick={() => deleteTitle(item.title)}>Delete</button>
    </td>
  </tr>
  )
})}
  
  
 
</table>

</div>
)
}
export default Table;


