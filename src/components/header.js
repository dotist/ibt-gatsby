import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image'

import logo from "../images/Black_pencil.svg";

const HeaderWrapper = styled.div`
  background-color: red;
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 30vh;
  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    position: relative;
    z-index: 2;
    > a img {
      height: 80px;
      float: left;
      padding: 0 20px 0 0;
    }
    nav {
      clear: both;
      a {
        color: white !important;
        text-decoration: none;
        padding: 0 10px 0 0
        &:hover {
          text-decoration: underline;
        }
      }

      ul {
        li {
          display: inline-block;
        }
      }
    }
  }
`;


const Header = ({ siteTitle, siteMeta, siteImageSizes }) => (
  <HeaderWrapper>
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
          {siteTitle}
        </Link>
      </h1>
      <h3>{siteMeta}</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
      sizes={siteImageSizes}
    />
  </HeaderWrapper>
)
export default Header

