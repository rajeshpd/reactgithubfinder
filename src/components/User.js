import React, { Component, Fragment } from "react";
// import UserItem from './UserItem'
// import axios from "axios";
import Repo from"./repo/repoList";

class User extends Component {
  componentDidMount = async => {
    this.props.getDetails(this.props.match.params.login);

    this.props.getRepos(this.props.match.params.login);
    console.log(this.props.match.params.login);
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      created_at
      // hireable
    } = this.props.user;
    // const {
    //   public_gists,
    //   public_repos,
    //   following,
    //   followers,

    //   stargazers_count,
    //   watchers_count,
    //   forms_count
    // } = this.props.repos;
    // console.log(this.props.user);
    // const repo = this.props.repos;
    // console.log(repo);
    return (
      <Fragment>
        <div className="card mt-1">
          <div className="grid-2 mt-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt="profile-pic"
                className="round-img"
                style={{ width: "150px" }}
              />
              <div className="text-left">
                <h1>{name}</h1>
                {location && <p>Location: {location}</p>}
                <p>Hireable: </p>
              </div>
            </div>

            <div>
              {bio && (
                <div>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </div>
              )}
              <div>
                <a href={html_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && name && (
                      <Fragment>
                        <b>Username: {name}</b>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <b>Company: {company}</b>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <b>Website: {blog}</b>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {created_at && (
                      <Fragment>
                        <b>Member Since : {created_at}</b>
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gist: {public_gists}</div>
          </div>
        </div>
        <Repo repos={this.props.repos} />
      </Fragment>
    );
  }
}
export default User;
