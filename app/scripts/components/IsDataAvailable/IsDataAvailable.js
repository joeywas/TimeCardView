/*
 * TimeCard View
 * Copyright ©2015 Thomas Nelson, Jacob Nichols, David Opp, Todd Brochu,
Andrew McGown, Sasha Fahrenkopf, Cameron B. White.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE text file in the root directory of this source tree.
 */
import React from 'react';
import FluxComponent from 'flummox/component'

export default class IsDataAvailable extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['kronos']}>
        <Inner {...this.props} />
      </FluxComponent> 
    )
  }
}

class Inner extends React.Component {
  render() {
    if (this.props.timesheet.length == 0) {
      return null
    } else {
      return this.props.children
    }
  }
}
