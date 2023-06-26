import React from 'react'
interface Props{
	items: string[];
	heading: string;
}

const Product = () => {
  return (
    <>
     <tr>
      <th scope="row">2</th>
      <td>Nouilles</td>
      <td>1.00</td>
      <td>Grocery</td>
      <td><button className="btn btn-outline-danger">Effacer</button></td>

    </tr>
    </>
  )
}

export default Product
