import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getOptions, saveVote } from '../services/apiService';
import PollResultComponent from './PollResultComponent';
import '../Poll.css';
import PollVariable from '../PollVariable.js';

const OptionsComponent = () => {
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState('');
    const [vote, setVote] = useState('');
    const [pollId, setPollId] = useState('1');
    const [toDashboard, setToDashboard] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
       fetchOptions();
    }, []);

    const fetchOptions = async () => {
        try {
            const data = await getOptions(pollId);
            setOptions(data.options);
            setQuestion(data.question)
        } catch (error) {
            console.error('Failed to fetch options', error);
        }
    };

    const handleSaveVote = async () => {
        PollVariable.toggleIsVotePage();
        PollVariable.pollId = pollId;
        PollVariable.vote = vote;

        navigate('/result');
    };

    const onOptionChange = e => {
        setVote(e.target.value)
    };

    function makeButton(opt) {
        return (
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        name="vote"
                        value={opt}
                        id={opt}
                        checked={vote === opt}
                        onChange={onOptionChange} /> {opt}
                </label>
            </div>
        );
    }

    return (
        <div>
            <h1>Dizplai</h1>
            <p>{question}</p>
            <form onSubmit={handleSaveVote}>
                <div>
                   {options.map(makeButton, this)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OptionsComponent;