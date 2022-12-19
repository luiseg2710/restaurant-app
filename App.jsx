
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Juice from "./components/Juice";
import TableReservation from "./components/TableReservation";
import Smoothies from "./components/Smoothies";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import LoginRegistration from "./components/LoginRegistration";
import Drinks from "./components/Drinks";
import Dishes from "./components/Dishes";
import Coffee from "./components/Coffee";
import SideDishes from "./components/SideDishes";
import Desserts from "./components/Desserts";
import SecondCourse from "./components/SecondCourse";
import Appetizers from "./components/Appetizers";
import FirstCourse from "./components/FirstCourse";
import CocktailsMixedDrinks from "./components/CocktailsMixedDrinks";
import Wine from "./components/Wine";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/juice">
          <Juice {...juiceData} />
        </Route>
        <Route path="/table-reservation">
          <TableReservation {...tableReservationData} />
        </Route>
        <Route path="/smoothies">
          <Smoothies {...smoothiesData} />
        </Route>
        <Route path="/menu">
          <Menu {...menuData} />
        </Route>
        <Route path="/about-us">
          <AboutUs {...aboutUsData} />
        </Route>
        <Route path="/login-registration">
          <LoginRegistration
            place="Home"
            ellipse1="/img/ellipse-1-2@2x.png"
            ilBagliore="IL BAGLIORE"
            restaurant="Restaurant"
            signUpForm="/img/sign-up-form@1x.png"
            joinNow="Join Now"
            aboutUs="About Us"
          />
        </Route>
        <Route path="/drinks">
          <Drinks {...drinksData} />
        </Route>
        <Route path="/dishes">
          <Dishes {...dishesData} />
        </Route>
        <Route path="/coffee">
          <Coffee {...coffeeData} />
        </Route>
        <Route path="/side-dishes">
          <SideDishes {...sideDishesData} />
        </Route>
        <Route path="/desserts">
          <Desserts {...dessertsData} />
        </Route>
        <Route path="/second-course">
          <SecondCourse {...secondCourseData} />
        </Route>
        <Route path="/appetizers">
          <Appetizers {...appetizersData} />
        </Route>
        <Route path="/first-course">
          <FirstCourse {...firstCourseData} />
        </Route>
        <Route path="/cocktails-mixed-drinks">
          <CocktailsMixedDrinks {...cocktailsMixedDrinksData} />
        </Route>
        <Route path="/wine">
          <Wine {...wineData} />
        </Route>
        <Route path="/:path(|landing-page)">
          <LandingPage {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const drink51Data = {
    img5: "/img/img5-9@2x.png",
};

const drink52Data = {
    img5: "/img/img5-10@2x.png",
    className: "drink-6",
};

const cocktailsList1Data = {
    image1: "/img/image1-1@2x.png",
    img2: "/img/img2-8@2x.png",
    img3: "/img/img3-8@2x.png",
    img4: "/img/img4-7@2x.png",
    drink51Props: drink51Data,
    drink52Props: drink52Data,
};

const juiceData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Juice",
    ellipse1: "/img/ellipse-1-2@2x.png",
    title: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    cocktailsListProps: cocktailsList1Data,
};

const tableReservationData = {
    ilBaglioreNavbar: "Il Bagliore",
    place: "Home",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    signUpForm: "/img/sign-up-form-1@1x.png",
    makeReservation: "Make Reservation",
    clearForm: "Clear Form",
    aboutUs: "About Us",
};

const drink53Data = {
    img5: "/img/img5-11@2x.png",
};

const drink54Data = {
    img5: "/img/img5-12@2x.png",
    className: "drink-6-1",
};

const cocktailsList2Data = {
    image1: "/img/image1-2@2x.png",
    img2: "/img/img2-3@2x.png",
    img3: "/img/img3-9@2x.png",
    img4: "/img/img4-2@2x.png",
    drink51Props: drink53Data,
    drink52Props: drink54Data,
};

const smoothiesData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Smoothies",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    cocktailsListProps: cocktailsList2Data,
};

const sloganAndSentence1Data = {
    children: "Drinks",
};

const drinksData = {
    ilBaglioreNavbar: "Il Bagliore",
    loginRegistration: "Welcome",
    place: "Home",
    dishes: "Dishes",
    drinks: "Drinks",
    tableReservation: "Table Reservation",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    appetizers: "Juice",
    firstCourse: "Smoothies",
    secondCourse: "Coffee",
    sideDishes: "Wine",
    desserts: "Cocktails",
    pexelsMariaOrlova49464421: "/img/pexels-maria-orlova-4946442-1-1@2x.png",
    pexelsJankoFerlic5904771: "/img/pexels-janko-ferlic-590477-1-1@2x.png",
    pexelsSnapwire6759511: "/img/pexels-snapwire-675951-1@2x.png",
    pexelsValeriaBoltneva8425711: "/img/pexels-valeria-boltneva-842571-1-1@2x.png",
    pexelsAlishaMishra13435041: "/img/pexels-alisha-mishra-1343504-1@2x.png",
    aboutUs: "About Us",
    sloganAndSentenceProps: sloganAndSentence1Data,
};

const sloganAndSentence2Data = {
    children: "Dishes",
};

const dishesData = {
    ilBaglioreNavbar: "Il Bagliore",
    loginRegistration: "Welcome",
    place: "Home",
    dishes: "Dishes",
    drinks: "Drinks",
    tableReservation: "Table Reservation",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    appetizers: "Appetizers",
    firstCourse: "First Course",
    secondCourse: "Second Course",
    sideDishes: "Side Dishes",
    desserts: "Desserts",
    pexelsMariaOrlova49464421: "/img/pexels-maria-orlova-4946442-1@2x.png",
    pexelsJankoFerlic5904771: "/img/pexels-janko-ferlic-590477-1@2x.png",
    pexelsSnapwire6759511: "/img/pexels-snapwire-675951-1-1@2x.png",
    pexelsValeriaBoltneva8425711: "/img/pexels-valeria-boltneva-842571-1-1@2x.png",
    pexelsAlishaMishra13435041: "/img/pexels-alisha-mishra-1343504-1-1@2x.png",
    aboutUs: "About Us",
    sloganAndSentenceProps: sloganAndSentence2Data,
};

const drink55Data = {
    img5: "/img/img5-6@2x.png",
};

const drink56Data = {
    img5: "/img/img5-7@2x.png",
    className: "drink-6-2",
};

const cocktailsList3Data = {
    image1: "/img/image1-2@2x.png",
    img2: "/img/img2-2@2x.png",
    img3: "/img/img3-2@2x.png",
    img4: "/img/img4-1@2x.png",
    drink51Props: drink55Data,
    drink52Props: drink56Data,
};

const coffeeData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Coffee",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    cocktailsListProps: cocktailsList3Data,
};

const dish11Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-4@2x.png",
};

const dish12Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-4@2x.png",
    className: "dish2",
};

const dish31Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-4@2x.png",
};

const dish32Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-5@2x.png",
    className: "dish4",
};

const dishesList1Data = {
    img5: "/img/img5-7@2x.png",
    dish11Props: dish11Data,
    dish12Props: dish12Data,
    dish31Props: dish31Data,
    dish32Props: dish32Data,
};

const sideDishesData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Side Dishes",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    dishesListProps: dishesList1Data,
};

const dish13Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-5@2x.png",
};

const dish14Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-5@2x.png",
    className: "dish2-1",
};

const dish33Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-5@2x.png",
};

const dish34Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-4@2x.png",
    className: "dish4-1",
};

const dishesList2Data = {
    img5: "/img/img5-9@2x.png",
    dish11Props: dish13Data,
    dish12Props: dish14Data,
    dish31Props: dish33Data,
    dish32Props: dish34Data,
};

const dessertsData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Desserts",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    dishesListProps: dishesList2Data,
};

const dish15Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-6@2x.png",
};

const dish16Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-6@2x.png",
    className: "dish2-2",
};

const dish35Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-6@2x.png",
};

const dish36Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-5@2x.png",
    className: "dish4-2",
};

const dishesList3Data = {
    img5: "/img/img5-10@2x.png",
    dish11Props: dish15Data,
    dish12Props: dish16Data,
    dish31Props: dish35Data,
    dish32Props: dish36Data,
};

const secondCourseData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Second Course",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    dishesListProps: dishesList3Data,
};

const dish17Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-4@2x.png",
};

const dish18Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-7@2x.png",
    className: "dish2-3",
};

const dish37Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-7@2x.png",
};

const dish38Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-3@2x.png",
    className: "dish4-3",
};

const dishesList4Data = {
    img5: "/img/img5-5@2x.png",
    className: "dishes-list-1",
    dish11Props: dish17Data,
    dish12Props: dish18Data,
    dish31Props: dish37Data,
    dish32Props: dish38Data,
};

const appetizersData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    appetizers: "Appetizers",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    dishesListProps: dishesList4Data,
};

const dish19Data = {
    dish1: "Lorem ipsum dolor sit",
    image1: "/img/image1-8@2x.png",
};

const dish110Data = {
    dish1: "Ipsum lorem sit amet",
    image1: "/img/img2-3@2x.png",
    className: "dish2-4",
};

const dish39Data = {
    dish3: "Lorem ipsum consectetur sit",
    img3: "/img/img3-8@2x.png",
};

const dish310Data = {
    dish3: "Lorem ipsum dolor sit amet consectetur",
    img3: "/img/img4-2@2x.png",
    className: "dish4-4",
};

const dishesList5Data = {
    img5: "/img/img5-4@2x.png",
    dish11Props: dish19Data,
    dish12Props: dish110Data,
    dish31Props: dish39Data,
    dish32Props: dish310Data,
};

const firstCourseData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "First Course",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    dishesListProps: dishesList5Data,
};

const drink57Data = {
    img5: "/img/img5@2x.png",
};

const drink58Data = {
    img5: "/img/img5-1@2x.png",
    className: "drink-6-3",
};

const cocktailsList4Data = {
    image1: "/img/image1@2x.png",
    img2: "/img/img2-9@2x.png",
    img3: "/img/img3-9@2x.png",
    img4: "/img/img4-8@2x.png",
    drink51Props: drink57Data,
    drink52Props: drink58Data,
};

const cocktailsMixedDrinksData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Cocktails & Mixed Drinks",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    cocktailsListProps: cocktailsList4Data,
};

const menuData = {
    ilBaglioreNavbar: "Il Bagliore",
    loginRegistration: "Welcome",
    booktable: "Table Reservation",
    menu: "Menu",
    place: "Home",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    pexelsMariaOrlova49464421: "/img/pexels-maria-orlova-4946442-1@1x.png",
    pexelsMariaOrlova49464422: "/img/pexels-maria-orlova-4946442-2@1x.png",
    dishes1: "Dishes",
    dishes2: "Drinks",
    aboutUs: "About Us",
};

const aboutUsData = {
    ilBaglioreNavbar: "Il Bagliore",
    place: "Home",
    ellipse1: "/img/ellipse-1-1@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    aboutUs: "About Us",
    loremIpsumDolorSi: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.<br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</React.Fragment>,
    iconFacebook: "/img/fb-logo@2x.png",
    facebook: "Facebook",
    iconTwitter: "/img/twitter-icon@2x.png",
    instraLogo: "/img/instra-logo-1@2x.png",
    instagram: "Instagram",
    twitter: "Twitter",
    contact: <React.Fragment>Contact: <br />+33 3 6666 9999</React.Fragment>,
};

const wineData = {
    ilBaglioreNavbar: "Il Bagliore",
    tableReservation: "Table Reservation",
    place1: "Welcome",
    dishes: "Dishes",
    drinks: "Drinks",
    place2: "Home",
    menu: "Menu",
    firstCourse: "Wine",
    ellipse1: "/img/ellipse-1-2@2x.png",
    ilBagliore: "IL BAGLIORE",
    restaurant: "Restaurant",
    descLorem1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image1: "/img/image1-1@2x.png",
    drink1: "Lorem ipsum dolor sit",
    img2: "/img/img2-1@2x.png",
    descLorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img3: "/img/img3-1@2x.png",
    descLorem3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    aboutUs: "About Us",
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
    text1: "&",
    fineDinning: "The Art of Fine Dinning",
    loremSentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    pexelsLumn6049691: "/img/pexels-lumn-604969-1@1x.png",
    aboutUs: "About Us",
};

