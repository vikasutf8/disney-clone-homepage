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

  return (
    <div className='flex items-center py-2 justify-between'>
      <div className='flex items-center gap-8 '>
      <img src={logo} className='w-[80px] md:w-[115px] object-cover mx-5 ' />
        {
            menu.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <HeaderItem Name={item.name} Icon={item.icon} />
                
            ))
        }
      </div>
      <img src={logo} alt="right-most-corner" className='w-[40px] rounded-full'/>
     </div>
   
  )
}

export default Header
