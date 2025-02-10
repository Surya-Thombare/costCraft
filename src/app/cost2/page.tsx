'use client'

import Header from '@/components/Header';
import React from 'react';

const Cost = () => {
  return (
    <div className='min-h-screen bg-[#0F172A] overflow-hidden'>
      <Header />
      <div className='h-[64px]' />
      <div className='flex justify-center' style={{ height: 'calc(100vh - 64px)' }}>
        <iframe
          src="https://typebot.co/basic-chat-gpt-k7r596t"
          style={{
            border: 'none',
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Cost;
