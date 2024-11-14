import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useMytrdata from '../store/Tr';
import goodluck from '../store/goodLuck';
import axios from 'axios';

export default function Home() {
    // State for storing data, loading state, and errors
    const [data, setData] = useState<any[]>([]); // Assuming data is an array
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);

    // Fetching data with async/await inside useEffect
    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await axios.get('http://api.example.com/data');
                if (!response) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.data();
                setData(data);
            } catch (error: any) {
                setError(error.message || 'Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Render loading state or error state if necessary
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const { message } = goodluck();
    const { name, age } = useMytrdata();

    return (
        <>
            <Header />
            <p>{name}</p>
            <p>{age}</p>

            <div className="wrapper flex flex-col lg:flex-row min-h-screen bg-[#ffff] text-gray-800">
                <main className="landingpage flex flex-1 flex-col justify-center items-center py-12 px-8 lg:px-16">
                    <img
                        className="rounded-lg w-[20%] max-h-96 object-cover mb-8 transition-transform transform hover:scale-105"
                        src="https://i.pinimg.com/736x/3a/73/67/3a7367b388117f561c0802ac78ae0d72.jpg"
                        alt="Learning Banner"
                    />
                    <h1 className="text-5xl md:text-2xl font-bold mb-4 text-[#000000] text-center">
                        Skills for your present <span className="text-[#3675fd]">and your future</span>. Get started with us
                    </h1>
                    <h1>{message}</h1>

                    <p className="text-md text-gray-400 mb-8 text-center max-w-2xl">
                        Explore a variety of courses designed to enhance your skills and help you succeed. Join millions of learners and trusted companies worldwide.
                    </p>

                    <button className="bg-[#ff3c00] text-white px-3 font-bold py-2 rounded hover:bg-[#ff571c] transition-colors">
                        Get Started
                    </button>

                    <p className="mt-6 text-gray-500 text-sm">
                        Clone this project on{' '}
                        <a href="https://github.com/AaronDunbar/react-landing-page" className="text-blue-500 underline">
                            GitHub
                        </a>
                        . Customize the content and style to make it your own!
                    </p>

                    {/* Displaying fetched data */}
                    <div className="mt-12 w-full">
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index} className="course-item mb-8">
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-500">{item.description}</p>
                                    <img
                                        className="w-32 h-32 object-cover mt-4"
                                        src={item.imageUrl}
                                        alt={item.title}
                                    />
                                    <p className="mt-2 text-gray-600">Price: ${item.price}</p>
                                </div>
                            ))
                        ) : (
                            <p>No courses available at the moment.</p>
                        )}
                    </div>

                    <div className="gallery flex gap-4 mt-8">
                        <img
                            className="w-28 h-28 rounded-lg shadow-md transform transition-transform hover:scale-105"
                            src="https://i.pinimg.com/736x/27/77/24/277724b15a681f408c199f0f29659588.jpg"
                            alt="Course Sample"
                        />
                        <img
                            className="w-28 h-28 rounded-lg shadow-md transform transition-transform hover:scale-105"
                            src="https://i.pinimg.com/736x/27/77/24/277724b15a681f408c199f0f29659588.jpg"
                            alt="Course Sample"
                        />
                    </div>

                    <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-700 mt-10">
                        Trusted by over <span className="text-[#3b82f6]">16,000</span> companies and millions of learners worldwide
                    </h2>
                </main>
            </div>
        </>
    );
}
