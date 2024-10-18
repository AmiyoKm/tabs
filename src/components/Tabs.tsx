import React, { useState } from 'react'
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import Card from './Card';
import { GoProjectSymlink } from 'react-icons/go';
import { SiCoursera } from 'react-icons/si';
import About from './About';
import Contact from './Contact';


const tabs = [
    {
      id: "home",
      icon: <FaHome />,
      label: "Home",
      content: (
        <div className="flex flex-wrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="Amazing Card"
              description="This is a cool-looking card component using React and Tailwind CSS."
              image="https://via.placeholder.com/400x300"
            />
          ))}
        </div>
      ),
    },
    {
      id: "about",
      icon: <FaInfoCircle />,
      label: "About",
      content: <About />,
    },
    {
      id: "projects",
      icon: <GoProjectSymlink />,
      label: "Projects",
      content: (
        <div className="flex flex-wrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="Amazing Card"
              description="This is a cool-looking card component using React and Tailwind CSS."
              image="https://via.placeholder.com/400x300"
            />
          ))}
        </div>
      ),
    },
    {
      id: "courses",
      icon: <SiCoursera />,
      label: "Courses",
      content: (
        <div className="flex flex-wrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              title="Amazing Card"
              description="This is a cool-looking card component using React and Tailwind CSS."
              image="https://via.placeholder.com/400x300"
            />
          ))}
        </div>
      ),
    },
    {
      id: "contact",
      icon: <FaPhone />,
      label: "Contact",
      content: <Contact />,
    },
  ];
const Tabs = () => {
    const [activeTab , setActiveTab] = useState(tabs[0].id)

  return (
    <>
    <div>

   
    <div className="mt-7 flex justify-between border-b border-gray-200">
        {
            tabs.map((tab) => (
                <button key={tab.id} className={`flex-2 text-center py-2 px-4 font-medium text-sm ${activeTab===tab.id ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500 hover:text-blue-500 hover:border-blue-500" }`} onClick={() => setActiveTab(tab.id)}>
                    <div className="flex item-center justify-center space-x-2">
                        {tab.icon}
                        <span>{tab.label}</span>
                    </div>
                </button>
            )
        )}
    </div>
        <div className="mt-4 p-4 rounded-lg">
            {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
    </div>
    </>
  )
}

export default Tabs