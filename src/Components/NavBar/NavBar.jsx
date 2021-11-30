import React, {useState, useEffect} from 'react'
import "./NavBar.css";

const NavBar = (props) =>{
    let userId = props.Id

    const[anon, setAnon] = useState(true);
    const[seller, setSeller] =useState(false);
    const[buyer, setBuyer] =useState(false);

    useEffect(()=>{
        let loggedIn = props.loggedIn
        checkPageType(loggedIn)
    }, [props])

    const logoutStateToggle=()=>{
        setAnon(true)
        setSeller(false)
    }

    const onClickLogout=()=>{
        props.logout();
        logoutStateToggle();
    }

    const checkPageType=(loggedIn)=>{
        if(loggedIn === false ){
            setAnon(true);
            setSeller(false);
            setBuyer(false)

        }
        if(loggedIn === true){
            if(props.status === false){
                setBuyer(true);
                setSeller(false);
                setAnon(false);
                }
            else{
                setBuyer(false);
                setSeller(true);
                setAnon(false);
                }
            }
    }
    let editProfileURL = "/profile/edit/" + userId
    let sellerURL = "/Seller/" + userId
    return ( 
        <> 
        <div className="nav-bar">
            <div className="col-1">
                
            </div>
            <div className="col-4">
            </div>
            <div className="col-6 nav-links">
            <span> <a href="/"> Home </a> </span>
            <span> <a href="/store"> Store </a> </span>
                {anon ? <span>|  <a href="/login"> Login </a> </span> :null}
                {anon ? <span> |  <a href="/register"> Register </a> </span>:null}
                {seller ? <span>|  <a href="/profile/edit/{userid}"> Edit Profile </a> </span>: null}
                {seller ? <span>|  <a href={sellerURL}> Seller Menu </a> </span>: null}
                {buyer ? <span>|  <a href={editProfileURL}> Edit Profile </a> </span>: null}
                {seller ? <span>|  <a href="/cart">Cart</a></span>:null}
                {buyer ? <span>|  <a href="/cart">Cart</a></span>:null}
                {seller ? <span>|  <a href="/" onClick={onClickLogout}> Logout </a></span>: null}
                {buyer ? <span>|  <a href="/" onClick={onClickLogout}> Logout </a></span>: null}
            </div>
            <div className="col-1"></div>
        </div>
        </>
     );
}

export default NavBar;