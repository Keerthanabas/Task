import React, { useState } from "react";
import {data} from "./datas.js";
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom";
//  navigate('Details', {
//     itemId: 86,
//     otherParam: 'anything you want here',
//   });

const Edit = () => {
    let { id } = useParams();
    console.log(
        data.filter((item) => item.id === id),
        id,
        "check"
      );
const [datas,setDatas] = useState (
    data.filter((item)=>item.id === id
))
    

const [ID,setId] = useState(0)
const [title,setTitle]=useState("")
const navigate = useNavigate()
    return (
      <div>
          <h2>Edit</h2>

<lable>ID</lable>    <br></br>  
<input type = "text" value={id} placeholder="ID" onChange={(e)=>setId(e.target.value)}/> <br></br>

<lable>Title</lable> <br></br>
<input type = "text" value={title}   placeholder="Title"onChange={(e)=>setTitle(e.target.value)}/>

</div>
)
}
export default Edit 