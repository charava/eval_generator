import React, { Component } from "react";

class Eleventh_Spring_Eval_Page extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      name: "",
      isTeachAgain: "",
      openSessionMesage: "",
      mhFeedback: "",
      specificMHLesson: "",
      specificMHLessonFeedback: "",
      groupPresTopic: "",
      groupPresAppreciate: "",
      groupPresDescribe: "",
      groupPresStatement: "",
      groupPresAgree: "",
      customSentence: "",
      eval: "_________, it was an absolute pleasure teaching you _________. During open sessions, you gave _________. Additionally, throughout the mental health unit, you _________. For example, during the lesson on ____________, you ______________. Your group presentation on ___________ was excellent. I appreciated the important dialogue that _____________.  I thought your group did a thorough job describing _______. Finally, your statement that ________ was well supported. I agree with you that ___________. All in all, you did a wonderful job this semester of SOM. ______________________. It was a pleasure being your teacher, and I wish you all the best for a joyful and rejuvenating summer!"
    };
  }

  updateEval = () => {

    const paragraph = `
        ${this.state.name}, it was an absolute pleasure teaching you ${this.state.isTeachAgain}. During open sessions, you ${this.state.openSessionMesage}. \n
        Additionally, throughout the mental health unit, you ${this.state.mhFeedback}. 
        For example, during the lesson on ${this.state.specificMHLesson}, you ${this.state.specificMHLessonFeedback}.
        Your group presentation on ${this.state.groupPresTopic} was excellent. I appreciated the important dialogue that ${this.state.groupPresAppreciate}. 
        I thought your group did a thorough job describing ${this.state.groupPresDescribe}. 
        Finally, your statement that ${this.state.groupPresStatement} was well supported. 
        I agree with you that ${this.state.groupPresAgree}.
        All in all, you did a wonderful job this semester of SOM. ${this.state.customSentence} It was a pleasure being your teacher, and I wish you all the best for a joyful and rejuvenating summer!
    
    `;
    
    
    const updatedEval = paragraph
      .replace("${name}", this.state.name)
      .replace("${isTeachAgain}", this.state.isTeachAgain)
      .replace("${openSessionMessage}", this.state.openSessionMesage)
      .replace("${mhFeedback}", this.state.mhFeedback)
      .replace("${specificMHLesson}", this.state.specificMHLesson)
      .replace("${groupPresTopic}", this.state.groupPresTopic)
      .replace("${groupPresAppreciate}", this.state.groupPresAppreciate)
      .replace("${groupPresDescribe}", this.state.groupPresDescribe)
      .replace("${groupPresStatement}", this.state.groupPresStatement)
      .replace("${groupPresAgree}", this.state.groupPresAgree)
      .replace("${customSentence}", this.state.customSentence)
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
  setOpenSessionMessage = (event) => {
    this.setState({ openSessionMesage: event.target.value }, this.updateEval);
  }; 
  setMHFeedback = (event) => {
    this.setState({ mhFeedback: event.target.value }, this.updateEval);
  };
  setSpecificMHLesson = (event) => {
    this.setState({ specificMHLesson: event.target.value }, this.updateEval);
  };
  setSpecificMHLessonFeedback = (event) => {
    this.setState({ specificMHLessonFeedback: event.target.value }, this.updateEval);
  };
  setGroupPresTopic = (event) => {
    this.setState({ groupPresTopic: event.target.value }, this.updateEval);
  };
  setGroupPresAppreciate = (event) => {
    this.setState({ groupPresAppreciate: event.target.value }, this.updateEval);
  };
  setGroupPresDescribe = (event) => {
    this.setState({ groupPresDescribe: event.target.value }, this.updateEval);
  };
  setGroupPresStatement = (event) => {
    this.setState({ groupPresStatement: event.target.value }, this.updateEval);
  };
  setGroupPresAgree = (event) => {
    this.setState({ groupPresAgree: event.target.value }, this.updateEval);
  };
  setCustomSentence = (event) => {
    this.setState({ customSentence: event.target.value }, this.updateEval);
  };
  


  render() {
    return (
      <div>
        <h2>11th Grade Spring Semester Template</h2>


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
          . During open sessions, you gave 
          <select
            value={this.state.openSessionMesage}
            onChange={this.setOpenSessionMessage}
         >
            <option value=" "> </option>
            <option value="gave wonderful feedback and advice to your peers.">  gave wonderful feedback and advice to your peers.</option>
            <option value="were an active participant."> were an active participant.</option>
          </select>
        </label>

        <label>
          . Additionally, throughout the mental health unit, you
          <select
            value={this.state.mhFeedback}
            onChange={this.setMHFeedback}
          >
            <option value=" "> </option>          
            <option value=" added helpful knowledge and perspectives">  added helpful knowledge and perspectives</option>
            <option value=" spoke eloquently and thoughtfully about the different perspectives and were inclusive of other voices"> spoke eloquently and thoughtfully about the different perspectives and were inclusive of other voices</option>
          </select>
        </label>

        <label>
          . For example, during the lesson on 
          <select
            value={this.state.specificMHLesson}
            onChange={this.setSpecificMHLesson}
          >
            <option value=" "> </option>
            <option value=" pop culture"> pop culture</option>
            <option value=" friendship dynamics"> friendship dynamics</option>
          </select>
        </label>


        <label>
          , you 
            <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.specificMHLessonFeedback}
              onChange={this.setSpecificMHLessonFeedback}
            />
        </label>

        <label>
        . Your group presentation on
            <input
              type="text"
              placeholder='enter group presentation here'
              value={this.state.groupPresTopic}
              onChange={this.setGroupPresTopic}
            />
        </label>

        <label>
            was excellent. I appreciated the important dialogue that
            <input
              type="text"
              placeholder='describe what they discussed here'
              value={this.state.groupPresAppreciate}
              onChange={this.setGroupPresAppreciate}
            />
        </label> 

        <label>
        . I thought your group did a thorough job describing
          <input
                type="text"
                placeholder='describe what they discussed here'
                value={this.state.groupPresDescribe}
                onChange={this.setGroupPresDescribe}
              />
        </label>

        <label>
        . Finally, your statement that
        <input
              type="text"
              placeholder='describe what they discussed here'
              value={this.state.groupPresStatement}
              onChange={this.setGroupPresStatement}
            />
        </label>

        <label>
        was well supported. I agree with you that
          <input
              type="text"
              placeholder='describe what they discussed here'
              value={this.state.groupPresAgree}
              onChange={this.setGroupPresAgree}
            />
        </label>

        <label>
        . All in all, you did a wonderful job this semester of SOM. 
          <input
              type="text"
              placeholder='(Optional) Write a personalized sentence here'
              value={this.state.customSentence}
              onChange={this.setCustomSentence}
            /> 
            It was a pleasure being your teacher, and I wish you all the best for a joyful and rejuvenating summer!
        </label>
        <div>
          <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
          {this.state.copied && <p>The eval has been copied to the clipboard!</p>}
       </div>
      </div>
      
    );
  }
}

export default Eleventh_Spring_Eval_Page;