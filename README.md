# Flight Booking Frontend

[This](https://github.com/tanishabisht/Flight-Booking-Backend) repository contains the backend for this application.
The application is written in React JS, and the state is maintained via React Hooks.
The style is done entirely with scss.

## How to run it locally

1. Firstly make sure your have the following installed in your system
   - node version: v16.13.2
   - npm version: 8.19.2
2. Clone the repository and Open in your suitable development environment (e.g. VS Code)
3. Open the terminal of the editor and type:
   - `npm install` to install all the node packages and dependancies from [`package.json`](/package.json)
   - `npm start` or `node app.js` to run the server

## Deployment

The frontend for this application is deployed using GitHub pages
The backend for this application is deployed using Heroku to the following URL: https://flight-booking-cigs.herokuapp.com

## How to use it

![How To Image](/howTo.png)

- `STEP 1:` Enter the origin, destination and date when you want to book the flight
- `STEP 2:` Wait for the Results
- `STEP 3:` Choose the flight you would like to book
- `STEP 4:` Enter your personal details: name, email id, phone number
- `NOTE:` Make sure your details are entered correctly specially your email id else you wont receive confirmation in your mail.
- `STEP 5:` Once done, you will be directed to the confirmation page.

CONGRATULATIONS! YOU HAVE SUCCESSFULLY BOOKED YOUR FLIGHT

## Tech Stacks Used

`React JS` `formik` `axios` `emailjs-com` `date-fns` `node-sass` `react-toastify` `gh-pages`
