# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


###  Includes The Following Modules

1. react-router-dom
2. netlify-cli


### Environment Variables

1. Fauna Secret Key
2. Algolia Application ID
3. Algolia API Key


###  Available Scripts

In the project directory, you can run: `netlify dev` to test project in dev environment.

To create a production bundle of your app run: `netlify build`


### Pre flight checklist.

1. Check You Have Netlify CLI Installed Globally  
To check to see if the netlify cli package is installed run  ```npm list -g```. If you do not see netlify cli in the list the you will need to install them before proceeding. Install the netlify cli using ```npm install netlify-cli -g```


### Initialize React to use a Netlify CLI

To setup your project folder to use Netlify CLI, add a netlify.toml file to your root directory and add:
```
[build]
    functions = "functions"
```
Then create a functions folder in your root directory to place all your server-less functions.


### Add Algolia Search

To add algolia search to this site, go to [Docsearch](https://docsearch.algolia.com/). You can either apply for the functionality if you meet all the requirements or you can run your own algolia search which is explained [here](https://docsearch.algolia.com/docs/legacy/run-your-own/).


### Fauna DB

This project stores some of its data using fauna db. To get started with faunadb, create an account. In this account add a new database then upload a graphql schema to the database. Using graphql queries, you can create read update and delete data from your project.

In the security section, you can create a new secret key which will connect your database to your project.


### Connect Fauna DB to Netlify
You need to associate your fauna db with a your netlify account. To do this, you need to:
1. Sign into your Netlify account.
2. Go to your project folder.
3. Select "Site Settings" from the top navigation.
4. Open "Build & Deploy" from the side navigation, then select "Environment".
5. Add FAUNA_SECRET_KEY as a new environment variable.