import React from 'react';
import Footer from '../Footer/Footer';
import './Add.css';
import 'bootstrap/dist/css/bootstrap.css';
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
      this.state({
         productName: event.target.value,
      })
   }
   handlePriceChange = (event) => {
      this.state({
         productPrice: event.target.value,
      })
   }
   handleUnitChange = (event) => {
      this.state({
         productUnit: event.target.value,
      })
   }
   handleUrlChange = (event) => {
      this.state({
         productUrl: event.target.value,
      })
   }
    render() { return (
      <div>
        <div className="addbody">
          <div className="adddes">添加商品</div>
          <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*名称</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            placeholder="name@example.com" 
            value={this.state.productName}
            onChange={this.handleNameChange}/>
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*价格</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            placeholder="价格"
            value={this.state.productPrice}
            onChange={this.handlePriceChange} />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*单位</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            placeholder="单位"
            value={this.state.productUnit}
            onChange={this.handleUnitChange} />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*图片</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" 
            placeholder="图片"
            value={this.state.productUrl}
            onChange={this.handleUrlChange} />
         </div>
         <input className="btn btn-primary mybutton" type="submit" 
         value="提 交"
         disabled={!(this.state.productName && this.state.productPrice && this.state.productUnit && this.state.productUrl)}
         onChange={this.handleSubmit}></input>
      </div>
      <Footer />
    </div>);
    }
}

export default Add;