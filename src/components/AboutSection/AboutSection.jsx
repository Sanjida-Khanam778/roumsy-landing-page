import React, { useState } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const getContent = () => {
    switch (activeTab) {
      case 'mission':
        return {
          title: 'Our Mission',
          text: 'Dictumst hendrerit velin lorem justo, pulvinar massa diam vitae. Montes, ornare fringilla maecenas tellus in convallis sed id. Sed ut commodo risus aenean. Quam consectetur ut vulputate ut vulputate ultricies diam.',
        };
      case 'vision':
        return {
          title: 'Our Vision',
          text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
        };
      case 'goal':
        return {
          title: 'Our Goal',
          text: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.',
        };
      default:
        return {
          title: 'Our Mission',
          text: 'Dictumst hendrerit velin lorem justo, pulvinar massa diam vitae. Montes, ornare fringilla maecenas tellus in convallis sed id. Sed ut commodo risus aenean. Quam consectetur ut vulputate ut vulputate ultricies diam.',
        };
    }
  };

  const { title, text } = getContent();

  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 bg-gray-100">
      {/* Image Placeholder 1 */}
      <div className="relative mb-4 md:mb-0">
        <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden">
          <img src="" alt="Placeholder 1" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-200 rounded-full"></div>
      </div>

      {/* Image Placeholder 2 */}
      <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden">
        <img src="" alt="Placeholder 2" className="w-full h-full object-cover" />
      </div>

      {/* Info Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 mt-6 md:mt-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">1 About</h2>
          <span className="text-blue-500 font-medium">LearnGPT</span>
        </div>
        <p className="text-lg font-bold mb-4">
          Over 20,000+ online Quizzes 1000+ from best instructor
        </p>
        <div className="flex space-x-4 mb-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-full ${activeTab === 'mission' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-full ${activeTab === 'vision' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-full ${activeTab === 'goal' ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setActiveTab('goal')}
          >
            Our Goal
          </button>
        </div>
        <p className="text-gray-600 mb-4">{text}</p>
        <ul className="list-decimal list-inside text-gray-600">
          <li>Quality Content and Expert Instruction</li>
          <li>Quality Content and Expert Instruction</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;