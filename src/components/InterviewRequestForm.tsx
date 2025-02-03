import React, { useState } from 'react';
import { Profile } from '../types';

export function InterviewRequestForm() {
  const [profile, setProfile] = useState<Profile>('frontend');

  const profiles: Profile[] = ['android', 'backend', 'frontend', 'fullstack'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle interview request submission
  };

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Request an Interview</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Profile
          </label>
          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value as Profile)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {profiles.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Request Interview
        </button>
      </form>
    </div>
  );
}