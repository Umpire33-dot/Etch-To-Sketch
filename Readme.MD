Updated Step-by-Step for Etch-To-Sketch
1. HTML Setup: Create a container div and a "Reset" button.


2. CSS Setup: Set the container to a fixed size (e.g., 600px) and apply display: flex and flex-wrap: wrap.


3. The Grid Function: Write a JavaScript function that takes a number (like 16) as an argument.
• Use a for loop to create the total number of squares (e.g., \bm{16 \times 16 = 256}).
• Calculate the width/height of each square: \bm{600 / 16 = 37.5px}.


4. Interaction: Inside the loop, add a mouseover event listener to each square.
• When triggered, change the square's backgroundColor. 

4. User Controls:
• The Validation Gate: After getting the user's input, use an if statement to check the value.
• The "Reject" Logic: If the number is greater than 100 or less than 1, send an alert() telling the user to try again.
• The "Pass" Logic: If the number is valid (e.g., 64), proceed to clear the old grid and draw the new one.


5. The Reset Logic: Add a click listener to the button.
• Ask for a new size via prompt().
• Crucial: Clear the container’s inner HTML so the old grid disappears before the new one is built.
• Call your Grid Function again with the new number.

5. The Math" section of your README:
• Capture the Value: Use let size = prompt("Enter grid size (max 100):").
• Calculate Pixel Width: Create a variable for the square size: \bm{600 / size}.
• Set Styles via JS: Inside your loop, use the .style property to set the width and height of your new div to that calculated number plus the "px" string.
• Example: If the user enters 10, each square becomes 60px.
• Example: If the user enters 100, each square becomes 6px.