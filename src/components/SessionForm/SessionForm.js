import React from 'react'
import './SessionForm.css'
import ApiContext from '../../ApiContext';
import ApiService from '../../services/api-service'

export default class SessionForm extends React.Component {
  static contextType = ApiContext;
  constructor(props){
    super(props)
    this.state = {
        game_type_one: 'Live',
        game_type_two: 'Cash',
        small_blind: 0,
        big_blind: 0,
        buy_in: null,
        cashed_out: null,
        session_length: null,
        notes: '',
      }
  }

  renderSessionForm = () => {
    let sessionForm = this.state.game_type_two
    let renderedForm = '';
    if(sessionForm === 'Cash'){
      renderedForm = (
      <fieldset>
        <div className='form-row'>
          <label htmlFor='gameTypeOne'>Live or Online</label>
          <select id='gameTypeOne' defaultValue ='Live' onChange={e => this.gameTypeSelect('game_type_one', e.target.value)}>
            <option value='Live'>Live game</option>
            <option value='Online'>Online game</option>
          </select>
        </div>
        <div className='form-row'>
          <label htmlFor='smallBlind'>Small Blind</label>
          <input className='form-smallBlind' type='number' id='smallBlind' min='0.01' step='0.01' onChange={e => this.updateField('small_blind', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='bigBlind'>Big Blind</label>
          <input className='form-bigBlind' type='number' id='bigBlind' min='0.01' step='0.01' onChange={e => this.updateField('big_blind', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='form-buyIn'>Buy-in</label>
          <input className='form-buyIn' type='number' step='0.01' onChange={e => this.updateField('buy_in', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='cashedOut'>Cashed out</label>
          <input className='form-cashedOut' type='number' id='cashedOut' step='0.01' onChange={e => this.updateField('cashed_out', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='cashedOut'>Hours played</label>
          <input className='form-SessionLength' type='number' id='sessionLength' step='0.1' onChange={e => this.updateField('session_length', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='notes'>Notes</label>
          <textarea type='text' className='form-notes' id='notes' onChange={e => this.updateField('notes', e.target.value)}></textarea>
        </div>
        <div className='form-row'> 
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </div>
      </fieldset>
      )}

      else if(sessionForm === 'Tournament'){
        renderedForm = (
        <fieldset>
          <div className='form-row'>
          <label htmlFor='gameTypeOne'>Live or Online: </label>
          <select id='gameTypeOne' defaultValue ='Live' onChange={e => this.gameTypeSelect('game_type_one', e.target.value)}>
            <option value='Live'>Live game</option>
            <option value='Online'>Online game</option>
          </select>
        </div>
        <div className='form-row'>
          <label htmlFor='form-buyIn'>Buy-in: </label>
          <input className='form-buyin' type='number' step='0.01' onChange={e => this.updateField('buy_in', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='form-cashedOut'>Cashed out: </label>
          <input className='form-cashedOut' type='number' id='cashedOut' step='0.01' onChange={e => this.updateField('cashed_out', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='form-sessionLength'>Hours played: </label>
          <input className='form-sessionLength' type='number' id='sessionLength' step='0.1' onChange={e => this.updateField('session_length', e.target.value)}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='notes'>Notes: </label>
          <textarea type='text' className='form-notes' id='notes' onChange={e => this.updateField('notes', e.target.value)}></textarea>
        </div>
        <div className='form-row'> 
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </div>
      </fieldset>
      )
    }
      return renderedForm;
  }
 
  handleSessionSubmit = e => {
    e.preventDefault();
    let newSession = JSON.stringify(this.state)
    ApiService.addSession(newSession)
    .then(res => {
      this.context.addSessionContext(res)
      this.props.history.push('/')
    }) 
  }

  updateField = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  gameTypeSelect = (gameType, value) => {
    this.setState({
      [gameType]: value,
      small_blind: 0,
      big_blind: 0
    })
  }

  render(){
    return(
      <div className='addSession'>
      <form onSubmit={this.handleSessionSubmit}>
        <legend>
          <h2>Enter Session Details</h2>
        </legend>
        <div className='form-row gameTypeTwo'>
         <label htmlFor='gameTypeTwo'>Game Type: </label>
          <select id='gameTypeTwo' defaultValue='Cash' onChange={e => this.gameTypeSelect('game_type_two', e.target.value)}>
            <option value='Cash'>Cash Game</option>
            <option value='Tournament'>Tournament</option>
          </select>
        </div>
        {this.renderSessionForm()}
      </form>
      </div>
    )
  }
}