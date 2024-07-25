import React from 'react';

const Seach = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='rounded-lg w-[300px] gap-1 p-3 align-center border-gray-400 flex border-solid text-black bg-slate-100'>
      <input
        placeholder='search...'
        className='bg-slate-100 outline-none'
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Seach;