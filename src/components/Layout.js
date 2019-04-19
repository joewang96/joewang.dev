import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import './layout.css';
import Footer from './Footer';

const Content = styled.div`
  opacity: ${({ mounted }) => (mounted ? 1 : 0)};
  transition: 500ms opacity ease-in-out;

  margin: 0 auto;
  max-width: 1440px;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }));
  }

  render() {
    const { children } = this.props;
    const { mounted } = this.state;
    return (
      <Content mounted={mounted}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Content>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
