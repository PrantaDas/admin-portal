import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
                    {/* {
                        !users && <>
                            <li><Link className='font-normal' to='/dashboard/myorder'><AiOutlineGift />My Order</Link></li>
                            <li><Link className='font-normal' to='/dashboard/addreview'><MdOutlineRateReview className='mt-1' />Add a Review</Link></li>
                        </>
                    }
                    <li><Link className='font-normal' to='/dashboard/myprofile'><CgProfile />My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link className='font-normal' to='/dashboard/makeadmin'><RiAdminLine />Make Admin</Link></li>
                            <li><Link className='font-normal' to='/dashboard/addproduct'><MdAddCircleOutline />Add Product</Link></li>
                            <li><Link className='font-normal' to='/dashboard/manageproduct'><MdOutlineEditRoad />Manage Products</Link></li>
                            <li><Link className='font-normal' to='/dashboard/manageorders'><RiListUnordered />Manage Orders</Link></li>
                        </>
                    } */}
                </ul>
            </div>
        </div>

    </div>
    );
};

export default Dashboard;