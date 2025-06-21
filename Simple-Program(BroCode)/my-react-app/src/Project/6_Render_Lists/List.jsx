import styles from "./List.module.css"

function List({items = [], category = "Category"}) {

    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "coconut", calories: 159}, 
    //                 {id: 5, name: "pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICL
    // fruits.sort((a,b) => a.calories-b.calories); // NUMERIC 
    // fruits.sort((a,b) => b.calories-a.calories); // REVERSE NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const listItems = items.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)

    return(<>
                <h3 className={styles.listCategory}>{category}</h3>
                <ul className={styles.listItems}>{listItems}</ul>
           </>
    );
}

export default List