import React from 'react';
import Bussiness from '../Bussiness/Bussiness';
import Footer from '../Footer/Footer';
import './home.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      bussiness:'',
    };
  }
  getDateFromback = (data) => {
    this.setState({
      bussiness: data,
    })
  }
  componentDidMount() {
    fetch('http://localhost:8080/bsInfo','Get').then(
      response => {
        this.getDateFromback(response.text);
      }
    );
  }
  render() { return (
    <div>
      <div className="homebody">
        {this.state.bussiness.map(
          data =><Bussiness dataSource={data} />
        )}
      </div>
      <Footer />
    </div>);
  }
}

export default Home;