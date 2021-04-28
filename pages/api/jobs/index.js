
import {jobs} from '../../../data'
import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default async (req, res) => {
  const resData = await axios.get('http://dev-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=fashion&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all');
  // console.log("res- ", resData.body);
  // res.send(resData.json());
    res.status(200).json(resData.data)
}
  