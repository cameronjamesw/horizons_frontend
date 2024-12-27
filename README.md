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

Themes, epics, user stories and testing outcomes are documented in the `user_stories` worksheet of [this Google sheet](https://docs.google.com/spreadsheets/d/1xT0BXdg621rtGnQodwNQhRxqZqIO8vNXq3Ope-zOwR8/edit?usp=sharing).

### Epics

Themes documented above were then revised into the following epics

- Post Feed Epic
  - View Recent Posts
  - Search For Posts
  - Infinite Scroll
  - See Popular Categories
  - See Popular Posts
- Profile Epic
  - Profile Leaderboard
  - View Profiles
  - Following/Unfollowing Users
  - Update Username & Password
  - Update Profile
  - Share Friendcode
  - Display Favourite Posts
- Post Detail Epic
  - Delete Post
  - Edit a Post
  - Create a Comment
  - View Comments
  - Delete Comment
  - Edit Comment
  - Post Page
- Addling & Liking Posts Epic
  - Create a Post
  - Create a Category
  - Liking Posts
  - Favourite Posts
  - View Posts
- Authentication & Navigation Epic
  - Navigation
  - Routing
  - Authentication - Sign In, Sign Up, Sign Out
  - Authentication - Logged-In Status
  - Responsive Navigation
  - Conditional Rendering

### User Stories
User stories required to implement each epic were created. These were categorised according to whether they were 'must have' features required to implement a Minimum Viable Product (MVP).
Please see the [Google sheet](https://docs.google.com/spreadsheets/d/1xT0BXdg621rtGnQodwNQhRxqZqIO8vNXq3Ope-zOwR8/edit?usp=sharing) for detail.

## Agile Development Methodology

GitHub issues and projects were used to document and track an agile development approach.
A GitHub issue was created for each user story, with labels to indicate if they were required for the MVP.

A GitHub project board was created for each iteration, and user stories moved from the product backlog into the relevant iteration as each cycle of work began. User stories were labelled as 'must have', 'could have' or 'should have' goals for that specific iteration.

A project kanban board was used to track progress, with user stories moved between 'Todo', 'In Progress' and 'Done' columns as appropriate. For example, the iteration 2 project board was captured at the start, in the middle and at the end.

A fourth column for 'Wont Have' was created too, as per the MoSCoW analogy.
Within the Posts Feed project board, you will notice that one particular user story is located under the `wont have` column. I decided that it was not neccessary to include this feature - it was not part of the MVP, and I feel that it was not adding to the user's experience.

The project boards in their final form can be accessed over at the [Horizons Project Board](https://github.com/cameronjamesw/horizons_frontend/projects?query=is%3Aopen).

## Planning

### Mockups

Prior to development, multiple wireframes were drafted using [Figma](https://www.figma.com/files/team/1418312351433626670/recents-and-sharing?fuid=1418312347068131481) in order to gain a deeper understanding of how the application was going to look, moving forward. The wireframes were also designed with the `data models` in mind in order to provide maximum efficiency when working with the back end.

Albiet the wireframes may look a little different compared to the deployed version of the application; however, they still provided excellent scope for creating the application, and any changes made against the wireframes have been documented throughout.

#### Desktop

**Post Feed Page**

![Post Feed Desktop Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Home%20-%20Desktop.png)

**Post Detail Page**

![Post Detail Page Desktop Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Post%20Page%20-%20Desktop.png)

**Profile Page**

![Profile Page Desktop Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Profile%20-%20Desktop.png)

#### Mobile

**Post Feed Page**

![Post Feed Mobile Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Home%20-%20Mobile%20.png)

**Post Detail Page**

![Post Detail Page Mobile Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Post%20Page%20-%20Mobile%20.png)

**Profile Page**

![Profile Page Mobile Wireframe](/src/assets/readme_assets/wireframes/Horizons%20Profile%20-%20Mobile.png)

### Data Models

- As previously eluded to, data models were planned alongside the wireframes. These can be located in the [Horizons - Backend ReadMe.md](https://github.com/cameronjamesw/horizons_backend/blob/main/README.md#data-models)

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