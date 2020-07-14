import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card } from 'antd';

class EditRestaurants extends React.Component {
  constructor(props) {
    super(props);
    const res = JSON.parse(localStorage.getItem("added-items"));
    console.log(res, this.props)
   
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    alert('Restaurant edited successfully')

    try {

      var a = localStorage.getItem('added-items')
      const b = JSON.parse(a);

      const c = b.map(op => {
        var pid = parseInt( this.props.match.params.id) + 1
       

        console.log(pid)
        console.log(op.id)

        if (op.id == pid) {
          // console.log('hanji')
          op.name = this.state.value

        }


        else { 
          // console.log('bye') 
        }


        return op;
      })
      console.log(c)
    
      localStorage.setItem('added-items', JSON.stringify(c));



    } catch (e) {
      console.log(e)
    }


  }


  render() {


    var a = 'https://get.wallhere.com/photo/night-reflection-table-evening-glass-bar-restaurant-bokeh-Budapest-Hungary-diner-light-lighting-noche-dinner-nuit-hongrie-verre-vidrio-hungria-honga-863223.jpg'
    return (
      <>
        <div className="add" style={{ height: window.innerHeight, backgroundImage: 'url(' + a + ')' }}>
          <Card style={{ backgroundColor: 'black' }} >
            <h1 style={{ color: 'white' }}>Edit Restaurant</h1>
            <form onSubmit={this.handleSubmit}>
              <label>

                <textarea value={this.state.value} onChange={this.handleChange} />

              </label>
              <br></br>

              {/* <Link to="/Restaurants"> */}
              <input type="submit" value="Submit" />
              {/* </Link> */}

            </form>
          </Card>
        </div>

      </>
    )
  }
}


export default EditRestaurants;
