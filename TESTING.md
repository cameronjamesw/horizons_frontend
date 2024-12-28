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
    + [Lighthouse testing](#lighthouse-testing)
    + [Resolved bugs](#resolved-bugs)
    + [Unresolved bugs](#unresolved-bugs)

## Testing

### Manual Testing

### Validator Testing

### W3C CSS Validator

- All CSS files were passed through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and no issues were found.

### ESLint JavaScript Validator

- All JavaScript files, including `App.js` and `index.js` were ran through ESLint within the CLI. ESLint was installed, and upon running no errors were found in the code.

### WAVE Web Accessiblity Testing

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

### Lighthouse Testing

### Resolved Bugs

| ID | Issue | Resolution | Fixed |
| --- | --- | --- | --- |
| 1 | When selecting a category, the terminal was throwing a 400 error | I quickly discovered that this was because I was attempting to post the category name to the API; however, the API only accepts the data-type of an integer, and this is why it was throwing the error. I fixed this by creating a function which posts the category ID instead of the name, and this fixed the issue. | Yes |
| 2 | When pre-populating fields within the EditPostForm, the category field was not being pre-popualted and was instead being left blank. | In order to resolve this I had to map over the category object and ensure that the value of the select attribute matched that of the category ID. | Yes |
| 3 | When deleting a comment, the request was not granted and a 404 error was issued. | It turns out I have forgotten to pass the 'ID' of the comment as a parameter through the CommentSerializer over on the backend, and in turn the request was being made with an undefined ID. | Yes |
| 4 | When viewing a post as user that wasn't an admin or the owner of a post, a 0 was appearing where the edit-delete dropdown should be appearing. | It turns out, I was using the OR operator wrong in the ternary to check if the user was an owner or admin. I just had to wrap the conditional statement in a pair of parenthesises. | Yes |

### Unresolved Bugs