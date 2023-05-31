// src/components/GlobalVolumes.tsx
import React from 'react';
import 'animate.css';

interface GlobalVolumesProps {
  volumes: any;
}

const GlobalVolumes: React.FC<GlobalVolumesProps> = ({ volumes }) => {
  return volumes ? (
    <div className="animate__animated animate__fadeIn mt-6">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">Global Volumes</h1>
      <div className="border p-4 rounded-lg mb-4 bg-white shadow-sm">
        <p className="font-semibold text-gray-700">All Sale Sum: <span className="font-normal text-gray-600">{volumes.all_sale_sum}</span></p>
        <p className="font-semibold text-gray-700">Last 30 Days Sale Sum: <span className="font-normal text-gray-600">{volumes.last_30_day_sale_sum}</span></p>
        <p className="font-semibold text-gray-700">Last 7 Days Sale Sum: <span className="font-normal text-gray-600">{volumes.last_7_day_sale_sum}</span></p>
        <p className="font-semibold text-gray-700">Last 24 Hours Sale Sum: <span className="font-normal text-gray-600">{volumes.last_24_hr_sale_sum}</span></p>
      </div>
    </div>
  ) : null;
};

export default GlobalVolumes;
