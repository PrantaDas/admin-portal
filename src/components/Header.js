import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (<p className='text-primary'>Loading...</p>)
    };

    const handleSignout = () => {
        signOut(auth);
    };

    const avatarName = user?.displayName?.substring(0, 1)

    const navitem = <>
        <li><Link className='font-bold' to='/dashboard'>Dashboard</Link></li>
        {
            user ? <li><Link className='font-bold' onClick={handleSignout} to='/login'>SignOut</Link></li> : <li className='font-bold'><Link to='/signup'>Login</Link></li>
        }
        {
            user && <li><Link to='/dashboard/myprofile'><div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-8 indicator">
                    <div class="text-md">{avatarName}</div>
                </div>
            </div>
            </Link></li>
        }
    </>
    return (
        <div class="navbar bg-base-100 sticky top-0 lg:px-12 lg:py-4 flex justify-center md:justify-between">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <Link to='/'><a class="btn btn-ghost normal-case text-xl" style={{ fontFamily: "Lobster,cursive" }}>adminPortal</a></Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navitem}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;