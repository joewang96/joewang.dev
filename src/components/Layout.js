import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './layout.css';
import Footer from './Footer';
import { SIZES } from '../tokens';

const Main = styled.main``;

const Content = styled.div`
  opacity: ${({ mounted }) => (mounted ? 1 : 0)};
  transition: 500ms opacity ease-in-out;
  padding: 0 60px;
  max-width: ${SIZES.MAX_WIDTH};
  margin: 0 auto;
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
        <Main>{children}</Main>
        <Footer />
      </Content>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
