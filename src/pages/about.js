import React from 'react'
import Helmet from "react-helmet"

import Hero from '../components/Hero/Hero.js'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'

import blogHero from '../images/banner.jpg' 

import '../css/bootstrap.min.css'
import '../css/bootstrap.rtl.min.css'
import '../css/helper.css'
import '../css/responsive.css'
import '../css/style.css'


function about() {
    return (
        <>
            <Navbar />

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

            <Hero image={blogHero} />

            <h1 style={{textAlign:"center", fontSize:"60px", marginBottom:"10px"}}>About DG fitness & Lifestyle</h1>
            <div className="container" style={{padding:"30px"}}>
                Before you write a blog, make sure you know the answers to questions like, "Why would someone keep reading this entire blog post?" and "What makes our audience come back for more?"
                To start, a good blog post is interesting and educational. Blogs should answer questions and help readers resolve a challenge they're experiencing — and you have to do so in an interesting way.
                It's not enough just to answer someone's questions — you also have to provide actionable steps while being engaging. For instance, your introduction should hook the reader and make them want to continue reading your post. Then, use examples to keep your readers interested in what you have to say.
                Remember, a good blog post is interesting to read and provides educational content to audience members.
                (Want to learn how to apply blogging and other forms of content marketing to your business? Check out HubSpot Academy's free content marketing training resource page.)
                So, how do you actually go about writing one of these engaging and informational pieces?
                How to Write a Blog Pos
                Here are the steps you'll want to follow while writing a blog post.
                1. Understand your audience.
                Before you start writing your blog post, make sure you have a clear understanding of your target audience.
                Ask questions like: What do they want to know about? And, what will resonate with them?
                This is where creating your buyer personas comes in handy. Consider what you know about your buyer personas and their interests while you're coming up with a topic for your blog post.
                For instance, if your readers are millennials looking to start a business, you probably don't need to provide them with information about getting started in social media — most of them already have that down.
                You might, however, want to give them information about how to adjust their social media approach (for example — from what may be a casual, personal approach to a more business-savvy, networking-focused approach). That kind of tweak is what helps you publish content about the topics your audience really wants (and needs).
                Don't have buyer personas in place for your business? Here are a few resources to help you get started:
                Create Buyer Personas for Your Business [Free Template]
                Blog Post: How to Create Detailed Buyer Personas for Your Business
                [Free Tool] Make My Persona: Buyer Persona Generator
                2. Create your blog domain.
                Next, you'll need a place to host this and every other blog post you write. This requires choosing a content management system (CMS) and a website domain hosting service.
                Choose a CMS.
                A CMS helps you create a website domain where you'll actually publish your blog. CMS platforms can manage domains (where you create your website) and subdomains (where you create a webpage that connects to an existing website).
                HubSpot customers host web content via CMS Hub. Another popular option is a self-hosted WordPress website on WP Engine. Whether you create a domain or a subdomain to start your blog, you'll need to choose a web hosting service after you pick a CMS.
                Register a domain or subdomain with a website host.
                Your blog's domain will look like this: www.yourblog.com. The name between the two periods is up to you, as long as this domain name doesn't yet exist on the internet.
                Want to create a subdomain for your blog? If you already own a cooking business at www.yourcompany.com, you might create a blog that looks like this: blog.yourcompany.com. In other words, your blog's subdomain will live in its own section of yourcompany.com.
                Some CMSs offer subdomains as a free service, where your blog lives on the CMS, rather than your business's website. For example, it might look like this: yourblog.contentmanagementsystem.com. However, to create a subdomain that belongs to a company website, register the subdomain with a website host.
                Most website hosting services charge very little to host an original domain — in fact, website costs can be as inexpensive as $3 per month.
                Here are five popular web hosting services to choose from:
                GoDaddy
                HostGator
                DreamHost
                Bluehost
                iPage
                3. Cu
            </div>

            <Footer />
        </>
    )
}

export default about
