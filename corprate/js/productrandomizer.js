const cards = document.getElementsByClassName("card");

let card_content = [
    [
        "<img src='https://aco.company/images/acohealthcaresolutions.png' alt='Image' style='width:100%'>",
        "<h1>ACO Healthcare Solutions</h1>",
        "<p class='price'>Medical</p>",
        "<p>Providing medical solutions and services to medical professionals worldwide. We invest heavily into research and development to bring the best in class ground breaking tools. Our products range from data centers to tumor detection software.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ],

    [
        "<img src='https://aco.company/images/acowebsitesandapps.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Websites & Apps</h1>",
        "<p class='price'>Online</p>",
        "<p>Providing consumer websites and apps ranging from connectivity tools to games. ACO Websites & Apps develop hundrends of products a year for our customers to enjoy at their computer.</p>",
        "<button onclick='window.location.href=`https://aco.company/online`;'>Browse</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Enterprise</h1>",
        "<p class='price'>Enterprise</p>",
        "<p>Providing market leading enterprise services for companies small and large. We handle things from branding all the way to internal systems and operations.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>],",
    ],

    [
        "<img src='https://aco.company/images/acodevelopment.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Development</h1>",
        "<p class='price'>Development</p>",
        "<p>Providing development solutions to retail customers and enterprise customers to launch and maintain any asset digital or otherwise.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ],

    [
        "<img src='https://aco.company/images/acoprime.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Prime</h1>",
        "<p class='price'>Service</p>",
        "<p>Premium service with a wide selection to cater to all needs from one person to large families. The Prime Subscription Service is one unified place that applies to every ACO service, app, and other items. This makes it so a person does not need to buy a subscription for everything they use but instead can get everything they want in one place. </p>",
        "<button onclick='window.location.href=``;'>Out Of Stock</button>",
    ], 

    [
        "<img src='https://aco.company/images/acopublicinitiatives.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Public Initiatives</h1>",
        "<p class='price'>Non-Profit</p>",
        "<p>ACO Public Initiatives aims to improve the world by implementing many programs including ACO Green and other such programs. </p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ], 

  
  
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(card_content);
const params = new URLSearchParams(window.location.search);

const searcha = params.get("search");

if (searcha == null) {
    for (i = 0; i < cards.length; i++) {
        for (y = 0; y < card_content[i].length; y++) {
            cards[i].innerHTML += card_content[i][y];
        }
    }
}
