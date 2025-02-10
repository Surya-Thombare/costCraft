'use client'

import React from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

const Standard = dynamic(
  () => import("@typebot.io/react").then((mod) => mod.Standard),
  {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white">Loading...</div>
  }
);

const Cost2 = () => {
  return (
    <div className='min-h-screen bg-[#0F172A] overflow-hidden'>
      <Header />
      <div className='h-[64px]' />
      <div className='flex justify-center' style={{ height: 'calc(100vh - 64px)' }}>
        <Standard
          typebot="customer-support-6eb7yy4"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Cost2;
