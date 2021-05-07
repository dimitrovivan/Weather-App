# Weather-App
Weather SPA | Educational purposes | Ivan Dimitrov

## Project description

  Single page application, made after the online JS APPs course, for fun and to train the gained skills.
I am using custom router, templating library - lit-html, firebase as BaaS 
and free plan in openweathermap to get the information for current weather forecast.
The design is made and implemented by me. It's responsive and dekstop-first.
The used icons are not good and some part of the design, but the main idea is to practice
work with different API's and asynchronous javascript.

## Project functionality
 
  ####  Main: 
   1.On home page you are asked to allow current location,if so, you receive immediately current weather
   forecast for your location, otherwise you receive by default for Sofia, Bulgaria.

   2.On weather page, when you type valid city or country name you receive only the current weather information,
   because of the free plan in openweathermap.

   3.You can register, log in and logout.
   4.Notifications on success or error.

  ####  Additional: 
   1.If you are not logged in when you try to reach weather page you are redirected to login page.
   2.No state is pushed if you click on link with same href.
   3.If your entry point is with wrong url, you are redirected to home page.

  ####  Disdisadvantages:
   1.If you try to login when i have turned of Firebase authentication you will receive error "Failed to fetch", due to security reasons in Firebase. And after the second time    you try, or 1-3s it will be turned on automatically and you will be able to log in. It is same for register.

   2.If you try to reach for example http://localhost:3000/weather/Bulgaria you will receive error, because lite-server considers Bulgaria for file and it is searching for it.    But you can reach with single recourses easily.
 
   3.If you are not in Bulgaria it will be shown only your city name, without country name because in the object i haven't add all country codes.
 
## How to set up:
1.Open terminal in root folder and type npm init -y

2.Type npm install --save lite-server

3.Then, go to package.json, in scripts object add:   
"start": "lite-server"
--Warning: Don't forget comma.--
--Example: 
"start": "lite-server",
"test": "echo \"Error: no test specified\" && exit 1"

4.Finnaly type in terminal npm start

## Tech stack:
HTML5, CSS3, Javascript, Lit-html, Firebase
