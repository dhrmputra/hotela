import React from "react";
import { createRoot } from "react-dom/client";
import '../css/app.css';

const container = document.getElementById("login");
const error = container?.dataset.error;
const csrf = container?.dataset.csrf;

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login Sistem
        </h1>
        <p className="text-center text-gray-500 mb-6">  
          Sistem Manajemen Hotel
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form method="POST" action="/login" className="space-y-4">
          <input type="hidden" name="_token" value={csrf} />

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Hotel Management System
        </p>
      </div>
    </div>
  );
}

if (container) {
  createRoot(container).render(<Login />);
}