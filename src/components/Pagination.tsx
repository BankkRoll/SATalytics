// src/components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(pageCount - 1, currentPage + 2);

  return (
    <nav className="block">
      <ul className="flex pl-0 rounded list-none flex-wrap justify-center my-2">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="px-3 py-1 rounded-md text-sm font-medium text-blue-500 hover:bg-blue-50 focus:outline-none"
          >
            Prev
          </button>
        </li>

        <li>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${currentPage === 1 ? 'bg-blue-500 text-white' : 'text-blue-500'} hover:bg-blue-50 focus:outline-none`}
          >
            1
          </button>
        </li>

        {startPage > 2 && <li>...</li> }

        {[...Array((endPage - startPage) + 1)].map((_, i) => {
          const pageNumber = startPage + i;
          return (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'text-blue-500'} hover:bg-blue-50 focus:outline-none`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {endPage < pageCount - 1 && <li>...</li> }

        <li>
          <button
            onClick={() => onPageChange(pageCount)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${pageCount === currentPage ? 'bg-blue-500 text-white' : 'text-blue-500'} hover:bg-blue-50 focus:outline-none`}
          >
            {pageCount}
          </button>
        </li>

        <li>
          <button
            disabled={currentPage === pageCount}
            onClick={() => onPageChange(currentPage + 1)}
            className="px-3 py-1 rounded-md text-sm font-medium text-blue-500 hover:bg-blue-50 focus:outline-none"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
