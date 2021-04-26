import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';
const add_img = './assets/images/add.png';

class myComponent extends React.Component {
    componentDidMount() {
      const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
    }
    render() {
      return <h1>my Component has Mounted, Check the browser 'console' </h1>;
    }
  }
  export default myComponent;

// export async function getStaticProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const fashionData = await res.json()
//     return {
//         props: { fashionData, },
//       };
// }


// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
//     const fashionData = await res.json()
//     return {
//         props: { fashionData, },
//       };
// }
