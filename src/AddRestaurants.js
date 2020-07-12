import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card } from 'antd';

class AddRestaurants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {

    event.preventDefault();

    alert('Restaurant added successfully')

    try {

      const rest = localStorage.getItem('added-items')
      const parsedrest = JSON.parse(rest);
      parsedrest.push({ id: Math.random(), name: this.state.value })
      localStorage.setItem('added-items', JSON.stringify(parsedrest));
      // this.props.router.push("/restaurants")

    } catch (e) {
      console.log(e)
    }


  }

  render() {

    var a = 'https://wallpapercave.com/wp/wp1874155.jpg'
    return (
      <>
        <div className="add" style={{ height: window.innerHeight, backgroundImage: 'url(' + a + ')' }}>
          <Card style={{ backgroundColor: 'black' }} >
            <h1 style={{ color: 'white' }}>Add a new Restaurant</h1>
            <form onSubmit={this.state.value === '' ? '' : this.handleSubmit}>
              <label>

                <textarea value={this.state.value} onChange={this.handleChange} />

              </label>
              <br></br>

              <input type="submit" value="Submit" />


            </form>
          </Card>
        </div>

      </>
    )
  }
}
export default AddRestaurants;
