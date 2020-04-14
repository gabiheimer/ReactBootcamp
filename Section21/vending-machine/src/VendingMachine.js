import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component{
    constructor(props){
        super(props);
        this.state = {
            inVendingMachine: true
        }
    }

    render(){
        return(
            <div className='VendingMachine'>
                <div className='VendingMachine-title'>
                    <h1>Hello I am vending machine, what would you like to eat?</h1>
                </div>
                <div className='VendingMachine-links'>
                    <NavLink exact className='link' to = '/soda'>SODA</NavLink>
                    <NavLink exact className='link' to = '/chips'>CHIPS</NavLink>
                    <NavLink exact className='link' to = '/sardines'>SARDINES</NavLink>
                </div>
            </div>
        )
    }
}

export default VendingMachine;