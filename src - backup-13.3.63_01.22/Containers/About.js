import Header from "../components/Header";
import Footer from "../components/Footer"
import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    <h3>Sirivatana สวัสดีครับ</h3>
                    <p className="text-justify">บริษัทศิริวัฒนาอินเตอร์พริ้นท์ จำกัด (มหาชน) เป็นผู้ให้บริการสื่อสื่งพิมพ์ครบวงจรชั้นแนวหน้าของของประเทศไทยและภูมิภาคเอเชียแปซิฟิก การดำเนินธุรกิจ ด้านสือสิ่งพิมพ์ที่ครบวงจรและมีการใช้เทคโนโลยีที่ทันสมัยทำให้บริษัทมีชื่อเสียงเป็นที่ยอมรับโดยทั่วกันในฐานะของผู้นำด้านงานพิมพ์ที่คุณภาพทัดเทียมคุณภาพงานพิมพ์จากต่างประเทศ</p>
                    <h4 className="text-success">Tulagarn Sangoondee</h4>
                </div>
                <Footer company="Sirivatana" email="tulagarn007@sirivatana.co.th"/>
            </div>
            
        )
    }
}

export default About