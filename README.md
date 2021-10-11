# Test task by `Ihor Morozov`
## Usage
* Clone this repository `git clone https://github.com/IhorMorozov/test-task.git`
* Run `yarn install` to install dependencies
* Run `yarn start` to start the development server and stop with `Ctrl + C`
* Enjoy 😉

*or*

* Go to the link: *[test-task.app](https://test-task-ihormorozov.vercel.app/profile)*

# UI Requirements:

### General
- [x] Create application with 2 tabs

### Tabs structure
- [x] Profiles tab: show a grid. It must have columns like “Profile name”, “Profile status”, “Creation date”, and other as you wish. All your available data should be saved to the DB (WebSQL)
- [x] Summary tab: should display profile’s data in any format/design you wish.

### Grid columns
- [x] Add one or few columns with image and tooltip on hover
- [x] Grid should have at least 1 column with date format. It should be presented like dd/mm/YYYY
- [x] Add one or few columns with percentage format
- [x] Add one or few columns with currency format (with $)
- [x] Profile name should be a link. On click -> redirect to the summary tab, and display all selected profile’s data. Use routing for navigationing.

### Sorting
- [x] Each column should be sortable (by clicking on the column name)

### Column Selection 
- [x] In the actions bar you should add a button “Column selection”. On click you need to open a new popup/dialog, and you should be able to select columns to display in the grid. After changes will be applied, the grid should be reloaded with appropriate columns.

### Saving to the localStorage
- [x] Selected grid columns and sorting should be saved to the localStorage, and after page reload  - the grid should show the same selected columns and sorting.


# Technologies requirements:
- [x] You are able to use any libs you want, except of limitations described in this requirements
- [x] All project should be implemented using the React library
- [x] Implement SPA site, for navigation use routing (react-router-dom for example). On the refresh page the previously selected tab should remain selected. Columns should remain also.
- [x] Use yarn as package manager
- [x] Write a good readme to use your project
- [x] Use react hooks
- [x] Don't use redux - contexts only (limitation)
- [x] All implement components should be re-usable and extendable
- [ ] Add tests
- [ ] Implement moduleness infrastructure of you project
