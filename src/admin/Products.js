import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'


function Products() {

  const [products, setProducts] = React.useState([])

  React.useEffect(()=> {
    fetch('http://localhost:3004/products')
    .then(res =>res.json())
    .then(data =>setProducts(data))
  }, [])

const del = (id) => {
  //alert('hello delet');
  fetch(`http://localhost:3004/products/${id}`, {
    
  method: 'DELETE'

  });
  
  const updatedProduct = products.filter(p => p.id !== id);
  setProducts(updatedProduct); 

}

  return (
    <Wrapper>
      <button className='btn'><Link to="/admin/products/create">Add New Item</Link></button>
     
      <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
      products.map((p, i)=>{
        return(
          <tr key={i}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td><img src={p.image} alt={p.title} /></td>
            <td>
            <button className='btn'><Link to={`/admin/products/${p.id}/edit`}>Edit</Link></button>
              <button onClick={() =>del(p.id)}>Delete</button></td>
          </tr>

        )
      })

      }
     
    </tbody>
  </table>

    </Wrapper>
  )
}

export default Products