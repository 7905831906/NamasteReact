/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am h1 tag </h1>--first children of child
 *      <h2>I am h2 tag </h2>--second one
 *    </div>
 * </div>
 * 
 *ReactElement(Object) => HTML(Browser Understands)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id:"parent"},
// [
//     React.createElement("div", {id:"chid"},
// [React.createElement("h1", {}, "I am h1 tag"),
// React.createElement("h2", {}, "I am h2 tag")]
// ),
// React.createElement("div", {id:"chid"},
// [React.createElement("h1", {}, "I am h1 tag"),
// React.createElement("h2", {}, "I am h2 tag")]
// )
// ]
// );

//JSX


// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React!");
//     // this API need three parameter, first-what element need to create, second-Object, third-what you should show in the element

//     console.log(heading);//returns an object
    //const root = ReactDOM.createRoot(document.getElementById("root"));//ReatDom Library to make root 

    //root.render(heading);//convert this object in heading and put it back in ReactDM.createRoot

    //root.render(parent);// put parent in root/replace what if smething present in root tag

    import React from "react";
    import ReactDOM from "react-dom/client";
    import logo from "./images/logo.png";

    //React Element-
    //React.createElement => React Element-   JS Object => HTMLElement(when render)
    //const heading = React.createElement("h1",{id:"heading"},"Namaste React");
    
     
    //JSX-is not HTML in JavaScript-HTML-like or XML-like syntax
    //JSX is transpiled before it reaches the JS Engine which can be understand by browser & React
    //Tranpiling done by Parcel with the help of Babel
    //JSX => React.createElement => React Element-   JS Object => HTMLElement(when render)
    //Babel - convert JSX To React.createElement
    //const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>//it is not pure javascript
    //const jsxHeading = <h1 className="head">Namaste React using JSX</h1>//it is not pure javascript
    
    //React Element

    // const elem = <span>React Span Element</span>
    
    // const heading = (<h1 className="head">
    //     {elem}
    //     Namaste React using JSX
    //     </h1>);
   
    
    //React Functional Component

    // const Title = () => (
    //     <h1 className="head">
    //     Namaste React using JSX
    //     </h1>
    // )

    // const HeadingComponent = () => {
    //     return <h1 className="heading">Namaste React Functional Component</h1>;
    // }
    
    //Component Composition-put one component in another component

    // const data = api.getData();//Jsx takes of these injection attackers meaning suppose api.getData()
    //passes some miscelleseous data in to our code, it will escape it(sanitizing the code).

    // const HeadingComponent = () => (
    //    <div id="container">
    //     {/* We can call Title function in Jsx */}
    //     {/* {Title()} */}
    //     {/* {heading} */}
    //     {/* Both Title calling are same */}
    //     <Title/>
    //     {/* <Title></Title> */}
    //     {/* the above 3 Title call are same  */}
        
    //      <h1 className="heading">Namaste React Functional Component</h1>
    //    </div>
    // )

    //## The above both functional component are same.

    const Header = () =>{
        return(
            <div className="header">
              <div className="logo">
              <img src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"/>
              </div>
              <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
              </div>
            </div>
        )
    };

    // const styleCard = {
    //     backgroundColor:"gray",
    // };
    // Pass javascript object in the style

   //By destructing process props object passed as {resName, cuisine} on the place of porps 
   //like const RestaurantCard = ({resName, cuisine}) =>{}
    const RestaurantCard = (props) =>{
        return(
            <div className="res-card" style={{ backgroundColor:"lightgray" }}>
                <img 
                className="res-logo"
                src="https://www.holidify.com/images/cmsuploads/compressed/Vegetarian_Andhra_Meal_20200107182616.jpg"/>
                <h3>{props.resName}</h3>
                <h4>{props.cuisine}</h4>
                <h4>4.4 stars</h4>
                <h4>38 minutes</h4>
            </div>
        )
    }

    const Body = () =>{
        return(
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                <RestaurantCard resName="Meghana Foods" 
                cuisine="North Indian Thali"/>
                <RestaurantCard resName="KFC" 
                cuisine="Burger"/>
                
                </div>
            </div>
        )
    }

    const AppLayout = () =>{
        return(
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
     //only element can render in render method as root.render(heading)
     //but react component render as first wrap it as <HeadingComponent/>
    root.render(<AppLayout />);