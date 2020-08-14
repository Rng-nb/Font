import React from 'react';
import picture from "../../../images/kele.JPG";
import 'bootstrap/dist/css/bootstrap.css';
import "./Bussiness.css";
class Bussiness extends React.Component {
    render() {
        return (
        <div className="bussinessinfo">
          <div className="bussinesspic">
              <img src={picture}/>
          </div>
          <div className="bussinessdes">
              <div>可乐1</div>
              <div>单价：1元/瓶</div>
              <span class="badge badge-pill badge-primary">+</span>
          </div>
        </div>);
    }
}

export default Bussiness;
