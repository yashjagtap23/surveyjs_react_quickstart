import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { LayeredDark } from "survey-core/themes";
import { json } from "../data/survey_json.js"; // Your survey JSON

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

function onComplete(survey) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
}

export function SurveyPage() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Assuming default dark mode

  // Initialize the survey model and apply the theme
  const model = new Model(json);
  if (isDarkMode) {
    model.applyTheme(LayeredDark); // Apply the LayeredDarkPanelless theme
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "survey-dark-mode" : ""}`}>
      <h1>22BC Survey</h1>
      <button onClick={toggleDarkMode}>
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}