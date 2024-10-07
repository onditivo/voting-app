import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getOptions = async (pollId) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/poll/${pollId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching options:', error);
        throw error;
    }
};

export const getVoteShare = async (pollId) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/poll/${pollId}/votes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vote share:', error);
        throw error;
    }
};

export const saveVote = async (pollId, voteCast) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/poll/${pollId}/vote`, {voteCast});
        return response.data;
    } catch (error) {
        console.error('Error saving a vote:', error);
        throw error;
    }
};