import React, { useState } from "react";
import {data} from "./datas.js";
import {useNavigate} from "react-router-dom"


const Edit = () => {
const [id,setId] = useState(0)
const [title,setTitle]=useState("")
const navigate = useNavigate()


const details = data.map((item)=>{
// if(item.id == id){
//     item


// }


})

//  navigate('Details', {
//     itemId: 86,
//     otherParam: 'anything you want here',
//   });

 console.log(navigate.getParam('itemId'))

return(
<div>
<h1>Edit Title</h1>
<input type = "number"  placeholder="ID"/>
<input type = "text"    placeholder="Title"/>


</div>
)
}
export default Edit 