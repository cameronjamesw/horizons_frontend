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
  * [Features](#features)
    + [Sign-Up Form](#sign-up-form)
    + [Sign-In Form](#sign-in-form)
    + [Responsive & Conditional Navigation](#responsive-navbar)
    + [View Post Feed](#view-post-feed)
    + [Search Post Feed](#search-post-feed)
    + [Popular Profiles](#view-popular-profiles)
    + [Popular Categories](#view-popular-categories)
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

![A screenshot of the colours used throughout the project](/src/assets/readme_assets/colors.png)

- It quickly became clear to me that I wanted the Horizons Application to consist of mainly darker colours  - I prefer a darker look as I feel it provides a sleek design and allows components to really stand out, and provided maximum UX.

- `#356933` was intended to be the main colours throughout the application, whereby UX was concerned. Despite `#000` and `#141414` shrouding a load of the place, the majority of interactive components were showcased using `#356933`. It is a very vibrant colour, when contrasting it to the dark background, and in turn provides great UX when eluding to interactive and clickable features.

- `#C9A588` was used as a secondary colour to follow up `#356933`. The off-white, cream-like colour again provides excellent contrast against the dark background, but it also provides a superb border for the majority of components throughout the application. Using `#C9A588` as a border colour really makes components stand out amongst the background and again provides excellent UX. The contrast with `#356933` is also very strong, and in turn effective, and should not go unnoticed.

- `#fff` has also been used throughout the application, primarily in the form of input fields. This is just to reinforce to the user that they are entering data - the difference in colour here will be a great defining factor fot the User's Experience.

## Features

### Sign-Up Form

![Screenshot of the Sign Up Form](/src/assets/readme_assets/features_images/sign-up-form.png)

Before the user is able to really enage with anything on the site, they will have to create an account, and they are able to do this through filling out the sign-up form. A user instance will be created for the user upon submitting the form, and their credentials will be logged. Upon signing up, the user will be redirected to the sign-in page where they can log in with the given credentials.

Form validation is in place here - if the user attempts to leave any fields blank, or the passwords do not match, for example, the user will be notified and the form will not be submitted. 

### Sign-In Form

![Screenshot of the Sign In Form](/src/assets/readme_assets/features_images/sign-in-form.png)

Here the user will be able to log in to their account using their credentials.

Again, form validation is in place here as in the event that the credentials are invalid, the user will be notifed of this and they will be unable to log in to their account. Upon logging into their account, the user will be able to access features that are reserved for authenticated users only.

### Responsive NavBar

![A screenshot of the Navbar when logged out](/src/assets/readme_assets/features_images/responsive-nav.png)

Before logging in, above is a preview of the navbar that will be available to the user. It will be noted that there are only a few limited options to the user, this is to encourage users to become part of the community, and it also protects from unauthenticated users bombarding the site.

![A screenshot of the NavBar when authenticated as a user](/src/assets/readme_assets/features_images/user-navbar.png)

Here the navbar has an array of options now that the user is authenticated. The user is able to access the `Create Post` link, this will allow them to create their own posts within the Horizons community.

Furthermore they also have the option to view their own feed, along with viewing their liked feed and their own profile. And finally they have the option to sign out of their account.

![A screenshot of the NavBar when authenticated as an admin](/src/assets/readme_assets/features_images/admin-navbar.png)

If the user is of admin status, then there will be more features available to the user. For example, in the screenshot about, the admin user has access to the `Create Category` link. This allows the admin user to create a new category that posts can then be added to.

This feature is reserved for admin users as I do not want users having the ability to create categories as that will become overloaded very quickly.

### View Post Feed

![A screenshot of the post feed](/src/assets/readme_assets/features_images/post-feed.png)

When clicking the home button within the navbar, the user will be taken to the post feed. Here the latest posts will be loaded for the user and they will be able to interact with them if authenticated, or just view them otherwise.

Posts are loaded for the user depending on how recent they are, with the latest posts being retrieved and loaded first.

### Search Post Feed

![A screenshot of the search bar component](/src/assets/readme_assets/features_images/searchbar-and-categories.png)

Users can also search for posts which interest them. The search bar component allows users to search for posts through `title`, `post_owner` and `category_name`. Upon entering these key words into the search bar, the user will be displayed the relevent posts.

Users can also select a category to search by - as seen to the right of the search bar component. This dropdown menu allows user to select a category to search by and the relevent posts will be displayed to the user.

If in the event that there are no matching posts to the parameters provided, the user will be met with a no results page, encouraging the user to broaden their search.

![A screenshot of no results being displayed along with error message](/src/assets/readme_assets/features_images/no-results.png)

### View Popular Profiles

![Screenshot of the PopularProfiles Component](/src/assets/readme_assets/features_images/popular-profiles.png)

Along with the post feed, when on the home page, the user will also be able to see the popular profiles. This is displayed on the right-hand side of the post feed, and users are able to interact with the component depending on their authenticated status.

Authenticated users will be able to follow one of the profiles if they choose, as there will be a follow button on the right hand side of the profile component. Furthermore, if they click on the user's avatar icon, then they will be directed to the clicked user's profile page. If the user's profile appears in the popular profiles component, they will be unable to follow their own profile - and this is reflected by the absence of the follow button on the user's profile.

Unauthenticated users will not be able to follow a profile - however they will be directed to the profile page upon clicking on the avatar (see below).

![A screenshot of the popularprofiles component when unauthenticated](/src/assets/readme_assets/features_images/unauth-popular-profiles.png)

### View Popular Categories

![Screenshot of the popular categories component](/src/assets/readme_assets/features_images/popular-categories-user.png)

Underneath the popular profiles component, the user can find the popular categories component. This component renders the most popular categories, popularity being defined by the amount of posts within each category - with categories being ordered in descending order of their posts count.

Within the component, the posts count will also be displayed to the user so that they can guage just how popular the category is.

Upon clicking on the category, the user's search of the post feed will be altered by the category, and all the relevent posts will be rendered to the user. If a category does not have post in it, it is still rendered to the user; however, the no results page is shown instead.

![A screenshot of the admin view of the popular categories component](/src/assets/readme_assets/features_images/popular-categories-admin.png)

Admin users will have a slightly different view to standard users - instead they will have the option to edit and delete the category, this being indicated by the three dots located to the left fo the category name. (see above)

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