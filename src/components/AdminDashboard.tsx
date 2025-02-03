import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import { InterviewRequest, InterviewerAvailability, Profile } from '../types';

const mockInterviews: InterviewRequest[] = [
  {
    id: '1',
    candidateId: '1',
    profile: 'frontend',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

const mockAvailabilities: InterviewerAvailability[] = [
  {
    id: '1',
    interviewerId: '1',
    date: new Date().toISOString(),
    timeSlots: ['10:00', '14:00', '16:00'],
    profile: 'frontend',
  },
];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'requests' | 'availability'>('requests');

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'requests'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Interview Requests
          </button>
          <button
            onClick={() => setActiveTab('availability')}
            className={`py-4 px-6 text-sm font-medium ${
              activeTab === 'availability'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Interviewer Availability
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'requests' ? (
          <InterviewRequests interviews={mockInterviews} />
        ) : (
          <InterviewerAvailabilities availabilities={mockAvailabilities} />
        )}
      </div>
    </div>
  );
}

function InterviewRequests({ interviews }: { interviews: InterviewRequest[] }) {
  return (
    <div className="space-y-6">
      {interviews.map((interview) => (
        <div key={interview.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {interview.profile.toUpperCase()} Interview Request
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
            <div className="flex space-x-3">
              <button
                onClick={() => {}}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Assign Interviewer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InterviewerAvailabilities({ availabilities }: { availabilities: InterviewerAvailability[] }) {
  return (
    <div className="space-y-6">
      {availabilities.map((availability) => (
        <div key={availability.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {availability.profile.toUpperCase()} Interviewer
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(availability.date).toLocaleDateString()}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {availability.timeSlots.map((slot) => (
                  <span
                    key={slot}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}