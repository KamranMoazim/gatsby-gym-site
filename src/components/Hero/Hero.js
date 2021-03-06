import React from 'react';
import Helmet from "react-helmet"
import './Hero.module.css'

function Hero({image}) {
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
        
        <div className="banner_area d-flex align-items-center" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Build <span>Your</span> Body</h1>
                        <a href="/" className="button">START NOW!</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Hero
