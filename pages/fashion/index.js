import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';
const add_img = './assets/images/add.png';

export default function Fashion({fashionData}){
    console.log("fashionData -", fashionData);
   return(
    <>
    <Head>
        <title>Fashion News: Latest Fashion</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    </Head>
        {/* Add Section */}
        <div className="add_wrapper">
                    <img src={add_img} alt="add" />
        </div>
    <h1>Fashion is working</h1>
        </>
   )
}

// export async function getStaticProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const fashionData = await res.json()
//     return {
//         props: { fashionData, },
//       };
// }


export async function getServerSideProps(){
    const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const fashionData = await res.json()
    return {
        props: { fashionData, },
      };
}
