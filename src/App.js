import React from "react";
import './App.css';
import {useAppData} from "./context/user-hooks";

function App() {

    const {
        isDataLoading,
        selected,
        handleChange,
        handleSubmit,
        activities,
    } = useAppData();
    const {activity, type, price} = activities;


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
                <label htmlFor="participants">Number of participants: </label>
                <select  id="participants"
                         name="participants"
                         defaultValue={selected}
                         onChange={handleChange}>
                    <option value="0">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                { selected === 0 ?
                    <input  type="submit" value="Check Now" className="init-btn disabled" /> :
                    <input style={{ backgroundImage: `url("images/btn-bg.jpg")` }} type="submit" value={`${isDataLoading ? 'Loading...' : 'Check Now'}`} className={`${isDataLoading ? 'init-btn loading' : 'init-btn'}`} />
                }
            </form>
            { Object.keys(activities).length !== 0 &&
                <div className="offer">
                    <h2 className="activity">{activity}</h2>
                    <p className="type">Type of activity: {type}</p>
                    <p className="price">Price: {price}$</p>
                </div>
            }
        </div>
    </div>
  );
}

export default App;
