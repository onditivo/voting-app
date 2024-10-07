import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import OptionsComponent from './components/OptionsComponent';
import PollResultComponent from './components/PollResultComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                  <Routes>
                    <Route path="/" element={ <OptionsComponent/> } />
                    <Route path="result" element={ <PollResultComponent/> } />
                  </Routes>
            </header>
        </div>
    );
}

export default App;