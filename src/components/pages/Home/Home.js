// eslint-disable-next-line
import React from 'react';
import Categories from "./Categories";
import SortPopup from "./SortPopup";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../../redux/actions/filtersAction";
import {fetchPizzas} from "../../../redux/actions/pizzasAction";
import PizzaLoadingBlock from "./PizzaLoadingBlock";
import {addPizzaToCart} from "../../../redux/actions/cartAction";

const categoryNames = ['Мясные', 'Вегетарианские', 'С морепродуктами', 'Острые'];
const sortItems = [
    {name: 'по популярности', type: 'rating', order: 'desc'},
    {name: 'от дешевых', type: 'price', order: 'asc'},
    {name: 'от дорогих', type: 'price', order: 'desc'},
    {name: 'по названию', type: 'name', order: 'asc'},
    ];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    //console.log(cartItems);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
        // eslint-disable-next-line
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
        // eslint-disable-next-line
    }, [category, sortBy]);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onSelectCategory}
                        items={categoryNames}
                    />
                    <SortPopup
                        activeSortType={sortBy}
                        items={sortItems}
                        onClickSortType={onSelectSortType}
                    />
                </div>

                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded
                            ? items.map((obj) => (
                                <PizzaBlock
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={obj.id}
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj}
                                />))
                            : Array(10)
                                .fill(0)
                                .map((_,index) => <PizzaLoadingBlock key={index} />)}
                </div>
            </div>
    )
};

export default Home;