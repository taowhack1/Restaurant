import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import FormFields from '../common/FormFields'
import {productFormFields} from '../product/formField'

class ProductForm extends Component {

    renderFields(formFields){
        return formFields.map(( { label , name , type ,required} ) =>{
            return (
                <Field key={name} required={required} label={label} name={name} type={type} component={FormFields} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                   {this.renderFields(productFormFields)}
                   <button className="btn btn-info btn-block title" type="submit">
                       Save
                   </button>
                </form>
            </div>
        )
    }
}
function validate (values){
    const errors={};
    productFormFields.forEach(({ name , required})=>{
        if(!values[name] && required){
            errors[name] = 'กรุณากรอกข้อมูล';
        }
    })
    return errors;
}
function mapStateToProps({ products }){
    if(products && products.id){
        return {initialValues : products};
    }else{
        return {};
    }
}
ProductForm = reduxForm({ validate , form : "ProductForm"})(ProductForm);

export default connect(mapStateToProps)(ProductForm)