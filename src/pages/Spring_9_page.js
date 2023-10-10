import React, { Component } from "react";

class Ninth_Spring_Eval_Page extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
      name: "",
      isTeachAgain: "",
      PresTopic: "",
      PresAppreciate: "",
      PresActivity: "",
      optionalCritique: "",
      wellnessPres: "",
      wellnessPresGood: "",
      wellnessPresGood2: "",
      optionalWellnessCritique: "",
      eval: "_________, it was an absolute pleasure teaching you _________. Your group presentation on _________ for the subtopics of psychology unit was excellent. You did a thorough job _________. I appreciated your discussion _________. Finally, I think the whole class benefited from your facilitation of the _________ which brought your topic to life. _________. Moreover, you did an excellent job presenting on _________. Great job describing the _________. Additionally, you did a thorough job detailing the _________. _________. Overall, you were a wonderful SOM student, and I hope to teach you next year. I wish you a joyful and rejuvenating summer!."
    };
  }

  updateEval = () => {

    const paragraph = `

        ${this.state.name}, it was an absolute pleasure teaching you ${this.state.isTeachAgain}. 
        Your group presentation on ${this.state.PresTopic} for the subtopics of psychology unit was excellent. 
        You did a thorough job ${this.state.PresThorough}. 
        I appreciated your discussion ${this.state.PresAppreciate}. 
        Finally, I think the whole class benefited from your facilitation of the ${this.state.PresActivity} which brought your topic to life.  
        ${this.state.optionalCritique}

        Moreover, you did an excellent job presenting on ${this.state.wellnessPres}. 
        Great job describing the ${this.state.wellnessPresGood}. 
        Additionally, you did a thorough job detailing the ${this.state.wellnessPresGood2}. 
        ${this.state.optionalWellnessCritique}
        Overall, you were a wonderful SOM student, and I hope to teach you next year. I wish you a joyful and rejuvenating summer!
    `;
    
    const updatedEval = paragraph
      .replace("${name}", this.state.name)
      .replace("${isTeachAgain}", this.state.isTeachAgain)
      .replace("${PresTopic}", this.state.PresTopic)
      .replace("${PresAppreciate}", this.state.PresAppreciate)
      .replace("${PresActivity}", this.state.PresActivity)
      .replace("${optionalCritique}", this.state.optionalCritique)
      .replace("${wellnessPres}", this.state.wellnessPres)
      .replace("${wellnessPresGood}", this.state.wellnessPresGood)
      .replace("${wellnessPresGood2}", this.state.wellnessPresGood2)
      .replace("${optionalWellnessCritique}", this.state.optionalWellnessCritique)

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
  setPresTopic = (event) => {
    this.setState({ PresTopic: event.target.value }, this.updateEval);
  };
  setPresAppreciate = (event) => {
    this.setState({ PresAppreciate: event.target.value }, this.updateEval);
  };
  setPresActivity = (event) => {
    this.setState({ PresActivity: event.target.value }, this.updateEval);
  };
  setOptionalCritique = (event) => {
    this.setState({ optionalCritique: event.target.value }, this.updateEval);
  };
  setWellnessPres = (event) => {
    this.setState({ setWellnessPres: event.target.value }, this.updateEval);
  };
  setWellnessPresGood = (event) => {
    this.setState({ wellnessPresGood: event.target.value }, this.updateEval);
  };
  setWellnessPresGood2 = (event) => {
    this.setState({ wellnessPresGood2: event.target.value }, this.updateEval);
  };
  setOptionalWellnessCritique = (event) => {
    this.setState({ optionalWellnessCritique: event.target.value }, this.updateEval);
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
        <h2>9th Grade Spring Semester Template</h2>

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
        Your group presentation on 
            <input
              type="text"
              placeholder='enter their presentation topic here'
              value={this.state.PresTopic}
              onChange={this.setPresTopic}
            />
       
        </label>

        <label>
        for the subtopics of psychology unit was excellent. You did a thorough job 
       
            <input
              type="text"
              placeholder='describe'
              value={this.state.PresThorough}
              onChange={this.setPresThorough}
            />
        </label>

        <label>
        . I appreciated your discussion 
        
          <input
              type="text"
              placeholder='describe'
              value={this.state.PresAppreciate}
              onChange={this.setPresAppreciate}

          />
        </label>

        <label>
        .  Finally, I think the whole class benefited from your facilitation of the 
        <input
              type="text"
              placeholder='describe'
              value={this.state.PresActivity}
              onChange={this.setPresActivity}

          />
        </label>


        <label>
        which brought your topic to life.  
            <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.optionalCritique}
              onChange={this.setOptionalCritique}
            />
        </label>

        <label>
        . Moreover, you did an excellent job presenting on  
        <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.wellnessPres}
              onChange={this.setWellnessPres}
            />
        </label>


        <label>
            . Great job describing the 
            <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.wellnessPresGood}
              onChange={this.setWellnessPresGood}
            />
        </label>

        <label>
        . Additionally, you did a thorough job detailing the 
        <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.wellnessPresGood2}
              onChange={this.setWellnessPresGood2}
            />
        </label>

        <label>
        . 
        <input
              type="text"
              placeholder='describe their performance here'
              value={this.state.optionalWellnessCritique}
              onChange={this.setOptionalWellnessCritique}
            />
          Overall, you were a wonderful SOM student, and I hope to teach you next year. I wish you a joyful and rejuvenating summer!
        </label>


      
        <div>
          <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
          {this.state.copied && <p>The eval has been copied to the clipboard!</p>}
       </div>
      </div>
      
    );
  }
}

export default Ninth_Spring_Eval_Page;