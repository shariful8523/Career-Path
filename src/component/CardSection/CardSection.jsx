import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CardSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('JsonFile.json') 
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-4">
            {/* Heading */}
            <h2 className="text-3xl mt-6 text-zinc-500 font-bold text-center mb-6">Our Services</h2>
            
            {/* Cards Section */}
            <div className="grid w-[1000px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-md shadow p-3 text-sm flex flex-col items-center"
                        data-aos="zoom-in" 
                    >
                        <img
                            src={item.image}
                            alt={item.serviceName}
                            className="w-[300px] h-[200px] object-cover rounded mb-2"
                        />
                        <h3 className="text-base font-semibold">{item.serviceName}</h3>
                        <p className="text-gray-600 text-xs">Category: {item.category}</p>
                        <p className="text-gray-800 font-medium text-sm">{item.pricing}</p>
                        <p className="text-gray-700 text-xs">Counselor: {item.counselorName}</p>
                        <p className="text-yellow-500 text-sm">Rating: {item.rating} ★</p>
                        <NavLink 
                        to={`/LearnMore/${item.id}`}
                            className="text-blue-500 hover:underline mt-1 text-xs"
                        >
                            Learn More
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
