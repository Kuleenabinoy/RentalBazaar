# Rental Bazaar 
Group 5 Project, December 2021 

Contributors: 
[Nellie Davies](https://github.com./8nd8),
[Kuleena Binoy](https://github.com./Kuleenabinoy),
[Binuka Witharana](https://github.com./BinukaW),
[Robert Calder](https://github.com./RobertCalder1)

## Description
Develop an E-commerce platform where users can access and rent vehicles, real estate and various other rentals at any moment. This website lets users browse & choose their though a range of items available by category.

Technologies used: Handlebars, JavaScript, MYSQL2, Shell, HTML, CSS

View the Heroku deployed application here: <placeholder>

## Screenshot

<p align="center">
  `<img src="https://github.com/8nd8/RentalBazaar/blob/main/public/images/Homepage%20screenshot%20-%202.JPG" alt="homepage pic" />`
</p>

![Screenshot 2021-12-13 22 18 45](https://user-images.githubusercontent.com/86656634/145803634-2235aa16-3e4d-4b98-acc3-910d789879c3.png)
![Screenshot 2021-12-13 22 19 05](https://user-images.githubusercontent.com/86656634/145803658-f3dc3b38-9edf-4c23-afaa-9596ed8fd336.png)

## Table of Contents:
1. [Installation](#installation)
2. [Installation Tips](#installation-tips)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
8. [User Story](#user-story)
9. [Acceptance Criteria](#acceptance-criteria)

## Installation
First fork & clone the repository to your local environment.

In order to install any necessary dependancies, open the console & run the following:
```
npm install
mysql -u root -p
  - login 
  - source db/schema.sql
  - check the database is in use
node seeds/index.js
```

## Installation tips
If the project folder does not have a package.json or package-lock.json file, please install.

## Usage
```
node server.js
```

## License
This project is licened under:
The Unlicense

 [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Contributing

Contributions accepted? Yes

When contributing to this repository, first you must request permission to make changes.

## Tests
Currently there are no tests.

## Questions
If you have any questions, please reach out to me on [GitHub](https://github.com./8nd8) or contact Nellie by [email](mailto:nelliexdavies@gmail.com).

## User Story
```  
AS A USER I am interested in searching real estate and/or vehicle
I WANT to be able to browse real estate and vehicles
SO THAT I utilise things for a limited period of time that I may not necessarily need to purchase

AS A USER I am interested in renting out my property/vehicle
I WANT to be able to rent my property in return for money
SO THAT I can make an additional stream of income 
  
AS A USER I am interested in renting a certain property/vehicle
I WANT to be able to rent the particular property
SO THAT I can use the property and/or vehicle for the duration 

```
## Acceptance Criteria
```
Use Node.js and Express.js to create a RESTful API.
Use Handlebars.js as the template engine.
Use MySQL and the Sequelize ORM for the database.
Have both GET and POST routes for retrieving and adding new data.
Use at least one new library, package, or technology that we haven’t discussed.
Have a folder structure that meets the MVC paradigm.
Include authentication (express-session and cookies).
Protect API keys and sensitive information with environment variables.
Be deployed using Heroku (with data).
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).
```
