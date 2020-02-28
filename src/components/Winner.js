import React from 'react';
import './Winner.css'
import { Layout, Button } from 'element-react';

import 'element-theme-default';
import imgSrc from '../assets/screen.png'


const Winner = () => (
  <div className="winner">
  <Layout.Row type="flex">
    <Layout.Col span={16} offset={4}>
      <div className="prize-container">
        <div className="congrats">Congratulations</div>
        <div className="greetings">
          <span>YOU HAVE WON</span>
          <div className="prize-name">40" LCD</div>
        </div>
        <img src={imgSrc} className="image" />
      </div>
    </Layout.Col>
  </Layout.Row>

  <Layout.Row>
    <Layout.Col span={6} offset={18}>
      <Button type="success" size="large">Claim Gift</Button>
    </Layout.Col>
  </Layout.Row>
  </div>
);

// const fireworks = new FireworksCanvas(Winner)

export default Winner;
