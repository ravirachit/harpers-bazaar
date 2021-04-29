
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Bling as GPT} from "react-gpt";

GPT.enableSingleRequest();

// Images
// const banner_img = './assets/images/banner.png';
const add_img = './assets/images/add.png';
const FashionAdd = './assets/images/fashionadd.png';
const cultureAdImg = './assets/images/300x250.png';

export default function Home({homeData}){
    console.log("homeData- ", homeData);
    return(
       <div>Success</div>
    )
}

// export async function getStaticProps(){
//     const res = await fetch(`https://harpers-bazaar-1vfd7s0r6-ravirachit.vercel.app/api/jobs`);
//     const homeData = await res.json();
//     return {
//         props: { homeData },
//       }
// }

// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`)
//     const homeData = await res.json();
//     return {
//         props: { homeData },
//       }
// }