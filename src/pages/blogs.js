import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Hero from '../components/Hero/Hero.js'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'

// import Layout from "../components/layout"
// import SEO from "../components/seo"

import blogHero from '../images/banner.jpg' 


import '../css/bootstrap.min.css'
import '../css/bootstrap.rtl.min.css'
import '../css/helper.css'
import '../css/responsive.css'
import '../css/style.css'


function getImages(string) {
  const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
  const images = [];
    let img;
    while ((img = imgRex.exec(string))) {
     	images.push(img[1]);
    }
  return images;
}



const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery{
        allGraphCmsBlog{
          nodes {
            title
            slug
            publisher
            addingDate
            actualBlog {
              markdown
              html
            }
            
          }
        }
      }
    `
  )

  // console.log(data)

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
    {/* <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/fontawesome.min.css" rel="stylesheet" type="text/css" />
    <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="css/helper.css" rel="stylesheet" type="text/css" />
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" /> */}
</Helmet>

      <Navbar />


      <Hero image={blogHero} />



      <div className="program_area">

        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="title">Amazing Blogs that change your <span className="theme_text">LIFESTYLE</span></h2>
                </div>
            </div>
        </div>



        <div className="program_box_wrapper">
            <div className="container">
                <div className="row justify-content-center">


        {data.allGraphCmsBlog.nodes.map((post,index) => {

          const imgs = getImages(post.actualBlog.html.toString());

          return (

                    <div className="col-md-6 col-lg-4 mt_30" key={index}>
                    <div className="program_box">
                        <img src={imgs[0]} className="program_img" alt="Img" />
                        <div className="title_box text-center">
                            {/* <div className="icon_box">
                                <img src="img/icon2.svg" className="img-fluid" alt="Img" />
                            </div> */}
                            <p>{post.title}</p>
                        </div>
                        <div className="overlay_text">
                            <h4>{post.title}</h4>
                            <ul>
                                <p> {post.actualBlog.markdown.substr(0, 700)+"...."}  </p>
                            </ul>
                        </div>
                    </div>
                    <Link to={`/blogs/${post.slug}/`} className="button mt_25">Read More</Link>
                </div>


          )
        })}


            </div>
          </div>
        </div>
    </div>

<Footer />

    </>
  )
}

export default Blog