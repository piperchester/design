// ==================================================
// Layout
// ==================================================

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
require('../../styling/root.less');

const Layout = ({ children }) => (
  <div className="row">
    <Helmet
      title="MongoDB Design System"
      meta={[
        { name: 'description', content: 'Design resources from MongoDB, Inc.' }
      ]}
    />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"></script>
    <div className="columns small-12">
      <div className="header row">
        <div className="columns small-12">
          <div clasName="row">
            <div className="brand columns small-4">
              <h1><Link to="/">MongoDB Design</Link></h1>
            </div>
            <div className="navigation columns small-8">
              <Link to="/brand-design-system">Brand &amp; Identity</Link>
              <Link to="/ui-design-system">UI Design System</Link>
              <Link to="/">Tools &amp; Resources</Link>
              <a href="http://mongodb.com/careers" target="_blank">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
