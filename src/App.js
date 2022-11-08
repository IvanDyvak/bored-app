import React, { useState, useEffect} from "react";
import './App.css';
import {useAppData} from "./context/user-hooks";

function App() {

    const {
        data,
        isDataLoading,
        selected,
        handleChange,
        handleSubmit,
    } = useAppData();


    useEffect(() => {
        handleSubmit();
    }, [selected]);




    return (
    <div className="App">
      <header className="App-header">
        <img src="images/logo.png" className="logo-img" alt="logo" />
      </header>
        <form
            onSubmit={(e) => {handleSubmit(); e.preventDefault();}}
            // onSubmit={handleSubmit}
        >
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
            <input type="submit" value="Get More" className="init-btn"/>
        </form>
        {/*{data.map(({activity}) =>*/}
        {/*    <div className="offer" key={Math.random()}>*/}
        {/*        <p>{activity}</p>*/}
        {/*    </div>*/}
        {/*)}*/}
        <div className="offer" key={Math.random()}>
                <p>{data.activity}</p>
            </div>


    </div>
  );
}

export default App;
