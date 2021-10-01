This is a Facebook login script
Requirements

    node >= 12.18.x - how to install Node
    npm >= 6.14.x - [No explicit installation required, it comes with node]
    Visual Studio Code - Click here to download

Getting Started

Clone Repository

Install the dependencies:

npm install


!! Before runing the test:
 You need to open specs/Facebook.login.js file 
 and in the follow line you will have to provide valid login info to facebook
  await LoginPage.login('xx@hotmail.com', 'Enter Password');

Run all test: npm test

