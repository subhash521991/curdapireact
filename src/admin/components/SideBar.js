import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">

      <ul className="side-menu">
<li><Link to="/admin/products">Products</Link></li>
<li><Link to="/admin/products/create">Add Item</Link></li>


      </ul>
    
    
    </div>
  )
}

export default SideBar 