import React, { Component } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const notFound = () =>{
    return(
        <div>
            <Header />
            <div className="col-md-8 container text-center">
                <h2>404 Not found.</h2>
                <p>ขออภัยหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรือย้ายไปยังหน้าเว็บเพจอื่น</p>
            </div>
            <Footer company="Sirivatana" email="TULAGARN@SIRIVATANA.CO.TH"/>
        </div>
    )
}
export default notFound;