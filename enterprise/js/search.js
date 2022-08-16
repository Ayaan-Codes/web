const search = new URLSearchParams(window.location.search);
const search_query = params.get("search");
const card_slots = document.querySelectorAll(".card");

const products = [
    "ACO Health Care Solutions",
    "ACO Websites & Apps",
    "ACO Enterprise",
    "ACO Development",
    "ACO Prime",
    "ACO Public Initiatives",

]

let card_slot_content = [
    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Image' style='width:100%'>",
        "<h1>Contracting</h1>",
        "<p class='price'>Human Resources</p>",
        "<p>Hire us to join your team from normal to high skilled positions. We provide contracting to any companies at any scale from 1 to any number of staffers. Connecting you with our team will happen within minutes and work can start within 24 hours of your request. </p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Fresh Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO Websites & Apps are one of the most diverse divisions to operate. The websites and apps range from tools used by workplaces and schools like drives and document editors to entertainment with a wide selection of video content, music streaming, and games. These online spaces offer everything for everyone and it is the choice of many worldwide.</p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Small Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO Enterprise provides market-leading enterprise services for companies small and large. We handle things from branding all the way to internal systems and operations to make sure all your business needs are met. We also provide analytical tools to be able to give everyone a real live feed of what is going on and how to better adapt.</p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Small - Medium Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO Development provides advanced development and other business-related services from data entry to management or corporate IT assets. All projects completed by us have lifetime service and superior quality and efficiency compared to all similar services. ACO Development also provides developer tools and services to individuals</p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Medium Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>Premium service with a wide selection to cater to all needs from one person to large families. The Prime Subscription Service is one unified place that applies to every ACO service, app, and other items. This makes it so a person does not need to buy a subscription for everything they use but instead can get everything they want in one place. </p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Medium - Large Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO Public Initiatives is a non-profit division aimed at helping spread our values to the world. This includes safety, security, privacy, health, happiness, knowledge, and global citizenship. The impact of our initiatives is huge and it is reflected in everything from policies and accessible design choices. </p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Large Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO GAMING is the E-Sports team for ACO that plays in professional legues. ACO GAMING has teams on all major games and has won many championships around the world.</p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Global Business</h1>",
        "<p class='price'>Subscription</p>",
        "<p>ACO Utilities is a work in progress system being designed as a way to get water, electricity, food, and internet inside of one single unit to as many locations on our planet as possible. Prototypes are expected to be designed in the coming months.</p>",
        "<button onclick='window.location.href=`https://aco.company/enterprise/products/subscriptions`;'>Learn More</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Management</h1>",
        "<p class='price'>Service</p>",
        "<p>ACO Labs provides research and development services to solve problems and setup up the solution at any scale. To make these solutions ACO makes use to new technology and expert knowladge to ensure everything is up to spec and well thought out as possible</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Marketing</h1>",
        "<p class='price'>Service</p>",
        "<p>TechX by ACO is a satalite operation meaning it operates as it's own brand with minor influence from the main ACO brand. TechX makes special items and is just an innovative place where anything is possible and will be made at some point.</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Chalkboard</h1>",
        "<p class='price'>Service</p>",
        "<p>ACO Tech is focused on the physical devices and gadgets market developing high tech and budget solutions in all sectors. From small dongles to custom PCs coming soon ACO Tech is working on it all.</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Systems</h1>",
        "<p class='price'>Service</p>",
        "<p>ACO Accounts is a system where users can create and manage their profile on ACO. This account can be used with all ACO products and services no matter the brand or location. ACO accounts is highly secure and very customizable so you can have it the way you want.</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ], 

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Operations</h1>",
        "<p class='price'>Service</p>",
        "<p>ACO Media also known as Lazo Show is the entertainment brand for ACO providing video and movie content in multiple languages and catogories. ACO Media and Lazo Show also run music stations and other live events online and in-person.</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>Auditing</h1>",
        "<p class='price'>Service</p>",
        "<p>ACO Digital Coin, not to be mistaken with ACO Credits available for purchase in accounts or ACO Dollars is a cryto currency. ACO Digital Coin provides great value and is one of the most secure ways to send your money in bulk easily. You can convert between ACO Digital Coin, ACO Credit, and ACO Dollars easily in the ACO Money & Assets portal.</p>",
        "<button onclick='window.location.href=`mailto:enterprise@aco.company`;'>Request</button>",
    ],


               ];

function gnomeSort(arr, n)
{
    let index = 0;

    while (index < n) {
        if (index == 0)
            index++;
        if (arr[index][1] >= arr[index - 1][1])
            index++;
        else {
            let temp = 0;
            temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            index--;
        }
    }
    return;
}

let matches = []
if (search_query != null) {
   for (i = 0; i < products.length; i++) {
      const search_index = products[i].toLowerCase().search(search_query.toLowerCase());
      if (search_index != -1) {
          matches.push([i, search_index]);
      }
   }
   if (matches.length != 1) {
      gnomeSort(matches, matches.length)
   }
  
   for (i = 0; i < matches.length; i++) {
      for (y = 0; y < card_slot_content[i].length; y++) {
          card_slots[i].innerHTML += card_slot_content[matches[i][0]][y];
      }
   }
}

for (i = 0; i < card_slots.length; i++) {
   if (card_slots[i].childNodes.length < 2) {
      card_slots[i].remove();
   }
}