import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image'

import logo from "../images/Black_pencil.svg";

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '50vh' : '20vh')};
  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    > a img {
      height: 80px;
      float: left;
      padding: 0 20px 0 0;
    }
    nav {
      clear: both;
    }
  }
`;

const MainNav = styled.div`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: sans-serif;
      a {
        color: white !important;
        text-decoration: none;
        padding: 0 10px 0 0
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname != prevProps.location.pathname) {
      if (this.props.location.pathname == '/') {
        this.wrapper.animate([
          { height: "20vh" },
          { height: "50vh" },
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1,
        })
      }
      else {
        this.wrapper.animate([
          { height: "50vh" },
          { height: "20vh" },
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1,
        })
      }
    }
  }

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={this.props.location.pathname == '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <div>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          <img src={logo} alt="IBT logo test" />
          </Link>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
          <h3>{this.props.siteMeta}</h3>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </div>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          sizes={this.props.siteImageSizes}
        />
      </HeaderWrapper>
    )
  }

}
