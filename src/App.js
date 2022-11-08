import React, { useState, useEffect} from "react";
import './App.css';
import {useAppData} from "./context/user-hooks";

function App() {

    const {
        data,
        isDataLoading,
        selected,
        setSelected,
        handleChange,
        handleSubmit,
    } = useAppData();


    useEffect(() => {
        handleSubmit();
    }, [setSelected]);

    const {activity, type, price} = data;

    //
    // if (!data.length) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Sorry, there's no
    //     info</div>

    return (
    <div className="App">
        <div className="header-wrap">
            <header className="header">
                <img src="images/logo.png" className="logo-img" alt="logo" />
            </header>
        </div>
        <div className="container">
            <div className="description">
                <h4>Feeling bored and don't know what to do? Discover tons of activities in the blink of an eye. Find something suitable for yourself or even get your friends involved. No restrictions. Click the button below as many times as you wish until you run into something worth for you.</h4>
            </div>
            <form
                onSubmit={(e) => {handleSubmit(); e.preventDefault();}}>
                <label htmlFor="participants">Select a number of participants: </label>
                <select  id="participants"
                         name="participants"
                         defaultValue={selected}
                         onChange={handleChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input style={{ backgroundImage: `url("images/btn-bg.jpg")` }} type="submit" value={`${isDataLoading ? 'Loading...' : 'Check Now'}`} className={`${isDataLoading ? 'init-btn loading' : 'init-btn'}`} />
            </form>
            <div className="offer">
                { selected === 0 ?
                    null :
                    <>
                        <h2 className="activity">{activity}</h2>
                        <p className="type">Type of activity: {type}</p>
                        <p className="price">Price: {price}$</p>
                    </>
                }
            </div>
        </div>
    </div>
  );
}

export default App;
