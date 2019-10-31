[![CircleCI](https://circleci.com/gh/zimmerman-zimmerman/mlt-cms.svg?style=svg)](https://circleci.com/gh/zimmerman-zimmerman/mlt-cms)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9c6948a68df16754768/maintainability)](https://codeclimate.com/repos/5d528965a9b309622b004846/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4824056e61afa2019da5/test_coverage)](https://codeclimate.com/repos/5d307081c8591501b500efd2/test_coverage)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

## What is the IATI Humanitarian Data Portal CMS?

Content Management System (CMS) for <a href="https://github.com/zimmerman-zimmerman/mlt-frontend/" target="_blank">IATI Humanitarian Data Portal</a>.

## Installing

<b>1.</b> Follow <a href="https://docs.spaceuptech.com/getting-started/quick-start/" target="_blank">this guide</a> to install SpaceUpTech Space Cloud<br />
<b>2.</b> Checkout repo to local folder<br/>
<b>3.</b> Make sure you've installed node.js 10.16.3 or higher<br/>
<b>4.</b> Run yarn install <br/>
<b>5.</b> Create an .env file and specify the following variables:

- NODE_PATH=src/
- REACT_APP_CLIENT_NAME=<CLIENT_NAME>
- REACT_APP_PROJECT_ID=<SPACE_CLOUD_BACKEND_ID>
- REACT_APP_SPACE_CLOUD_URL=<<SPACE_CLOUD_BACKEND_URL>

From SpaceUpTech <a href="https://docs.spaceuptech.com/getting-started/setting-up-project/javascript/" target="_blank">docs</a>:
```

PROJECT_ID: Unqiue identifier of a project. It’s derived by converting your project name to lowercase and replacing all spaces and hiphens to underscores. For example Todo App becomes todo_app.

SPACE_CLOUD_URL: This is the url of your space-cloud binary. It’s http://localhost:4122 or https://localhost:4126 for HTTP and HTTPS endpoints respectively.

Note: Replace localhost with the address of your Space Cloud if you are not running it locally

```

<b>6.</b> Run yarn start

## Page breakdown
- Signatories
    - Table view with all existing GB signatories and preview of their data fields
    - Search, download CSV, view/hide table columns, sort, filter functionalities available
    - Table row click leads to the edit page of the selected signatory
    - 'Add Signatory' button leads to the add new signatory page

- About Text
    - Edit IATI Humanitarian Data Portal about page text blocks

- FAQ Text
    - Edit IATI Humanitarian Data Portal FAQs page cards

- CCTRIs Text
    - Edit IATI Humanitarian Data Portal CCTRIs page text blocks

- Tooltips Text
    - Edit IATI Humanitarian Data Portal Tooltips help text


## Contributing

Please see our Contributing Guideline which explains repo organization, linting, testing, and other steps.

## License

This project is licensed under the terms of the [LICENSE TYPE]

## Contributors

## Supporters
