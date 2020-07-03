import React from 'react';
import Search from './Search'
import FoodImage from './Consumed-food-image'


const Calculator = () => {
    return (
        <div>
            <div>
                <Search />
            </div>
            <div className='food'>
                <FoodImage />
            </div>
        </div>
    )
}

export default Calculator;