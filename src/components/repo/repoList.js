import React from "react";
import RepoItem from "./Repoitem";

const RepoList = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default RepoList;
