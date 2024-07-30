'use client'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Dashboard = () => {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <aside className={`bg-white shadow-md p-4 fixed md:relative z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleSidebar}>
            <FaTimes className="text-xl" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="py-2"><a href="#" className="text-gray-700">Home</a></li>
            <li className="py-2"><a href="#" className="text-gray-700">Profile</a></li>
            <li className="py-2"><a href="#" className="text-gray-700">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button className="md:hidden" onClick={toggleSidebar}>
              <FaBars className="text-xl" />
            </button>
            <h1 className="text-xl font-bold ml-4">Dashboard</h1>
          </div>
          <button className='bg-[#facc15] py-2 px-4 rounded-lg' onClick={signOut}>Sign out</button>
        </header>
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome, {session?.user?.email}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Card 1</h3>
              <p>Content for card 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Card 2</h3>
              <p>Content for card 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Card 3</h3>
              <p>Content for card 3</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
