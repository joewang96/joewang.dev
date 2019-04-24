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
  max-width: 1600px;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      menuActive: false,
    };

    this.onMenuActive = this.onMenuActive.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }));
  }

  onMenuActive(menuActive) {
    this.setState({ ...this.state, menuActive });
    document.body.style.overflow = menuActive ? 'hidden' : null;
  }

  render() {
    const { children } = this.props;
    const { mounted, menuActive } = this.state;
    return (
      <Content mounted={mounted}>
        <Header onMenuActive={this.onMenuActive} />
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
