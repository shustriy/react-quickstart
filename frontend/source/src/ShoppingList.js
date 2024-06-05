import './ShoppingList.css';

import { useState } from 'react';
import MyButton from './MyButton'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1},
    { title: 'Garlic', isFruit: false, id: 2},
    { title: 'Apple', isFruit: true, id: 3},
];

export default function ShoppingList() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    const listItems = products.map(product => 
        <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
        >
            {product.title}
        </li>
    );

    return (
        <>
            <ul>{listItems}</ul>
            <div>
                <h1>Counters that update separately</h1>
                <MyButton count={count} onClick={handleClick} />
                <MyButton count={count} onClick={handleClick} />
            </div>
        </>
    );
}