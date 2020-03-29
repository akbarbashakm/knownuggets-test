import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { withLastLocation } from "react-router-last-location";
import styled from "styled-components";
import Report from "./Report";
import Home from "./Home";

const MENU_ITEMS = [{
  name: 'Home',
  pathName: '/'
}, {
  name: 'Assesment - 1',
  pathName: '/assesment-1'
}, {
  name: 'Assesment - 2',
  pathName: '/assesment-2'
}]

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

const LI = styled.li`
  display: block;
  cursor: pointer;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  &:hover:not(.active) {
    background-color: #555;
    a {
      color: white;
    }
  };
  &.active {
    background-color: #4CAF50;
    a {
      color: white;
    }
  }
`;

const RightPlace = styled.div`
  margin-left:25%;
  padding: 5%;
  height: 100%;
`

const App = ({
  location
}) => {
  const { pathname = '/' } = location;
  return (
    <div className="lg-container">
      <div>
        <UL>
          {
            MENU_ITEMS.map(({ name, pathName }, index) => {
              return (
                <LI className={pathName === pathname ? 'active' : ''} key={index}>
                  <Link to={pathName}>{name}</Link>
                </LI>
              )
            })
          }
        </UL>
        <RightPlace>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/assesment-1" exact={true} component={Report} />
          </Switch>
        </RightPlace>
      </div>
    </div>
  )
}

export default withLastLocation(App);
