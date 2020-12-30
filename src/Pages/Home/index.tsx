// Core
import React from 'react';

//components
import PodcastSlider from '../../components/PodcastSlider';
import Grid from '../../components/Grid';

import {MainLayout} from "../../layouts";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <PodcastSlider/>
      <Grid/>
    </MainLayout>
  );
};

export default Home;
