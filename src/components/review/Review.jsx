import React, {useRef,useState} from 'react'
import './review.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import {BsStarHalf} from 'react-icons/bs'
import {AiTwotoneStar} from 'react-icons/ai'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const Review = () => {
    
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='review-section'>
    <div className="why-choose-us-text-container review-head-container">
            <div className="header review-header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>what our custormers are saying</h2>
            </div>
            <h1 data-aos="fade-up">custormer reviews</h1>
        </div>
        <div className="review-card-container">
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/gregory-gill-4Bf5LNEPqZ0-unsplash.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>John D.</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>I've been investing with Wealthflowinvest for over a year now, and I couldn't be happier with the results. The team's expertise in utilizing IRAs for real estate and cryptocurrencies is truly remarkable. They've not only helped me diversify my investment portfolio but also guided me through the entire process with professionalism and transparency.</p>
              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/fortune-vieyra-QIMjYJSFoXM-unsplash.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Michael M.</p>
              </div>
            </div>
            <div className="investor-review-container">
             <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Wealthflowinvest has exceeded my expectations in every way possible. As someone who wanted to explore investment opportunities beyond traditional options, I was initially hesitant. However, the team's in-depth knowledge and personalized approach put my mind at ease. My investments have shown consistent growth, and I feel confident knowing that my financial future is in capable hands. </p>
              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Michael H.</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Choosing Wealthflowinvest for my IRA investments was undoubtedly one of the best decisions I've made. The team's deep understanding of both real estate and crypto markets is evident in their well-researched and strategic investment approach. They take the time to explain the intricacies of each investment, ensuring I'm well-informed and comfortable with the decisions being made. </p>
              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review