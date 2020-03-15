import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import Axios from "axios";

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {totalPrice: 0, orders: []};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        if(findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice, orders: this.state.orders});
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id != product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice, orders: resultOrder});
    }
    cancelOrder(){
        this.setState({totalPrice:0,orders:[]})
    }
    confirmOrder(){
        const {totalPrice,orders} = this.state;
        Axios.post("http://localhost:3001/orders",{orderedDate:new Date(),totalPrice,orders})
        .then(res=>{
            this.setState({totalPrice:0,orders:[]})
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 ">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onConfirmOrder={this.confirmOrder} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;