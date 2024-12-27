nvm install 16 && nvm use 16

# Horizons

![AmIResponsive Image](/src/assets/readme_assets/amiresponsive.png)

## Project goals

Prior to developing Horizons, I had 3 major goals in mind that I wanted to achieve with creating this application:
- I wanted to create a sense of community within a particular niche, whereby the content and data provided, as well as the inputted data from the user, were all based around the same theme and community.
- I also wanted to add categorisation to the content in which users were creating - this would make it easier for other users to engage with content that was relevent to them, and it also enables them to filter out any content that they choose not to engage with.
- I wanted to give the user a sense of individuality within their own profile - whereby they could add user-specific information that is strictly relevent to themselves yet allows other users to retrieve and engage with this.
- Finally, I want an 'admin role' to have important within my application, whereby admins can act as mediators to ensure that content which is being shared it relevent and appropiate. These admin users will have the ability to not only retrieve other user's content, but they will also have the ability to destroy another user's content if it is in the best interest of protecting the community.

## Table of contents
- [Horizons](#horizons)
  * [Project goals](#project-goals)
  * [Table of contents](#table-of-contents)
  * [User stories](#user-stories)
    + [Themes](#themes)
    + [Epics](#epics)
    + [User stories](#user-stories)
  * [Agile development methodology](#agile-development-methodology)
  * [Planning](#planning)
    + [Mockups](#mockups)
    + [Data models](#data-models)
  * [Design](#design)
    + [Colours](#colours)
    + [Fonts](#fonts)
  * [Features](#features)
    + [Re-use of components](#re-use-of-components)
    + [CRUD functionality](#crud-functionality)
    + [Future improvements and features](#future-improvements-and-features)
  * [Frameworks, libraries and dependencies](#frameworks--libraries-and-dependencies)
  * [React features used to enhance user experience](#react-features-used-to-enhance-user-experience)
    + [Custom hooks](#custom-hooks)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Code](#code)
    + [Media](#media)

## User Stories

### Themes

### Epics

### User Stories

## Agile Development Methodology

## Planning

### Mockups

### Data Models

## Design

### Colours

### Fonts

## Features

### Re-use of components

### CRUD Functionality

### Future improvements and features

## Frameworks, Libraries & Dependencies

## React features to enhance user experience

### Custom Hooks

## Testing

All testing for the `Horizons Frontend` can be found in the [TESTING.md](/TESTING.md) folder.

## Deployment

To deploy to Heroku, follow these steps:

- Fork or clone this repository in GitHub.
- If you have also cloned and deployed your own version of the Horizons - Backend API, you will need to ensure the value of `axios.defaults.baseURL` in `src/api/axiosDefaults.js` is set to the base URL for your API. Pull to your local development environment and push back to GitHub if necessary; otherwise, leave as is to use the original Horizons - Backend API.
- Log in to Heroku.
- Select 'Create new app' from the 'New' menu at the top right.
- Enter a name for the app and select the appropriate region.
- Select 'Create app'.
- Select the 'Deploy' tab at the top.
- Select 'GitHub' from the deployment method options to confirm you wish to deploy using GitHub. You may be asked to enter your GitHub password.
- Find the 'Connect to GitHub' section and use the search box to locate your repo.
- Select 'Connect' when found.
- Optionally choose the main branch under 'Automatic Deploys' and select 'Enable Automatic Deploys' if you wish your deployed site to be automatically redeployed every time you push changes to GitHub.
- Find the 'Manual Deploy' section, choose 'main' as the branch to deploy and select 'Deploy Branch'.

When deployment is complete, you will be given a link to the deployed site.

## Credits

### Code

### Media