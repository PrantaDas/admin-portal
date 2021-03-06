import React from 'react';
import Typewriter from 'typewriter-effect'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='min-h-[70vh] sm:min-h-screen'>
            <div className=' '>
                <div className=' min-h-[95vh] flex flex-col justify-center items-center'>
                    <h1 className='text-primary font-bold font-mono text-3xl py-1'>Welcome 👋 To<br /><Typewriter
                        options={{
                            strings: ['Admin Portal'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                    <div className='p-3 flex justify-around gap-4'>
                        <div><Link to='/dashboard'><button className="btn btn-primary text-white font-bold ">Get Started</button></Link></div>
                        <div><Link to='/dashboard'><button className="btn btn-primary text-white font-bold ">Dashboard</button></Link></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;