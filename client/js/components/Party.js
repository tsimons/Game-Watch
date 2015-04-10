import { Component } from 'react';
import PartyStore from '../stores/partyStore';

export class Party extends Component {
  getInitialState () {
    return PartyStore.getParty();
  }
}
