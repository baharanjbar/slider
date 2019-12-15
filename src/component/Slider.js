import React from 'react';
import Swiper from 'react-slider-swiper';
import "../styles/swiper.css"
import "../styles/swiper.min.css"
import 'swiper/css/swiper.css';
class Slider extends React.Component {
    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        }
        return(
        <Swiper {...params}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
        </Swiper>)
    }
}

export default Slider