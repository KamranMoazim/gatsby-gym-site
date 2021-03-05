import React from 'react'
import Helmet from "react-helmet"

import fb from '../../images//facebook.svg'
import insta from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'
import Logo from "../../images/logo.svg"


function Navbar() {
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
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/fontawesome.min.css" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="css/helper.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" />
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


    </>
    )
}

export default Navbar
