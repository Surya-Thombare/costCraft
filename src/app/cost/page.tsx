'use client'

import Header from '@/components/Header';
import React from 'react';

// const Standard = lazy(() => import("@typebot.io/react").then(mod => ({
//   default: mod.Standard
// })));

const Cost = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Standard
    //     typebot="basic-chat-gpt-k7r596t"
    //     style={{ width: "undefined", height: "100vh" }}
    //   />
    // </Suspense>
    <div className='overflow-hidden'>
      <Header />
      <div className='flex justify-center overflow-hidden'>
        <iframe
          src="https://typebot.co/basic-chat-gpt-k7r596t"
          style={{ border: 'none', width: '90%', height: '100vh', marginTop: '3rem', overflow: 'hidden' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Cost