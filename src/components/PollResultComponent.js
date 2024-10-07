import React, { useState, useEffect } from 'react';
import { getVoteShare, saveVote } from '../services/apiService';
import '../Poll.css';
import PollVariable from '../PollVariable.js';

const PollResultComponent = () => {
    const [votes, setVotes] = useState([]);
    const [pollId, setPollId] = useState('1');

    useEffect(() => {
       storeVotes();
    }, []);

    const storeVotes = async () => {
        try {
            const data = await saveVote(PollVariable.pollId, PollVariable.vote);
            setVotes(data);
        } catch (error) {
            console.error('Failed to save vote', error);
        }
    };

    const fetchVoteShare = async () => {
        try {
            const data = await getVoteShare(pollId);
            setVotes(data);
        } catch (error) {
            console.error('Failed to fetch vote result', error);
        }
    };

    function makeText(opt) {
        return (
            <div className="radio">
                <label> {opt.option} {opt.count} </label>
            </div>
        );
    }

    return (
        <div>
            <h1>Dizplai</h1>
            <div>
                <p>Thank you for your response</p>
                <div>
                   {votes.map(makeText, this)}
                </div>
            </div>
        </div>
    );
};

export default PollResultComponent;