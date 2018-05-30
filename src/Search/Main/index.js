import React, { Component } from "react";
import styled from "styled-components";
import flightsData, { filters } from "./data.js";

import MobileFlightsList from "./MobileFlightsList";
import FiltersPane from "./FiltersPane";
import TabletFlightsList from "./TabletFlightsList";

const StyledMain = styled.main`
  background: #eaeaea;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersCollapsed: props.width < 768
    };
  }

  render() {
    return (
      <StyledMain>
        <div className="hidden-md hidden-lg hidden-xl">
          <MobileFlightsList flights={flightsData} />
          <button>Filter</button>
        </div>

        <div className="container hidden-xs">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3">
              {this.state.filtersCollapsed ? (
                <button>Filters</button>
              ) : (
                <FiltersPane filters={filters} />
              )}
            </div>
            <div className="col-md-12 col-lg-9 col-xl-7">
              <TabletFlightsList flights={flightsData} />
              <button>Filter</button>
            </div>
            <div className="col-lg-offset-2" />
          </div>
        </div>
      </StyledMain>
    );
  }
}
