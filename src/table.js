import React from 'react';
import "./table.css"

const Table = () =>{
    return(
        <div>

<h2>My Customers</h2>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></input>

<table id="myTable">

  <tr class="header">
    <th >Name</th>
    <th >Country</th>
    <th >Action</th>
  </tr>
  
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Germany</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Berglunds snabbkop</td>
    <td>Sweden</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>UK</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Koniglich Essen</td>
    <td>Germany</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Canada</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Italy</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>UK</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
  <tr>
    <td>Paris specialites</td>
    <td>France</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
  </tr>
 
</table>

</div>
)
}
export default Table;


