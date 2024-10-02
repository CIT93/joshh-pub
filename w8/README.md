# How to handle the Edit
- Could we use another event listener on the actual Edit button.


# My Understanding
- When the form is submitted, the "e.preventDefault()" method is used to prevent the page from reloading, and values for the items (firstname, lastname, houseMembers, and houseSize) are retrieved from the form. Then these values are passed to the "start" function, where "determineHouseHoldPts" and "determineHouseSizePts" calculate points based on the household size and house size itself. The total carbon footprint is computed as the sum of these points, and an object containing the users data and the total footprintis added to the "cfpData" Array. The "renderTbl" function is then called to update the UI, clearing the table and rendering new rows with the users name and footprint. Finally the form is reset to prepare for the next entry.


# Video Feedback
- I felt the video you did was very helpful in learning what Chrome Dev Tools did going step by step was super beneficial. I will definitely be watching the video again before the interview.