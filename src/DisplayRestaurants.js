import React from 'react';
import data from './data/data.json';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from 'react-masonry-component';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

const masonryOptions = {
    transitionDuration: 0
};

class DisplayRestaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restlist: [],

        }
    }

    fetchData = () => {
        try {
            const restlist = localStorage.getItem('added-items')
            this.setState({
                restlist: JSON.parse(restlist)
            });
        } catch{
            data.map((data, key) => {
             
                this.setState({
                    restlist: data.restaurants
                });


            })
        }
    }

    componentDidMount() {

        this.fetchData()

    }

    render() {

        const childElements = this.state.restlist.map((m, k) => {

            return (
                <>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {m.name}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flatcard">
                                <div className="post" style={{ backgroundColor: 'yellow' }}>

                                    <div className="image" >
                                        <div className="blur-bg" style={{ backgroundImage: 'url(' + m.photograph + ')' }}>
                                            <img src={m.photograph} style={{ "height": "500px" }} alt className="img-responsive"  ></img>

                                        </div>

                                    </div>

                                    <h2 className='hello' >{m.name}</h2>
                                    <h4 className='cuisine'><i> {m.cuisine_type} </i></h4>
                                    <div className='location'> Location - {m.neighborhood}</div>
                                    <div className='address'><i>{m.address}</i></div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>



                </>
            )

        })

        return (
            <>

                <div style={{ backgroundColor: 'yellow' }}>
                    <h1>Hi user ! please check your favourite restaurants</h1>

                </div>
                <Accordion>
                    {childElements}
                </Accordion>

            </>
        )
    }
}
export default DisplayRestaurants;
