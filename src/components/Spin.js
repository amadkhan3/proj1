import React from 'react';
import './Spin.css'
import { Layout } from 'element-react';
import Roulette from 'react-roulette-game';

import 'element-theme-default';

import highlight_img from '../assets/hightlight.png'
import pointer_img from '../assets/pointer.png'
import roulette_img_under_highlight from '../assets/rou_under_high.png'
import roulette_img_on_highlight from '../assets/rou_on_high.png'

const onComplete = (prize) => {
  console.log(prize);
}

const roulette_props = {
  roulette_img_under_highlight,
  roulette_img_on_highlight,
  highlight_img,
  pointer_img,
  prize_arr: [
    'Baseball',
    'Rugby',
    'Tennis',
    'Soccer',
    'Badminton',
    'Basketball',
  ],
  start_text: 'SPIN',
  on_complete: onComplete
}

const Spin = () => (
  <Layout.Row type="flex">
    <Layout.Col span="14"></Layout.Col>
    <Layout.Col span="8" style={{ marginTop: '10vh'}}>
      <div className='game-box'>
        <Roulette {...roulette_props} />
      </div>
    </Layout.Col>
  </Layout.Row>
)

export default Spin;
