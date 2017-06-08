# Japanese X

An application that will aid you in learning the Japanese language developed by Michelle and JR

[Live Demo](https://japanesex.herokuapp.com/)

![Screenshot](client/assets/meteor-react-landing)
![Screenshot](client/assets/meteor-react-window.png)

## A little bit about Japanese X

Japanese X was developed to help students who are learning Japanese. We used the spaced repetition algorithm to ensure the most suitable learning environment for everyone. The algorithm is fairly simple: if the user answers the question correctly, that question will move back further down the queue, depending on how many times it was answered correctly. If the user answers the question incorrectly, that question will move back only 1 space in the list.

## How to use this app

* Registering for Japanese X is easy. Simply click `sign in with google`, enter your gmail log in credentials and follow the onscreen instructions.
* Once you're logged in, you must translate what the Japanese vocabulary word is to English.
* When you have your Japanese word translated, type your answer in the `English` input field.
* If you answered the question incorrectly, the algorithm will make sure to ask you that question soon.

## API Documentation

* /api/auth/google: used to log into the application using the google oauth system
* /api/questions/`userId`: GET the questions returning information that specifically pertains to the user tied to that access token
* /api/questions/`userId`: POST the weight of each question to the database as the user correctly or incorrectly answers the question

## Technical

The frontend of this web application is developed using React and Redux. The backend uses Node.js and Mongo to store information the database. Japanese X uses the Google OAuth 2.0 system. This is used to easily log users in using their gmail credentials and store their session in the database. There are 10 total questions stored in the database. Each question has a weight attached to them that decides how many places in the array it will be sent back. For example if a question has a weight of 4, that question will be sent back 4 places. As you answer the next 4 questions, you will see that same question again.
