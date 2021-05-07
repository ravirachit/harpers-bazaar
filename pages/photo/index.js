import Head from 'next/head';
import React, { Component } from 'react';
import useDfpSlot from '../../useDfpSlot';
export default function Photo(){
    useDfpSlot({
        path: '/1007232/HarperBazaar_HP_300x250-728x90_ATF',
        size: [[728,90],[300,250],[970,90]],
        id: 'div-gpt-ad-6326067-1',
      });
    return(
        <>
        <Head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        </Head>
            <div>Photo is working</div>
            <div id="div-gpt-ad-6326067-1" style={{ width: '320px', height: '100px' }}/>
        </>
    )
}

