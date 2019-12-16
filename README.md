[![CircleCI](https://circleci.com/gh/zimmerman-zimmerman/mlt-cms.svg?style=svg)](https://circleci.com/gh/zimmerman-zimmerman/mlt-cms)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9c6948a68df16754768/maintainability)](https://codeclimate.com/repos/5d528965a9b309622b004846/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4824056e61afa2019da5/test_coverage)](https://codeclimate.com/repos/5d307081c8591501b500efd2/test_coverage)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

## What is the IATI Humanitarian Data Portal CMS?

Content Management System (CMS) for <a href="https://github.com/zimmerman-zimmerman/-IATI-Humanitarian-Data-Portal target="_blank">IATI Humanitarian Data Portal</a>. The CMS is built using the <a href="https://docs.spaceuptech.com/getting-started/quick-start/" target="_blank">SpaceUpTech Space Cloud CMS </a>.

## What is the IATI Humanitarian Data Portal?

The IATI Humanitarian Data Portal has been developed by Development Initiatives as part of its programme to support the Grand Bargain transparency workstream. The portal provides information on the Grand Bargain transparency commitments, how they are measured , and monitors progress at an aggregate level for signatories in meeting their commitment to publish timely, high quality, harmonised and transparent open data on global humanitarian action.

## About the project
* Website:         <a href="https://www.humportal.org/" target="_blank">IATI Humanitarian Data Portal</a>
* License:          Apache (see included <a href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal-CMS/blob/develop/LICENSE.MD" target="_blank">LICENSE</a> file for full license)
* Github Repo:      <a href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal-CMS" target="_blank">github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal-CMS</a>


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
    
- User Management(Only accessible by an 'admin user')
    - Add/edit/delete cms users
    
- Signatories Progress
    - Manage fixed date values used for mlt-frontends signatory progress page.
    
## Deployment Extra Info
  So besides the generic way of deploying the frontend of the cms. This is some extra info describing how to deploy the backend and associated things.
  * Currently mlt deploys the cms backend(space-cloud) by running it localy on the server, as described in space-cloud deployment docs, and proxying it via the location '/' of a domain/sub-domain. One IMPORTNAT thing to note, is that as far as we've noticed you cannot proxy space-cloud as any other location than the root('/') location of your domain/sub-domain, as most pages just don't seem to work when trying to proxy like that. This is ofcourse using nginx(as its the service used for mlt), maybe it would work with other serving technologies. 
  * Make sure to set up socket proxy for space-cloud - https://www.nginx.com/blog/websocket-nginx/ 
  * One more thing to note is that mlt-cms is using periodic functions that happen every 24hours to update data in the cms, so these services need to be initiated for all of the cms data to be there and to be up to date. Currently its set up to run with supervisor running the scripts with the 'node' command in the frontend folder 'mlt-cms/scripts/period_scripts.js'

