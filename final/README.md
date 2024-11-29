

# Name: Journey Genie or Getaway Guru

# Description of Purpose: The "Travel Destination Picker App" is designed to assist users in selecting their ideal travel destination based on individual preferences and criteria. By allowing users to input their budget, preferred activities, and climate preferences, the app will generate tailored suggestions that align with their criteria.

# Variables:
1. userBudget (number) - this stores the user's budget for travel, represented as a numeric value ( $1500 dollars).
2. userActivities (array of strings) - this holds the activities the users is interested in (["beach","hiking"]).
3. isWarmWeather (boolean) - this will indicate whether the user prefers warm weather (true) or not (false).
4. userDestination (string) - this can hold a specific destination that the user might prefer or is considering ("Hawaii")
5. tripDuration (number) - this will represent the number of days the user plans to travel (7 days)

These variables will help capture the necessary information to make informed travel suggestions based on user preferences.

# Decision Making Process
1. Collect User Preferences: 
    - The app gathers important information from the user, such as their travel budget, preferred activities (like hiking or beach), and weather preference (warm or cold).

2. Filter Destinations: 
    - The app has a list of potential travel destinations, each with a cost, activities offered, and climate
    - It checks if each destination's cost is within the user's budget.

3. Match Activities:
    - The app looks for destinations that offer at least one of the activities the user enjoys or is interested in.

4. Check Weather Preference:
    - It ensures that the destination matches the users weather preference.

5. Calculates Suitability Score:
    - The app can calculate a score for each destination based on:
        - the number of matching activities
        - how close the destination cost is to the users budget
        - bonus points for warm weather destinations.

    Formula: 
    Suitability Score = Matching Activities+(10-Cost Difference)+ Warm Weather Bonus / Trip Duration

    In this formula:
    - Number of matching activities: this will increase the score for each activity the destination provides that matches the user's interests.
    - Cost Difference: The difference between the user's budget and the destination's cost, which can adjust the score positively for a cheaper option.
    - Warm Weather Bonus: A set point value (e.g., 5 points) added to the score if the destination's weather aligns with the user's preference.

6. Provided Recommendations:
    - The app with list suitable destinations based on criteria. If no options are available, it suggest adjusting the budget or preferences.

7. User Interaction: 
User's can save their favorite destinations and create itineraries based on their selections.

# Week 3 Updates:

* Function:

1.  Function 1 = findSuitableDestinations: Purpose is that it will filter and return the destinations matching the user's budget, activity choice, and weather preference.
    - Parameters I used are: Budget(what they are willing to spend), selectedActivity(their selected activity type), prefersWarmWeather(this is a warm weather preference), and days(this is to select how many days they are looking to stay). And the returns(this is an array of suitable destinations)
2. Function 2 = displayDestinationsSuggestion: Purpose is to display suitable destinations based on user preferences and saves each search in an array.
    - Parameters = budget, selectedActivity, prefersWarmWeather, days: inputs from the form the user filled out
    - Behavior: Calls "findSuitableDestinations" to get matching destinations, displays results in the "destination-output" div, stores results in the "userInputAndResults" array, which will log past searches for reference.

# Form Submission:
1. Purpose: Event listener for the form submission
2. Behavior: prevents the default submission, will capture user inputs from the form and will call "displayDestinationsSuggestions" with captured inputs.

Example From Code:
Try submitting a form with a budget of 1500, selecting "Beach, Hiking, Sightseeing," and checking "Prefer Warm Weather." The script should suggest "Hawaii" and display this information below the form.

# Step 4 Update

* Function Call In Event Listener: the "displayDestinationSuggestion" function is called inside the event listener for the form submission, ensuring that the suggestions are generated and displayed based on user input.

* Custom Validation: I created a custom validation function "validateBudget". This function will check to see if the budget is at least $500. If the budget is blow the amount then an alert is shown, and hte function returns false, preventing further processing.

* My plan for my tabular data is to use the structure of  "userInputsAndResults", this will be formatted into a table. This will be done by creating a new function that uses "userInputsAndResults" array and generates an HTML table to display the results neatly.

* I also cleaned up my main.js code by moving and adding more destinations to a separate page called destinations.js. I linked the pages together using import and export.
I plan to add css to the page as well eventually

* UPDATE *
I have remove the DOM LOAD and put the regular function at the bottom of the MAIN.js page. tested code and its working 

* UPDATE 2 *
I have fixed the error that I was getting and I have added a table to my app and I have gave it some generic css that I pulled from chatGPT, I will be going thru the css and adding color and other flair to make it pop but for now its very blah. tested code and its working no error 

# Step 5 Update
* I added a global.js page and moved the global variables to the page to clean up my main.js page

* Added a render.js page to put my table code / table rendering on it that way my main.js page just has my main logic and my event handling.

* I created a table so when the suggestion populate on the page it is clean looking. Will update later will better colors and other options. I also added a delete button to the table.

* cleaned up my code by removing commented out code.

* added a few more options to the suggestion that come out when choosing activities I would like to have a good amount of suggestion per choice. Used chatGPT to update the list 

The reason this is commented out is I may do this I was kinda brainstorming ideas and this was one of the options I thought about
<!-- * Added another row to my form for another option as well example if someone wants a list of tourist items and winter items they can choose either from both the list -->

# Step 6 Updates
* Instead of an edit button I choose to do a saved button and once the save button is selected then they are moved to a table below the suggestions.
* Updated my destinations table to show actual activities within the city its showing 
* Changed around my CSS to a more relaxing color

# Final Week
* I updated the name of the app to Getaway Guru
* Changed up my css for a more modern/professional feel
* Implemented a packing list generator that generic and specific for the destination