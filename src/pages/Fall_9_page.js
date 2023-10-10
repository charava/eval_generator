import React, { Component } from "react";

class Ninth_Fall_Eval_Page extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      name: "",
      isTeachAgain: "",
      reflection: "",
      AgreeStatement: "",
      hope: "",
      eval: "_________, it was an absolute pleasure teaching you _________. I was proud of you and your classmates for creating a close-knit, open, and safe environment to explore sleep science, drug education, sex education, and various perspectives of the Nueva experience. Additionally, I was pleased with your engagement in learning about strategies to cope with procrastination and perfectionism and your reflection on what resilience means to you. I loved your reflection on _________. I agree that _________. I hope that you continue to _________. Finally, I was proud of you this semester to consistently show up to class with a positive outlook, high energy, and eagerness to participate. All in all, you did a great job in SOM, and it was a pleasure teaching you this semester."
    };
  }

  updateEval = () => {

    const paragraph = `

        ${this.state.name}, it was an absolute pleasure teaching you ${this.state.isTeachAgain}. 
        I was proud of you and your classmates for creating a close-knit, open, and safe environment to explore sleep science, drug education, sex education, and various perspectives of the Nueva experience. 
        Additionally, I was pleased with your engagement in learning about strategies to cope with procrastination and perfectionism and your reflection on what resilience means to you.
        I loved your reflection on ${this.state.reflection}
        I agree that ${this.state.AgreeStatement}. 
        I hope that you continue to ${this.state.hope}.
        Finally, I was proud of you this semester to consistently show up to class with a positive outlook, high energy, and eagerness to participate. 
        All in all, you did a great job in SOM, and it was a pleasure teaching you this semester.
    `;
    
    const updatedEval = paragraph
      .replace("${name}", this.state.name)
      .replace("${isTeachAgain}", this.state.isTeachAgain)
      .replace("${reflection}", this.state.reflection)
      .replace("${AgreeStatement}", this.state.AgreeStatement)
      .replace("${hope}", this.state.hope)
    this.setState({ eval: updatedEval });
  };

  copyToClipboard = () => {
    // // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = this.state.eval;

    // Append the textarea to the DOM
    document.body.appendChild(tempTextArea);

    // Select the text within the textarea
    tempTextArea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Update the state to indicate that the text has been copied
    this.setState({ copied: true });
  };



  setName = (event) => {
    this.setState({ name: event.target.value }, this.updateEval);
  };
  setIsTeachAgain = (event) => {
    this.setState({ isTeachAgain: event.target.value }, this.updateEval);
  };
  setReflection = (event) => {
    this.setState({ reflection: event.target.value }, this.updateEval);
  };
  setAgreeStatement = (event) => {
    this.setState({ AgreeStatement: event.target.value }, this.updateEval);
  };
  setHope = (event) => {
    this.setState({ hope: event.target.value }, this.updateEval);
  };

//   copied: false,
//   name: "",
//   isTeachAgain: "",
//   openSessionMesage: "",
//   mhFeedback: "",
//   EmotionPresTopic: "",
//   EmotionPresFeedback: "",
//   EmotionPresHighlight: "",
//   EmotionPresActivity: "",
//   optionalEmotionPresCritique: "",    

  render() {
    return (
      <div className="evalBody">
        <h2>9th Grade Fall Semester Template</h2>

        <div className="current_eval_div">
          <h2>Current Eval:</h2>
          <p>{this.state.eval}</p>
        </div>

        <div className="type_in_div">
          <h2>Customize the eval below:</h2>
        </div>

        <label>
          <input
            type="text"
            placeholder='name'
            value={this.state.name}
            onChange={this.setName}
          />
        </label>

       
        <label>
        , it was an absolute pleasure teaching you  
          <select
            value={this.state.isTeachAgain}
            onChange={this.setIsTeachAgain}
          >
            <option value=" "> </option>
            <option value="again"> again</option>
            <option value="this semester"> this semester</option>
          </select>
        </label>

        <label>
        I was proud of you and your classmates for creating a close-knit, open, and safe environment to explore sleep science, drug education, sex education, and various perspectives of the Nueva experience. 
        Additionally, I was pleased with your engagement in learning about strategies to cope with procrastination and perfectionism and your reflection on what resilience means to you.
        I loved your reflection on 
            <input
              type="text"
              placeholder='enter their presentation topic here'
              value={this.state.reflection}
              onChange={this.setReflection}
            />
       
        </label>

        <label>
        . I agree that 
       
            <input
              type="text"
              placeholder='describe'
              value={this.state.AgreeStatement}
              onChange={this.setAgreeStatement}
            />
        </label>

        <label>
        . I hope that you continue to 
        
          <input
              type="text"
              placeholder='describe'
              value={this.state.hope}
              onChange={this.setHope}

          />
            Finally, I was proud of you this semester to consistently show up to class with a positive outlook, high energy, and eagerness to participate. 
        All in all, you did a great job in SOM, and it was a pleasure teaching you this semester. 
        </label>

      
        <div>
          <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
          {this.state.copied && <p>The eval has been copied to the clipboard!</p>}
       </div>
      </div>
      
    );
  }
}

export default Ninth_Fall_Eval_Page;