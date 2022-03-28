Getting Started with Create React App
This project was bootstrapped with Creat React App. 
# Purpose of Project
  Creat a simple login application that includes front-end, back-end, and database (Firebase)
# Objectives
 Develop a simple website login with the following features:
 * A Login window that required phone number 
 * In order to avoid bot, a reCaptcha is required to validate the "REAL" user
 * A random access code will send to user's phone
 * User will get use that access code to login.

| **Language** | **Use %** |
| ------------ | --------- |
| JavaScript   | 89.1%     |
| CSS          |  9.0%     |
| HTML         | 1.9%      |

In the project directory, run the following command to initialize the project:
```bash
npm install express --save
npm install react-router-dom --save
npm install react-scripts --save
npm start
```
User Login page:
![Screenshot 2022-03-28 104515](https://user-images.githubusercontent.com/31332651/160441735-5db555c1-3ec3-4dba-a65a-9eaee83b762b.png)
User Home page:
![Screenshot 2022-03-28 104544](https://user-images.githubusercontent.com/31332651/160441695-c1b29b49-7490-42d7-ad0d-650ce454685d.png)

Or to run in development mode

```bash
npm run devStart
```
### Frameworks/libraries
### React 
  An open-source, front end, javaScript library for building user interfaces and UI components.
  
### Firebase 
  A Google-backed application development software that enables developers to develop iOS, Android, and Web apps. It provides tools for tracking analytic, reporting, and product experiment
  Components Folder:
  _`phoneSignUp`_ is a function call for user to sign in by using their phone number
  _`Home`_ is main page when phone number is validated and direct to home page
 
 _`UserAuth`_ is a function that used to validate a user by using reCapthcha feature as an extra security
  

