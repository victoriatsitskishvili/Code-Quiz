# Code-Quiz
1. HTML Index:
- adding a title - Code-Quiz
- adding a reference to a css document  - using rel
- creating a css document under assets css folder (empty for now)
- Need to create different div classes - Scores, Timer, Wrapper (basically a div that will have all the rest of the HTML of the document)
- For a highscore section, we need to connect a new html file where the scores will be saved (a href)
- Creating an inline element for a div class timer (span)
- Under the Wrapper class, we are creating 3 main div ids - start-screen, questions, end-screen
- For the start-screen, by looking at the mock-up provided, we can notice Title (which we will use h1 for) - Coding Quiz Challange; some text under (we will use p) - Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!; and the button (create a button, using id to style after) - Start Quiz! 
- Create a new divs for questions and choices
- Create a new div end-screen, by looking at the mock-up provided, we can notice Title (which we will use h2 for) - All done!; some text (we will use p element) - Your final score is (need to use a span id); some tex (we will use p element) - Enter initials:; input type - text (default value); and the button (create a button, using id to style after) - Submit
-  Creating a new div (feedback) to indentify if the answer is right or wrong 
- Creating 2 empty js files to link to the html (Point to an external JavaScript file - script src)

2. HTML highscore 
 - Use html:5 to add the html frame
 - Change the title to Highscores
 - Adding a reference to a css document  - using rel
 - Creating a div class - wrapper
 - Creating ordered list 
 - Linking to index html 
 - Creating a button 
 - Linking to an external JavaScript file - script src

3. Css
- Adding a font style and size to a body elements
- Adding a style to an a element (hyperlink), as well as a color to a hover
- Styling a button with display function - allows to set a width and height on the element where the top and bottom margins/paddings are respected, does not add a line-break after the element
- Adding an existing hover style to a button
- Adding a display style to an choices button - displayed as a block
- Setting the font size to input - input[type=text] - will only select text fields
- Styling an ordered list - padding, hight, overflow auto - If content fits inside the padding box, it looks the same as visible, but still establishes a new block formatting context. Desktop browsers provide scrollbars if content overflows.
- Using a list syle 
- Adding style to each class

4. Javascript (logic)
- Declaring variable to see the flow of the quiz 
- Referencing DOM elements <var> in html (getElementById)
- Calling a function to start the quiz: hiding the start screen by using <var> in html (getElementById) and Element.setAttribute() , unhiding questions - using removeAttribute(), setting the time interval - 1000 is 1 sec , display the starting time - timerEl.textContent
- Calling a function to show a current question 
- Updating a title with a current question 
- Removing any old question answers
- Creating a loop and buttons for choices 
- Adding an event listener (for click) to every choice
- Displaying on a page
- Calling a function on a click - if the answer is wrong the time is being deducted from the timer (running an if function)
- Showing if the answer was right/wrong on page
- To move to the next question - use currentQuestionIndex++;
- Running an if function to find out of there are more questions to answer
- If no more questions to ask - end the quiz - end the timer
- Display the end screen, final score and show the end screen
- Update the time on a timer and check if we still have some (running an if function)
-Calling a function to save the high score 
- Check if the value is not empty 
- Use JSON to get the saved scores or set up an empty array
- Format new score object
- Save to local 
- Redirect to a score page 
- Returning the value of the function, will prevent the keypress event from being handled further.

5. Javascript (scores)
- From the localstorage pull the scores or set an array to an empty one
- Display the scores in descending order
- Creating li tags for each score 
- Run the function 

6. Questions, choices and answers - javascript
- Copy the questions and answers from the mock up 
- use var 

![Screenshot of a start screen] (https://github.com/victoriatsitskishvili/Code-Quiz/blob/42d82d094bb11ed882f16e75202552488e9928b0/assets/images/start%20screen.png) 
![Screenshot of a question screen] (https://github.com/victoriatsitskishvili/Code-Quiz/blob/42d82d094bb11ed882f16e75202552488e9928b0/assets/images/question.png)
![Screenshot of your final score] (https://github.com/victoriatsitskishvili/Code-Quiz/blob/42d82d094bb11ed882f16e75202552488e9928b0/assets/images/final%20score.png)
![Screenshot of a list of all scores] (https://github.com/victoriatsitskishvili/Code-Quiz/blob/42d82d094bb11ed882f16e75202552488e9928b0/assets/images/list%20of%20scores.png)

[Link to Git] (https://victoriatsitskishvili.github.io/Code-Quiz/)
