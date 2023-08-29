import React, { Component } from 'react';
import '../skills.css';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
        <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>My Top Skills</h1>
        <hr />
        <ul className="skills">
          {skills.map((skill, index) =>
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
            >
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}