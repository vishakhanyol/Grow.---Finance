import React, { useState } from 'react';
import DocumentItem from './DocumentItem';

const DocumentList = ({ onAllRead }) => {
  const documents = [
    'FSCS Information',
    'Terms & Conditions',
    'Key Features & Summary Box',
    'Privacy Policy',
  ];

  const [readDocs, setReadDocs] = useState(new Set());

  const handleRead = (doc) => {
    setReadDocs((prev) => {
      const newReadDocs = new Set(prev);
      newReadDocs.add(doc);
      if (newReadDocs.size === documents.length) {
        onAllRead();
      }
      return newReadDocs;
    });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {documents.map((doc) => (
        <DocumentItem
          key={doc}
          title={doc}
          onRead={() => handleRead(doc)}
          isRead={readDocs.has(doc)}
        />
      ))}
    </div>
  );
};

export default DocumentList;
