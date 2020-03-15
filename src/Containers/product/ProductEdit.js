import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductForm from '../../components/product/ProductForm'
import { connect } from 'react-redux';
import { productCreate , productUpdate , productFetch } from '../../Actions'
import { Redirect } from 'react-router-dom';


class ProductEdit extends Component {
    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { match , formValues , products , productCreate , productUpdate } = this.props; // ดึงค่า url เพื่อเช็คว่า อัพเดท หรือ สร้างใหม่ react router ส่ง prop match ,k.sh
        return (
            <div>
                <Header/>
                <div className="container col-md-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>Add new product</h2>
                            {products.saved && (
                                <div>
                                    {alert("Add New Product")}
                                    <Redirect to="/Products" />
                                </div>
                            )}
                            <ProductForm onProductSubmit={()=>productCreate(formValues)}/>
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>Edit product</h2>
                            {products.saved && (
                                <div>
                                    {alert("Updated")}
                                    <Redirect to="/Products" />
                                </div>
                            )}
                            <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps({ form , products }){
    return { formValues: form.ProductForm ? form.ProductForm.values : null , products};

}
export default connect(mapStateToProps,{productCreate,productFetch,productUpdate})(ProductEdit)