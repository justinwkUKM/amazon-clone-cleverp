import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import {auth} from "./firebase"

function Header() {
    // const[state,dispatch]
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
          auth.signOut();
        }
      };
    
    return (
        <nav className='header'>

            {/* logo on the left */}
            <Link to='/'>
                <img
                    className='header__logo'
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"></img>
            </Link>
            {/* searchbar */}
            <div className='header__search'>>
                <input className='header__searchInput'></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            {/* three links */}
            <div className="header__nav">
                {/* 1st link */}
                {/* <Link to='/login' className="header__link">
                    <div className="header__options">
                    <span className="header__optionsLineOne"> Hello </span>
                    <span className="header__optionsLineTwo"> Waqas </span>
                    </div>
                </Link> */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__options header_border">
                        <span className="header__optionsLineOne">Hello {user?.email},</span>
                        <span className="header__optionsLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to='/' className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne"> Returns </span>
                        <span className="header__optionsLineTwo"> & Orders </span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne"> Your </span>
                        <span className="header__optionsLineTwo"> Prime </span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        {/* number of items in the basket */}
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionsLineTwo header__basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>
            {/* basketicon with number */}


        </nav>
    )
}

export default Header
