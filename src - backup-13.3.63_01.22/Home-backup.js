import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Monitor from "./components/monitor/Monitor"
import { connect } from "react-redux";
import {productsFetch} from "./Actions/ProductActions"


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <Monitor product={this.state.product}/>
                <Footer company="Sirivatana" email="tulagarn007@gmail.com"/>
            </div>
            
        )
    }

}
function mapStateToProps(state) {
    console.log(state)
}
export default connect(mapStateToProps,{productsFetch})(Home)