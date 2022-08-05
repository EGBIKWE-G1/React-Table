import React, { Component } from 'react'
import  Pagination  from './Pagination';
import "./Table.css";

   
export class Table extends Component {
    render() {
  return (
    <div className="Table-Header">
        <table>
 
 <tr>

   <th>No</th>

   <th style={{fontSize: "97%"}}>Product Code</th>

   <th>Category</th>

   <th>Sub-Category</th>

   <th>Commission</th>

 </tr>

 <tr>

   <td>1.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

 <tr>

   <td>2.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

 <tr>

   <td>3.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

 <tr>

   <td>4.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

 <tr>

   <td>5.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

 <tr>
   <td>6.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>7.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>8.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>9.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>10.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>11.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>12.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

   <tr>
   <td>13.</td>

   <td>Product Code</td>

   <td>Category</td>

   <td>Sub-Category</td>

   <td>Commission</td>

 </tr>

</table>
<div className="mt-5 Pagination-Header">
<Pagination />
</div>
    </div>
  )
}
}

export default Table