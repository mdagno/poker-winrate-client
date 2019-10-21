import React from 'react';
import ApiService from '../services/api-service';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';
import './EditSession.css'

export default class EditSession extends React.Component {

  state = {
    game_type_one: 'Live',
    game_type_two: 'Cash',
    small_blind: null,
    big_blind: null,
    buy_in: null,
    cashed_out: null,
    session_length: null,
    notes: '',
  }

  static contextType = ApiContext;

  componentDidMount() {
    const sessionId = this.props.match.params.session_id
    ApiService.getSessionById(sessionId)
    .then(res => {
      this.setState({
        game_type_one: res.game_type_one,
        game_type_two: res.game_type_two,
        small_blind: res.small_blind,
        big_blind: res.big_blind,
        buy_in: res.buy_in,
        cashed_out: res.cashed_out,
        session_length: res.session_length,
        notes: res.notes,
      });
    })
  }

  submitChanges = e => {
    e.preventDefault()
    let updatedSession = this.state;
    let sessionId = this.props.match.params.session_id;
    console.log(sessionId)
    ApiService.updateSession(sessionId, JSON.stringify(updatedSession))
    .then(() => {
    this.context.updateSessionContext(updatedSession);
    this.props.history.push(`/sessions/${sessionId}`);
    })
  }
  
  componentWillUnmount() {
    ApiService.getSessions();
  }

  updateField = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  gameTypeSelect = (gameType, value) => {
    this.setState({
      [gameType]: value,
    })
  console.log('Select ran!')
  }

  render() {
   console.log(this.props.match.params.session_id)
   console.log(this.props)
   console.log(this.state)
    return (
      <form onSubmit={this.submitChanges}>
        <div className='form-row'>
          <label for='gameTypeOne'>Live or Online: </label>
          <select id='gameTypeOne' defaultValue ={this.state.game_type_one} onChange={e => this.gameTypeSelect('game_type_one', e.target.value)}>
            <option value='Live'>Live game</option>
            <option value='Online'>Online game</option>
          </select>
        </div>
        <div className='form-row'>
          <label for='smallBlind'>Small Blind: </label>
          <input className='form-smallBlind' type='number' id='smallBlind' defaultValue ={this.state.small_blind} onChange={e => this.updateField('small_blind', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label for='bigBlind'>Big Blind: </label>
          <input className='form-bigBlind' type='number' id='bigBlind' defaultValue ={this.state.big_blind} onChange={e => this.updateField('big_blind', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label for='buyIn'>Buy-in: </label>
          <input className='form-buyin' type='number' id='buyIn' defaultValue ={this.state.buy_in} onChange={e => this.updateField('buy_in', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label for='cashedOut'>Cashed out: </label>
          <input className='form-cashedOut' type='number' id='cashedOut' defaultValue ={this.state.cashed_out} onChange={e => this.updateField('cashed_out', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label for='cashedOut'>Time played: </label>
          <input className='form-SessionLength' type='number' id='sessionLength' defaultValue ={this.state.session_length} onChange={e => this.updateField('session_length', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label for='notes'>Notes: </label>
          <textarea type='text' className='form-notes' id='notes' defaultValue ={this.state.notes} onChange={e => this.updateField('notes', e.target.value)}></textarea>
        </div>
        <div className='form-row'> 
          <button type='submit'>Save</button>
        </div>
      </form>
    )
  }
}