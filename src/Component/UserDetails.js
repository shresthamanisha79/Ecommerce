import React, {useState, useEffect} from 'react'
import UserForm from './UserForm'


const UserDetails = (props)=>{
    const [Name, setName] = useState('')
    const [Address, setAddress] = useState('')

    const displayName = (Name)=>{
       setName(Name)
    }
    const displayAddress = (Address)=>{
        setAddress(Address)
     }
    return (
        <div className="details">
            <h1 style={{color:props.color}}>Hello {Name} from {Address}</h1>
            <UserForm displayName={displayName} displayAddress={displayAddress}/>
        </div>
    )
}
export default UserDetails