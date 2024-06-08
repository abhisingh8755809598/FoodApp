import React from 'react'
import {menu_list} from "../assets/assets"

function ExploreMenu({category,setCategory}) {

  return (

    
    <div className='explore-menu' id="explore-menu">

    <h1>Expore Our Menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a delecTable array</p>

    <div className='explore-menu-list'>

    {menu_list.map((item,index)=>{

        return (

            <div onClick={()=>{setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}} className='explor-menu-list-item' key={index}>

            <img className={category===item.menu_name?"active":""} src={ item.menu_image}/>
            <p>{item.menu_name}</p>

            </div>
        )
    })}

    </div>
    
    </div>
  )
}

export default ExploreMenu 