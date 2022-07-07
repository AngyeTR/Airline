
function createShoppingButton(link){
    const optionLink = document.createElement("a");
     optionLink.setAttribute("href", `#${link}`);
     optionLink.innerText= "BUY NOW";
     const button = document.createElement("button");
     button.appendChild(optionLink);
     const optionList = document.querySelector(".headerContent");
     optionList.appendChild(button);
}

function createHeaderArticle(country, price, link="", message) {
    const headerContent = document.createElement("article");
    headerContent.classList.add("headerContent");
    const articleTitle = document.createElement("h2");
    articleTitle.innerText = `Visit ${country} with prices from $${price}`
    headerContent.appendChild(articleTitle);
    const articleText = document.createElement("p");
    articleText.innerText = message;
    headerContent.appendChild(articleText);

    const headerContentContainer = document.querySelector(".title-container");
    headerContentContainer.appendChild(headerContent);

    createShoppingButton(link);
}


function createDestinationContainer(country, price){
        const countryName = country;
        const joinName = countryName.toLowerCase().replace(" ", "-");
        const destinationCard = document.createElement("div");
        destinationCard.classList.add("destination-card");

        const destinationText = document.createElement("div");
        destinationText.classList.add("text");
        destinationCard.setAttribute("id", "#" + joinName);
        const destinationTitle = document.createElement("p");
        destinationTitle.innerText = "Trip to " + countryName;
        const destinationPrice = document.createElement("h3"); 
        destinationPrice.innerText = "Price $"+ price;

        destinationCard.style.background = `url("../images/${joinName}.jpg")`;

        destinationText.appendChild(destinationTitle);
        destinationText.appendChild(destinationPrice);
        destinationCard.appendChild(destinationText);
        const destinationContainer = document.querySelector(".destinationCard-container");
        destinationContainer.appendChild(destinationCard);

        destinationCard.addEventListener("click", () => {
            const chosenDestination = document.querySelector("#chosenDestinationName");
            chosenDestination.innerText = `Trip to ${countryName}`;
            });     
}

function createLanguage(options)
{ 
    options.forEach(option => {
   const id = option.optionName.toLowerCase().replace(" ", "-");
    const optionLink = document.createElement("a");
    optionLink.setAttribute("href", `#${option.link}`);
    optionLink.innerText= option.optionName;
    const optionItem = document.createElement("li");
    optionItem.setAttribute("id", id);
    optionItem.appendChild(optionLink);
    const optionList = document.querySelector(".languageMenu");
    optionList.appendChild(optionItem);
   
    optionItem.addEventListener("click", () => {
       const langCode = document.querySelector("#langCode");
       const langName = id.split("-");
       let code = langName[0];
       langCode.innerText = `${code} `;
   }); 
    });   
}

 function createMenu(queryContainer, options) {
    
    options.forEach(option => {
        const id = option.optionName.toLowerCase().replace(" ", "-");
     const optionLink = document.createElement("a");
     optionLink.setAttribute("href", `#${option.link}`);
     optionLink.innerText= option.optionName;
     const optionItem = document.createElement("li");
     optionItem.setAttribute("id", id);
     optionItem.appendChild(optionLink);
     const optionList = document.querySelector(queryContainer);
     optionList.appendChild(optionItem);
     });
 }


function createHeaderMenu(options) {
    const queryContainer = ".optionList";
    createMenu(queryContainer, options); 
}

function createMainMenu(options){
    options.forEach(option => {
        option.optionName = " ▸ " +option.optionName;
    });
    const queryContainer = ".mainMenuList";
    createMenu(queryContainer, options);
}

function createFooterMenu(sectionTitle, options) {
    const sectionId= sectionTitle.toLowerCase().replace(" ", "-");
    const sectionName = sectionId+"-footerMenu";
    const queryContainer = `#${sectionId}`;
    let section = document.querySelector(`#${sectionName}`);
    
    if(section == null){
        section = document.createElement("div");
        section.setAttribute("id", sectionName);
        section.classList.add("footerMenu-container");
        const newOptionList = document.createElement("ul");
        newOptionList.innerText = "";
        newOptionList.setAttribute("id", sectionId);
        const sectionTitleText = document.createElement("h3");
        sectionTitleText.innerText = sectionTitle;
        section.appendChild(sectionTitleText);
        section.appendChild(newOptionList);
        const footerContainer = document.querySelector(".footerMenu-section");
        footerContainer.appendChild(section);   
    }
    createMenu(queryContainer, options);
}

function createContactIcons(options){
    const optionList = document.querySelector(".contactInfo-container");

    options.forEach(option => {
        const name = option.optionName.toLowerCase().replace(" ", "-");
     const optionLink = document.createElement("a");
     optionLink.setAttribute("href", `#${option.link}`);
     const optionItem = document.createElement("img");
     optionItem.classList.add("iconImg");
     optionItem.setAttribute("src", `./images/${name}.svg`);
     optionLink.appendChild(optionItem);
     optionList.appendChild(optionLink);
     });
 }

