// Core
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import PodcastItemCard from '../PodcastItemCard';

//styles
import styles from './styles/styles.module.scss';
import './styles/slider-theme.scss';

// test data
const data = [
  {
    id: '1',
    colorFirst: '#E97131',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    title: 'Респаун',
    description: 'Parimatch',
  },
  {
    id: '2',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    title: 'На дистанции',
    description: 'Parimatch',
  },
  {
    id: '3',
    colorFirst: '#80F983',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-3.png',
    title: 'Все еще бета',
    description: 'Parimatch',
  },
  {
    id: '4',
    colorFirst: '#ED22FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    title: 'Еще подкаст',
    description: 'Parimatch',
  },
  {
    id: '5',
    colorFirst: '#80F983',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-3.png',
    title: 'Все еще бета',
    description: 'Parimatch',
  },
  {
    id: '6',
    colorFirst: '#ED22FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    title: 'Еще подкаст',
    description: 'Parimatch',
  },
  {
    id: '7',
    colorFirst: '#E97131',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    title: 'Респаун',
    description: 'Parimatch',
  },
  {
    id: '8',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    title: 'На дистанции',
    description: 'Parimatch',
  },
  {
    id: '9',
    colorFirst: '#80F983',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-3.png',
    title: 'Все еще бета',
    description: 'Parimatch',
  },
  {
    id: '10',
    colorFirst: '#ED22FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-4.png',
    title: 'Еще подкаст',
    description: 'Parimatch',
  },
  {
    id: '11',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    title: 'На дистанции last',
    description: 'Parimatch',
  },
];

const PodcastSlider: React.FC = () => {
  // const sliderRef: React.MutableRefObject<HTMLInputElement | null | undefined> = useRef();
  //
  // const prev = (
  //   <button type="button" className="slick-prev"><span className="icon-arrow-short-left"/></button>
  // );
  // const next = (
  //   <button type="button" className="slick-next"><span className="icon-arrow-short-right"/></button>
  // );

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  // slides
  const slides = data.map((item)  => {
    return (
      <div key={item.id} className={styles.slide}>
        <PodcastItemCard data={item} />
      </div>
    );
  });

  //Slider
  const slider = (
    <Slider className={styles.slider} {...settings}>
      {slides}
    </Slider>
  );



  return (
    <section className={styles.section}>
      {slider}
    </section>
  )
};

export default PodcastSlider;

