import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Monitor from "../components/monitor/Monitor"
import { connect } from "react-redux";
import {productsFetch} from "../Actions/ProductActions"


class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
      this.props.productsFetch();
    //   fetch("http://localhost:3001/products",{method : "GET"})
    //   .then(res=>res.json())
    //   .then(res=> {console.log(res)})
    }

    render() {
        return (
            <div>
                <Header />
                <Monitor products={this.props.products}/>
                <Footer company="Sirivatana" email="tulagarn007@gmail.com"/>
            </div>
            
        )
    }

}
function mapStateToProps({products}) { //state in store เอามาเฉพาะ products จะใส่ state เฉยๆแล้ว เรียก state.products ก็ได้
   return {products}
}
export default connect(mapStateToProps,{productsFetch})(Home)