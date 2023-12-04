

const HeaderItem = ({Name,Icon}) => {
    console.log(Name)
    console.log(Icon)
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-2">
      <Icon/>
      <h2>
        {Name}
      </h2>
    </div>
  )
}


export default HeaderItem;

