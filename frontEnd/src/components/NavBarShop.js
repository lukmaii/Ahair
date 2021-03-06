import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'
import { storage } from 'firebase';
import axios from 'axios'

class NavBarShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statename: localStorage.getItem('shopname') || "SignIn",
            displayMenu: false,
            // checkLogin: false,
            iconchange: "users icon",
            searchValue: 'null',
            isSignin: null
        };
        
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.logoutevent = this.logoutevent.bind(this)
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if (!token) this.setState({isSignin:false})
        else this.setState({isSignin:true})
    }

    showDropdownMenu = () => {
        // const checkLogin = this.state.checkLogin;
        if (this.state.isSignin) {
            this.setState({ displayMenu: true }, () => {
                document.addEventListener('click', this.hideDropdownMenu);
            });
        }
    }

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    logoutevent = () => {
        this.setState({ isSignin: false });
        // this.props.history.push('/home')
        // localStorage.removeItem('token')
        // localStorage.removeItem('username')
        // localStorage.removeItem('shopname')
        // this.setState({ checkLogin: false });
        // this.setState({ statename: 'SignIn' });
        localStorage.clear();
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div class="wrapnavbar">
                <Link className="link" to="/homeshop">
                    <img src={logo} class="ui small image" alt="Home" />
                </Link>

                <div className="leftGroup">
                    
                    {
                        this.state.isSignin ?
                            (
                                <div>
                                    <Link className="link" to='/noticeforshop'>
                                        <button className="iconBt"><IoIosNotifications color='white' size='2em' /></button>
                                    </Link>
                                </div>
                            )
                            : null
                    }

                    <Link className="link" to='/signin' style={{display:this.state.isSignin? "none" : "flex"}}>
                        <button
                            class="Signin"
                            onClick={this.showDropdownMenu}>
                            {
                                this.state.checkLogin ? <i className='user circle icon'></i>
                                    : <i className="users icon" size='2em'></i>
                            }
                            <span>{this.state.statename}</span>
                        </button>
                    </Link>
                        <button
                            class="Signin"
                            style={{display:this.state.isSignin? "flex" : "none"}}
                            onClick={this.showDropdownMenu}>
                            {
                                this.state.checkLogin ? <i className='user circle icon'></i>
                                    : <i className="users icon" size='2em'></i>
                            }
                            <span>{this.state.statename}</span>
                        </button>
                    {this.state.displayMenu ? (
                        <ul>
                            <a href={localStorage.getItem('username') ? "/profilecustomer" :"/profileshop"} >Profile</a>
                            <a href="/editshopinformation" >Shop Information</a>
                            <a href="/home" onClick={this.logoutevent}>Log Out</a>
                        </ul>
                    ) :
                        (
                            null
                        )
                    }

                </div>
            </div>
        );
    }
}

export default NavBarShop;