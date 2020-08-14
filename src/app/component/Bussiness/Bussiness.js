import React from 'react';
import picture from "../../../images/kele.JPG";
import 'bootstrap/dist/css/bootstrap.css';
import "./Bussiness.css";
class Bussiness extends React.Component {
    constructor(props) {
        this.state={
            productBuy:[],
        }
    }
    handleClick = () => {
        this.setState({
            productBuy: this.state.productBuy.push({
                productName: this.props.dataSource.productName,
                productPrice: this.props.dataSource.productPrice,
                productUnit: this.props.dataSource.productUnit,
                productUrl: this.props.dataSource.productUrl,
            })
        })
    }
    render() {
        return (
        <div className="bussinessinfo">
          <div className="bussinesspic">
              <img src={this.props.dataSource.productUrl}/>
          </div>
          <div className="bussinessdes">
              <div>{this.props.dataSource.productName}</div>
              <div>{`单价：${this.props.dataSource.productPrice}元/${this.props.dataSource.productUnit}`}</div>
              <span class="badge badge-pill badge-primary"onClick={this.handleClick}>+</span>
          </div>
        </div>);
    }
}

export default Bussiness;
