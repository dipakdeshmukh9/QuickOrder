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


import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"this is an h1 tag") ,
    React.createElement("h2",{},"this is an h2 tag")
    ]
    ),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"this is an h1 tag") ,
    React.createElement("h2",{},"this is an h2 tag")
    ]
    )]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React


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
  episode-3
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
  now we can run command 
  npm run start / npm start
  npm run build

  jsx transplies 
  babel convert jsx code to react.createElement 