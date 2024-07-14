# stacksurplusBlog

## Description
This project aims to create a platform similar to Wordpress where developers can publish their blog posts and engage with other developers' content through comments. You'll be building this site from the ground up and deploying it to Render.<br>
The application follows the MVC (Model-View-Controller) architectural pattern for a structured development approach. Here are the key components and technologies used:<br>

Handlebars.js: Templating engine for generating dynamic HTML pages. <br>
Sequelize: ORM (Object-Relational Mapping) for interacting with the SQL database. <br>
Express-session: npm package used for managing user sessions and authentication. <br>

## Usuage
To run the application locally, follow these steps:<br>
1. Clone the repository to your local machine. <br>
2. Install the required dependencies by running "npm install" in the terminal. <br>
3. Set up your database configuration in config/config.json.<br>
4. Run "npm run seed" to seed the database.<br>
5. Start the server by running "npm start" in the terminal.<br>

## User Story
AS A developer who writes about tech<br>
I WANT a CMS-style blog site<br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions<br>

## Acceptance 
GIVEN a CMS-style blog site<br>
WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>
WHEN I click on the homepage option<br>
THEN I am taken to the homepage<br>
WHEN I click on any other links in the navigation<br>
THEN I am prompted to either sign up or sign in<br>
WHEN I choose to sign up<br>
THEN I am prompted to create a username and password<br>
WHEN I click on the sign-up button<br>
THEN my user credentials are saved and I am logged into the site<br>
WHEN I revisit the site at a later time and choose to sign in<br>
THEN I am prompted to enter my username and password<br>
WHEN I am signed in to the site<br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>
WHEN I click on the homepage option in the navigation<br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>
WHEN I click on an existing blog post<br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>
WHEN I enter a comment and click on the submit button while signed in<br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>
WHEN I click on the dashboard option in the navigation<br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>
WHEN I click on the button to add a new blog post<br>
THEN I am prompted to enter both a title and contents for my blog post<br>
WHEN I click on the button to create a new blog post<br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>
WHEN I click on one of my existing posts in the dashboard<br>
THEN I am able to delete or update my post and taken back to an updated dashboard<br>
WHEN I click on the logout option in the navigation<br>
THEN I am signed out of the site<br>
WHEN I am idle on the site for more than a set time<br>
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts<br>

## Sreenshots
![screenshot](/public/css/Main-Home-Page.png)
![screenshot](/public/css/Comment.png)

## Questions
If you have any questions or need further clarification, please don't hesitate to reach out to me at
marissa.melo91@yahoo.com or https://github.com/marissamelo91

## Credits
Class Lectures<br>
Youtube<br>
Classmates - Thinh Nguyen and Faiza Haque<br>
AI Tools - CHATGPT, Amazon Q, and Copilot<br>