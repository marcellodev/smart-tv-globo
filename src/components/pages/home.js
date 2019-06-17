import React from 'react';

import Menu from '../../api/api.json'
import movies from '../../api/movies.json'

import Page from '../templates/page';
import Sidebar from '../organisms/Sidebar';
import Rail from '../organisms/Rail';


const Home = () => (
  <Page>
    <Sidebar data={Menu}/>
    <Rail data={movies}/>
  </Page>
);

export default Home