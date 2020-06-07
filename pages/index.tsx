import React from "react";
import { connect } from "react-redux";
// import Link from "next/link";
import { Route, Link, Switch } from 'react-router-dom';
import AddChild from "./addChild";

class Preschool extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    // reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  // componentDidMount() {
  //   // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
  //   // TO TICK THE CLOCK
  //   this.timer = setInterval(() => this.props.startClock(), 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    return (
      <div>
        <Link to='/addChild'>Register a Child</Link>

        <Switch>
          <Route path='/addChild' exact component={AddChild} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(Preschool);
