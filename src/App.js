import React from 'react';
import Cart from './components/pages/Cart/Cart';
import { Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";


function App() {

    /*window.test = () => {
        axios.get('https://fast-pizza-13acc.firebaseio.com/pizzas.json')
            .then(({ data}) => dispatch(setPizzasAction(data)));
    };*/

    /*React.useEffect(() => {
        axios.get('https://fast-pizza-13acc.firebaseio.com/pizzas.json')
            .then(({ data}) => dispatch(setPizzasAction(data)));
        //.then(({data}) => console.log(data))
    }, []);*/

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
            </div>
        </div>
    )
}

export default App;

/*const mapStateToProps = state => {
    return {
        items: state.pizzas.items,
        filters: state.filters,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);*/
