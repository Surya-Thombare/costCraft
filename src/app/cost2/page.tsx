'use client'

import Header from '@/components/Header';
import { Standard } from "@typebot.io/react";

import React from 'react';

const Cost2 = () => {
  return (
    <div className='min-h-screen bg-[#0F172A] overflow-hidden'>
      <Header />
      <div className='h-[64px]' />
      <div className='flex justify-center' style={{ height: 'calc(100vh - 64px)' }}>
        <Standard
          typebot="customer-support-6eb7yy4"
          style={{ width: "100%", height: "600px" }}
        />

        {/* <iframe
          src="https://typebot.co/customer-support-6eb7yy4"
          style={{
            border: 'none',
            width: '100%',
            height: '100%'
          }}
        ></iframe> */}
      </div>
    </div>
  );
};

export default Cost2;
