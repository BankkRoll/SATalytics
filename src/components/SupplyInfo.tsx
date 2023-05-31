// src/components/SupplyInfo.tsx
import React, { useState } from 'react';
import Pagination from './Pagination';
import 'animate.css';

interface SupplyInfoProps {
  supplyInfo: any[];
}

const SupplyInfo: React.FC<SupplyInfoProps> = ({ supplyInfo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = supplyInfo.slice(startIndex, endIndex);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">Supply Info</h1>
      {currentItems.map((collection: any, index: number) => (
        <div key={index} className="border p-4 rounded-lg mb-4 bg-white shadow-sm">
          <p className="font-semibold text-gray-700">Slug: <span className="font-normal text-gray-600">{collection.slug}</span></p>
          <p className="font-semibold text-gray-700">Supply: <span className="font-normal text-gray-600">{collection.supply}</span></p>
          <p className="font-semibold text-gray-700">Owners: <span className="font-normal text-gray-600">{collection.owners}</span></p>
        </div>
      ))}
      <Pagination
        totalItems={supplyInfo.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default SupplyInfo;
