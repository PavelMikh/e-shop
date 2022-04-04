import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Login from "./components/login";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import NotFound from "./components/notFound";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/products/:productId?/:description?" component={ProductList} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
