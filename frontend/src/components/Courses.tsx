import React from 'react';

const coursesData = [
    {
        title: 'JavaScript Essentials',
        description: 'Learn the basics of JavaScript, from variables to DOM manipulation.',
        image: 'https://i.pinimg.com/736x/21/54/62/2154620d5f381cc5f7cd9fb458b3a718.jpg',
        duration: '4 weeks',
    },
    {
        title: 'React Fundamentals',
        description: 'Dive into React basics and build interactive UIs efficiently.',
        image: 'https://i.pinimg.com/736x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg',
        duration: '5 weeks',
    },
    {
        title: 'Advanced CSS Techniques',
        description: 'Master CSS for responsive, adaptive, and interactive designs.',
        image: 'https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306.jpg',
        duration: '3 weeks',
    },
];

export default function Courses() {
    return (
        <div className="p-6 mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white">
    
            {coursesData.map((course, index) => (
                <div key={index} className="course-card rounded-lg  p-4 bg-[#f9f6f1] box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; flex flex-col items-start gap-2 transition hover:shadow-xl box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;">
                    <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md" />
                    
                    <h3 className="text-sm font-semibold text-gray-800">{course.title}</h3>
                    <p className="text-xs text-gray-600">{course.description}</p>
                    
                    <div className="mt-2 text-xs text-gray-500">{course.duration}</div>
                    
                    <button className="mt-3 text-xs font-medium bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                        Enroll Now
                    </button>
                </div>
            ))}
        </div>
    );
}
