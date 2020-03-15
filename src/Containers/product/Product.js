import React, { Component } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductList from "../../components/product/ProductList"
import axios from "axios"
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { productsFetch,productsDelete } from '../../Actions'

class Product extends Component {
    constructor(props) {
        super(props)

        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    componentDidMount(){
        this.props.productsFetch();

    }
    editProduct(product){
        this.props.history.push('products/edit/'+product.id)
    }
    delProduct(product){
        this.props.productsDelete(product.id);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-md-6">
                            <button 
                                className="btn btn-success float-right"
                                onClick={()=>this.props.history.push('products/add')}
                                >เพิ่ม
                            </button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products) && (
                        <ProductList 
                            products={this.props.products} 
                            onDelProduct={this.delProduct} 
                            onEditProduct={this.editProduct}
                        />
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({products}){
    return {products}
}

export default withRouter(connect(mapStateToProps,{productsFetch,productsDelete})(Product));