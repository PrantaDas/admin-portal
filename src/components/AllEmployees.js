import React, { useEffect, useState } from 'react';


const AllEmployees = () => {
    const [employees, setEmployees] = useState([]);

    const [searched, setSearched] = useState("");


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployees(data);
            })
    }, [])


    return (
        <div>
            <div className='w-full my-4'>
                <div className='px-3 inline-block'><input onChange={(event) => {
                    setSearched(event.target.value)
                }} type="text" placeholder="Search Employee" name='search' class="input input-bordered input-secondary w-full max-w-2xl" /></div>
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
                            employees.filter((em) => {
                                if (searched === "") {
                                    return em
                                }
                                else if (em.name.toLowerCase().includes(searched.toLowerCase())) {
                                    return em
                                }
                            }).map((em,index) =><tr key={em.id}>
                                <th>{index + 1}</th>
                                <td>{em.name}</td>
                                <td>{em.address.city}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmployees;

