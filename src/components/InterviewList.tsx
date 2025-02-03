import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { InterviewRequest } from '../types';
import { InterviewDetails } from './InterviewDetails';

const mockInterviews: InterviewRequest[] = [
  {
    id: '1',
    candidateId: '1',
    profile: 'frontend',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

export function InterviewList() {
  const [selectedInterview, setSelectedInterview] = useState<InterviewRequest | null>(null);

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Interview Requests</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {mockInterviews.map((interview) => (
            <li 
              key={interview.id} 
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedInterview(interview)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {interview.profile.toUpperCase()} Interview
                    </p>
                    <div className="flex space-x-4 mt-1">
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(interview.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(interview.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  interview.status === 'completed' 
                    ? 'bg-green-100 text-green-800'
                    : interview.status === 'assigned'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {interview.status.toUpperCase()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedInterview && (
        <InterviewDetails
          interview={selectedInterview}
          onClose={() => setSelectedInterview(null)}
        />
      )}
    </>
  );
}