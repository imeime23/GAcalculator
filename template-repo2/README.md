# (Application Name)

#### (Brief Description of Application)

#### By (Your Name Here)

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description


-Installing all packages with $ npm install.
1. Clone the repository to your local machine using the "git clone" command.
2. Navigate to the Project's directory and install the required dependencies (including "webpack" and any relevant plugins) using the "npm install" command. This will install the packages lised in the "package.json" file. If you don't have a package.json file, create one by running the "npm init" command.

-Building the project using webpack with $ npm run build

Create a "webpack.config.js" file in the root directory of the project. if it does not exist already. This file specifies the configuration options for webpack, including the entry points and output files for your project. Once you have configured webpack, you can run the build command using the "npm run build" command. When the build process is complete, a "dist" folder will be created in the root directory of your project. This folder contains the optimized and compressed files for your project. 

-Starting a development server with $ npm run start

In your package.json file, make sure that you have a "start" script defined. This script is what "npm run start" will execute.

-Linting JS files in the src folder with $ npm run lint


Install the necessary dependencies for linting. You can install "eslint" it using the "npm install eslint --save-dev" command.

Once "eslint" is installed, you need to configure it to match your project's requirements. You can do this by running the following command: npx eslint --init. This will prompt you with a series of questions to set up your "eslint" configuration.

Once your eslint configuration is set up, you can add the lint script to your "package.json file" in teh scripts section.


Run the "npm run lint" command in your terminal. This will execute the lint script you added to your package.json file and run eslint on all JavaScript files in the designated folder (SRC) folder.


-Running tests with Jest using $ npm run test

Install Jest as a dev dependency using the following command: npm install --save-dev jest.

Create a "_test_" folder in the root directory of your project. This is where you will put all your test files. Create a file called "name.test.js" in the "_tests_" folder. In your "package.json" file, make sure that you have a test script defined. This script is what "npm run test" will execute, and run all the tests in the "_tests_" folder.


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## Known Bugs

* _Any known issues_
* _should go here_

## License