import logo from './../assets/img/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import {
    HiPlus,HiDotsVertical
} from 'react-icons/hi'
import HeaderItem from './HeaderItem.jsx'
import { useState } from 'react'


const Header = () => {

    const menu =[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'ORIGINAL',
            icon:HiStar
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

    const [toggle ,setToggle] =useState(false)
  return (
    <div className='flex items-center py-2 justify-between'>
      <div className='flex items-center gap-8 '>
      <img src={logo} className='w-[80px] md:w-[115px] object-cover mx-5 ' />
      
       <div className='hidden md:flex gap-8'>
       {
            menu.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <HeaderItem Name={item.name} Icon={item.icon} />
                
            ))
        }
       </div>
       {/* mobile screen icons */}
       <div className='flex md:hidden gap-5'>
            {menu.map((item,index)=>index<3 &&(
                // eslint-disable-next-line react/jsx-key
                <HeaderItem Name={''} Icon={item.icon} />
                
            ))}
        <div className='md:hidden' onClick={()=>(setToggle(!toggle))}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {
                toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4 p-3'>
                {
                menu.map((item,index)=>index>2 &&(
                    // eslint-disable-next-line react/jsx-key
                    <HeaderItem Name={item.name} Icon={item.icon} />
                    
                ))} 
                </div>:null
            }
            
        </div>
       </div>

      </div>
      <img src={logo} alt="right-most-corner" className='w-[40px] rounded-full'/>
     </div>
   
  )
}

export default Header
