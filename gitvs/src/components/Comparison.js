/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React, { Component } from 'react'
import './Profile1Phone.css'
import Commit from './Commit'
import './progressBar.css'
import Follower from './Follower'
import PublicGists from './PublicGists'
import ResultOfFight from './ResultOfFight'

class Comparison extends Component {
  constructor() {
    super()
    this.state = {
      isResultIsVisible: false,
    }
    this.resultAppear = this.resultAppear.bind(this)
  }

  resultAppear() {
    this.setState({ isResultIsVisible: true })
  }

  buttonSubmit() {
    this.resultAppear()
  }

  render() {
    return (
      <div id="comparison">
        <div className="VS-phone">
        </div>
        <div className="boxProgressBar">
          <div className='threeBarOfFight'>
            <p className='titleOfStat'>Public Repo</p>
            <Commit
              firstUserRepos={this.props.firstUserRepos}
              secondUserRepos={this.props.secondUserRepos}
            />
            <p className='titleOfStat'>Followers</p>
            <Follower
              firstUserFollowers={this.props.firstUserFollowers}
              secondUserFollowers={this.props.secondUserFollowers}
            />
            <p className='titleOfStat'>Public Gists</p>
            <PublicGists
              firstUserPublic_Gists={this.props.firstUserPublic_Gists}
              secondUserPublic_Gists={this.props.secondUserPublic_Gists}
            />
            {this.state.isResultIsVisible
              ? (
                  // <p>Results Of Fight</p>
                <ResultOfFight
                  firstUserRepos={this.props.firstUserRepos}
                  secondUserRepos={this.props.secondUserRepos}
                  firstUserFollowers={this.props.firstUserFollowers}
                  secondUserFollowers={this.props.secondUserFollowers}
                  firstUserPublic_Gists={this.props.firstUserPublic_Gists}
                  secondUserPublic_Gists={this.props.secondUserPublic_Gists}
                />
              )

              : null}
          </div>
        </div>
        <button type="button" value="Masquer" onClick={e => this.buttonSubmit(e)}>Résults of fight !</button>
      </div>
    )
  }
}


export default Comparison
