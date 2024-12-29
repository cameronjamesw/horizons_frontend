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
    + [Create Category](#create-category)
    + [Edit Category](#edit-category)
    + [Delete Category](#delete-category)
    + [Create Post](#create-post)
    + [View Post](#view-post)
    + [Like Post](#liking-a-post)
    + [Favourite A Post](#favourite-a-post)
    + [View Favourites](#view-favourites)
    + [Edit-Delete Dropdown](#edit--delete-post-dropdown)
    + [Edit Post](#edit-post)
    + [Delete Post](#delete-post)
    + [View Comments](#view-comments)
    + [Edit Comment](#edit-comment)
    + [Delete Comment](#delete-comment)
    + [Follow & Unfollow Users](#followunfollow-a-user)
    + [View Profile](#view-profile)
    + [Update Profile](#update-profile)
    + [Change Username](#change-username)
    + [Change Password](#change-password)
    + [Infinite Scroll](#inifinite-scroll)
    + [Re-use of components](#re-use-of-components)
      - [Asset.js](#assetjs)
      - [Avatar.js](#avatarjs)
      - [CategoryList.js](#categorylistjs)
      - [DeletionModal.js](#deletionmodaljs)
      - [MoreDropdown.js](#moredropdownjs)
      - [NavBar.js](#navbarjs)
      - [NotFound.js](#notfoundjs)
    + [CRUD functionality](#crud-functionality)
    + [Future improvements and features](#future-improvements-and-features)
      - [Short Term Improvements](#short-term-improvements)
      - [Long Term Improvements](#long-term-improvements)
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

### Create Category

![Screenshot of the create category form](/src/assets/readme_assets/features_images/create-category.png)

Admin users will be able to access the create category form. Here admn users can create a new category, providing it doesn't already exist within the database.

Validation methods are in place to check whether the category exists prior to submission, and the length of the category name - rejecting if it is larger than 20 characters.

Upon creating a category, users will be able to add their posts to the newly created category, and they will also be able to use the category as a search parameter in the post feed page.

### Edit Category

![Screenshot of the edit category dropdown](/src/assets/readme_assets/features_images/edti-category-dropdown.png)

Above is an image of an admin user clicking the edit category dropdown. This feature is reserved for admin users only - as shown above.

![Screenshot of the edit category page](/src/assets/readme_assets/features_images/edit-category.png)

Upon clicking the edit button from the category dropdown, the user is redirected to the edit category page. Upon rendering, the edit category form is pre-populated with the name of the category the admin user is trying to edit.

This edit form has the same validation as the create category form, whereby a blank input will be rejected, and any categories who's name is greater than 20 characters will also be rejected.

Upon submitting the edit category form, the name of the category is updated, and all the posts which house this category reflect this update too.

### Delete Category

![Screenshot of the delete category modal](/src/assets/readme_assets/features_images/delete-category.png)

When attempting to delete a category, accessed through the edit category page, the user is greeted with the deletion confirmation modal. This ensures that if the admin user accidentally clicked delete, that the category will not be deleted unless the deletion is reinforced.

The deletion modal will be closed if the admin user clicks anywhere on the page. apart from the delete button, which will of course delete the category.

### Create Post

![A screenshot of the create post form](/src/assets/readme_assets/features_images/create-post.png)

As eluded to earlier, authenticated users will be able to create their own posts. 

The fields in which the user needs to fill out are `title`, `content`, `category` and `image`. Category is not a required field as stated in the backend of the application - if no category is chosen then the category for the post will default to null. All other fields are rewuired; however, and validation is in place to ensure that they are filled out correctly.

The image field houses a validation method which checks the image size - if it is larger than 50Mb then the form is rejected. This ensures that the images provided by users stay within the parameters set by Cloudinary - the image storing cloud service.

Upon creating the post and submitting the form - the user is directed to their post where they can view the details going forward.

### View Post

![Screenshot of the post page](/src/assets/readme_assets/features_images/view-post.png)

Upon clicking on a post, the user will be taken to that specific post page, show a more detailed view of the post than before.

The user will be able to see comments for the post below the post component, they will be able to add theit own comments if they are authenticated.

### Liking A Post

![A screenshot of the likes count for a post](/src/assets/readme_assets/features_images/like-comments-count.png)

Similar to the user being able to comment if they are authenticated, they will also be able to like the post - providing that it is not their own.

Upon liking the post, the heart icon will turn bright red - this being an indicator that they have indeed liked the post. Upon clicking it again, or unliking the post, the heart icon will return back to it's original state, this giving the user a clear indicator that they have unliked the post.

Upon liking a post, the like count of the post will increase, which is evident to the user - and the liked post will then appear in the user's liked feed - this being referred to earlier. Upon unliking the post, the post will then be removed from the liked feed.

### Favourite A Post 

![A screenshot of a post being favourited](/src/assets/readme_assets/features_images/favourite-post.png)

Similar to liking a post, authenticated users will be able to favourite a post too. Unlike the like functionality though - users will be able to favourite their own posts.

If the user is unauthenticated then the favourite button will be hidden, as it is conditionally rendered based on the user's authenticated status.

The initial state of the favourite button will be an outline of a star, upon hovering over the star the border changes t a gold colour, implying for the user to click it. Upon clicking, and in turn favouriting the post, the star will become solid gold, giving the user a clear indication that they have favourited the post.

When favouriting a post, the user's favourites_count will be increased, and this is reflected on their profile page (more on this later). Furthermore, the favourited post will be added to the user's favourites list, and this will be accessible within their own profile.

### View Favourites

![A screenshot of the favourite count](/src/assets/readme_assets/features_images/favourites-count-prof.png)

In order for the user to view their favourites, they will need to navigate towards their profile, and upon the profile rendering, they will see a some data regarding their profile. One piece of data in particular is the favourties_count which is displayed om a users profile (see above). Upon hovering over the favourites_count, the count will turn green, along with the cursor becoming a pointer, suggesting to the user that they can click on this.

When clickng on the favourites, the user will be redirected to the `favourites/` url path, and here the user's favourited posts will be displayed to them (see below). When the user unfavourites a post within their favourites list, it will no longer be there after re-rendering this page.

![A screenshot of the favourites](/src/assets/readme_assets/features_images/view-favourites.png)

To ensure good sight integrity, the user will only be able to view their own favourites. In turn, when viewing another user's profile, their favourites count will be hidden, as this is personal to that user (see below).

![A screenshot of another user's profile without favourite's count](/src/assets/readme_assets/features_images/view-favs-not-prof.png)

### Edit & Delete Post Dropdown

![Screenshot of the edit and delete dropdown](/src/assets/readme_assets/features_images/edit-delete%20post.png)

This edit-delete dropdown gives the owner of the post the ability to edit and delete the post in question.

This dropdown menu is reserved for the owner of the post; however, admins will be able to access this too, regardless of whether they are the owner. This is so that thet have update and deletion permissions in the view of safeguarding. (See below)

![Screenshot of admin viewing dropdown](/src/assets/readme_assets/features_images/edit-delete-admin.png)

Note how the logged in user is not the owner of the post - however they have the edit and delete functionality.
Compare this to the example below, whereby a standard user does not have the permission to edit and delete another user's post.

![Screenshot of user viewing dropdown](/src/assets/readme_assets/features_images/edit-delete%20user.png)

### Edit Post

![Screenshot of edit post](/src/assets/readme_assets/features_images/edit-post.png)

When clicking the edit button, the user is redirected to the edit post page, with the predefined fields being allocated before updating for a positive user experience.

The post edit form has the same funcitonality and validation as the post create form - whereby the form will bounce if any of the required fields are incomplete. Furthermore, this stops users from erasing fields and having empty content on their post page.

The only instance that this is allowed in, is if the user chooses the deselect an already pre-selected category. In this instance the category will just be set to null.

Upon submission, the user is redirected back to the post they were on beforehand, and the edit data is reflected to the user.

### Delete Post

![A screenshot of the deletion modal](/src/assets/readme_assets/features_images/delete-post.png)

When clicking the delete post option from the edit-delete dropdown, the user is met with the deletion modal. This ensures that if the user accidentally clicked the delete button then they have the chance to save their post from being deleted.

Clicking anywhere on the screen will close the modal without causing the post to be deleted, and then clicking on delete will then delete the post.

This reassurance of decision ensures a positive user experience.

### View Comments

![Screenshot of viewing comments](/src/assets/readme_assets/features_images/view-comments.png)

When viewing a post, users will be able to see a list of comments underneath the post.

If there are no comments then the user will be encouraged to add their own if they are authenticated, other a "no comments yet" message will greet the user.

When viewing comments, the user can see the `content` of the comment, the `comment owner`, and when the comment was `created_at`.

### Edit Comment

![A screenshot of editing a comment](/src/assets/readme_assets/features_images/edit-comment-user.png)

When wanting to edit a comment, the comment user will be able to see a dropdown next to their comment that gives them the option to edit or delete their comment.

When clicking delete, the user will be able to alter the comment within the edit comment form (see above).

![A screenshot of an admin having access to the comment dropdown](/src/assets/readme_assets/features_images/edit-comment-admin.png)

Admin users will be able to edit and delete comments in the view of safeguarding.

In reference to the image above, an admin user is able to access the edit-delete comment dropdown despite not being the owner of the comment.

### Delete Comment

![A screenshot of the deletion modal when deleting a comment](/src/assets/readme_assets/features_images/delete-comment.png)

When deleting a comment, the user is greeted with the comment deletion model. This ensures that any accidental clicks are avoided.

When closing the modal the comment is not deleted.

When clicking delete, the comment is deleted and the user is returned to the original psot page they were on.

### Follow/Unfollow A User

Authenticated users will be able to follow other users throughout the application. Users on a desktop will be able to follow users through the popular profiles component, previous mentioned. As seen below, the follow button is found to the right-hand side of the user's username.

![A screenshot of the popular profiles component](/src/assets/readme_assets/features_images/follow-user-pop-profile.png)

Alternatively, and for mobile users, users can follow a user by viewing their profile, and clicking the follow button which is located in the top right of their profile page (see below).

![A screenshot of the profile page, with attention drawn to the follow button](/src/assets/readme_assets/features_images/follow-user-profile.png)

When clicking follow on a user, both components aforementioned update with the relevent information. The `follow` button will change to `unfollow`, and the followers and following count of the respective profiles will also update. This is also true for when the user unfollows a user.

Upon following a user, the followed user's posts will then appear in the previously mentioned `/feed` path when viewing the posts feed. Once a user is unfollowed, their posts will no longer appear in the feed understandably.

It is also worth noting that the user will not be able to follow their own profile (see above), and this is referenced in the image above.

### View Profile

![A screenshot of a user's default profile](/src/assets/readme_assets/features_images/view-default-profile.png)

When clicking on a user's avatar, the user will be able to view the profile of the user in question. Upon rendering, the user's default avatar and stats will be shown to the viewer - these stats include `posts count`, `followers count` and `following count`.

If the user has posted any content, these posts will also be rendered underneath the profile component too, for the user to interact with.

![A screenshot of a user's completed profile](/src/assets/readme_assets/features_images/view-complete-prof.png)

Once the user has had the chance to update their profile, their profile will take on a different view (see above).

The user's `name`, `island name`, `friendcode` and `bio` will be rendered to the viewer along with an updated `avatar`. The bio field is not compulsory for the profile owner to fill out, so it may be rendered despite having no content if the owner decides so.

As eluded to earlier, if the user is viewing their **own** profile, then their `favourites_count` will also be rendered for them.

### Update Profile

![A screenshot of the update profile form](/src/assets/readme_assets/features_images/update-profile.png)

When viewing their own profile, users will be able to update their profile. If they are doing this for the first time then they will have the chance to fill in the aforementioned form feilds of `name`, `island name`, `friendcode` and `bio`.

The form has validation methods to ensure that the friendcode field is no greater than 12 characters - as a Nintendo friendcode is 12 characters in length. The form will not post otherwise.

Furthermore, the user does not need to fill in the bio field if they do not choose to - this will render an empty bio field for viewers; however, the other fields will be populated.

Upon submitting the form the user will be returned to their profile page with the relevent data now being rendered to them.

### Change Username

![A screenshot of the change username form](/src/assets/readme_assets/features_images/update-username.png)

Here the user is able to update their username if they feel the need. This form is accessed through the owner's profile.

Upon submitting the form, they will then be required to log in with that new username from then on.

### Change Password

![A screenshot of the change password form](/src/assets/readme_assets/features_images/change-password.png)

Here the user can change their password, this form is accessed through the owner's profile.

The form contains a validation method to ensure that both passwords match before submission. THe form will bounce otherwise.

Upon submiting the form, the user will need to log in using the updated password from then on.

### Inifinite Scroll

When loading both posts and comments, an infinite scroll component has been implemeneted to fetch more data for the user. This component adds to user experience as posts and comments are seamlessly added without the user having to click anywhere to load additional data.

### Re-use of components

A number of components were created and re-used to minimise code duplication.

#### Asset.js

- The `Asset.js` component refers to images and loading spinners that are used throughout the application. The component takes multiple props, these being `spinner`, `src`, `message` and `height`.

- If `spinner` is passed to the component then the asset component will display a spinner in it's place - this indicating to the user that data is currently being fetched.

- If `src` and `height` are passed to the prop, then the asset component will render an image respectively. If no `height` is passed then the height will default to the height of the source image passed.

#### Avatar.js

- THe `Avatar.js` component refers to the image next to a users profile. The component is used extensivelt throughout the `PopularProfiles.js` and `ProfilePage.js` components.

- The component takes the props of `src`. `height` and `text` with the height component defaulting to 45 if not height is passed.

- The `Avatar.js` component adds a nice touch to the application whereby users can differentiate between profiles based on the avatar image. The `src` prop for the component is defaulted to the `leaf_img` as per instructions via the image field within the backend upon sign up. When users edit their profiles, this is when they will be able to change their avatar image.

#### CategoryList.js

- The `CategoryList.js` component fetches and renders the list of categories for the user. This component saves dulication of code as fetching the current categories is a common theme throughout the web-aplication, therefore having a `CategoriyList.js` component is pivotal.

- The component is used primarily within the `CreateCategory.js`, `EditCategory.js` and `PostsPage.js` components. Rendering this components means that the categories will not need to be rendered elsewhere otherwise.

#### DeletionModal.js

- The `DeletionModal.js` component is a bootstrap imported component. The component ensures that users which intend to delete a piece of data have the chance to confirm it in the event that it was a misclick.

- The component takes the props of `HandleDelete` and `DropDown`. These two props are to differentiate between where the component is being called. THe `HandleDelete` prop ensures the component is called during the handleDelete function within the `CategoryEdit.js` component.

- Otherwise, the `DropDown` prop ensures that the component is called when the delete button clicked is being called through the `MoreDropdown.js` component.

#### MoreDropdown.js

- The `MoreDropdown.js` component provides the user with a neat dropdown menu where they can either choose to edit or delete a post. As seen in both the `Post.js` component and the `Comment.js` component, the `MoreDropdown.js` component provides a means for the user updating and deleting the post.

- Upon clicking the edit button the user will be directed to the respective edit page of the component they wish to update.

- When clicking the delete button the user will be met with the aforementioned `DeletionModal.js` which ensures the user does have an intention of deleting the data in question.

- Within the component, 3 functions are rendered. The initial `NoreDropdown` function, but also the `ProfileDropdown` component and the `CategoryDropdown` component. These functions are slightly different to the default `MoreDropdown` component as they direct to different urls upon being clicked.

#### NavBar.js

- The `NavBar.js` component conditionally renders the navbar to the user depending on multiple factors.

- On being unauthenticated, the user will be greeted with `home`, `sign-in` and `sign-up` - allowing the user to either sign in or sign up and create an account.

- Upon logging in and being an authenticated user, the user will then be greeted with `home`, `create-post ,`feed`, `liked` and `profile`. Attempting to access either the `sign-in` or `sign-up` urls will result in the user being redirected to the home page.

- Finally, if the user logging in is of an admin status, upon authentication they will be greeted with the aforementioned navbar links, however they will also see the `create-category` link too. This is because only admins will have the option to create new categories.

- Conditional rendering is used to render all the above functionality depending on the user's logged in status.

#### NotFound.js

- The `NotFound.js` component displays a neat `page not found` page for the user, in place of a 404 error being displayed.

### CRUD Functionality

Horizons features full Create, Read, Update and Delete functionality, via the UI implemented in React and the Horizons-Backend API.

- **Create** - Authenticated users can create posts as well as create comments relating to said posts. Users will also be able to create like and favourite instances by performing the respective actions on posts. Admin users have the aforementioned post and comment creation functionality, but they can also create categories on top of this.

- **Retrieve** - Any user, regardless of authenticated status, will be able to retrieve data surrounding posts, comments and categories. Unauthenticated users will also be able to retrieve profile data of users. Authenticated users will be able to retrieve their favourited posts data through accessing their own profile page.

- **Update** - Authenticated users will be able to update their own posts and comments, as well as update their own profile page if they choose to do so. This right is reserved for authenticated users only for obvious reasons. Admin users have the permission to update categories too - again this permission is reserved for the role of an admin.

- **Delete** - Authenticated users will be able to delete their own posts and comments - providing they are the owner of the respective data. Admin users will have the permission to delete categories too. Furthermore, admin users have the permission to delete another user's post in the view of safeguarding if they feel it is neccessary, regardless of whether they are the post owner or not.

### Future improvements and features

#### Short Term Improvements
The following fixes and improvements would be made in the short term as a high priority if more time were available:

- Alert feature - give the user a clear alert upon any neccessary form of CRUD functionality, for example 'post updated' or 'post deleted'.
- Add icon to categories - this would allow admin users to attach a small icon or image to each category upon creation to make them more recognisable.
- Add a like feature to comments.
- Add an unlike, or down-vote, feature to posts.
- Add further customisation fields to user's profiles.
- Add admin or user status for users in the navbar.
- Add functionality so that no more than one comment edit form can be open at one time.
- Remove edit functionality for admin users - they should only have permissions to delete content of users, not update it.
- Add comment form feedback for users when submitting invalid data, there are currently no error alerts.
- Add a feature to clear the searchbar and categories dropdown.
- When updating password or username, user should be made to sign in again

#### Long Term Improvements
Lower priority, longer term features to be added are:

- Allow users to send messages to each other through a messaging component.
- Allow users to export and share their friendcode between applications.
- Add more admin specific features.
- Add functionality for admins to make other user's admins - with precautions.

## Frameworks, Libraries & Dependencies

- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

- [React-Dom](https://reactjs.org/docs/react-dom.html)

- [Axios](https://www.npmjs.com/package/axios) - the axios library was chosen to simplify making HTTP requests to the REST API (e.g. not having to manually configure HTTP headers), and because it enables simple implementation of 'interceptors' which are used to request a refresh token in the event of a HTTP 401 error. This enhances the user experience beacuse an authenticated user remains signed in for up to 24 hours, rather than having to sign in again after five minutes.

- [JWT-Decode](https://www.npmjs.com/package/jwt-decode) - used to decode Base64URL encoded JSON web tokens.

- [Bootstrap 4](https//www.bootstrap.com)

## React features to enhance user experience

### Custom Hooks

- **useCurrentUser** - this hook gains the current user's authenticated status.
- **useSetCurrentUser** - this hook allows the user's authenticated status to be updated anywhere in the application.

- **useProfileData** - this hook allows the user's profile information to be accessed anywhere in the application.
- **useSetProfileData** - this hook allows the user's profile information to be updated anywhere in the application.

- **useCategoryContext** - this hook allows the application to access the current categories anywhere within the application. This hook allows the application to access both a `ClickedCategory` as well as a list of `PopularCategories`.
- **useSetCategoryContext** - this hook allows the application to update the current categories anywhere within the application. This hook allows the application to update both a `ClickedCategory` as well as updating a list of `PopularCategories`.

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

- Code Institute's [Moment's Walkthrough](https://github.com/Code-Institute-Solutions/moments)

- [React Documentation](https://react.dev/)

- [She Codes](https://www.shecodes.io/athena/7184-how-to-use-the-map-method-in-react) - map method clarification

- A [video](https://www.youtube.com/watch?v=aeQa9U0fLCI) created by Caleb Curry on their [YouTube Channel](https://www.youtube.com/@codebreakthrough)

### Media

- This [Leaf Design](https://www.reddit.com/r/AnimalCrossing/comments/fjawfs/as_requested_here_is_a_high_resolution_version_of/?rdt=42497) was taken from Reddit and used in the wireframes

- The [Default Leaf](https://commons.wikimedia.org/wiki/File:Animal_Crossing_Leaf.svg) Avatar image

- The [Horizons Logo](https://www.deviantart.com/biochao/art/Animal-Crossing-Leaf-906601347) was found [here](https://www.deviantart.com/biochao/art/Animal-Crossing-Leaf-906601347)

- [Sign In Photo](https://gamejolt.com/c/animalcrossing-ypbu6m?feed_last_id=%7B%22ver%22:%221%22,%22pos%22:%221695304588.162%22%7D) was downloaded from [here](https://gamejolt.com/c/animalcrossing-ypbu6m?feed_last_id=%7B%22ver%22:%221%22,%22pos%22:%221695304588.162%22%7D)

- [Sign Up Photo](https://www.reddit.com/r/AnimalCrossing/comments/osvccl/ive_been_doing_some_animal_crossing_fanart/?rdt=56036) was taken from [here](https://www.reddit.com/r/AnimalCrossing/comments/osvccl/ive_been_doing_some_animal_crossing_fanart/?rdt=56036)

- The [No Results Image](https://www.deviantart.com/vgafanatic/art/Mr-Resetti-104615679) was downloaded from [here](https://www.deviantart.com/vgafanatic/art/Mr-Resetti-104615679)