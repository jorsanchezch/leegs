import React, { useState } from 'react';

const OccurrenceForm: React.FC = () => {
    const [leagueOccurrence, setLeagueOccurrence] = useState({
        name: '',
        description: '',
        date: null,
        isRecurrent: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={leagueOccurrence.name} onChange={handleInputChange} />
            <textarea name="description" value={leagueOccurrence.description} onChange={handleInputChange} />
            <input type="date" name="date" value={leagueOccurrence.date} onChange={handleInputChange} />
            <input type="checkbox" name="isRecurrent" checked={leagueOccurrence.isRecurrent} onChange={handleInputChange} />
            <button type="submit">Create League Occurrence</button>
        </form>
    );
};