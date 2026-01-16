'use client';

import { useSupabase } from "@/core/providers";

export default function TestPage() {
  const { user, session, isLoading } = useSupabase();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Test Page</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Authentication Status:</h2>
          <p>User: {user ? 'Authenticated' : 'Not authenticated'}</p>
          <p>Session: {session ? 'Active' : 'Inactive'}</p>
        </div>
        
        {user && (
          <div>
            <h2 className="text-lg font-semibold">User Info:</h2>
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}
        
        {session && (
          <div>
            <h2 className="text-lg font-semibold">Session Info:</h2>
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}