import React from 'react'
import './SessionForm.css'

export default class SessionForm extends React.Component {
  render(){
    return(
      <form>
        <legend>
          <h2>Enter Session Details</h2>
        </legend>
        <fieldset>
          <div className='form-row'>
            <label for='live-or-online'>Live or Online: </label>
            <select>
              <option value='Live'>Live game</option>
              <option value='Online'>Online game</option>
            </select>
          </div>
          <div className='form-row'>
          <label for='cash-or-tourney'>Cash or Tournament: </label>
            <select>
              <option value='Cash'>Cash Game</option>
              <option value='Tournament'>Tournament</option>
            </select>
          </div>
          <div className='form-row'>
            <label for='bigBlind'>Big Blind: </label>
            <input className='form-bigBlind' type='text'></input>
          </div>
          <div className='form-row'>
            <label for='buyIn'>Buy-in: </label>
            <input className='form-buyin' type='number'></input>
          </div>
          <div className='form-row'>
            <label for='cashedOut'>Cashed out: </label>
            <input className='form-cashedOut' type='number'></input>
          </div>
          <div className='form-row'>
            <label for='notes'>Notes: </label>
            <textarea type='text' className='form-notes'></textarea>
          </div>
          <div className='form-row'> 
            <button>Submit</button>
            <button>Cancel</button>
          </div>
        </fieldset>
      </form>
    )
  }
}