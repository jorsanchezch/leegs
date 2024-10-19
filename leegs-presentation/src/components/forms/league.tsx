// components/LeagueForm.tsx
import Toggle from 'components/toggle';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLeague, setLoading, setError } from 'store/slices/league';

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="sport" className="block text-sm font-medium text-gray-700">Sport</label>
        <select
          id="sport"
          name="sport"
          value={formData.sport}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a sport</option>
          {/* Add sport options here */}
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="is_active"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
          className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">Active</label>
      </div>

      <Toggle 
        isChecked={formData.is_recurrent} 
        id="is_recurrent" 
        name="is_recurrent" 
        label="Recurrent" 
      />

      <div>
        <button type="submit" className="button">
          Create League
        </button>
      </div>
    </form>
  );
};

export { LeagueForm };