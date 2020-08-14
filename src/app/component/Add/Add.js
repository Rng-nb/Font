import React from 'react';
import Footer from '../Footer/Footer';
import './Add.css';
import 'bootstrap/dist/css/bootstrap.css';
class Add extends React.Component {
    render() { return (
      <div>
        <div className="addbody">
          <div className="adddes">添加商品</div>
          <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*名称</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*价格</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="价格" />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*单位</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="单位" />
         </div>
         <div className="form-group myinfo">
            <label htmlFor="exampleFormControlInput1">*图片</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="图片" />
         </div>
         <input className="btn btn-primary mybutton" type="submit" value="提 交"></input>
      </div>
      <Footer />
    </div>);
    }
}

export default Add;