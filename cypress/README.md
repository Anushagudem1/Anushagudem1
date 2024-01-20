Instalation:
            1. Need to install Node and NPM in our system
            2. install cypress 'npm install cypress --save-dev'
            3. Need to install few cypress dependencies 

                1. Cypress-xpath :  'npm install cypress --save-dev'
                2. Cypress-real-events :  'npm i cypress-real-events'
                3. Cypress-iframe:  'npm i cypress-iframe'
                4. Cypress-file-Uploader :  'npm i cypress-file-upload'
                5. Cypress mochawesom- reporter :  'npm i cypress-mochawesome-reporter'


Config file:  Cypress.config.js

        1. Application level global values like URL,USERNAME, PASSWORD etc.. we can store in 'env'
        2. We can run our tests in different size of screens using 'viewportWidth' and 'viewportHeight'
        3. Implemented Retry functionality, if need to turn it off comment 'retries' in config.js file
        4. If we lke to record the video of the test, we can make 'video' as true.

Run:  
    We can run cypress tests in 2 ways
        1. Run with UI
        2. Run with commands

            1. Run With UI
                We can open Cypress in GUI mode  by running 'npx cypress open'
                once the command triggred the cypress GUI will open
                Will run the tests from Cypress window by selecting the Test case

            2. Run with commands
                'npx cypress run' 
                we have lot of combination to run test with command line 
                https://docs.cypress.io/guides/guides/command-line#What-you-ll-learn