import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class DetailProduct extends Component {
    state = {
        lihatLebih : false
    }
    
    ubahlihatLebih = () => {
        this.setState((state) => {
            return {lihatLebih : !this.state.lihatLebih}
        })
    }

    componentWillUnmount() {
        alert('sembunyikan detail produk?')
        }       

    render() {
        return (
            <Card hoverable title=" Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
                <p style={{margin:'2px'}}>Model S Series 2 Piston</p>
                <p style={{margin:'2px'}}>include : Kampas Rem dan Breket</p>
                
                <p style={{margin:'2px'}}>untuk semua motor</p>
                <p style={{margin:'2px'}}>original Made in malaysia</p>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahlihatLebih}>{this.state.lihatLebih ? 'Minimize' : 'View'} Colour Products!</a>
                    {this.state.lihatLebih ? 
                    <p>Hitam, Biru, emas, merah</p> : ''}
                </div>
            </Card>
        );
    }
}

export default DetailProduct;