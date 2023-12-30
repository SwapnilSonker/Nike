
const PopularProductCard = ({imgURL, name, price}) => {
    console.log("hi")
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} 
        className="w-[280px] h-[280px]"/>
    </div>
  )
}

export default PopularProductCard;