
## Introduction

Welcome to the Event Ticketing Website EVENTVIBE ! This project is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. The purpose of this website is to provide a user-friendly platform for users to browse and purchase event tickets online. Event organizers can also use this platform to create and manage their events.

## Features
* User Registration and Authentication: Users can sign up, log in, and update their profiles. Authentication ensures secure access to features such as purchasing tickets and managing events.
* Event Listings: Browse a wide range of events with details such as event name, type, location.
* Ticket Purchase: Users can select events and purchase tickets securely using various payment options using razorpay.
* Event Creation and Management: Event organizers can create new events, add event details, set ticket prices, and manage ticket availability.
* Ticket Management: Event organizers can view and manage ticket sales, including checking-in attendees during the event.
* Search and Filters: Users can search for specific events and apply filters based on date, location, category, etc.
* Responsive Design: The website is optimized to work on various devices, including desktops, tablets, and mobile phones.

## Installation
To run the project locally, follow these steps:
1. Clone the repository: git clone git@github.com:MihirKp25/IITISoC-23-Web-12-Event_ticketing_platform.git
2. Navigate to the project directory: cd api
3. Install server dependencies: npm install
4. Navigate to the client directory: cd reactapp
5. Install client dependencies: npm install
6. Navigate to the admin directory: cd admin
7. Install admin dependencies: npm admin

## Usage

1. Run the development server:

2. From the project directory, run: npm run dev
The server will start running on http://localhost:3000, and the client will run on http://localhost:3001
Set up MongoDB:

3. You need to have MongoDB installed and running on your system.
Create a .env file in the root directory and set MONGO_URI=<your_mongodb_connection_string>
Open your browser and access the website using http://localhost:3001

## Technologies used

* Frontend:

     * React.js
     * HTML, CSS, JavaScript

* Backend:

   * Node.js
   * Express.js
   * MongoDB 

* Authentication:

  * JSON Web Tokens (JWT)

* Payment Gateway Integration :

  * Razorpay

* Other tools and libraries :

   * Axios (for API requests)
  * Bcrypt (for password hashing)
   etc.
