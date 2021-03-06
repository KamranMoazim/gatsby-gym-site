import React, {useRef, useState} from "react"
import { withPrefix,Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Helmet from "react-helmet"
// import YouTubePlayer from “react-player/lib/players/YouTube”;
// import ReactPlayer from "react-player";

import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'
import Hero from '../components/Hero/Hero.js'

import blogHero from '../images/banner.jpg' 

import video1 from '../videos/main.mp4'
import video2 from '../videos/video.mp4'

import video_bg from '../images/video_bg.png'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import client_img from '../images/client_img.png'
import client2 from '../images/client2.jpg'
import quote from '../images/quote.svg'

import favIcon from '../images/favicon.png'

import '../css/bootstrap.min.css'
import '../css/bootstrap.rtl.min.css'
import '../css/helper.css'
import '../css/responsive.css'
import '../css/style.css'


// import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = () => {

  const myRef = useRef(null);

  const [playMainVideo, setPlayMainVideo] = useState(false);
  const MainVideoRef = useRef(null);
  const handleMainVideo = () => {
    // setPlayMainVideo(!playMainVideo)
    MainVideoRef.current.play();
  }

//   const [playOtherVideo, setPlayOtherVideo] = useState(false)

  const executeScroll = () => myRef.current.scrollIntoView()  

  return (
  <div>

<Helmet>
    <meta charset="utf-8"/>
    <meta name="description" content="DG fitness & Lifestyle"/>
    <meta name="keywords" content="app, landing, corporate"/>
    <meta name="author" content="web-themes"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    {/* <!-- title --> */}
    <title>DG fitness & Lifestyle</title>

    {/* <!-- favicon --> */}
    <link href={favIcon} type="image/png" rel="icon"/>
{/* <!-- all css here --> */}
    {/* <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/fontawesome.min.css" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="css/helper.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" /> */}
</Helmet>


{/* <!-- Preloader Start --> */}
    {/* <div className="preloader">
        <div className="loader_34">
            <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Preloader End --> */}
    {/* <!-- start header --> */}


    <Navbar />



    <Hero image={blogHero} />

    {/* <!-- video area --> */}
    <div className="container text-center pt_100 mb_60 position-relative" id="lifes">
        {/* <!-- arrow down --> */}
        <div className="text-center arrow_down" >
            <i className="far fa-angle-double-down" role="button" aria-label="Mute volume" tabIndex={0} onClick={executeScroll} onKeyDown={executeScroll}></i>
            {/* <a href="" ></a> */}
        </div>
        <h2 className="title">FITNESS is <span className="theme_text">a LIFESTYLE</span></h2>
    </div>
    <div className="video_area" ref={myRef}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                    <div className="video_box" >

                        {/* {
                        playMainVideo
                        ?
                        <video controls className="video" ref={MainVideoRef} onClick={handleMainVideo} >
                            <source src={video1} type="video/mp4"  />
                        </video>
                        :
                        <div className="controls" onClick={()=>setPlayMainVideo(!playMainVideo)}>
                            <img src={video_bg} className="w-100 poster" alt="Video" />
                            <div className="play_button"><i className="fa fa-play"></i></div>
                        </div>
                        } */}
                        <video controls className="video" ref={MainVideoRef} onClick={handleMainVideo} >
                            <source src={video1} type="video/mp4"  />
                        </video>
                        <div className="controls" onClick={()=>setPlayMainVideo(!playMainVideo)}>
                            <img src={video_bg} className="w-100 poster" alt="Video" />
                            <div className="play_button"><i className="fa fa-play"></i></div>
                        </div>
                            

                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- program area --> */}
    <div className="program_area">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="title">PROGRAMS to suit your <span className="theme_text">LIFESTYLE</span></h2>
                </div>
            </div>
        </div>
        <div className="program_box_wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mt_30">
                        <div className="program_box">
                            <img src={img1} className="program_img" alt="Img" />
                            <div className="title_box text-center">
                                <div className="icon_box">
                                    <img src={icon1} className="img-fluid" alt="Img" />
                                </div>
                                <p>DIY Programs</p>
                            </div>
                            <div className="overlay_text">
                                <h4>For The Train Whenever Lifestyle</h4>
                                <ul>
                                    <li>Email consultation</li>
                                    <li>Nutrition Plan – tailored to YOUR body type</li>
                                    <li>Workout Program – to suit YOUR goals</li>
                                    <li>Access To All Our Resources Via Website/App</li>
                                    <li>Live Q&A Once A Week</li>
                                    <li>Monthly Check-Ins</li>
                                </ul>
                                <div className="duration d-flex align-items-center justify-content-between">
                                    <h5>AED 380 /month</h5>
                                    <a href="/">Learn More...</a>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="button mt_25">START NOW!</a>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mt_30">
                        <div className="program_box">
                            <img src={img2} className="program_img" alt="Img" />
                            <div className="title_box text-center">
                                <div className="icon_box">
                                    <img src={icon2} className="img-fluid" alt="Img" />
                                </div>
                                <p>Online Training</p>
                            </div>
                            <div className="overlay_text">
                                <h4>For The Train Whenever Lifestyle</h4>
                                <ul>
                                    <li>E-mail Consultation</li>
                                    <li>Nutrition Plan – tailored to YOUR body type</li>
                                    <li>Workout Program – to suit YOUR goals</li>
                                    <li>Access To All Our Resources Via Website/App</li>
                                    <li>1-1 Training On Zoom Once A Week</li>
                                </ul>
                                <div className="duration d-flex align-items-center justify-content-between">
                                    <h5>AED 380 /month</h5>
                                    <a href="/">Learn More...</a>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="button mt_25">START NOW!</a>
                    </div>

                    <div className="col-md-6 col-lg-4 mt_30">
                        <div className="program_box">
                            <img src={img3} className="program_img" alt="Img" />
                            <div className="title_box text-center">
                                <div className="icon_box">
                                    <img src={icon3} className="img-fluid" alt="Img" />
                                </div>
                                <p>In-Person Training</p>
                            </div>
                            <div className="overlay_text">
                                <h4>For The Train Always Lifestyle</h4>
                                <ul>
                                    <li>1-1 Consultation</li>
                                    <li>Objective Goal Setting With Measurements</li>
                                    <li>1-1 Training Twice A Week</li>
                                    <li>Nutrition Plan – tailored to YOUR body type</li>
                                    <li>Access To All Our Resources Via Website/App</li>
                                    <li>Monthly Check-Ins</li>
                                </ul>
                                <div className="duration d-flex align-items-center justify-content-between">
                                    <h5>AED 380 /month</h5>
                                    <a href="/">Learn More...</a>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="button mt_25">START NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* <!-- testimonial area --> */}
    <div className="testimonial_slider">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="title">HERE ARE OUR BEST BLOGS <Link to="/blogs/"><span className="theme_text">OUR BLOGS</span></Link></h2>
                    <h2 className="title">YOUR RESULTS ARE <span className="theme_text">OUR RESULTS</span></h2>
                </div>
                <div className="col-lg-11 col-xl-10">
                    <div className="owl-carousel slider">
                        <div className="item">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="client_img">
                                        <video controls className="video">
                                            <source src={video2} type="video/mp4" />
                                        </video>
                                        <div className="controls">
                                            <img src={client_img} className="poster" alt="Poster" />
                                            <div className="play_button">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text_box">
                                        <img src={quote} className="img-fluid" alt="Img"/>
                                        <p className="mt_60">AMAZING workout with denis! he is super cool and he will know exactly how to push you beyond your limit to make you get the max out of the session.</p>
                                        <h6 className="text-end mt_15">Nikka Ducotan</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="client_img">
                                        <video controls className="video">
                                            <source src={video2} type="video/mp4" />
                                        </video>
                                        <div className="controls">
                                            <img src={client2} className="poster" alt="Poster" />
                                            <div className="play_button">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text_box">
                                        <img src={quote} className="img-fluid" alt="Img"/>
                                        <p className="mt_60">AMAZING workout with denis! he is super cool and he will know exactly how to push you beyond your limit to make you get the max out of the session.</p>
                                        <h6 className="text-end mt_15">Nikka Ducotan</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- footer area --> */}


    <Footer />

    <Helmet>
    {/* <!-- all js here --> */}
    <script src={withPrefix("js/jquery-3.4.1.min.js")} type="text/javascript" />
    <script src={withPrefix("js/plugins.js")} type="text/javascript" />
    <script src={withPrefix("js/bootstrap-rtl.bundle.min.js")} type="text/javascript" />
    <script src={withPrefix("js/bootstrap.min.js")} type="text/javascript" />
    <script src={withPrefix("js/main.js")} type="text/javascript" />  
    {/* <script defer src="plugins/OwlCarousel2.3/owl.carousel.min.js" />  */}
    </Helmet>


  </div>
)
}
export default IndexPage
