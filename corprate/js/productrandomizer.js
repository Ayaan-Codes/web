const cards = document.getElementsByClassName("card");

let card_content = [
    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlYvzt71tyiUOpi5T6DK7z2KpNo6wMQpTrAg&usqp=CAU' alt='Image' style='width:100%'>",
        "<h1>ACO Healthcare Solutions</h1>",
        "<p class='price'>Medical</p>",
        "<p>Providing medical solutions and services to medical professionals worldwide. We invest heavily into research and development to bring the best in class ground breaking tools. Our products range from data centers to tumor detection software.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ],

    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJWOO3EVsc8acnLzYq_GAGAdvhhmlkk0UVYA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Websites & Apps</h1>",
        "<p class='price'>Online</p>",
        "<p>Providing consumer websites and apps ranging from connectivity tools to games. ACO Websites & Apps develop hundrends of products a year for our customers to enjoy at their computer.</p>",
        "<button onclick='window.location.href=`https://aco.company/online`;'>Browse</button>",
    ],

    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXTZ2XiLm2ygP16D7WMrgtrbcOYqk3Cr48Fg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Enterprise</h1>",
        "<p class='price'>Enterprise</p>",
        "<p>Providing market leading enterprise services for companies small and large. We handle things from branding all the way to internal systems and operations.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>],",
    ],

    [
        "<img src='https://img.freepik.com/free-vector/premium-collection-badge-design-vector_53876-43821.jpg?size=338&ext=jpg' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Development</h1>",
        "<p class='price'>Development</p>",
        "<p>Providing development solutions to retail customers and enterprise customers to launch and maintain any asset digital or otherwise.</p>",
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
