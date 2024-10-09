import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Dashboard from "./components/Dashboard"
import Test from './components/Test';

function App() {
    return (
        <div>
            <Dashboard />
        </div>
    )
}

createRoot(document.getElementById('app')).render(<Dashboard />)