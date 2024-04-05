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