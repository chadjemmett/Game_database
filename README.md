Test for WEHCO media. Started Nov. 20 12:39 MT.

# As a user...
I want to be able to see a list of video games. The games are organized by favorites first. Then alphabetical.
I want to be able to click on a game to save it as a favorite.
I want to be able to click on a column of my list and sort the games based on that column.
I want to be able to enter a new game.
So I can keep track of games I'm interested in and which games are my favorite.

## Frontend
React app.
A component that can list the games.
A click handler  to change the favorite status of the game.
A click handler to change the sorting of the games.
A set of fields to enter data about the games I'm interested in.
A change handler to keep track of the data in the fields.
A submit button to save my games in the database.
A way to sort each column. First by favorite, then by the criteria in the column.



## Backend
An endpoint to save games.
An endpoint to get games.
A PUT endpoint to change the game's favorite status.
A way to get games from the DB Favorite first. Then alphabetical.
A deletion endpoint.

### Data Model
* Game
    Name: String Not nullable
    Release date: String  Not Nullable
    Genre: String
    Developers: String
    Publisher: String
    Favorite: Boolean Defalult False
    ID: Integer





## Objective
* Create a CRUD application where a user can interact with video game titles and associated data. Be sure each CRUD operation can clearly be executed and reflected in a data layer.
* Show that a title can be favorited and persist that favorite beyond a page refresh or navigation to another page of the application.
* Present your list or grid of video game titles in an organized manner and allow that list to be sorted by different data points associated with each title.

Use any framework or stack or libraries and any front-end technology to create a CRUD web application that allows a user to add video game titles to a list. Present the list in a clean, readable way. The list or grid should be able to be sorted by different columns and should have various data about the video game displayed (ex. genre, year released, short description, company, platform). The video games in the list should be able to be favorited. The default sort should be by favorite first and then alphabetical. If you can get to it, please incorporate an external API to assist with normalization of your data. This project is to demonstrate an understanding of CRUD applications and MVC frameworks or equivalent ideas.

