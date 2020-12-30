import React from 'react';

import styles from './styles/styles.module.scss';
import stylesItemSong from './../ItemSong/styles/styles.module.scss';

//components
import ItemSong from '../ItemSong';
import ListenUs from "../ListenUs";
import LoadMoreLink from "../LoadMoreLink";

// test data
const data = [
  {
    id: '1',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-2.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '2',
    colorFirst: '#F8FF13',
    colorSecond: '#ED22FF',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '3',
    colorFirst: '#F8FF13',
    colorSecond: '#6704FF',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '4',
    colorFirst: '#80F983',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '5',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '6',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '7',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '8',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '9',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '10',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '11',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '12',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '13',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '14',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '15',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '16',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '17',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
  {
    id: '18',
    colorFirst: '#6704FF',
    colorSecond: '#F8FF13',
    imgUrl: 'https://test.fmw.pm/podcasts/public/images/podcast/img-1.png',
    podcast: 'На дистанции',
    epizode: 'Epizode #12',
    epizodeUrl: '#',
    podcastUrl: '#',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '                            labore et dolore magna aliqua.\n' +
      '                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n' +
      '                            commodo\n' +
      '                            consequat.\n' +
      '                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
      '                            pariatur.\n' +
      '                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n' +
      '                            anim\n' +
      '                            id est laborum.\n' +
      '                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque\n' +
      '                            laudantium,\n' +
      '                            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae\n' +
      '                            vitae\n' +
      '                            dicta sunt, explicabo.',
  },
];

const Grid: React.FC = () => {

  const firstcols = data.map((item, index) => {
    return (
      index < 4 && (
        <div key={item.id} className={styles.col}>
          <ItemSong data={item} dataKey={index + 1} className={stylesItemSong.type_first}/>
        </div>
      )
    )
  });

  const secondcols = data.map((item, index) => {
    return (
      (index > 3 && index < 6) && (
        <div key={item.id} className={styles.col}>
          <ItemSong dataKey={index - 3} data={item} className={stylesItemSong.type_second}/>
        </div>
      )
    )
  });

  const thirdcols = data.map((item, index) => {
    return (
      index > 5 && (
        <div key={item.id} className={styles.col}>
          <ItemSong dataKey={index - 5} data={item} className={stylesItemSong.type_third}/>
        </div>
      )
    )
  });

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.first_grid}>
          <div className={styles.container}>
            {firstcols}
          </div>
        </div>
        <ListenUs/>
        <div className={styles.second_grid}>
          <div className={styles.container}>
            {secondcols}
          </div>
        </div>
        <div className={styles.third_grid}>
          <div className={styles.container}>
            {thirdcols}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <LoadMoreLink />
      </div>
    </>
  )
};

export default Grid;
