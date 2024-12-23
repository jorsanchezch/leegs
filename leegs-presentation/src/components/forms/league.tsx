import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLeague, setLoading, setError } from 'store/slices/league';
import { Input, Select, Toggle } from 'components';

const LeagueForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    owner: 0, // You might want to get this from the current user session
    sport: 0,
    is_active: true,
    is_recurrent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      // Here you would typically make an API call to save the league
      // For this example, we'll just update the Redux state
      dispatch(setLeague(formData));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('Failed to create league'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset>
        <div>
          <Input 
            label="Name"
            name="leagueName"
          />
        </div>

        <div>
          <label htmlFor="description" >Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
        <Select 
            options={[
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
            ]}  
            />
        </div>

        <div>
          <Select 
            options={[
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
            ]}  
            />
        </div>

        <Toggle 
          defaultState={formData.is_recurrent} 
          label="Recurrent" 
        />
      </fieldset>


      <div>
        <button type="submit" className="button">
          Create League
        </button>
      </div>
    </form>
  );
};

export { LeagueForm };