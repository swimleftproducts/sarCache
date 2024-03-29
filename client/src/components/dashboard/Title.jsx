import React, {useContext} from 'react'
import {AuthContext} from '../AuthContext'
function Title() {
  const {auth}=useContext(AuthContext)
  
  const todayDate = () => { 
    let today = new Date()
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    return `${month+1}/${day}/${year}`
   }
  
  return (
    [
    <div key="1" id='dashboardTitle' className='dashboard-title-item'>
     <h5>Hello {auth.name}</h5>
    </div>,
    <div key="2" className='dashboard-title-item title-2'>
     <h5>Info as of {todayDate()}</h5>
    </div>
    ]
  )
}
export default Title
