import React from 'react';

const DocumentItem = ({ title, onRead, isRead }) => {
  return (
    <div className="border border-gray-500 bg-gray-200 bg-opacity-15 p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <button
          className={`text-gray-400 ${isRead ? 'opacity-100 cursor-not-allowed' : 'hover:underline'}`}
          onClick={onRead}
          disabled={isRead}
        >
          {isRead ? 'Read' : 'Read and review'}
        </button>
      </div>
      {isRead && <span className="text-gray-400 text-0.2xl bg-gray-400 bg-opacity-80 p-1 rounded-lg">✔️</span>}
    </div>
  );
};

export default DocumentItem;
