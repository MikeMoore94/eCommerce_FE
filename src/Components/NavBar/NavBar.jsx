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
            <section id="navBar">
                <div class= "navBar container"></div>
                    <div>
                    
                        <span> <a href="/" class="cta"> Home </a> 
                            {anon ? <span>|  <a href="/login" class="cta"> Login </a> </span> :null}
                            {anon ? <span> |  <a href="/register" class="cta"> Register </a> </span>:null}
                            {seller ? <span>|  <a href="/profile/edit/{userid}" class="cta"> Edit Profile </a> </span>: null}
                            {seller ? <span>|  <a href={sellerURL} class="cta"> Seller Menu </a> </span>: null}
                            {buyer ? <span>|  <a href={editProfileURL} class="cta"> Edit Profile </a> </span>: null}
                            {seller ? <span>|  <a href="/cart" class="cta">Cart</a></span>:null}
                            {buyer ? <span>|  <a href="/cart" class="cta">Cart</a></span>:null}
                            {seller ? <span>|  <a href="/" onClick={onClickLogout} class="cta"> Logout </a></span>: null}
                            {buyer ? <span>|  <a href="/" onClick={onClickLogout} class="cta"> Logout </a></span>: null}
                        </span>
                    </div>
            </section>
        </>
     );
}

export default NavBar;