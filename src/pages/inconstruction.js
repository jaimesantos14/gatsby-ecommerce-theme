import React, { useState } from 'react';
import * as styles from './inconstruction.module.css';
import logo from '../../static/icon/s2d_transparent.png';

const InConstructionPage = (props) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src={logo} />
        <p>
          In construction
        </p>
        <a
          className={styles.linkContainers}
          href="https://www.youtube.com/@sorry2disappointnyc"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default InConstructionPage;
