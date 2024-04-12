import React, { useState } from 'react';
import Layout from 'components/layout';
import Card from 'components/card';

interface League {
  name: string;
  description: string;
  participants: string[];
  sport: string;
  date: Date | null;
  isRecurrent: boolean;
}

const LeagueCreationForm: React.FC = () => {
  const [league, setLeague] = useState<League>({
    name: '',
    description: '',
    participants: [],
    sport: '',
    date: null,
    isRecurrent: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setLeague({ ...league, [name]: value });
  };

  const handleAddParticipant = () => {
    setLeague({ ...league, participants: [...league.participants, ''] });
  };

  const handleParticipantChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLeague({
      ...league,
      participants: league.participants.map((participant, i) => (i === index ? value : participant)),
    });
  };

  const handleDateChange = (date: Date | null) => {
    setLeague({ ...league, date });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeague({ ...league, isRecurrent: event.target.checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('League creation form submitted:', league);
    // Submit form data to your backend here
  };

  return (
    <Layout>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <h2>Create a League</h2>
          <div>
            <label htmlFor="name">League Name:</label>
            <input type="text" id="name" name="name" value={league.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={league.description} onChange={handleInputChange} required />
          </div>
          <div>
            <button type="button" onClick={handleAddParticipant}>Add Participant</button>
            {league.participants.map((participant, index) => (
              <div key={index}>
                <label htmlFor={`participant-${index}`}>Participant {index + 1}:</label>
                <input type="text" id={`participant-${index}`} name={`participant-${index}`} value={participant} onChange={(e) => handleParticipantChange(index, e)} required />
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="sport">Sport:</label>
            <input type="text" id="sport" name="sport" value={league.sport} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="datetime-local" id="date" name="date" value={league.date?.toISOString().slice(0, 16)} onChange={(e) => handleDateChange(e.target.value ? new Date(e.target.value) : null)} />
          </div>
          <div>
            <label htmlFor="isRecurrent">
              <input type="checkbox" id="isRecurrent" name="isRecurrent" checked={league.isRecurrent} onChange={handleCheckboxChange} />
              Recurrent League
            </label>
          </div>
          <button type="submit">Create League</button>
        </form>
      </div>
    </Layout>
  );
};

export default LeagueCreationForm;
