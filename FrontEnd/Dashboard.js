import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1>Welcome, {user ? user.username : 'Guest'}</h1>
            {/* add dashboard features  */}
        </div>
    );
};

export default Dashboard;
