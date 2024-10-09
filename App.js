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
    //restData?.info---this is (?.) optional chaining
    const RestaurantCard = (props) =>{
        const {resData} = props;
        const {cloudinaryImageId, name, cuisines, avgRating, costForTwo,sla} = resData?.info ;

        return(
            <div className="res-card" style={{ backgroundColor:"lightgray" }}>
                <img 
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} mins</h4>
            </div>
        )
    }

    const resList = [
        {
            "info": {
              "id": "531441",
              "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
              "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
              "locality": "Satkar Square",
              "areaName": "Mohan Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Ice Cream Cakes",
                "Desserts",
                "Ice Cream",
                "Bakery"
              ],
              "avgRating": 5,
              "veg": true,
              "parentId": "21932",
              "avgRatingString": "5.0",
              "totalRatingsString": "3",
              "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 11.2,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹80"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-rest531441",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "496348",
              "name": "Pizza Box",
              "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
              "locality": "Sanchar Colony",
              "areaName": "Chhindwara Locality",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Burgers",
                "Beverages"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "3045",
              "avgRatingString": "4.4",
              "totalRatingsString": "205",
              "sla": {
                "deliveryTime": 67,
                "lastMileTravel": 14.5,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "14.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 22:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/pizza-box-sanchar-colony-chhindwara-locality-rest496348",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "150591",
              "name": "Satkar Restaurant",
              "cloudinaryImageId": "rvxp5xbniat84r6efku2",
              "locality": "Sinchai Colony",
              "areaName": "Satkar Chowk",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Salads",
                "Desserts"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "21553",
              "avgRatingString": "4.4",
              "totalRatingsString": "2.1K+",
              "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 13.4,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "13.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 22:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "150597",
              "name": "Scoops Fast Food And Ice Cream",
              "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
              "locality": "Irrigation Colony",
              "areaName": "Khajri Road",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Bakery",
                "Ice Cream",
                "Snacks",
                "Beverages"
              ],
              "avgRating": 4.1,
              "veg": true,
              "parentId": "179482",
              "avgRatingString": "4.1",
              "totalRatingsString": "384",
              "sla": {
                "deliveryTime": 73,
                "lastMileTravel": 12.1,
                "serviceability": "SERVICEABLE",
                "slaString": "70-75 mins",
                "lastMileTravelString": "12.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-rest150597",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "531439",
              "name": "Baskin Robbins - Ice Cream Desserts",
              "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
              "locality": "satkar square Prasia Road",
              "areaName": "Chhindwara",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Desserts",
                "Ice Cream"
              ],
              "avgRating": 4.9,
              "veg": true,
              "parentId": "5588",
              "avgRatingString": "4.9",
              "totalRatingsString": "36",
              "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 11.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "11.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹80"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/baskin-robbins-ice-cream-desserts-satkar-square-prasia-road-chhindwara-rest531439",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "184424",
              "name": "Sab Ghar Tak Foods",
              "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
              "locality": "Sanchar Colony",
              "areaName": "Parsia Road",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "173932",
              "avgRatingString": "4.2",
              "totalRatingsString": "612",
              "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 12.6,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "12.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "295131",
              "name": "Burger club point",
              "cloudinaryImageId": "fnh4ljobb3vayrvtbxxl",
              "locality": "Irrigation Colony",
              "areaName": "Chhindwara Locality",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Burgers",
                "Pizzas",
                "Fast Food",
                "Beverages"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "51258",
              "avgRatingString": "4.4",
              "totalRatingsString": "115",
              "sla": {
                "deliveryTime": 64,
                "lastMileTravel": 11.3,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "11.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/burger-club-point-irrigation-colony-chhindwara-locality-rest295131",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "257428",
              "name": "Raajbagh Restaurant ",
              "cloudinaryImageId": "xvyrclhxftulsglktaek",
              "locality": "Seoni Road",
              "areaName": "Chhindwara Locality",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
              ],
              "avgRating": 3.7,
              "veg": true,
              "parentId": "164019",
              "avgRatingString": "3.7",
              "totalRatingsString": "965",
              "sla": {
                "deliveryTime": 69,
                "lastMileTravel": 10.5,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "10.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-08 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/raajbagh-restaurant-seoni-road-chhindwara-locality-rest257428",
              "type": "WEBLINK"
            }
          }
    ]

    const Body = () =>{
        return(
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/> */}
                {
                    resList.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
                
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