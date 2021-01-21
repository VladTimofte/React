import React from "react";
import Projects from './Projects'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', {
      headers: {
        "X-Session": "886e2c2eacfd2ea8e020ecff45fd1b1d",
      },
    })

    const projects = (await projectsResponse.json()).projects

    this.setState({projects})
  }

  render() {
      return <Projects projects={this.state.projects}/>
  }
}
export default App;
