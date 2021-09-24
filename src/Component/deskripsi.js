import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class GambarDetail extends Component {
    state = {
        deskripsiProduct : "KALIPER RCB S SERIES 4 DAN 2 PISTON UNIVERSAL"
    }
    
    ubahdeskripsiProduct = () => {
        this.setState((state) => {
            if (state.deskripsiProduct === "KALIPER RCB S SERIES"){
                return {deskripsiProduct : "4 PISTON, 2 PISTON"}
            } else {
                return {deskripsiProduct : "KALIPER RCB S SERIES"}
            }
        })
    }

    componentWillUnmount() {
        alert('sembunyikan detail gambar?')
        }

    render() {
        return (
            <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
                <Row justify="center">
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/ddjbu7j3s/image/upload/v1631885663/3_dq4vtg.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/ddjbu7j3s/image/upload/v1631885661/2_oaxocj.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/ddjbu7j3s/image/upload/v1631885662/1_cmnnkq.jpg"/>
                    </Col>
                </Row>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahdeskripsiProduct}> Lihat Ukuran !</a>
                    <p>{this.state.deskripsiProduct}</p>
                </div>
            </Card>
        );
    }
}

export default GambarDetail;