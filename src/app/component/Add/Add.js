import React from 'react';
import Footer from '../Footer/Footer';
import './Add.css';
import 'bootstrap/dist/css/bootstrap.css';

const sendData = (data) => {
   const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'content-type': 'application/json'
      }
   }
   fetch('http://localhost:8080/bsInfo',options)
   .then(console.log("post 成功"));
}
class Add extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         productName: '',
         productPrice: '',
         productUnit: '',
         productUrl: '',
      }
   }

   handleNameChange = (event) => {
      this.setState({
         productName: event.target.value,
      })
   }
   handlePriceChange = (event) => {
      this.setState({
         productPrice: event.target.value,
      })
   }
   handleUnitChange = (event) => {
      this.setState({
         productUnit: event.target.value,
      })
   }
   handleUrlChange = (event) => {
      this.setState({
         productUrl: event.target.value,
      })
   }

   handleSubmit = () => {
      sendData({
         productName: this.state.productName,
         productPrice: this.state.productPrice,
         productUnit: this.state.productUnit,
         productUrl: this.state.productUrl,
      })

      this.setState({
         productName: '',
         productPrice: '',
         productUnit: '',
         productUrl: '',
      })
   }
    render() { return (
      <div>
        <div className="addbody">
          <div className="adddes">添加商品</div>
          <div className="form-group myinfo">
            <label htmlFor="name">*名称</label>
            <input type="text" className="form-control" id="name" 
            placeholder="名字" 
            value={this.state.productName}
            onChange={this.handleNameChange}/>
         </div>
         <div className="form-group myinfo">
            <label htmlFor="price">*价格</label>
            <input type="email" className="form-control" id="price" 
            placeholder="价格"
            value={this.state.productPrice}
            onChange={this.handlePriceChange} />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="unit">*单位</label>
            <input type="email" className="form-control" id="unit" 
            placeholder="单位"
            value={this.state.productUnit}
            onChange={this.handleUnitChange} />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="picture">*图片</label>
            <input type="email" className="form-control" id="picture" 
            placeholder="图片URL"
            value={this.state.productUrl}
            onChange={this.handleUrlChange} />
         </div>
         <input className="btn btn-primary mybutton" type="submit" 
         value="提 交"
         disabled={!(this.state.productName && this.state.productPrice && this.state.productUnit && this.state.productUrl)}
         onClick={this.handleSubmit}></input>
      </div>
      <Footer />
    </div>);
    }
}

export default Add;