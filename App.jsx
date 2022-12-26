
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Appetizers from "./components/Appetizers";
import HomePage from "./components/HomePage";
import TableReservation from "./components/TableReservation";
import FirstCourse from "./components/FirstCourse";
import Menu from "./components/Menu";
import LoginRegistration from "./components/LoginRegistration";
import AboutUs from "./components/AboutUs";
import Drinks from "./components/Drinks";
import Dishes from "./components/Dishes";
import SecondCourse from "./components/SecondCourse";
import CocktailsMixedDrinks from "./components/CocktailsMixedDrinks";
import Wine from "./components/Wine";
import Coffee from "./components/Coffee";
import Smoothies from "./components/Smoothies";
import Juice from "./components/Juice";
import Desserts from "./components/Desserts";
import SideDishes from "./components/SideDishes";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/appetizers">
            <Appetizers
              appetizers="Appetizers"
              ellipse1="/img/ellipse-1-1@2x.png"
              title="IL BAGLIORE"
              restaurant="Restaurant"
              gobackbutton="/img/gobackbutton@2x.png"
              dishesListProps={appetizersData.dishesListProps}
            />
          </Route>
          <Route path="/home-page">
            <HomePage {...homePageData} />
          </Route>
          <Route path="/table-reservation">
            <TableReservation {...tableReservationData} />
          </Route>
          <Route path="/first-course">
            <FirstCourse
              firstCourse="First Course"
              ellipse1="/img/ellipse-1-3@2x.png"
              ilBagliore="IL BAGLIORE"
              restaurant="Restaurant"
              gobackbutton="/img/gobackbutton-2@2x.png"
              dishesListProps={firstCourseData.dishesListProps}
            />
          </Route>
          <Route path="/menu">
            <Menu {...menuData} />
          </Route>
          <Route path="/login-registration">
            <LoginRegistration {...loginRegistrationData} />
          </Route>
          <Route path="/about-us">
            <AboutUs {...aboutUsData} />
          </Route>
          <Route path="/drinks">
            <Drinks {...drinksData} />
          </Route>
          <Route path="/dishes">
            <Dishes {...dishesData} />
          </Route>
          <Route path="/second-course">
            <SecondCourse
              secondCourse="Second Course"
              ellipse1="/img/ellipse-1-9@2x.png"
              ilBagliore="IL BAGLIORE"
              restaurant="Restaurant"
              gobackbutton="/img/gobackbutton-8@2x.png"
              dishesListProps={secondCourseData.dishesListProps}
            />
          </Route>
          <Route path="/cocktails-mixed-drinks">
            <CocktailsMixedDrinks {...cocktailsMixedDrinksData} />
          </Route>
          <Route path="/wine">
            <Wine {...wineData} />
          </Route>
          <Route path="/coffee">
            <Coffee {...coffeeData} />
          </Route>
          <Route path="/smoothies">
            <Smoothies {...smoothiesData} />
          </Route>
          <Route path="/juice">
            <Juice {...juiceData} />
          </Route>
          <Route path="/desserts">
            <Desserts
              desserts="Desserts"
              ellipse1="/img/ellipse-1-15@2x.png"
              ilBagliore="IL BAGLIORE"
              restaurant="Restaurant"
              gobackbutton="/img/gobackbutton-14@2x.png"
              dishesListProps={dessertsData.dishesListProps}
            />
          </Route>
          <Route path="/side-dishes">
            <SideDishes
              sideDishes="Side Dishes"
              ellipse1="/img/ellipse-1-16@2x.png"
              ilBagliore="IL BAGLIORE"
              restaurant="Restaurant"
              gobackbutton="/img/gobackbutton-15@2x.png"
              dishesListProps={sideDishesData.dishesListProps}
            />
          </Route>
          <Route path="/:path(|landing-page)">
            <LandingPage {...landingPageData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const dish11Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-4@2x.png",
    className: "",
};

const dish12Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-5@2x.png",
    className: "dish2",
};

const dish31Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-5@2x.png",
};

const dish32Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-3@2x.png",
    className: "dish4",
};

const dishesList1Data = {
    img5: "/img/img5-5@2x.png",
    dish11Props: dish11Data,
    dish12Props: dish12Data,
    dish31Props: dish31Data,
    dish32Props: dish32Data,
};

const appetizersData = {
    dishesListProps: dishesList1Data,
};

const dish13Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-3@2x.png",
    className: "dish1-2",
};

const dish14Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-3@2x.png",
    className: "dish2-1",
};

const dish33Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-3@2x.png",
};

const dish34Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-2@2x.png",
    className: "dish4-1",
};

const dishesList2Data = {
    img5: "/img/img5-4@2x.png",
    className: "dishes-list-1",
    dish11Props: dish13Data,
    dish12Props: dish14Data,
    dish31Props: dish33Data,
    dish32Props: dish34Data,
};

const firstCourseData = {
    dishesListProps: dishesList2Data,
};

const dish15Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-4@2x.png",
    className: "dish1-2",
};

const dish16Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-4@2x.png",
    className: "dish2-2",
};

const dish35Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-4@2x.png",
};

const dish36Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-4@2x.png",
    className: "dish4-2",
};

const dishesList3Data = {
    img5: "/img/img5-7@2x.png",
    className: "dishes-list-2",
    dish11Props: dish15Data,
    dish12Props: dish16Data,
    dish31Props: dish35Data,
    dish32Props: dish36Data,
};

const secondCourseData = {
    dishesListProps: dishesList3Data,
};

const drink11Data = {
    image1: "/img/image1@2x.png",
};

const drink41Data = {
    img4: "/img/img4-3@2x.png",
    drink4: "Lorem ipsum dolor sit amet consectetur",
};

const drink61Data = {
    drink6: "Lorem ipsum dolor sit amet consectetur",
    img6: "/img/img6@2x.png",
};

const cocktailsMixedDrinksData = {
    drink2: "Lorem ipsum dolor sit amet consectetur",
    img2: "/img/img2-7@2x.png",
    descLorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    drink3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img3-7@2x.png",
    descLorem3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    desclorem5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img5: "/img/img5-3@2x.png",
    drink5: "Lorem ipsum dolor sit amet consectetur",
    cocktailsHeader: "Cocktails & Mixed Drinks",
    ellipse1: "/img/ellipse-1-10@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    gobackbutton: "/img/gobackbutton-9@2x.png",
    drink1Props: drink11Data,
    drink4Props: drink41Data,
    drink6Props: drink61Data,
};

const drink121Data = {
    drink1: "Lorem ipsum dolor sit",
    image1: "/img/image1-2@2x.png",
};

const drink122Data = {
    drink1: "Lorem ipsum dolor sit amet consectetur",
    image1: "/img/img2-2@2x.png",
    className: "drink-2-4",
};

const drink31Data = {
    img3: "/img/img3-2@2x.png",
};

const drink32Data = {
    img3: "/img/img4-4@2x.png",
    className: "drink-4-4",
};

const drink51Data = {
    img5: "/img/img5-4@2x.png",
};

const drink52Data = {
    img5: "/img/img6-1@2x.png",
    className: "drink-6-4",
};

const coffeeData = {
    coffeeHeader: "Coffee",
    ellipse1: "/img/ellipse-1-12@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    gobackbutton: "/img/gobackbutton-11@2x.png",
    drink121Props: drink121Data,
    drink122Props: drink122Data,
    drink31Props: drink31Data,
    drink32Props: drink32Data,
    drink51Props: drink51Data,
    drink52Props: drink52Data,
};

const drink13Data = {
    image1: "/img/image1-1@2x.png",
    className: "drink-1-2",
};

const drink42Data = {
    img4: "/img/img4-5@2x.png",
    drink4: "Lorem ipsum amet consectetur",
    className: "drink-4-2",
};

const drink62Data = {
    drink6: "Lorem ipsum dolor sit amet consectetur",
    img6: "/img/img5-5@2x.png",
    className: "drink-5-2",
};

const drink63Data = {
    drink6: "Lorem ipsum dolor sit amet consectetur",
    img6: "/img/img6-2@2x.png",
    className: "drink-6-2",
};

const smoothiesData = {
    descLorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img2: "/img/img2-1@2x.png",
    drink2: "Lorem ipsum sit amet consectetur",
    descLorem3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img3: "/img/img3-9@2x.png",
    drink3: "Lorem ipsum dolor sit amet consectetur",
    smoothies: "Smoothies",
    ellipse1: "/img/ellipse-1-13@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    gobackbutton: "/img/gobackbutton-12@2x.png",
    drink1Props: drink13Data,
    drink4Props: drink42Data,
    drink61Props: drink62Data,
    drink62Props: drink63Data,
};

const drink14Data = {
    image1: "/img/image1@2x.png",
};

const drink43Data = {
    img4: "/img/img4-6@2x.png",
    drink4: "Lorem ipsum dolor sit amet consectetur",
    className: "drink-4-3",
};

const drink64Data = {
    drink6: "Lorem sit amet consectetur",
    img6: "/img/img6-3@2x.png",
    className: "drink-6-3",
};

const juiceData = {
    descLorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img2: "/img/img2-8@2x.png",
    drink2: "Lorem ipsu amet consectetur",
    descLorem3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img3: "/img/img3-8@2x.png",
    drink3: "Lorem ipsum dolor sit amet consectetur",
    drink5: "Lorem ipsum dolor sit amet consectetur",
    img5: "/img/img5-6@2x.png",
    desclorem5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    juice: "Juice",
    ellipse1: "/img/ellipse-1-14@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    gobackbutton: "/img/gobackbutton-13@2x.png",
    drink1Props: drink14Data,
    drink4Props: drink43Data,
    drink6Props: drink64Data,
};

const dish17Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-6@2x.png",
    className: "dish1-2",
};

const dish18Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-6@2x.png",
    className: "dish2-3",
};

const dish37Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-6@2x.png",
};

const dish38Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-6@2x.png",
    className: "dish4-3",
};

const dishesList4Data = {
    img5: "/img/img5-9@2x.png",
    className: "desserts-list",
    dish11Props: dish17Data,
    dish12Props: dish18Data,
    dish31Props: dish37Data,
    dish32Props: dish38Data,
};

const dessertsData = {
    dishesListProps: dishesList4Data,
};

const dish19Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-9@2x.png",
    className: "dish1-2",
};

const dish110Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-9@2x.png",
    className: "dish2-4",
};

const dish39Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-9@2x.png",
};

const dish310Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-5@2x.png",
    className: "dish4-4",
};

const dishesList5Data = {
    img5: "/img/img5-7@2x.png",
    className: "dishes-list-3",
    dish11Props: dish19Data,
    dish12Props: dish110Data,
    dish31Props: dish39Data,
    dish32Props: dish310Data,
};

const sideDishesData = {
    dishesListProps: dishesList5Data,
};

const homePageData = {
    ilBaglioreNavbar: "Il Bagliore",
    loginRegistration: "Log In / Registration",
    tableReservation: "Table Reservation",
    menu: "Menu",
    ellipse1: "/img/ellipse-1@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    traditionalTaste: "Traditional Taste",
    text1: "&",
    fineDinning: "The Art of Fine Dinning",
    loremSentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    pexelsLumn6049691: "/img/pexels-lumn-604969-1@1x.png",
    aboutUs: "About Us",
};

const tableReservationData = {
    gobackbutton: "/img/gobackbutton-1@2x.png",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    reservationForm: "/img/reservation-form@1x.png",
    makeReservation: "Make Reservation",
    clearForm: "Clear Form",
    place: "Home",
    aboutUs: "About Us",
    fbLogo: "/img/fb-logo@2x.png",
    facebook: "Facebook",
    twitterIcon: "/img/twitter-icon@2x.png",
    twitter: "Twitter",
    instraLogo: "/img/instra-logo@2x.png",
    instagram: "Instagram",
};

const menuData = {
    gobackbutton: "/img/gobackbutton-3@2x.png",
    place: "Welcome",
    dishes: "Dishes",
    ellipse1: "/img/ellipse-1-4@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    drinks: "Drinks",
    pexelsMariaOrlova49464421: "/img/pexels-maria-orlova-4946442-1@1x.png",
    pexelsMariaOrlova49464422: "/img/pexels-maria-orlova-4946442-2@1x.png",
    men: "Menú",
};

const loginRegistrationData = {
    gobackbutton: "/img/gobackbutton-4@2x.png",
    place: "Home",
    ellipse1: "/img/ellipse-1-5@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    signUpForm: "/img/sign-up-form@1x.png",
    aboutUs: "About Us",
    fbLogo: "/img/fb-logo-1@2x.png",
    facebook: "Facebook",
    twitterIcon: "/img/twitter-icon-1@2x.png",
    twitter: "Twitter",
    instraLogo: "/img/instra-logo-1@2x.png",
    instagram: "Instagram",
};

const aboutUsData = {
    gobackbutton: "/img/gobackbutton-5@2x.png",
    place: "Home",
    aboutUs: "About Us",
    loremIpsumDolorSi: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.<br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</React.Fragment>,
    ellipse1: "/img/ellipse-1-6@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    fbLogo: "/img/fb-logo-2@2x.png",
    facebook: "Facebook",
    twitterIcon: "/img/twitter-icon-2@2x.png",
    twitter: "Twitter",
    instraLogo: "/img/instra-logo-2@2x.png",
    instagram: "Instagram",
    contact: <React.Fragment>Contact: <br />+33 3 6666 9999</React.Fragment>,
};

const drinksData = {
    gobackbutton: "/img/gobackbutton-6@2x.png",
    drinks: "Drinks",
    ellipse1: "/img/ellipse-1-7@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    juice: "Juice",
    drink1: "/img/pexels-maria-orlova-4946442-1-2@2x.png",
    smoothies: "Smoothies",
    drink2: "/img/pexels-janko-ferlic-590477-1-1@2x.png",
    coffee: "Coffee",
    drink3: "/img/pexels-snapwire-675951-1-1@2x.png",
    wine: "Wine",
    drink4: "/img/pexels-valeria-boltneva-842571-1-1@2x.png",
    cocktails: "Cocktails",
    drink5: "/img/drink5@2x.png",
};

const dishesData = {
    gobackbutton: "/img/gobackbutton-7@2x.png",
    dishesTitle: "Dishes",
    ellipse1: "/img/ellipse-1-8@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    appetizers: "Appetizers",
    pexelsMariaOrlova49464421: "/img/pexels-maria-orlova-4946442-1-1@2x.png",
    firstCourse: "First Course",
    pexelsJankoFerlic5904771: "/img/pexels-janko-ferlic-590477-1@2x.png",
    secondCourse: "Second Course",
    pexelsSnapwire6759511: "/img/pexels-snapwire-675951-1@2x.png",
    sideDishes: "Side Dishes",
    pexelsValeriaBoltneva8425711: "/img/pexels-valeria-boltneva-842571-1@2x.png",
    desserts: "Desserts",
    pexelsAlishaMishra13435041: "/img/pexels-alisha-mishra-1343504-1@2x.png",
};

const wineData = {
    drink1: "Lorem ipsum dolor sit",
    image1: "/img/image1-1@2x.png",
    descLorem1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    drink2: "Lorem sit amet consectetur",
    img2: "/img/img2-4@2x.png",
    descLorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    drink3: "Lorem ipsum amet consectetur",
    img3: "/img/img3-4@2x.png",
    descLorem3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    wineHeader: "Wine",
    ellipse1: "/img/ellipse-1-11@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    gobackbutton: "/img/gobackbutton-10@2x.png",
};

const landingPageData = {
    ilBaglioreNavbar: "Il Bagliore",
    loginRegistration: "Log In / Registration",
    tableReservation: "Table Reservation",
    menu: "Menu",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    traditionalTaste: "Traditional Taste",
    text2: "&",
    fineDinning: "The Art of Fine Dinning",
    loremSentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    pexelsLumn6049691: "/img/pexels-lumn-604969-1@1x.png",
    aboutUs: "About Us",
};

