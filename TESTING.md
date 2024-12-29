# Horizons - Testing

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
  * [Testing](#testing)
    + [Manual testing](#manual-testing)
    + [Validator testing](#validator-testing)
    + [W3C CSS validator](#w3c-css-validator)
    + [ESLint JavaScript validator](#eslint-javascript-validator)
    + [WAVE Accessibility Testing](#wave-web-accessiblity-testing)
    + [Resolved bugs](#resolved-bugs)
    + [Unresolved bugs](#unresolved-bugs)

## Testing

### Manual Testing

**Sign Up Form Testing**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 1 | Sign Up with a new username and password | Success, redirected to log in page | Successfully sign up, redirected to log in page | Yes |
| 2 | Sign Up with an already existing name | Form bounces, with error displayed | A user with that username already exists error message is displayed | Yes |
| 3 | Sign Up with passwords that dont match | Form bounces, with relevent error displayed | Passwords do not match error displayed | Yes |
| 4 | Sign Up while leaving form fields blank | Form bounces as fields are blank | These fields may not be left blank error message is displayed | Yes |
| 5 | Try to navigate to posts/create/ endpoint whilst being unauthenticated | Redirected to home page | Redirected to home page as not authenticated | Yes |
| 6 | Click the 'Already have an account? Sign in!' link | Render the sign in form | Renders the sign in form upon being clicked | Yes |

**Sign In Form Testing**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 7 | Log in with valid credentials | Redirected to home page | Sign in successful, redirected to home page | Yes |
| 8 | Log in with invalid credentials | Form bounces with relevent error message | Unable to log in with provided credentials | Yes |
| 9 | Attempt to log in while leaving form blank | Form bounces with relevent error message | These fields may not be blank error message shown | Yes |
| 10 | Try to navigate to posts/create/ endpoint whilst being unauthenticated | Redirected to home page | Redirected to home page as not authenticated | Yes |
| 11 | Click the 'Don't have an account? Sign Up Now!' link | Render the sign up form | Renders the sign up form upon being clicked | Yes |

**NavBar Testing**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 12 | Log in as a user | User navlinks are rendered | Relevent navlinks - post create, feed, likes, profile, signout are rendered | Yes |
| 13 | Log in as an admin user | Admin navlinks are rendered | Rendered aforementioned navlinks along with the Create Category navlink | Yes |
| 14 | Click sign out link | User is signout and the unauthenticated navlinks are rendered to the user | User signs out successfully and relevent navlinks are rendered | Yes |
| 15 | Click add post as a user | User is directed to create post page | User is directed to the correct page as expected | Yes |
| 16 | Click add post as an admin | Admin is directed to create post page | Admin is directed to the correct page as expected | Yes |
| 17 | Click on the feed navlink | User's followed feed is rendered | Expected followed feed is rendered for the user | Yes |
| 18 | Click on the like navlink | User's liked posts are rendered to the user | Liked posts are rendered as expected | Yes |
| 19 | Click on the profile navlink | Users own profile is displayed | Profile page is displayed as expected | Yes |
| 20 | Navigate to /categories/create/ endpoint as user | User should be redirected to the home page | Create category page is rendered | Fail - see bugs |
| 21 | Click the horizons logo | Directed to the home page | User is directed to the home page as expected | Yes |

**Searchbar Testing**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 22 | Search by post name | Posts which match criteria loaded in accordance to request | Request posts are loaded with slight API delay | Yes |
| 23 | Search by post creator's name | Posts which match criteria loaded in accordance to request | Request posts are loaded with slight API delay | Yes |
| 24 | Search by category within searchbar | Posts matching the crieria are loaded in accordance to the request | No posts found | Fail - see bugs |
| 25 | Search for a post that does not exist | No results image is shown | No results image is shown as expected | Yes |
| 26 | Filter posts using categories dropdown | Relevent posts are shown as per category request | Relevent posts are shown | Yes |
| 27 | Filter posts using categories dropdown when no posts are in the category | No posts shown, no results image shown | No results image rendered | Yes |

**Create Post Form**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 28 | Create post filling in all fields | Post created with user redirected to the new post | Post created, user redirected to new post | Yes |
| 29 | Leave fields blank | Form bounces, with relevent error shown | Form does not submit, fields may not be blank error shown | Yes |
| 30 | Leave image field blank | Form bounces, with relevent error shown | Form does not submit, image field may not be blank error shown | Yes |
| 31 | Upload image larger than 50Mb | Form bounces, with relevent error shown | Form does not submit, image size is too large error shown | Yes |
| 32 | Leave category field blank | Form submits with category set to null | Form submits with the category being set to null | Yes |
| 33 | Click cancel button | User is return to the previous page they were on | User is returned to the home page | Yes |

**View Post**

| Test ID | Test Case | Expected Outcome | Actual Outcome | Pass |
| --- | --- | --- | --- | --- |
| 34 | Click on specific post | Relevent post details are rendered to the user | Specific post is rendered to the user with the relevent URL | Yes |
| 35 | Click on avatar of post owner | Directed to post owner's profile page | Post owner's profile page rendered | Yes |
| 36 | Click favourite | Favourite icon goes gold and post appears in favourties | Favourite icon becomes goal and post can be found in favourites | Yes |
| 37 | Click favourite (again) | Favourite icon is no longer goal and post removed from favourited | Favourite icon becomes an outline and post is removed from favourites | Yes |
| 38 | Like Post | Heart icon turns bright red, likes count goes up, post is added to liked feed | Heart icon turns red and count goes up, and post is added to liked feed | Yes |
| 39 | Unlike Post | Heart icon returns to outline, likes count goes down and post is removed from favourites | Heart icon returns to outline, likes count goes down and post is removed from favourites | Yes |
| 40 | Try to like own post | Unable to like post and met with notification | Unable to like post and met with notification stating cannot like own post | Yes |

**Comments**
| 41 | Scroll down on post page to view comments | Comments are rendered underneath post | Comments are rendered underneath post | Yes |
| 42 | Create comment | New comment is rendered upon submitting | New comment is rendered as expected | Yes |
| 43 | Leave comment form blank | Comment is not submitted and error message displayed | Comment is not submitted but no error message is displayed | Fail - see bugs |
| 44 | Create comment while unauthenticated | The create comment form is not rendered to the unauthenticated user | Create comment form is not rendered | Yes |
| 45 | Edit comment | Update comment form successfully | Comment updated successfully with updated data rendered | Yes |
| 46 | Leave edit comment form blank | Comment is not updated and error message displayed | Comment is not updated but no error message is displayed | Fail - see bugs |
| 47 | Edit comment of another user | Comment edit dropdown is not visible to users who are not comment owners | Comment edit dropdown is not visible | Yes |
| 48 | Delete comment | Deletion modal is shown and user can successfully delete comment | Deletion model shown, comment deleted successfully | Yes |
| 49 | View comments as admin | All comments have edit and deletion functionality even if admin is not owner | Admin is able to update and delete comments | Yes |
| 50 | Edit comment of other user as admin | Update comment form successfully | Comment updated successfully with updated data rendered | Yes |
| 51 | Delete comment of other user as admin | Deletion modal shown and comment deleted successfully | Deletion modal shown and comment deleted successfully | Yes |
| 52 | Click on comment owner's avatar | Comment owner's profile page loaded | Comment owner's profile page loaded | Yes |

**Edit & Delete Post**

| 53 | Click on edit post in post dropdown | PostEditForm is rendered with pre-existing details rendered | Edit post form rendered accordingly | Yes |
| 54 | Update post filling out form as intended | Form subitted with post being updated, post re-rendered with updated data | Form subitted with post being updated, post re-rendered with updated data | Yes |
| 55 | Leave update fields blank | Form bounces, with relevent error shown | Form does not submit, fields may not be blank error shown | Yes |
| 56 | Leave image field blank | Form bounces, with relevent error shown | Form does not submit, image field may not be blank error shown | Yes |
| 57 | Upload image larger than 50Mb | Form bounces, with relevent error shown | Form does not submit, image size is too large error shown | Yes |
| 58 | Leave category field blank | Form submits with category set to null | Form submits with the category being set to null | Yes |
| 59 | Leave category field blank despite category already being assigned | Form submits with category being updated to null | Form submits with the category being updated to null | Yes |
| 60 | Update category field | Select a category from the dropdown | Post is then assigned the category and appears in category searches, category name now appears on post too. | Post is then assigned the category and appears in category searches, category name now appears on post too. | Yes |
| 61 | Click change image button | Allow the user to change the image | User gets the option to select a new image | Yes |
| 62 | Click cancel button | User is returned to the previous page they were on | User is returned to previous page as expected | Yes |
| 63 | Click edit on filled out form | Post updated | Post updated and re-rendered to user | Yes |
| 64 | Access url path as user who isn't owner | User redirected to home page | User redirected to home page as expected | Yes |
| 65 | Access url path as user who isn't authenticated | User redirected to home page | User redirected to home page as expected | Yes |
| 66 | Access url path as an admin user | EditPostForm renders as expected | EditPostForm renders as expected | Yes |
| 67 | Update post as admin user, filling out form as intended | Form subitted with post being updated, post re-rendered with updated data | Form subitted with post being updated, post re-rendered with updated data | Yes |
| 68 | Click delete post | Deletion model is shown to the user and post is deleted upon clicking delete | Deletion model is shown to the user and post is deleted upon clicking delete | Pass |
| 69 | Click delete post as an admin of another user's post | Deletion model is shown to the user and post is deleted upon clicking delete | Deletion model is shown to the user and post is deleted upon clicking delete | Pass |

### Validator Testing

### W3C CSS Validator

- All CSS files were passed through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and no issues were found.

### ESLint JavaScript Validator

- All JavaScript files, including `App.js` and `index.js` were ran through ESLint within the CLI. ESLint was installed, and upon running no errors were found in the code.

### WAVE Web Accessiblity Testing
All issues that were appropiate were rectified.
Testing with the WAVE validation revealed the following issues:

**Issues Fixed**

- Contrast issues with links within the nav and popular categories components. Colour of the links was changed from `#356933` to `#01C503`. Issue fixed.

- Avatar within the profile page component missing an ALT label. Issue fixed.

- Heading tags skipping an element, altered H3 tags to H2 tags to deal with this. Issue fixed.

- Low contrast errors within the comments component - colour chaged to fix this error.

- Comments count link was throwing an error because it had no text inside - I removed the link attribute and fixed this error.

**Unsolved Issues**

- Avatar components have the same ALT text, this is throwing an alert within the WAVE Extension.

- Broken same-page link within the Navbar component. A link to another location within the page is present but does not have a corresponding target. Removing the `to` element from the link in question breaks the page.

- CreateCommetForm missing form control label - added label to fix this issue but the issue is still show despite label being added.

- CreatePostForm missing form control label

- Searchbar missing form control label

- CreateCategoryForm missing form control label

- ProfileEditForm missing form control label

### Resolved Bugs

| ID | Issue | Resolution | Fixed |
| --- | --- | --- | --- |
| 1 | When selecting a category, the terminal was throwing a 400 error | I quickly discovered that this was because I was attempting to post the category name to the API; however, the API only accepts the data-type of an integer, and this is why it was throwing the error. I fixed this by creating a function which posts the category ID instead of the name, and this fixed the issue. | Yes |
| 2 | When pre-populating fields within the EditPostForm, the category field was not being pre-popualted and was instead being left blank. | In order to resolve this I had to map over the category object and ensure that the value of the select attribute matched that of the category ID. | Yes |
| 3 | When deleting a comment, the request was not granted and a 404 error was issued. | It turns out I have forgotten to pass the 'ID' of the comment as a parameter through the CommentSerializer over on the backend, and in turn the request was being made with an undefined ID. | Yes |
| 4 | When viewing a post as user that wasn't an admin or the owner of a post, a 0 was appearing where the edit-delete dropdown should be appearing. | It turns out, I was using the OR operator wrong in the ternary to check if the user was an owner or admin. I just had to wrap the conditional statement in a pair of parenthesises. | Yes |

### Unresolved Bugs

| ID | Issue | Fixed |
| --- | --- | --- |
| 1 | When refreshing the `CategoryEditForm.js` component, the app breaks and displays a white screen as the `is_admin` parameter is set to `null` on refresh. I have tried my best to debug this but I am not sure why this is happening. I have compared the `useEffect` hook to that of the hook in the `PostEditForm.js` component - as both forms are similar, but I cannot find out why it is crashing. The functionality still works as expected and the admin user is still able to update the category | Not Fixed |
| 2 | When editing comments, if the user has more than one comment on a post, they are able to open up the edit comment form on both comments. A better user experience would close the previous edit comment form, and then open the newly selected one. | Not Fixed |
| 3 | When loading the `PostsPage.js` component two errors regarding keys appear in the console. I have thoroughly checked my code to ensure that there are keep in every list and mapped component, especially where the error is referring to, but I am unable to resolve this issue. | Not Fixed |
| 4 | When trying to submit invalid form data within the comment form, no alert shows up when submitting | Not fixed |
| 5 | Standard users are able to access the /categories/create endpoint dispite them not having permission to create them. This is not that much of an issue currently as when trying to create a category they are unable to submit the category | Not Fixed |
| 6 | When typing in category names into the search bar no posts are loaded despite a number of posts being in the category. This is not that much of an issue as the categories dropdown loads these for the user | Not Fixed |
| 7 | When subitting an empty comment form in either create a comment or edit a comment, the comment is not submitted (as expected) but no error message is displayed | Not Fixed |