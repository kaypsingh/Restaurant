import React from 'react';
import data from './data/data.json';
import { Card } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Modal } from 'antd';

class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rest: [],
            edit: 0,
            height: window.innerHeight,
            width: window.innerWidth,
            modal: 0,
            submit: 0,
            newMenu: [],
            value1: 'menu items string'
        }
    }


    modalCond = () => {
        this.setState({ modal: 1 })
    }

    handleChange = (event) => {
        this.setState({ value1: event.target.value });
    }

    handleSubmit = (event) => {
        console.log(this.state.value1)
        console.log(this.state.newMenu)
        var i = this.state.value1

        var k = this.state.newMenu.concat(i)

        this.setState({ submit: 1, newMenu: k } , () => {
            console.log(this.state.newMenu)
        })

        event.preventDefault();
    }

    PopupOnOff = (filteredPerson) => {

        this.setState({ modal: 1, filteredPerson: filteredPerson })

    }


    closeModal = () => {
        this.setState({ modal: 0 })
    }

    modalShow = () => {

        if (this.state.modal === 1) {

            return (
                <>

                    <div id="myModal" className="modal" style={{ height: window.innerHeight }}>

                        <div className="modal-content">
                            <span className="close" onClick={this.closeModal}>&times;</span>
                            <div>
                                <img src={this.state.filteredPerson.photograph} />

                            </div>

                            <div>
                                <h1>Restaurant Name : {this.state.filteredPerson.name}</h1>
                            
                                <div style={{ backgroundColor: 'yellow' }}>
                                    <Card >
                                        <h1>Add new Menu</h1>
                                        <form onSubmit={this.handleSubmit}>
                                            <label>

                                                <textarea value={this.state.value1} onChange={this.handleChange} />

                                            </label>
                                            <br></br>
                                            <input type="submit" value="Submit" />
                                            {/* <Link to="/AddRestaurants">Want to add a new restaurant ? </Link> */}

                                            <br></br>
                                           
                                           <h2>
                                              

                                               
                                    {this.state.submit === 1 ?  this.state.newMenu : ''}  

                                 
                                     
                                      
                                      </h2>


   

                                      
                                        </form>
                                    </Card>
                                </div>


                            </div>





                        </div>

                    </div>

                </>
            )
        }
    }

    fetchData = () => {

// console.log(localStorage.length)
        if(localStorage.length === 0){
            console.log('10')
            this.setState({
                rest: data[0].restaurants
            } );

                localStorage.setItem('added-items', JSON.stringify(data[0].restaurants));
           


        } else{

            const rest = localStorage.getItem('added-items')
            // console.log('1')
            this.setState({
                rest: JSON.parse(rest)
            } );
                // localStorage.setItem('added-items', JSON.stringify(data[0].restaurants));
         
        }
        // console.log(data[0].restaurants)
        // console.log(localStorage.getItem('added-items').length)
        // localStorage.setItem('added-items', JSON.stringify(data[0].restaurants));

        // try {
        //     const rest = localStorage.getItem('added-items')
        //     console.log('1')
        //     this.setState({
        //         rest: JSON.parse(rest)
        //     });
        // } catch {
        //     console.log('2')
        //     this.setState({
        //         rest: data[0].restaurants
        //     });
            // localStorage.setItem('added-items', JSON.stringify(data[0].restaurants));
        
    }

    edithandlr = (j) => {
        // console.log(j)
        // console.log(this.state.rest[j].name)

    }

    buttonhandlr = () => {
        this.setState({ edit: 1 })
    }


    componentDidMount() {

        this.fetchData()

    }

    retrieve = (m, k) => {
        this.setState({ person: m })

    }

    render() {

        var bimg = 'https://wallpapercave.com/wp/wp1874155.jpg'
        const { k } = this.state;
        // const person = k !== null ? this.state.rest[k] : {};




        return (
            <>

                <div className="bg" style={{ backgroundImage: 'url(' + bimg + ')', width: this.state.width, height: this.state.height }}>
                    <h1 style={{ color: 'white', backgroundColor: 'black', width: 300 }}>List of Restaurants</h1>
                    {this.state.rest.map((m, k) => {

                        const newTo = {
                            pathname: `/EditRestaurants/${k}`

                        };


                        return (
                            <>
                                <div onClick={() => this.PopupOnOff(m, k)}
                                    style={{ backgroundColor: 'yellow', width: 300 }}>
                                    <div style={{ backgroundColor: '' }} className='restl' >{m.name} {' '} {this.state.edit === 1 ?
                                      
                                        <Link to={newTo}>edit </Link>
                                   
                                        : ''}</div>

                                </div>
                            </>
                        )

                    })}



                    {/* <h3>Want to add a new restaurant ?</h3> */}
                    <button style={{ backgroundColor: 'green' }}>

                        <Link to="/AddRestaurants">add restaurant  </Link>

                    </button>

                    <br></br>

                    <button onClick={this.buttonhandlr} style={{ backgroundColor: 'red' }}>
                        Want to edit an existing one ?
  </button>
                </div>

                {this.modalShow()}
            </>
        )
    }
}
export default Restaurants;
