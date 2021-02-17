// Core
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import Error from "../Error";
import Loader from "../Loader";
import PodcastItemCard from '../PodcastItemCard';
import { usePodcastSlider } from '../../stores/podcastSlider/usePodcastSlider';

//styles
import styles from './styles/styles.module.scss';
import './styles/slider-theme.scss';


const PodcastSlider: React.FC = () => {

  const { isFetching, error, data } = usePodcastSlider();

  const errorMessage = !isFetching && error && <Error message={'error.message'}/>;

  const loader = isFetching && <Loader/>;

  const settings = {
    accessibility: false,
    arrows: true,
    autoplay: false,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  // slides
  const slides = data && data.map((item)  => {
    return (
      <div key={item.id} className={styles.slide}>
        <PodcastItemCard data={item} />
      </div>
    );
  });

  //Slider
  const slider = data && (
    <Slider className={styles.slider} {...settings}>
      {slides}
    </Slider>
  );

  return (
    <section className={styles.section}>
      { errorMessage }
      { loader }
      { slider }
    </section>
  )
};

export default PodcastSlider;
