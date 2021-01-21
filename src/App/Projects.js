import React from "react";

export default class Projects extends React.Component {
	render() {
	  const projectsList = this.props.projects.map( project => {
		return <div key={project.id}>{project.name}</div>
	  })
	  return <div>{projectsList}</div>
	}
}

async function getProject() {
	await fetch("https://app.paymoapp.com/api/projects/", {
	  headers: {
		"X-Session": "886e2c2eacfd2ea8e020ecff45fd1b1d",
	  },
	})
	  .then((res) => res.json())
	  .then((data) => {
		console.log(data);
		projects = data;
	  });
	return projects;
  }