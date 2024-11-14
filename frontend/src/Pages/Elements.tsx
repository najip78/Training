import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


export default function Dashboard() {
  
  return (
    <>
    <Header/>
        <Link to="/">
        <button className=" hover:bg-black text-gray-800 font-bold py-2 px-4 rounded"> ......</button>
       
      </Link>
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/7 -100 p-4  ml-[2%] border-r rounded box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; ">
        <h2 className="text-lg font-bold mb-4">Browse Components</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded flex  gap-2 items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
           <a href="#introduction">Introduction</a>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded flex  gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
            <a href="#grid-system">Grid System</a>
          </li>
          <li className="hover:bg-gray-200 p-2 flex  gap-2 items-center  rounded">
           
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
          <a href="#ui-elements">UI Elements</a>
          </li>
          <li className="hover:bg-gray-200 p-2 flex  gap-2 items-center rounded">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
          <a href="#utilities">Utilities</a>
          </li>
          <li className="hover:bg-gray-200 p-2 flex  gap-2 items-center rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
           
            <a href="#forms">Forms</a>
            
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/5 bg-white p-8">
        <h1 className="text-2xl font-bold">Form Elements</h1>
        <p className=" mt-20  font-normal text-2xl text-gray-500 ">
          Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
        </p>
        <div className="mt-6 p-4 bg-gray-50 border rounded">
          <h2 className="font-semibold text-lg">Input Box</h2>
          <p className="text-gray-600 mb-4">A basic form control with disabled and readonly mode.</p>
          <div className="space-y-4">
            <input type="text" className="border p-2 w-full rounded" placeholder="Input box" />
            <textarea className="border p-2 w-full rounded" placeholder="Textarea"></textarea>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/5 border-r rounded p-4">
        <h2 className="text-lg font-bold mb-4">On This Page</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-500"><a href="#input-box">Input Box</a></li>
          <li className="hover:text-blue-500"><a href="#validation-state">Validation State</a></li>
          <li className="hover:text-blue-500"><a href="#checkboxes">Checkboxes</a></li>
          <li className="hover:text-blue-500"><a href="#radios">Radios</a></li>
          <li className="hover:text-blue-500"><a href="#switches">Switches</a></li>
          <li className="hover:text-blue-500"><a href="#select-menu">Select Menu</a></li>
          <li className="hover:text-blue-500"><a href="#range">Range</a></li>
          <li className="hover:text-blue-500"><a href="#file-browser">File Browser</a></li>
          <li className="hover:text-blue-500"><a href="#colorpicker">Colorpicker</a></li>
        </ul>
      </aside>
    </div>
    </>
  );
}
