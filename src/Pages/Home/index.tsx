// Core
import React from 'react';

//components
import PodcastSlider from '../../components/PodcastSlider';
import ListenUs from '../../components/ListenUs';

import { MainLayout } from "../../layouts";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <PodcastSlider />
      <h1>Home page</h1>
      <ListenUs />
    </MainLayout>
  );
};

export default Home;
