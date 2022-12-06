# cody-christian-p2

Project Description:
    This site utilizes React, Node.js, MongoDb, and Express. Users will use the site to keep a digital record of their guitar collections. They can add, delete, and edit records of guitars in their collection. Users will also be able to create an account and login with a password.

    The project I had originally planned to use got messed up and I had to scrap it as I couldn't understand some of the tech that we hadn't covered in this class. It would have done similar things, while adding additional frontend styling and the ability to upload and display images.

Login: Users will use their name, email, and a password to create an account which is stored on MongoDb. Using JSON webtokens, the information will be encrypted and the token will be stored as well. This token is retrieved when the correct password is entered with an email address to allow access to the account.

Create, Get, and Delete Items: We use an API to take input data from a form on frontend to store individual posts in the database. The frontend displays delete and edit buttons on each post. These are wired up to the API and thusly pass along the info to the database telling it what to do with the post.