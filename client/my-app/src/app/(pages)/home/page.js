'use client';

import React, { useEffect, useState } from 'react';
import Seach from '../../components/global/Seach.js';
import TableComp from '../../components/HomeComp/Table.js';
import { getInfo } from '../../../../utils/index.js';

const Page = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getInfo();
        setData(result);
        setFilteredData(result);
        setLoading(false); 
        console.log("data chn", result);
      } catch (error) {
        console.error("Error fetching data in component", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(item => {
        return Object.values(item).some(value => 
          value ? value.toString().toLowerCase().includes(searchTerm.toLowerCase()) : false
        );
      });
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    if (sortOption && data) {
      const sorted = [...filteredData].sort((a, b) => {
        if (a[sortOption] < b[sortOption]) return -1;
        if (a[sortOption] > b[sortOption]) return 1;
        return 0;
      });
      setFilteredData(sorted);
    }
  }, [sortOption, filteredData]);

  return (
    <div className='main-content p-10 items-center flex flex-col right-0 h-[91vh] w-[87vw] overflow-scroll bg-white'>
      <div className='inner-content h-[700px]'>
        <div className='w-full flex justify-end items-end'>
          <Seach searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        {loading ? (
          <div className='spinner'>
            <div className='spin'></div>
          </div>
        ) : (
          <div className='w-full mt-5 flex h-[500px]'>
            <TableComp data={filteredData} setSortOption={setSortOption} />
          </div>
        )}
      </div>
      <p className='text-black'></p>
    </div>
  );
};

export default Page;