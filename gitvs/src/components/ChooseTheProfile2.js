/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import GetProfile2 from './GetProfile2'
import filterLanguages from './filterLanguages'

class ChooseTheProfile2 extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      location: null,
      avatar_url: null,
      public_repos: null,
      userLanguage: null,
      isCardIsVisible: false,
    }
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response;
      })
  }

  getUserLanguage(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => filterLanguages(response))
      .then(response => response)
  }

  cardAppear() {
    this.setState({ isCardIsVisible: true })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const user = await this.getUser(this.refs.username.value)
    const preferLanguage = await this.getUserLanguage(this.refs.username.value)
    this.setState({
      username: user.login,
      avatar_url: user.avatar_url,
      location: user.location,
      public_repos: user.public_repos,
      userLanguage: preferLanguage,
    })
    this.cardAppear()
  }

  async buttonSubmit(e) {
    e.preventDefault()
    const user = await this.getUser(this.refs.username.value)
    const preferLanguage = await this.getUserLanguage(this.refs.username.value)
    this.setState({
      username: user.login,
      avatar_url: user.avatar_url,
      location: user.location,
      public_repos: user.public_repos,
      userLanguage: preferLanguage,
    })
    this.cardAppear()
  }

  render() {
    return (
      <div>
        <div id="WelcomePage">
          <h1>Choose an another profile</h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input ref={"username"} type="text" placeholder="username" />
            <button type="button" onClick={e => this.buttonSubmit(e)}>Search</button>
          </form>
          <div id={this.state.isCardIsVisible ? 'ProfileOn' : 'ProfileOff'}>
            <GetProfile2
              firstAvatar_Url={this.props.location.state.avatar_url}
              firstUsername={this.props.location.state.username}
              firstUserLocation={this.props.location.state.location}
              firstUserLanguage={this.props.location.state.userLanguage}
              username={this.state.username}
              avatar_url={this.state.avatar_url}
              public_repos={this.state.public_repos}
              location={this.state.location}
              userLanguage={this.state.userLanguage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseTheProfile2
