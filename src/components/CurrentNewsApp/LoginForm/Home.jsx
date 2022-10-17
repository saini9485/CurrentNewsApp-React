import React from "react";
import './Login.css';
function Home() {
    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="Home-Container">
            <h2>Congratulation To OurPage</h2>
             <div className="HomePageImage">
            <img src="/photo.jpeg" alt ="image"/>
            </div>
            <h3>Welcome To  {localStorage.getItem('Fullname')} </h3>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
           
        </div>
    );
}
export default Home;