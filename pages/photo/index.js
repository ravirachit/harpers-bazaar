import React, { Component } from 'react';
import Ad from 'react-google-publisher-tag';

Ad.enableSingleRequest = true;

export default class Example extends Component {
  render() {
    return (
        <>
      <div id="div-gpt-ad-6326067-1">
        <Ad path="/1007232/HarperBazaar_HP_300x250-728x90_ATF" enableSingleRequest={true}/>
        {/* <RouteHandler /> */}
      </div>
       <div id="div-gpt-ad-6326067-2">
       <Ad path="/1007232/HarperBazaar_HP_300x250_MTF" enableSingleRequest={true}/>
       {/* <RouteHandler /> */}
     </div>
     </>
    );
  }
}

