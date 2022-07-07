// Este documento abarca las funciones utilizadas 
// para generar elementos de la app que puede ser reutilizados.
// Por ejemplo: Las listas de los menús, botones, tarjetas de destinos.
// Las funciones son invocadas en el archivo ./main.js en el cual se proporcionan los parámetros 
// necesarios para la ejecución de cada función.



// CreateShoppingButton permite crear un boton de compra, para lo cual, su argumento 
// necesita sólo de un "link" de tipo string que cumpla el formato de enlace web

function createShoppingButton(link){
    const optionLink = document.createElement("a");
     optionLink.setAttribute("href", `#${link}`);
     optionLink.innerText= "BUY NOW";
     const button = document.createElement("button");
     button.appendChild(optionLink);
     const optionList = document.querySelector(".headerContent");
     optionList.appendChild(button);
}

// la funcion CreateHeaderArticle permite generar en el header la presentación de un destino
// con su precio, una breve descripción y un boton de compras. Sus argumentos son: 
 //     Country: string         
 //     price: string/number    
 //     link:   string
 //     message: string

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

// la funcion createDestinationContainer permite generar tarjetas depresentación de un destino
//  Sus argumentos son: 
//     Country: string         
//     price: string/number 
//      link: string   
// Esta función inserta una imagen al background con una url ../images/${joinName}.jpg por lo cual, el nombre 
// la imagen debe estar en la carpeta images en formato jpg y su nombre debe ser igual al nombre del destino en minúscula y separado por -
 // en caso de no encontrarse la imagen, se asiganrá una imagen por defecto.
function createDestinationContainer(country, price, link=""){
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

        destinationCard.style.background = `url("../images/${joinName}.jpg"), url("https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg")`;

        destinationText.appendChild(destinationTitle);
        destinationText.appendChild(destinationPrice);
        destinationCard.appendChild(destinationText);
        const destinationContainer = document.querySelector(".destinationCard-container");
        destinationContainer.appendChild(destinationCard);

        destinationCard.addEventListener("click", () => {
            const chosenDestination = document.querySelector("#chosenDestinationName");
            chosenDestination.innerText = `Trip to ${countryName}`;
            const destinationLink = document.querySelector("#chosenDestinationLink");
            destinationLink.setAttribute("href", `#${link}`);
            });     
}

// la funcion createLanguage permite crear la lista de  idiomas disponibles
//  recibe como parámetro un array de objetos, donde cada objeto corresponde a un idioma}
// con los siguientes tipos de datos: 
//  [{
//      optionName: string Con el formato: "CC - Nombre" donde CC es el código de idioma en mayúscula
//      link:       string 
//  }, {} ]


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

// la funcion createMenu permite crear la lista de  opciones de un menú genérico.
//  recibe como parámetros un queryContainer y un array de objetos, 
//  donde cada objeto corresponde a una opción en el menú.
// con los siguientes tipos de datos: 
//      querySelector: string   debe indicar la clase o id del contenedor que recibirá la lista y debe respetar la sintaxis de css que corresponde
//      options: array  
//          [{
//          optionName: string 
//           link:       string 
//          }]


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

// las funciones createHeaderMenu y createMainMenu crean una lista de menú. 
//  estas funciones llaman a la función createMenu proporcionandole directamente el querySelector
//  por lo tanto, rquiere únicamente de un array de objetos, 
//  donde cada objeto corresponde a una opción en el menú con los siguientes tipos de datos: 
//      options: array  
//          [{
//          optionName: string 
//           link:       string 
//          }]


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

// la función createFooterMenu permite crear un nuevo menú con su respectiva lista de opciones en la sección de Footer y agregar opciones de lista 
//  a menú existentes. Para esto requiere de los parámetros sectionTitle y options con los siguientes datos: 
//      sectioTitle:    string
//      options:        array de objetos
//          [{
//          optionName: string 
//           link:       string 
//          }]

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

// la función createContactIcons permite crear enlaces a redes sociales de contacto, con su respectivo ícono.
// El único paŕametro requerido es un array de objetos (options) donde cada objeto corresponde a un enlace

//      options:        array de objetos
//          [{
//          optionName: string 
//           link:       string 
//          }]

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

