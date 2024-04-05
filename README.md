//hello world from javascript program 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namste-react</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "hello world from javascript";
        const root = document.getElementById("root");

        root.appendChild(heading);
    </script>
</body>
</html>


//hello world from react 
what emmit
add react cdn link 
what is cdn link

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<script>
    const heading = React.createElement("h1", {}, "hello world from react");
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
</script>



git init
git branch -M main
git add .
git commit -m "episode-01"
git remote add origin https://github.com/dips991/zwigato.git
git push -u origin main


npm init
npm install -D parcel

to build our server 
npx parcel index.html

npm install react
npm install react-dom


npx parcel index.html for start server

delete the cdn links
and 
import React from "react";
import ReactDOM from "react-dom";


show an error for import need to add

 <script type="module" src="App.js">

 </script>

 for console warning 
 
import ReactDOM from "react-dom/client";

npx parcel build index.html

get an error 
remove "main":"App.js" from package.json

,add in package.json
  "browserslist":[
    "last 2 versions"
  ]
  git
it is a tool used for tracking & manage codebase.
github
it is a place where all git repository are hosted.
git commands
git init
git branch -M main
git remote add origin main ---> local to remote push only once use for setup
git clone "httpsLink" ---> remote to local fetch
git add .
git commit -m "msg"
git push -u origin main
git status
npm - package manager
npm is package manager that will manage all packages, but funfact it does not stand as a node package manager 😂.

npm is repository where all packages hosted over there.
npm init :- for setup npm & after setup it gives package.json
package.json :- it is configuration file for npm & it take & tells version of that package which is dependent on our Project.
bundler : - used for Production Ready purpose
it is take the whole code and gives bundle of code for production ready which is optimized, removing comments & console, minifying the code & code splitting , chunking & compress file that will do bundler for us.

behind the scene create-react-app has own bundler which is Webpack

bundler ex :-
webpack
parcel
vite
dependency :-
sometimes package also know as dependency, beacuse our project is dependent on lot of package/ library.

types of dependency :-
dev dependency

dependency which required for development only not in production.
normal dependecy

it dependency required for development & production both.
node modules :-
node modules are collection of dependency.
node modules contains all the code that we fetch from npm.
it is like database in that all package exist that we need

Transitive dependency :-
it is dependency dependent on some other dependency and thats has another dependency so lot going on..

Should i put node_modules in git, github, production :-
big No, thats why we use .gitignore which will ignore the node_modules

note :- node modules are regenerative so dont push on github.

Difference between package.json & package-lock.json :-
package.json file has note approximate version of dependency

package-lock.json file locking exact version of that dependency

npx :- it will executes package
parcel is beast :-
it is bundler that can i used for my project

executing parcel command :-
npx parcel index.html
What What are doing Parcel :-
dev build
local server
HMR (Hot Module Replacement) --> Automatic Refresh
file watching algorithm
Caching for faster bulds
image optimization
minification
bundling
compress
code splitting
Differential bundling --> Support Older Browsers
Error Handling
Tree Shaking --> remove unused code
different dev & prod bundles
thats why Parcel is Beast
Cross Browser Compatibilty :-
we use browserlist package for issue of different browser compatibilty.

in package.json we just configure browserlist package

  "browserslist": [
    "last 10 versions"
  ]
