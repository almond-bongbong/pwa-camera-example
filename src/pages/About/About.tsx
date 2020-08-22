import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div>
      <Helmet>
        <link rel="manifest" href={`${process.env.PUBLIC_URL}/about-manifest.json`} />
      </Helmet>
      <span>Hello About</span>
    </div>
  );
}

export default About;
