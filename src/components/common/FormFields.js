import React from 'react'

export default ({input ,type ,label ,required,meta})=>{
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} required={required} {...input} className="form-control" />
            {
            meta.error && meta.touched && (
                <div className="text-danger mt-2 title">{meta.error}</div>
            )
            }
        </div>
    )
}