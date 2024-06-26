import React, { useState } from 'react';
import DocumentList from './DocumentList';

const ApplicationPage = () => {
  const [allRead, setAllRead] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white">
      <header className="relative w-full h-64 bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold text-center max-w-4xl px-4">Important documents to review</h1>
          <p className="text-lg text-center px-4 mt-4 max-w-4xl">Please open and read all of the following important documents - you won’t be able to apply until you’ve done so. Please also save or print copies of these documents for future reference. If you have any questions about the contents of these documents please contact us.</p>
        </div>
      </header>

      <section className="w-2/3 max-w-6xl p-8 bg-[#D3D3D3] bg-opacity-30 shadow-2xl mt-4 rounded-lg flex flex-col items-center justify-center mb-12">
        {}
        <DocumentList onAllRead={() => setAllRead(true)} />
  
        <div className="mt-8 w-full max-w-2xl p-8 bg-transparent rounded-lg">
          <p className="mb-6 text-center text-black">
            If you click on the ‘Start Application’ button below, you confirm your agreement to both the General Savings Conditions and Key Features & Summary Box document.
          </p>
          <button 
            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!allRead ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!allRead}
          >
            Start Application
          </button>
        </div>
      </section>
  
      <footer className="w-full max-w-6xl p-8 bg-[#D3D3D3] bg-opacity-30 shadow-2xl mt-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Need support?</h2>
        <p className="text-black">
          At Grow, we are committed to providing you with the best banking experience possible. We understand that sometimes you may have questions or need assistance, which is why we’ve created our Help Centre to provide you with the information you need quickly and easily.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Contact with us</button>
      </footer>
    </div>
  );
  
};

export default ApplicationPage;