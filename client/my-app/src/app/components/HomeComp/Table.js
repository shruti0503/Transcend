'use client'

import React from 'react';
import { ArrowDownUp } from 'lucide-react';
import { Table } from 'antd';

const TableComp = ({ data, setSortOption }) => {
  const columns = [
    {
      title: (
        <div className='flex justify-between'>
          Id <ArrowDownUp onClick={() => setSortOption('id')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: (
        <div className='flex justify-between'>
          Entity <ArrowDownUp onClick={() => setSortOption('entity')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'entity',
      key: 'entity',
    },
    {
      title: (
        <div className='flex justify-between'>
          Sector <ArrowDownUp onClick={() => setSortOption('sector')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'sector',
      key: 'sector',
    },
    {
      title: (
        <div className='flex justify-between'>
          Incorporation <ArrowDownUp onClick={() => setSortOption('incorporation')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'incorporation',
      key: 'incorporation',
    },
    {
      title: (
        <div className='flex justify-between'>
          Revenue Million <ArrowDownUp onClick={() => setSortOption('revenue_million')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'revenue_million',
      key: 'revenue_million',
    },
    {
      title: (
        <div className='flex justify-between'>
          Website <ArrowDownUp onClick={() => setSortOption('website')} className='cursor-pointer' />
        </div>
      ),
      dataIndex: 'website',
      key: 'website',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TableComp;