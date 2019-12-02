/* eslint-disable react/no-string-refs */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import GetProfile from './GetProfile'
import filterLanguages from './filterLanguages'

class WelcomePage extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      location: null,
      avatar_url: null,
      public_repos: null,
      userLanguage: null,
      followers: null,
      public_gists: null,
      isCardIsVisible: false,
    }
    this.cardAppear = this.cardAppear.bind(this)
  }

  componentDidMount() {
    this.getUser()
    this.getUserLanguage()
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
  }

  getUserLanguage(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => filterLanguages(response))
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
      followers: user.followers,
      public_gists: user.public_gists,
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
      followers: user.followers,
      public_gists: user.public_gists,
      userLanguage: preferLanguage,
    })
    this.cardAppear()
  }

  cardAppear() {
    this.setState({ isCardIsVisible: true })
  }

  render() {
    return (
      <div>
        <div id="WelcomePage">
          <div className="title">
            <h1>Welcome to Git Versus </h1>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input ref="username" type="text" placeholder="username" />
            <button type="button" onClick={e => this.buttonSubmit(e)}>Search</button>
          </form>
          <div id={this.state.isCardIsVisible ? 'ProfileOn' : 'ProfileOff'}>
            <GetProfile
              username={this.state.username}
              avatar_url={this.state.avatar_url}
              public_repos={this.state.public_repos}
              location={this.state.location}
              followers={this.state.followers}
              public_gists={this.state.public_gists}
              userLanguage={this.state.userLanguage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage
