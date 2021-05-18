import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

// Images
const logo = '../assets/images/logo.png';
const strickyLogo = '../assets/images/stricylogo.png';
const fb_img = '../assets/images/facebook.png';
const instra_img = '../assets/images/instrgram.png';
const twitter_img = '../assets/images/twitter.png';
const serach_img = '../assets/images/search.png';
const cross_img = '../assets/images/cross.png';
const input_search_img = '../assets/images/inputsearchicon.png';
const mobilelogo =  '../assets/images/mobile_logo.png';
const cross =  '../assets/images/cross.png';
const menu_img = '../assets/images/menu_icon.png';

export default function Header(){
    const [isActive, setBoolean] = useState(null);
    const [isSearch, setSearch] = useState(false);
    const [isMobMenu, setMobMenu] = useState(false);
    const router = useRouter();

     // Search Value State
     const [searchData, setSearchData] = useState(null);
     const [searchRes, setSearchRes] = useState(null);

    const onScroll = ()=> {
        const headerOffset = document.getElementById('fixedNav').getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > headerOffset) {
            setBoolean(true);
        }else{
            setBoolean(false); 
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
      }, []);


    //  Search input function
   function getData(val){
    setSearchData(val.target.value);
   }
   function GetSearchInputData(){
    // localStorage.removeItem('search_res');
    router.push(`/search/${searchData}`);
    // getSearchData();
    // localStorage.setItem('search_res',JSON.stringify(searchRes));
    setSearch(false);
   }

    return (
        <>
            <header id="header">
                <div className="upperheader">
                    <div className="container relative" >
                        <Link  href="/" >
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="follow_us">
                            <label>
                                Follow us on:
                         </label>
                            <a href="https://www.facebook.com/" >
                                <img src={fb_img} alt="social_image" />
                            </a>
                            <a href="https://www.instagram.com/" >
                                <img src={instra_img} alt="social_image" />
                            </a>
                            <a href="https://twitter.com/" >
                                <img src={twitter_img} alt="social_image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="fixedNav" className={isActive ? 'fixed' : 'bottomheader'}>
                    <div className="container relative flex_wrap">
                    <a className="strickylogo"><Link href="/">
                        <img src={strickyLogo} alt="strickylogo" />
                    </Link></a>
                    <nav className="menu">
                        <Link href="/"><a className={router.pathname === "/" ? "activeNavMenu" : ""}>HOME</a></Link>
                        <Link href="/fashion" ><a className={router.pathname === "/fashion" ? "activeNavMenu" : ""}>FASHION</a></Link>
                        <Link href="/beauty"><a className={router.pathname === "/beauty" ? "activeNavMenu" : ""}>BEAUTY</a></Link>
                        <Link href="/culture"><a className={router.pathname === "/culture" ? "activeNavMenu" : ""}>CULTURE</a></Link>
                        <Link href="/celebrity"><a className={router.pathname === "/celebrity" ? "activeNavMenu" : ""}>CELEBRITY</a></Link>
                        <Link href="/travelAndFood"><a className={router.pathname === "/travelAndFood" ? "activeNavMenu" : ""}>TRAVEL AND FOOD</a></Link>
                    </nav>

                    <span className="searchicon" onClick={()=>setSearch(true)}>
                        <img className="searchImg" src={serach_img} alt="search"/>
                    </span>
                    </div>
                </div>


                {/* Mobile Header and menu */}
                {
        isMobMenu?<div className="humburger_overlay">
            <div className="menu_wrapper">
                <div className="mobile_header_top">
                    <a href="https://harpers-bazaar.vercel.app/" className="mobile_logo">
                        <img src={mobilelogo} alt="mobilelogo" />
                    </a>
                    <span className="cross_menu" onClick={()=>setMobMenu(false)}>
                        <img src={cross} alt="crossIcon" />
                    </span>

                </div>


                <nav className="mobile_menu">
                        <Link href="/"><a onClick={()=>setMobMenu(false)}>HOME</a></Link>
                        <Link href="/fashion"><a onClick={()=>setMobMenu(false)}>FASHION</a></Link>
                        <Link href="/beauty"><a onClick={()=>setMobMenu(false)}>BEAUTY</a></Link>
                        <Link href="/culture"><a onClick={()=>setMobMenu(false)}>CULTURE</a></Link>
                        <Link href="/celebrity"><a onClick={()=>setMobMenu(false)}>CELEBRITY</a></Link>
                        <Link href="/travelAndFood"><a onClick={()=>setMobMenu(false)}>TRAVEL AND FOOD</a></Link>
                </nav>
            </div>
        </div>:null
}

                <div className="mobile_header">
                <span className="menu_icon"  onClick={()=>setMobMenu(true)}>
                    <img src={menu_img} alt="menu" />
                </span>
                <Link href="/" className="logo Link">
                    <img src={strickyLogo} alt="strickyLogo" />
                </Link>
                <span className="searchicon" onClick={()=>setSearch(true)}>
                    <img className="searchImg" src={serach_img} alt="search"/>
                </span>
            </div>
            </header>

             {/* Search bar */}
             {
            isSearch?<div className="overlay">
            <div className="container">
                <div className="search_box">
                    <div className="search_text">
                        <label>Search Here</label>
                        <span className="cross" onClick={()=>
                            setSearch(false)}>
                            <img src={cross_img} alt="crossIcon" />
                        </span>
                    </div>
                    <div className="inputwrapper relative">
                        <input type="text" placeholder="Type your keyword(s) here..." onChange={getData} />
                        <span className="search_input" >
                            <img src={input_search_img} alt="search" onClick={GetSearchInputData}/>
                        </span>
                    </div>
                    </div>
                    </div>
                    </div>:null
}      
        </>
    )
}