# SurveyJS + React Quickstart Template 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

## Run the application

```bash
npm i
npm run start
```

Open http://localhost:3000/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [src/data/survey_json.js](src/data/survey_json.js)
  - [src/pages/Survey.js](src/pages/Survey.js)
- Add Survey Creator to a page
  - [src/components/SurveyCreator.js](src/components/SurveyCreator.js)
  - [src/pages/Creator.js](src/pages/Creator.js)
- Export a survey to a PDF document
  - [src/pages/Export.js](src/pages/Export.js)
- Visualize survey results
  - As charts
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/components/SurveyAnalytics.js](src/components/SurveyAnalytics.js)
    - [src/pages/Analytics.js](src/pages/Analytics.js)
  - As a table (modern browsers)
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/components/SurveyAnalyticsTabulator.js](src/components/SurveyAnalyticsTabulator.js)
    - [src/pages/AnalyticsTabulator.js](src/pages/AnalyticsTabulator.js)
  - As a table (old browsers)
    - [src/data/analytics_data.js](src/data/analytics_data.js)
    - [src/components/SurveyAnalyticsDatatables.js](src/components/SurveyAnalyticsDatatables.js)
    - [src/pages/AnalyticsDatatables.js](src/pages/AnalyticsDatatables.js)
- Create a custom question type
  - [src/components/MyQuestion.js](src/components/MyQuestion.js)
- Register third-party components
  - [src/App.js](src/App.js#L37)
