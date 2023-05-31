// src/components/VolumeInfo.tsx
import React, { useState } from 'react';
import Pagination from './Pagination';
import 'animate.css';

interface VolumeInfoProps {
  volumeInfo: any[];
}

const VolumeInfo: React.FC<VolumeInfoProps> = ({ volumeInfo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = volumeInfo.slice(startIndex, endIndex);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-3xl font-semibold text-orange-600 mb-4">Volume Info</h1>
      {currentItems.map((collection: any, index: number) => (
        <div key={index} className="border p-4 rounded-lg mb-4 bg-white shadow-sm">
          <p className="font-semibold text-gray-700">Slug: <span className="font-normal text-gray-600">{collection.slug}</span></p>
          <p className="font-semibold text-gray-700">Volume 24h in BTC: <span className="font-normal text-gray-600">{collection.vol_24h_in_btc}</span></p>
          <p className="font-semibold text-gray-700">Volume 7d in BTC: <span className="font-normal text-gray-600">{collection.vol_7d_in_btc}</span></p>
          <p className="font-semibold text-gray-700">Total Volume in BTC: <span className="font-normal text-gray-600">{collection.vol_total_in_btc}</span></p>
          <p className="font-semibold text-gray-700">Sale Count 7d: <span className="font-normal text-gray-600">{collection.sale_cnt_7d}</span></p>
        </div>
      ))}
      <Pagination
        totalItems={volumeInfo.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default VolumeInfo;


