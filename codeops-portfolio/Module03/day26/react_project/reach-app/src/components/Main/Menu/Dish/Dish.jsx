import './Dish.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Dish({ name, price, category, isSpicy, image }) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className='dishstyle'>
            <img src={image} alt={name} />
            <div className='dish-header'>
                <h3>{name}</h3>
                {/* Conditional rendering for Spicy Badge based on JSON data */}
                {isSpicy && <span className='spicy-badge'>🌶️ Spicy</span>}
            </div>
            {category && <p className='category-label'>{category}</p>}
            <h3>{price} ETB</h3>
            <button onClick={handleClick}>add</button>
            <h6>{count}</h6>
        </div>
    );
}

// PropTypes validation
Dish.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    isSpicy: PropTypes.bool,
    image: PropTypes.string,
};

// Default props
Dish.defaultProps = {
    category: 'General',
    isSpicy: false,
    image: '../assets/coffee.png',
};

export default Dish;