import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';
const add_img = './assets/images/add.png';

export default function Beauty({beautyData}){
   return(
    <>
    <Head>
        <title>Beauty Tips: Latest Beauty tips</title>
    </Head>
       {/* Add Section */}
       <div className="add_wrapper">
                    <img src={add_img} alt="add" />
        </div>
    <h1>Beauty is working</h1>
        </>
   )
}

// export async function getStaticProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=beauty&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const beautyData = await res.json()
//     return {
//         props: { beautyData, },
//       };
// }

// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=beauty&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const beautyData = await res.json()
//     return {
//         props: { beautyData, },
//       };
// }
