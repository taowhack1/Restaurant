import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import "./App.css"
import Home from './Containers/Home'
import About from './Containers/About.js'
import Order from './Containers/order/Order'
import Product from './Containers/product/Product'
import NotFound from './Containers/error/NotFound'
import ProductEdit from './Containers/product/ProductEdit'

class App extends Component {
    renderRouter(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/orders" component={Order}/>
                <Route exact path="/products" component={Product}/>
                <Route exact path="/products/add" component={ProductEdit}/>
                <Route exact path="/products/edit/:id" component={ProductEdit}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
    
    render() {
        return (
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
        );
    }
}

export default App