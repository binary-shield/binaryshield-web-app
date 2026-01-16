"use client";
import Link from "next/link";
import { useSupabase } from "@/core/providers";

export default function TodoAppPage() {
  const { user } = useSupabase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Todo Application
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          A simple and powerful todo application built with Next.js, Supabase,
          and React. Manage your tasks efficiently with full CRUD operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/todos"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Open Todo List
          </Link>

          {!user && (
            <Link
              href="/auth"
              className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl border border-gray-200"
            >
              Sign In
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Create Tasks</h3>
            <p className="text-gray-600">
              Easily add new todos with titles and descriptions
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Manage Progress</h3>
            <p className="text-gray-600">
              Mark tasks as complete and track your productivity
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🗑️</div>
            <h3 className="text-xl font-semibold mb-2">Delete Tasks</h3>
            <p className="text-gray-600">
              Remove completed or unwanted tasks effortlessly
            </p>
          </div>
        </div>

        {user && (
          <div className="mt-12 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800">
              👋 Welcome back, {user.email}! You're already signed in.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

