import React from 'react';
import './Order.css';
import 'bootstrap/dist/css/bootstrap.css';
import OrderInfo from '../OrderInfo/OrderInfo';
import Footer from '../Footer/Footer';
class Order extends React.Component {
  render() { 
    return (
    <div>
      <div className="orderbody">
        <div className="card">
          <div className="card-header myheader">
            <div>名字</div>
            <div>单价</div>
            <div>数量</div>
            <div>单位</div>
            <div>操作</div>
          </div>
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
        </div>
      </div>
    <Footer />
    </div>);
    }
}

export default Order;