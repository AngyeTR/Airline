// Este documento contiene los llamados a las funciones que generan componentes reutilizables en la app
// Cada llamado debe contar con los parámetros establecidos en la función.
// El tipo de dato que recibe cada función puede ser consultado en ./components.js



createHeaderArticle("Canada", 800, link="about-us",
"Prepare your bags and forget your worries to start enjoying your holidays in this fantastic country");

createFooterMenu("About us", [{
    optionName: "We want to help passengers to reach their destinations", link: ""
}])

createFooterMenu("Explore", 
    [{optionName: "Home", link: ""},
    {optionName: "Destination", link: "destinations"},
    {optionName: "About", link: "about-us"}]);

createFooterMenu("Information", 
    [{optionName: "More Search", link: ""},
    {optionName: "Blog", link: ""},
    {optionName: "Testimonials", link: ""}]);

createFooterMenu("Services", 
    [{optionName: "Manage My Bookings", link: ""},
    {optionName: "Check-in", link: ""},
    {optionName: "Hotel", link: ""},
    {optionName: "Cars", link:""}]);

 
createHeaderMenu([
    {optionName: "Home", link: ""}, 
    {optionName: "About", link: "about-us"},
    {optionName: "Destination", link: "destinations"},
    {optionName: "Contact", link: "contact"}
]);

createLanguage([
    {optionName: "EN - English", link: ""},
    {optionName: "RU - Russian", link: ""},
    {optionName: "DE - German", link: ""},
    {optionName: "FR - French", link: ""}
]);


createMainMenu([
    {optionName: "Check-in", link:""},
    {optionName: "Manage My Booking", link:""},
    {optionName: "Search", link:""},
    {optionName: "Destination", link:""},
    {optionName: "Members", link:""}
]);

createContactIcons([
    {optionName: "facebook", link:""},
    {optionName: "instagram", link:""},
    {optionName: "twitter", link:""}]);


createDestinationContainer("Moscow", "600,86");
createDestinationContainer("Puerto Rico", "600,86");
createDestinationContainer("Honduras", "600,86");
