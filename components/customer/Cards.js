import React from 'react'
import CardItem from './CardItem'; 
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout For Our Amazing Products!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/th-1.jpg"
                        text="Roundhill Furniture Elkton Sofas, Polyester"
                        label='$ 1077.54'
                        path='/services'
                        />
                        <CardItem
                        src="images/img-21.jpg"
                        text="A setting, occasion, or medium for exhibiting something, especially in an attractive"
                        label='$ 980.20'
                        path='/services'
                        />
                        <CardItem
                        src="images/img-20.jpg"
                        text="Plenty of Acrylic Desk Chairs to Choose From here"
                        label='$ 56.64'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
