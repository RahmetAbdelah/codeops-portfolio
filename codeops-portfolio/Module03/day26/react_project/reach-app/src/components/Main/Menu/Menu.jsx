import './Menu.css'
import Dish from './Dish/Dish'

const menu = [
 
  { id: 1, name: "Special Doro Wat", price: 450, category: "Mains", spicy: true },
  { id: 2, name: "Beef Tibs", price: 380, category: "Mains", spicy: false },
  { id: 3, name: "Shiro Wot", price: 180, category: "Vegetarian", spicy: true },
  { id: 4, name: "Beyaynetu", price: 220, category: "Vegetarian", spicy: false },
  { id: 5, name: "Sambusa", price: 40, category: "Appetizers", spicy: false },
  { id: 6, name: "Tej (Honey Wine)", price: 150, category: "Drinks", spicy: false },
];


function Menu(){
    return (
        <section className='menu'>
            {menu.map(d => (
                <Dish 
                    key={d.id} 
                    name={d.name} 
                    price={d.price} 
                    spicy={d.spicy} 
                />
            ))}
        </section>
    )
}

export default Menu;