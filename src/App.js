import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWhtZWRLaGFsZWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhaG1lZC5raGFsZWQwMTMyQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTRmYWZmMmYtYjVjOS00OWI0LWI0ZWYtZmVmNmRjNGE5YWI4IiwianRpIjoiZTBkODE0OGMtOTc1Zi00ZWU1LWFlNjEtN2IzYjU4NDc0ZmQzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJleHAiOjE3MjIyNjY3NTAsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.5sjHwMLwnBNqpo51-31lAwHlsC2wmTtDOfy_uk48HUs';

axios.defaults.headers.common['content-type'] = 'multipart/form-data';

function App() {
    const [token, setToken] = useState(() => {
        const saved = localStorage.getItem("token");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    if (token === '') {
        return (
            <Login token={''} setToken={setToken} />
        )
    }

    return (
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );
}

export default App;
