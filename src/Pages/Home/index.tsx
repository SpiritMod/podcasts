// Core
import React from 'react';

//components
import PodcastSlider from '../../components/PodcastSlider';
import ListenUs from '../../components/ListenUs';
import Grid from '../../components/Grid';

import {MainLayout} from "../../layouts";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <h1>Home page</h1>
            <PodcastSlider/>
            <Grid/>
        </MainLayout>
    );
};

export default Home;
