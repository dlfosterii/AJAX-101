This is the repository for my AJAX 101 exercises


Exercise: AJAX 101
Grade:N/A
View Grade Information. Opens a dialogue
It's time to get your feet wet with AJAX!

Step 1:

- Visit the Dog api website at https://dog.ceo 

- Play around with the different endpoints in Postman!

Step 2:

- Create a quick, easy website that has a single button that says "Generate Doggo"

- Write a click listener on that button 

- Make the click listener change the text of the button to "Generating Doggo..."

Step 3:

- add the jQuery library to your page with this code:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

- Inside your click listener, make a GET request using $.get('https://dog.ceo/api/breeds/image/random'); 

- Confirm that a new AJAX request shows up in the Network tab of the developer tools everytime you click on the button

Step 4:

- Chain a .then(function(data) {}) off of $.get(...) 

- Make sure your callback function takes a parameter called "data"

- Use the image url contained in "data" to render a dog image to the screen using DOM manipulation. (remember, you can create a new image with document.createElement('img'), and you can set the src attribute of the image with javascript)

- Make the button text go back to "Generate Doggo" after the image is appended to the screen

----------------------------------
----------------------------------

Exercise: AJAX 102
Grade:N/A
View Grade Information. Opens a dialogue
Let's turn it up a notch! We're going to make it so that you can select a specific breed of dog to show to the screen

Step 1:

- Add an empty dropdown menu to your doggo website html (<select></select>)

Step 2:

- Using jQuery, make a GET request to https://dog.ceo/api/breeds/list when the page first loads

- Confirm that this AJAX request shows up in your network tab everytime you reload the page

Step 3:

- In the callback function of the .then(function(data){}), loop through the array of dog breeds that are in the "data" parameter

- For each dog breed, create a new "option" element (<option value="pitbull">Pit Bull</option>) and then append it to the <select> tag you created earlier.

- Your drop down list should now contain a list of dog breeds

Step 4:

- add a "change" listener to the select dropdown, .addEventListener( 'change', function(){})

- In its callback function, make a new GET request to /api/breed/{breed name}/images/random (replacing {breed name} with the currently selected breed. Note that inside of the "change" listener, you can get the value of the select by accessing "this.value")

- Verify that a new AJAX request shows up in the Network tab everytime you select a breed from the list

Step 5:

- In the callback function for the GET request, create a new dog Image and show it to the screen. (this is exactly like how you did it in the first exercise!)

- Alternatively, replace the old dog image with the new one

Bonus:

- Add the bootstrap files to your page and style the page using some of the bootstrap components.

Ideas:
- A nicer form layout

- Some columns for multiple dog responses

- Change the button to a spinner when it is loading

- Display the response image in a modal

- Add a progress bar somehow

- Add multiple dogs to a carousel after each request
