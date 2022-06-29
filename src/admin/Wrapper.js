import React from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'

export default function Wrapper(props) {
  return (
    <>
        <Nav />
        <div className="wrraper">
                <div className="left-content">
                <SideBar />
                </div>
                <div className="right-content">
                {props.children}
                </div>
            </div> 
    </>
  )
}
