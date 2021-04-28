import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const jobs = [
    {
        id:1,
        name:'Ravi Kumar',
        title:"Developer"
    },
    {
        id:2,
        name:'Rachit Rathore',
        title:"Kids"
    }
]

// useEffect(()=>{
//     async function getHomeData(){
//         const res = await axios.get('http://dev-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home');
//         console.log("res- ", res);
//         setHomedata(res.data.data.feed);
//     }
//     getHomeData();
// },[]);