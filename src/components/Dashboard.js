import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleanalytics } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-primary text-xl font-bold  pb-4'>Welcome To Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    <li><Link className='font-serif' to='/dashboard'><SiGoogleanalytics/> Analytics</Link></li>
                    <li><Link className='font-serif' to='/dashboard/employees'><FaUserFriends/> All Employees</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;