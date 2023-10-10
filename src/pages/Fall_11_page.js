import React, { Component } from "react";

class Eleventh_Fall_Eval_Page extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      name: "",
      isTeachAgain: "",
      EmotionPresTopic: "",
      EmotionPresFeedback: "",
      EmotionPresHighlight: "",
      EmotionPresActivity: "",
      optionalEmotionPresCritique: "",    
      eval: "_________, it was an absolute pleasure teaching you _________.  I was pleased that you and your classmates created a close-knit, open, and safe environment to study drug education, sex education, and explore various perspectives of emotions. Your presentation on ____ was excellent. I thought you thoroughly explained ______. The highlight of your presentation was _____. Finally, you ended with an excellent activity, ______. _______ was you _____. All in all, I was proud of how, this semester, you consistently showed up to class with a positive outlook, high energy, and eagerness to participate. Overall, you did a great job in SOM, and I enjoyed being your teacher this semester!"
    };
  }

  updateEval = () => {

    const paragraph = `
        ${this.state.name}, it was an absolute pleasure teaching you ${this.state.isTeachAgain}. 
        I was pleased that you and your classmates created a close-knit, open, and safe environment to study drug education, sex education, and explore various perspectives of emotions. 
        Your presentation on ${this.state.EmotionPresTopic} was excellent. I thought you thoroughly explained ${this.state.EmotionPresFeedback}. 
        The highlight of your presentation was ${this.state.EmotionPresHighlight}. Finally, you ended with an excellent activity, ${this.state.EmotionPresActivity}. 
        ${this.state.optionalEmotionPresCritique} 
        I was proud of how, this semester, you consistently showed up to class with a positive outlook, high energy, and eagerness to participate. 
        Overall, you did a great job in SOM, and I enjoyed being your teacher this semester!

    `;
    
    const updatedEval = paragraph
      .replace("${name}", this.state.name)
      .replace("${isTeachAgain}", this.state.isTeachAgain)
      .replace("${EmotionPresTopic}", this.state.EmotionPresTopic)
      .replace("${EmotionPresFeedback}", this.state.EmotionPresFeedback)
      .replace("${EmotionPresHighlight}", this.state.EmotionPresHighlight)
      .replace("${EmotionPresActivity}", this.state.EmotionPresActivity)
      .replace("${optionalEmotionPresCritique}", this.state.optionalEmotionPresCritique)
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
  setEmotionPresTopic = (event) => {
    this.setState({ EmotionPresTopic: event.target.value }, this.updateEval);
  };
  setEmotionPresFeedback = (event) => {
    this.setState({ EmotionPresFeedback: event.target.value }, this.updateEval);
  };
  setEmotionPresHighlight = (event) => {
    this.setState({ EmotionPresHighlight: event.target.value }, this.updateEval);
  };
  setEmotionPresHighlight = (event) => {
    this.setState({ EmotionPresHighlight: event.target.value }, this.updateEval);
  };
  setEmotionPresActivity = (event) => {
    this.setState({ EmotionPresActivity: event.target.value }, this.updateEval);
  };
  setoptionalEmotionPresCritique = (event) => {
    this.setState({ optionalEmotionPresCritique: event.target.value }, this.updateEval);
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
      <div>
        <h2>11th Grade Fall Semester Template</h2>

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
          . I was pleased that you and your classmates created a close-knit, open, and safe environment to study drug education, sex education, and explore various perspectives of emotions. 
        Your presentation on 
            <input
              type="text"
              placeholder='enter their presentation topic here'
              value={this.state.EmotionPresTopic}
              onChange={this.setEmotionPresTopic}
            />
       
        </label>

        <label>
            was excellent. I thought you thoroughly explained
            <input
              type="text"
              placeholder='describe'
              value={this.state.EmotionPresFeedback}
              onChange={this.setEmotionPresFeedback}
            />
        </label>

        <label>
          . The highlight of your presentation was
          <input
              type="text"
              placeholder='describe'
              value={this.state.EmotionPresHighlight}
              onChange={this.setEmotionPresHighlight}
          />
            
        </label>

        <label>
          . Finally, you ended with an excellent activity, 
            <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.EmotionPresActivity}
              onChange={this.setEmotionPresActivity}
            />
        </label>

        <label>
            . 
            <input
              type="text"
              placeholder='(optional critique)'
              value={this.state.optionalEmotionPresCritique}
              onChange={this.setoptionalEmotionPresCritique}
            />
             . I was proud of how, this semester, you consistently showed up to class with a positive outlook, high energy, and eagerness to participate. 
        Overall, you did a great job in SOM, and I enjoyed being your teacher this semester!
        </label>

       

       
        <div>
          <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
          {this.state.copied && <p>The eval has been copied to the clipboard!</p>}
       </div>
      </div>
      
    );
  }
}

export default Eleventh_Fall_Eval_Page;