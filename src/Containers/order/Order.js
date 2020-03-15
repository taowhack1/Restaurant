import React, { PureComponent } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { orderFetch,orderDelete } from '../../Actions/index'

class Order extends PureComponent {
    constructor(props) {
        super(props)
        this.delOrder = this.delOrder.bind(this);
    }
    componentDidMount(){
        this.props.orderFetch();
        // axios.get("http://localhost:3001/orders").then(
        //     res=>{
        //         this.setState({orders:res.data})
        // })
    }
    delOrder(order){
        this.props.orderDelete(order.id);
        // axios.delete("http://localhost:3001/orders/"+order.id).then(res =>{
        //     axios.get("http://localhost:3001/orders").then(
        //         res=>{
        //             this.setState({orders:res.data})
        //         }
        //     )
        // }
        // )
    }
    showOrders(){
        return this.props.orders && this.props.orders.map(order=>{
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={()=>this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} | {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <li key={record.product.id}>
                                    {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p>ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer company="Sirivatana" email="tulagarn007@sirivatana.co.th"/>
            </div>
        )
    }
}
function mapStateToProps({orders}){
    return {orders};
}

export default connect(mapStateToProps,{orderFetch,orderDelete})(Order);