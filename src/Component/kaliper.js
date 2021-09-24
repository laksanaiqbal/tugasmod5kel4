import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class Barang extends Component {
    state = {
            angka:0
        }

    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.state.angka !== nextState.angka) {
        if (nextState.angka >5){
            alert(`Stock Habis`)
            return false
        }
        window.confirm('INGIN MEMASUKKAN SPAREPART ke KERANJANG?')
        return true
    }
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`SPAREPART berhasil ditambah ke keranjang`)
    }

    render() {
        return (
            <div style={{textAlign:'center', display: 'inline-block' }}>
            <Card hoverable style={{display: 'inline-block', width:350, margin:'30px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gambar1" height="500px" src="https://res.cloudinary.com/ddjbu7j3s/image/upload/v1631885661/main_z9s5m0.jpg" />}>
            <Meta title="KALIPER RCB 4 PISTON UNIVERSAL NMAX" description="Rp 700.000" />
            <div>
            <Button type="success" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                masukkan keranjang
            </Button>
            </div>
            <Text>Total Di keranjang : {this.state.angka}</Text>
            </Card>
            </div>
        );
    }
}

export default Barang;