import React from 'react'
import UserForm from './UserForm'
import UserDetails from './UserDetails'

const Body = () => {
  return (
    <div className='flex '>
        <UserForm/>
        <UserDetails/>
    </div>
  )
}

export default Body