import React from 'react';
import './OrderInfo.css';
import 'bootstrap/dist/css/bootstrap.css';
class OrderInfo extends React.Component {
  render() { 
    return (
      <div class="card">
        <div class="card-body mycard">
            <div>名字</div>
            <div>单价</div>
            <div>数量</div>
            <div>单位</div>
            <button type="button" className="btn btn-light">删除</button>
        </div>
      </div>);
    }
}

export default OrderInfo;