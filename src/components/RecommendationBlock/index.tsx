//core
import React from 'react';
import Slider from "react-slick";

//components
import RecommendationItem from '../RecommendationItem';

// styles
import styles from './styles/styles.module.scss';
import './styles/slider-theme.scss';
import Error from "../Error";
import Loader from "../Loader";

//hooks
import { useRecommended } from '../../stores/recommended/useRecommended'


// test data
const data = [
  {
    id: '1',
    //url: string;
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    album: 'На дистанции',
    title: 'Epizode #12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    id: '2',
    //url: string;
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    album: 'На дистанции',
    title: 'Epizode #12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    id: '3',
    //url: string;
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    album: 'На дистанции',
    title: 'Epizode #12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    id: '4',
    //url: string;
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    album: 'На дистанции',
    title: 'Epizode #12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    id: '5',
    //url: string;
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    album: 'На дистанции',
    title: 'Epizode #12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },

];

const RecommendationBlock: React.FC = () => {

  const { isFetching, error, data } = useRecommended();

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
    rows: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        }
      },
    ]
  };

  // slides
  const slides = data && data.map((item)  => {
    return (
      <div key={item.id} className={styles.slide}>
        <RecommendationItem data={item} />
      </div>
    );
  });

  //Slider
  const slider = (
    <Slider className={styles.slider} {...settings}>
      {slides}
    </Slider>
  );

  const recommendation = <div className={styles.recommendation}>
    <div className={styles.title}>Стоит послушать</div>
    <div className={styles.content}>
      {slider}
    </div>
  </div>;

  return (
    <>
      { errorMessage }
      { loader }
      { recommendation }
    </>
  );
};

export default RecommendationBlock;
