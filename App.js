const heading = React.createElement("h1", {}, "Hello World From React!");
    // this API need three parameter, first-what element need to create, second-Object, third-what you should show in the element

    const root = ReactDOM.createRoot(document.getElementById("root"));//ReatDom Library to make root 

    root.render(heading);