import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';

const PaginatedItems = ({ itemsPerPage, items, pageCount, setPageCount, itemOffset, setItemOffset }) => {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, items]);

    // Invoke when user click to request another page.

    return (
        <>
            {currentItems && currentItems.map((food) => <FoodItem food={food} key={food.id}></FoodItem>)}
        </>
    );
};

export default PaginatedItems;