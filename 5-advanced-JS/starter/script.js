/* CODING CHALLENGE */

/* LET'S BUILD A FUN QUIZ GAME IN THE CONSOLE  */

/* 1. let's build a fun quiz game in the console! */ 

/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself 
b) the answers from which the player can choose the correct one (Choose an adequate data structure here, array, object, .etc)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array 

4. Select one random question and log it on the console, together with possible answers (each 
question should have a number) (Hint: write a mthod for the Qestion objects for this task).

5. USe the 'prompt' function to ask the user for the correct answer. The user should input the number of 
the correct answer such as you displayed it on task 4. 

6. Check if the answer is correct and print to the console whether the anser is correct at and print to the console whether the answer is correct or not (hint: 
write another method for this).question

7.Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code import {  } from private and doesn't interfere with the other progranners 
code (Hint: we learned a special technique to do exactly that).
*/

/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself 
b) the answers from which the player can choose the correct one 
(Choose an adequate data structure here, array, object, .etc)
c) correct answer (I would use a number for this)
*/



var Question = function consoleQuestion(question, answers, correctAnswer) {
    this.question;
    this.answers;
    this.correctAnswer;
}


