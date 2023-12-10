import { useEffect, useState } from 'react';
import styles from './search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '945626c7f0bb4c8194e331d86757d2a3';

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState('Pizza');

    //Syntax f the useEffect Hook.
    useEffect(() => {
        async function fetchFood() {
            const foodData = await fetch(
                `${URL}?query=${query}&apiKey=${API_KEY}`
            );
            const data = await foodData.json();
           
        }
        fetchFood();
    }, [query]);

    function handleQuery(e) {
        setQuery(e.target.value);
    }

    return (
        <div className={styles.searchDiv}>
            {' '}
            <input
                className={styles.searchInput}
                type="text"
                value={query}
                onChange={(e) => handleQuery(e)}
            />
        </div>
    );
}
