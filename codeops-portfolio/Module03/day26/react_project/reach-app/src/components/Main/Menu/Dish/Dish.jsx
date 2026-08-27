import './Dish.css'

function Dish({name,price}){
    return(
       <div className='dishstyle'>
        <img src='../assets/coffee.png'></img>
        <h3>{name}</h3>
        <h3>{price}</h3>

       </div>
    )
}

export default Dish;