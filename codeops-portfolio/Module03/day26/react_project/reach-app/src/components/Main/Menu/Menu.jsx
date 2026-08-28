import './Menu.css'
import Dish from './Dish/Dish'

const menu = [
  { id: 1, name: "Doro Wat", price: 240, isSpicy: true },
  { id: 2, name: "Shiro", price: 120, isSpicy: false },
  { id: 3, name: "Tibs", price: 280, isSpicy: true },
  { id: 4, name: "Kitfo", price: 300, isSpicy: true },
  { id: 5, name: "Doro Wat", price: 240, isSpicy: true },
  { id: 6, name: "Shiro", price: 120, isSpicy: false },
  { id: 7, name: "Tibs", price: 280, isSpicy: true },
  { id: 8, name: "Beyaynetu", price: 200, isSpicy: false },
];

function Menu(){
    return (
        <section className='menu'>
            {menu.map(d => (
                <Dish 
                    key={d.id} 
                    name={d.name} 
                    price={d.price} 
                    isSpicy={d.isSpicy} 
                />
            ))}
        </section>
    )
}

export default Menu;