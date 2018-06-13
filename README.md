## Neighborhood Map Lite
### Introduction: 
To get started please run up index.html in your favorite browser.

This project required that the map should be of an area near where you live or a neighborhood of your choosing. A list of your favorites should be filterable with user input and provide additional information when clicked.

The purpose of this project was to use concepts from `Knockout` and a 3rd party API. The `MVVP` design structure of `Knockout` would introduce students to more advanced code structuring techniques. The interactive portion of `Google Maps` and the other 3rd party `API` would provide first-hand experience integrating external data sources from the web. 

## UI and Instructions:

On loading the page the user will be centered on the map at Oviedo, España. 

Below the headline of the page, a search bar is available for typing searches. On typing, depending on the device in use, a list of favorites will appear either above or to the side of the map.

At the same time the list adjusts to the search, animated markers wil also appear and drop down onto the map. The list items and markers can be clicked and an info box will appear. When the marker or list item is clicked an info box with some basic data will appear. A Wikipedia link will also appear if one is available. Clicking on the link will open a new tab that loads the wikipedia page.

In the top right corner is a half-eaten hamburger than can be squooshed to toggle the favorites list out of view. 

---

## Project Guidelines:
(Adapted from Udacity's Project guidelines)
- Write code required to display map markers identifying at least 5 locations that you are interested in within your neighborhood. The app should display those locations by default when the page is loaded.
- Implement a list view of the set of locations.
- Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real time.
- Providing a search function through a third-party API is not enough to meet specifications. This filter can be a text input or a dropdown menu.
Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked.
- Provide attribution to the data sources/APIs you use.
- Add functionality to open an infoWindow with information, such as location name, when either a location is selected from the list view or its map marker is selected directly.
- The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered.
- Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map marker with additional information.

- `Knockout` must be used to handle the list, filter, and any other information on the page that is subject to changing state. Things that should not be handled by Knockout include anything the Maps API is used for: creating markers, tracking click events on markers, making the map, refreshing the map. Tracking click events on list items should be handled with Knockout. Creating your markers as a part of your ViewModel is allowed (and recommended), but creating them as Knockout observables is not.
- All data APIs used in the project should load asynchronously and errors should be handled gracefully. In case of error (e.g. in a situation where a third party API does not return the expected result) the webpage should do one of the following: A message is displayed notifying the user that the data can't be loaded, **OR There are no negative repercussions to the UI.**

## Design Criteria ##
A list of design criteria can be found at [Udacity's Project Rubric](https://review.udacity.com/#!/rubrics/17/view)


### TODO:

Change the list of favorites to an editable list. The should be added and deleted and lists renamed and saved as desired.

Add foursquare service.
Add street view service.

Add Geolocation and allow users to access Google's directions service with the standard options similar to a standard Google map.

---













