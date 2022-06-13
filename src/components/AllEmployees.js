import React, { useEffect, useState } from 'react';


const AllEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [searched, setSearched] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployees(data);
                setSearched(data);
            })
    }, [])

    const handleSearchbyName = (event) => {
        event.preventDefault();
        const searchWord = event.target.search.value;
        const filtered = employees.filter(e => e.name.includes(searchWord));
        setEmployees(filtered);
        event.target.reset();
    };
    return (
        <div>
            <div className='w-full my-4'>
                <form onSubmit={handleSearchbyName}>
                    <div className='px-3 inline-block'><input type="text" placeholder="Type here" name='search' class="input input-bordered w-full max-w-xs" /></div>
                    <input className='btn btn-secondary' type="submit" value="Search" />
                </form>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((e, index) => <tr key={e.id}>
                                <th>{index + 1}</th>
                                <td>{e.name}</td>
                                <td>{e.address.city}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmployees;