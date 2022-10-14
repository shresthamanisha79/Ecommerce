import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart  } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

const EcomBox = (props)=>{
    const [color, setColor] = useState('')
    const [newCount, setNewCount] = useState(true)

    const changeColor = ()=>{
        setColor('red')
    }

    const getincCount = ()=>{
        if(newCount===false){
            props.incCount(-1)
            setNewCount(!newCount)
            setColor('green')
            return
        }
            props.incCount(1)
            setNewCount(!newCount)
            setColor('red')
    }
    const listCart = () =>{
        props.getList(props.item.name)
    }
   
    return (
        <>
        <div className='ecom'>
         <div className='boxContent'>
            {props.item.name}
            <img src={props.item.image} height={250} width={198}/>
            {props.item.price}
            {props.item.currency} 
        </div>
        <div className='icons'>
            <div className='cartIcon'>
                <FontAwesomeIcon icon={faCartShopping} onClick={()=>{listCart()}}/>
            </div>
            <div className='heartIcon' color={changeColor} onClick={()=>{getincCount()}} style={{color:color}}>
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
        </div>
        
        </>
        
        
    )
}
export default EcomBox