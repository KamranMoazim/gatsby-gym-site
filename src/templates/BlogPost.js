import React from 'react'
import {graphql} from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import Helmet from "react-helmet"

import './BlogPost.css'

import './css/bootstrap.min.css'
import './css/bootstrap.rtl.min.css'
import './css/helper.css'
import './css/responsive.css'
import './css/style.css'

// import Navbar from '../components/Navbar/Navbar.js'
// import Footer from '../components/Footer/Footer.js'

import fb from './images/facebook.svg'
import insta from './images/instagram.svg'
import whatsapp from './images/whatsapp.svg'

import fb2 from './images/facebbookw.svg'
import insta2 from './images/instagram2.svg'
import whatsapp2 from './images/whatsappw.svg'

import Logo from "./images/logo.svg"
import FLogo from "./images/flogo.svg"


export const query = graphql`
  query($slug: String!) {
    graphCmsBlog(slug: {eq: $slug}) {
        title
        addingDate
        publisher
        actualBlog {
          html
        }
      }
  }
`
  

const BlogPost = (props) => {
    return (

        <>

<Helmet>
    <meta charset="utf-8"/>
    <meta name="description" content="DG fitness & Lifestyle"/>
    <meta name="keywords" content="app, landing, corporate"/>
    <meta name="author" content="web-themes"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    {/* <!-- title --> */}
    <title>DG fitness & Lifestyle Blogs</title>

    {/* <!-- favicon --> */}
    <link href="img/favicon.png" type="image/png" rel="icon"/>
{/* <!-- all css here --> */}
    {/* <link href="../../public/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/fontawesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/helper.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/style.css" rel="stylesheet" type="text/css" />
    <link href="../../public/css/responsive.css" rel="stylesheet" type="text/css" /> */}
</Helmet>











<header className="d-flex align-items-center">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3 col-5 logo">
                    {/* <!--logo start--> */}
                    <a href="/"><img src={Logo} className="img-fluid" alt="Logo" /></a>
                    {/* <!--logo end--> */}
                </div>
                <div className="col-md-9 col-7">
                    {/* <!--menu start--> */}
                    <div className="menu_area d-flex align-items-center justify-content-end">
                        <ul>
                            <li><a href="/" className="active">EN</a></li>
                            <li><a href="/">ع</a></li>
                        </ul>
                        <div className="button_wrapper d-none d-md-block">
                            <a href="/" className="button">SIGN IN</a>
                            <a href="/" className="button btn2">SIGN UP</a>
                        </div>
                        <div className="social_icons">
                            <a href="https://www.facebook.com/dgfitnessandlifestyle/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/dg_fitnessandlifestyle/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" /></a>
                            <a href="https://wa.me/971569677986" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+971569677986"><img src={whatsapp} alt="whatsapp" /></a>
                        </div>
                    </div>
                    
                    {/* <!-- menu toggler --> */}
                    <div className="hamburger-menu">
                        <span className="line-top"></span>
                        <span className="line-center"></span>
                        <span className="line-bottom"></span>
                    </div>
                </div>
            </div>
        </div>
    </header>







        <div className="container" style={{marginTop:"40px", marginBottom:"30px"}}>
            <div className="content">
                <h1 style={{textAlign:"center", fontSize:"60px", marginBottom:"10px"}}>{props.data.graphCmsBlog.title}</h1>
                <div style={{textAlign:"center", fontSize:"30px"}}>
                <span className="meta" >
                    Posted on {props.data.graphCmsBlog.addingDate} By <b>{props.data.graphCmsBlog.publisher}</b>
                </span>
                </div>
                
                <div className="container working" style={{marginTop:"40px"}}>
                    {ReactHtmlParser(props.data.graphCmsBlog.actualBlog.html)}
                </div>
            </div>
        </div>











        <footer>
        <div className="container">
            <div className="row gx-lg-5 justify-content-between">
                <div className="col-lg-5 mt_30">
                    <form action="#">
                        <h4>Contact Us</h4>
                        <div className="row">
                            <div className="col-sm-6 mt_25">
                                <input type="text" className="input_box" placeholder="Name" />
                            </div>
                            <div className="col-sm-6 mt_25">
                                <input type="email" className="input_box" placeholder="Email" />
                            </div>
                            <div className="col-12 mt_25">
                                <textarea className="input_box" placeholder="Leave your message"></textarea>
                            </div>
                            <div className="col-12 mt_25">
                                <button type="submit" className="button">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 mt_30">
                    <a href="index.html" className="logo"><img src={FLogo} className="img-fluid" alt="Img" /></a>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/">Inspiration</a></li>
                        <li><a href="/">Education</a></li>
                    </ul>
                    <div className="social_icons mt_20">
                        <a href="https://www.facebook.com/dgfitnessandlifestyle/" target="_blank" rel="noopener noreferrer">
                        	<img src={fb2} alt="facebbookw" />
                        </a>
                        <a href="https://www.instagram.com/dg_fitnessandlifestyle/" target="_blank" rel="noopener noreferrer">
                        	<img src={insta2} alt="instagram2" />
                        </a>
                        <a href="https://wa.me/971569677986" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" data-bs-placement="bottom" title="+971569677986">
                        	<img src={whatsapp2} alt="whatsappw" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 mt_30">
                    <h4>Corporate Office</h4>
                    <ul className="mt_35">
                        <li><i className="fal fa-paper-plane"></i> 44 New Design Street, rne 005</li>
                        <li><i className="fal fa-phone"></i> <a href="tel:971569677986">+971 56 967 7986</a></li>
                        <li><i className="fal fa-envelope"></i> <a className="text-truncate" href="mailto:denis@dgfitness.guru">denis@dgfitness.guru</a></li>
                        <li><i className="far fa-globe"></i> <a href="dgfitnessandlifestyle.com" className="text-truncate">dgfitnessandlifestyle.com</a></li>
                    </ul>
                </div>
                <div className="col-12 text-center copy_text">
                    <a href="/">Terms and Conditions</a>
                    <span>|</span>
                    <a href="/">Privacy Policy</a>
                    <p>© 2021 Denis Golosin All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>


    </>
    )
}

export default BlogPost
