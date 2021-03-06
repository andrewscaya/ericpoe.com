import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Colophon from './colophon';
import './index.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <section
          id="children"
          className="flex flex-col flex-1 max-w-xl mx-auto w-full px-4 py-1 md:p-4"
        >
          {children}
        </section>
        <section
          id="colophon"
          className="flex flex-col flex-1 max-w-xl mx-auto w-full px-4 py-1 md:p-4 border-t-4 border-purple-darkest"
        >
          <Colophon />
        </section>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
