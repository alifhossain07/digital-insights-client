import React from 'react';
import Banner from './Banner/Banner';
import FeaturedBlog from './FeaturedBlog/FeaturedBlog';
import Categories from './Categories/Categories';
import TopContributors from './TopContributors/TopContributors';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {

    return (
        <div className=''>
            
            <Banner></Banner>
            <div className='bg-gray-100'>
            <FeaturedBlog></FeaturedBlog>
            </div>
            
            <Categories></Categories>
            <div className='bg-gray-100'>
            <TopContributors></TopContributors>
            </div>
            
            <Testimonials></Testimonials>
    
        </div>
    );
};

export default Home;


       