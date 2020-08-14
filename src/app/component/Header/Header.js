import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
      <div className="header">
          <div className="home">
            <Link to="/">商城</Link>
          </div>
          <div className="order">
            <Link to="/order">订单</Link>
          </div>
          <div className="addbussiness">
           <Link to="/add">添加商品</Link>
          </div>
      </div>);
};

export default Header;