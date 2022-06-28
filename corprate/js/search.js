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
        "<img src='https://aco.company/images/acohealthcaresolutions.png' alt='Image' style='width:100%'>",
        "<h1>ACO Healthcare Solutions</h1>",
        "<p class='price'>Medical</p>",
        "<p>ACO Healthcare Solutions are one of the most essential divisions at ACO. We place high importance on making sure everything is working and in order as it influences many worldwide. The products range from data entry portals, tumor detection software, and digital asset hosting. It's an essential blood vessel for all of us.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ],

    [
        "<img src='https://aco.company/images/acowebsitesandapps.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Websites & Apps</h1>",
        "<p class='price'>Online</p>",
        "<p>ACO Websites & Apps are one of the most diverse divisions to operate. The websites and apps range from tools used by workplaces and schools like drives and document editors to entertainment with a wide selection of video content, music streaming, and games. These online spaces offer everything for everyone and it is the choice of many worldwide.</p>",
        "<button onclick='window.location.href=`https://aco.company/online`;'>Browse</button>",
    ],

    [
        "<img src='https://aco.company/images/acoenterprise.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Enterprise</h1>",
        "<p class='price'>Enterprise</p>",
        "<p>ACO Enterprise provides market-leading enterprise services for companies small and large. We handle things from branding all the way to internal systems and operations to make sure all your business needs are met. We also provide analytical tools to be able to give everyone a real live feed of what is going on and how to better adapt.</p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
    ],

    [
        "<img src='https://aco.company/images/acodevelopment.png' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Development</h1>",
        "<p class='price'>Development</p>",
        "<p>ACO Development provides advanced development and other business-related services from data entry to management or corporate IT assets. All projects completed by us have lifetime service and superior quality and efficiency compared to all similar services. ACO Development also provides developer tools and services to individuals</p>",
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
        "<p>ACO Public Initiatives is a non-profit division aimed at helping spread our values to the world. This includes safety, security, privacy, health, happiness, knowledge, and global citizenship. The impact of our initiatives is huge and it is reflected in everything from policies and accessible design choices. </p>",
        "<button onclick='window.location.href=``;'>Unavailable</button>",
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