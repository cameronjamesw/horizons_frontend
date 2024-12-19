# Horizons

## Project goals

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

### ESLint JavaScript Validator

### Lighthouse Testing

### Resolved Bugs

| ID | Issue | Resolution | Fixed |
| --- | --- | --- | --- |
| 1 | When selecting a category, the terminal was throwing a 400 error | I quickly discovered that this was because I was attempting to post the category name to the API; however, the API only accepts the data-type of an integer, and this is why it was throwing the error. I fixed this by creating a function which posts the category ID instead of the name, and this fixed the issue. | Yes |

### Unresolved Bugs