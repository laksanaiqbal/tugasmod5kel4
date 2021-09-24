import React from 'react';
import Barang from './Component/kaliper';
import DetailProduct from './Component/kaliperDetail';
import GambarDetail from './Component/deskripsi';
import 'antd/dist/antd.css';
import { Layout, Typography, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  state = {
    komponenMuncul : false
  }
  
  ubahKomponenMuncul = () => {
    this.setState((state) => {
        return {komponenMuncul : !this.state.komponenMuncul}
    })
  }
  
  state = {
  komponenGambar : false
  }
  
  ubahKomponenGambar = () => {
    this.setState((state) => {
      return {komponenGambar : !this.state.komponenGambar}
    })
  }
  
  componentDidMount() {
    alert(`MASUK WEBSITE BALAP RACING?`)
  }

  render() {
    return (
      <Layout style={{background:'##b0cdff'}}>
        <Header style={{background:'#3fb3cd', textAlign:'center', marginBottom: '20px', padding: '20px 20px'}}>
          <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
          BALAP RACING
          </Text>
        </Header>
        <Content style={{textAlign:'center', display: 'inline-block'}}>
          <Barang />
          <div style={{Align:'center', display: 'inline-block'}}>
            <div style={{margin:'10px'}}>
              <Button Align="center" type="danger" onClick={this.ubahKomponenGambar}>{this.state.komponenGambar ? 'Hide' : 'View'} detail gambar</Button>
              {this.state.komponenGambar ? <GambarDetail/> : ''}
            </div>
            <Button Align="center" type="danger" onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Hide' : 'View'} detail produk!</Button>
            {this.state.komponenMuncul ? <DetailProduct/> : ''}
          </div>
        </Content>
        <Footer style={{background:'#3fb3cd', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
          KELOMPOK 4
        </Footer>
      </Layout>
    )
  }
}

export default App;