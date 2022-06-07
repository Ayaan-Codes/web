const search = new URLSearchParams(window.location.search);
const search_query = params.get("search");
const card_slots = document.querySelectorAll(".card");

const products = [
    "ACO Online Security & Ad Blocker",
    "ACO Search",
    "ACO Calculator",
    "ACO Premium",
    "ACO SMARTi app",
    "ACO Upload Magic",
    "ACO Network Tester",
    "ACO Drive",
    "ACO Work ECO-System",
    "ACO Development",
    "ACO Games",
    "ACO Statistics",
    "ACO Meet",
    "ACO Store",
    "ACO Support System",
    "ACO Chat",
    "ACO Mail",
    "ACO BOT",
    "ACO Photo",
    "ACO Oauth SignIn",
    "ACO Verification System",
    "ACO Cast",
    "ACO Accounts",
    "ACO ShareUp",
    "ACO Translate",
    "ACO Open",
    "ACO IT",
    "ACO Multi",
    "ACO Shopper",
    "ACO AutoCore",
    "ACO SpellCheck",
    "ACO AI Shop",
    "ACO LiveStat",
    "ACO Blog",
    "ACO Ask",
    "ACO WebModeration",
    "ACO Developer Tools",
    "ACO WHAT?",
    "ACO Maps",
]

let card_slot_content = [["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlYvzt71tyiUOpi5T6DK7z2KpNo6wMQpTrAg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Online Security & Ad Blocker</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>ACO Online Security and Ad blocker! The best free secure service online!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/a-co/inactivepage.html`;'>Get it now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJWOO3EVsc8acnLzYq_GAGAdvhhmlkk0UVYA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Search</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>ACO Search is the best search engine out there, REAL results and NO FAKE INFO! Advanced searching to get you exactly what you want!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/search/`;'>Search now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXTZ2XiLm2ygP16D7WMrgtrbcOYqk3Cr48Fg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Calculator</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>An advanced calculator with all the functions, 100% accurate and always updated! 0.0004ms response time!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/calculator/`;'>Use now!</button>],"],

                    ["<img src='https://img.freepik.com/free-vector/premium-collection-badge-design-vector_53876-43821.jpg?size=338&ext=jpg' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Premium</h1>",
                    "<p class='price'>ACO Membership</p>",
                    "<p>Perks, on perks, on perks, on more perks! The BEST membership you can get with discounts, more product, and extra service. There is at least 1 new perk per week!</p>",
                    "<button onclick='window.location.href=`premium.html`;'>Get prime today!</button>"],

    
                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ygxR8NckMCSqqP8UWkG4d_k4gBGfh0Bx9w&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>SMARTi app</h1>",
                 "<p class='price'>ACO app</p>",
                 "<p>(BETA) This is the new SMARTi app, it is like Siri and Alexa. We have a ton of fetures and can beat everything else on the internet!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/aco-smarti/`;'>Try it early!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeHXr2zRVtPoTEk3vQmLqPCVFBAkd6XpV9BA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>Upload Magic</h1>",
                 "<p class='price'>ACO Service</p>",
                 "<p>(BETA) This is an upload website which lets you submit files to your admin, teacher, or co-worker in seconds!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/upload-majic-aco/`;'>Get it FREE!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIXdtDMJP-JLLjK8ZLg9_V0nDZLtChldbAmg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Network Tester</h1>",
                 "<p class='price'>ACO Network</p>",
                 "<p>(BETA) This is the ACO Network test website, it can give you your internet speed, DNS data, IP address and much more!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/a-co/inactivepage.html`;'>Network now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjNmBrWe0HmdVOijE8h4HL1LLnYfWM_NWfEg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Drive</h1>",
                 "<p class='price'>Prototype</p>",
                 "<p>Clouad file service with docs, slides, sheets, and more. The Drive part of the ACO Work ECO-System</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl5ZG2Hzyh0o33jBBNn1a7p30_l0sOIuPfNQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Work ECO-System</h1>",
                 "<p class='price'>Prototype</p>",
                 "<p>Do all your work in one secure place! Drive, online meetings, and much more. The one stop for work!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"],

                    ["<img src='https://images.creativemarket.com/0.1.0/ps/5118724/300/200/m2/fpnw/wm0/lla64lky0elrdtlla245uwsw9sgj7bhpl5jqvck7u5nzk2h59wil6hkfj3utvzrd-.jpg?1538135279&s=bde3d3d58bcd025fc4569a6ead8707e3' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Development</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Get professional websites and app that amaze! Get custom everything tech for a cheap price (Currently not available)</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Order now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTICslbkLBp8Sax80dD_lIqprMf-J8NbzmCAg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Games</h1>",
                 "<p class='price'>Lazo Entertainment</p>",
                 "<p>GameHub, filled with the best games out there made with love at ACO, we speand months developing these games and they are just GOOD. Play for free today or buy Premium to get extra games!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/acogame/`;'>Play now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaps22aNemOy8t6rnpLWnv01MkICmCaig3Sw&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Statistics</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Statistical service with accurate data about all our service, get your company or project a statistics website today!</p>",
                 "<button onclick='window.location.href=`https://aco.statuspage.io/`;'>Get it now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw4OQa2eayatFp_zcdJt5qx2FRnyvZ2l771w&usqp=CAU'>",
                 "<h1>ACO Meet</h1>",
                 "<p class='price'>ACO Social</p>",
                 "<p>HD video and voice meetings for FREE. Get ACO MEET (beta) today and start connecting you team!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;;>Request beta!</button>"],
                 
                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUPThBalpSHOLEopPZcckZ1JrgYYZddJJtFQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Store</h1>",
                 "<p class='price'>ACO Retail</p>",
                 "<p>(beta) ACO Store, the place where you can buy any ACO product and service. Get discounts and much more once its open!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIHpHU5onCGAICxImlgZUuePWz1wtg9Vikhg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Support System</h1>",
                 "<p class='price'>ACO Support</p>",
                 "<p>Get the best support system for your website!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/a-co/inactivepage.html`;'>Check it out!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJHK47gmj1mzsuvdXgyb_NgLSa6cFSHrbiRQ&usqp=CAU'>",
                 "<h1>ACO Chat</h1>",
                 "<p class='price'>ACO Social</p>",
                 "<p>Text away with anyone you want on ACO chat!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"], 

                    ["<img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Mail</h1>",
                 "<p class='price'>ACO Connectivity</p>",
                 "<p>(beta) Send and recive emails from anyone with ACO mail, secure, fast, and free!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Request beta!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNXZDVuKGUjRMz_VHkqvQCglMM1bpIjczOjQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO BOT</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Bots the can do anything from play a game to read you the news, the wide range of ACO bots are just next level</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/a-co/inactivepage.html`;'>Request beta!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkrhDQqYJR7ikkcazWHhQ5i14nkqSbbvrkOQ&usqp=CAU'>",
                 "<h1>ACO Photo</h1>",
                 "<p class='price'>ACO Drive</p>",
                 "<p>Save photos and HD video with ACOPhoto, it takes about 3 seconds to upload a 60mb file and you can set on what way it renders. Uploading is powered by UploadMagic (ACO)</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXxciXiCFmhAq3LaU0i0v1QHo7z0DkLg3TwA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Oauth SignIn</h1>",
                 "<p class='price'>ACO Connectivity</p>",
                 "<p>Get your website an ACO SignIn and SignUp page with ACO!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Order now!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTXktCPkKL-iO2rmZp7WvvZFCThnteqyiExw&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Verification System</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Verify people, items, and services and see who is legit with ACO Verification</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Order Now!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsf5ofzRZRn1JIQ0rJSHNEl4gT1Fey7irTrw&usqp=CAU'>",
                 "<h1>ACO Cast</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Cast video, files, and ACO Drive docs to your Samsung smart or ACO TV STICK. Cast fron 440p to 1080p and over 50fps!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6IadE31dVYJ7Gb-5Z33bfyK1gNcbOnSv7ew&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Accounts</h1>",
                 "<p class='price'>ACO Connectivity</p>",
                 "<p>Add accounts to your website where a user can save, load, and see thier account. (Also has SignIn with ACO)</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Order now!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuX0ymfAC5ksKn2vq1-0RcDimVKiBvWWSS_Q&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO ShareUp</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Transfer files upto 300gb for free and 3tera with ShareUp+ or ACO Premium. Share any file at any time in less than seconds by just selecting and entering the email of the person you want to share it with!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Request Beta!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9Us7fgt9C_Z2ZgRo6JdLLPNAsDceAtgCNlA&usqp=CAU'>",
                 "<h1>ACO Translate</h1>",
                 "<p class='price'>ACO Connectivity</p>",
                 "<p>Translate anything you want to over 300 languages (even some made up ones like pirate) and connect with the world better!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>",], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfs77Mlk8gsYXrJxKpr-LnH6bXomdGFydDxw&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Open</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Make an open source project with ACO! Make your website, bot, blog, or anything else with ACO open where you can share it with the world!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Request beta!</button>",], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTav6f_0J72TFZwqKfc12wXI7ilIlKCz7mnQA&usqp=CAU'>",
                 "<h1>ACO IT</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Need help with your PC, phone, laptop, or any other device? Check out ACO IT, we provide articals and tips to make your online life that much better!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Ask questions here!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdIbGWtvrdeGwAY0axJQ8FsG51ydMwt1AB5g&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Multi</h1>",
                 "<p class='price'>ACO Everything</p>",
                 "<p>An app with everything ACO inside,this is so you will not have to get another app for another product!</p>",
                 "<button onclick=`window.location.href='mailto:a.co.network01@gmail.com`;'>Request beta!</button>",], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZteBw2COVK-dnOroXQ0DipUy4gsFACaanNA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>Shoper by ACO</h1>",
                 "<p class='price'>ACO Retail</p>",
                 "<p>Buy and sell items, update your stock and become a sales person online with ACO shoper website!</p>",
                 "<button onclick=`window.location.href='mailto:a.co.network01@gmail.com`;'>Request beta!</button>",],


                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrU4ZuGCw31KHQh4X4RsEGyMS6WeByo8jnUw&usqp=CAU'>",
                 "<h1>ACO AutoCore</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>AutoCore your devices and make life easy, ACO AutoCore is a group of ACO products designed to make your laptop, phone, or any other device better!</p>",
                 "<button onclick=`window.location.href='mailto:a.co.network01@gmail.com`;'>Request beta!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsvHQJTBCxdDF3A7_gHVKMwxAogMJ0nnRiSw&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO SpellCheck</h1>",
                 "<p class='price'>ACO Assistant</p>",
                 "<p>Currently in beta, ACO AutoCorrect can help you stand out, say goodbye to typos and errors in your work!</p>",
                 "<button onclick=`window.location.href='mailto:a.co.network01@gmail.com`;'>Request beta!</button>",], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOWiSqTotrOa5nPt_ollKuq7ttyeUe2lyc6A&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO AI Shop</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Get ACO AI for your service by just contacting us and telling us how it should work, to date ACO AI works with over 500 apps worldwide!</p>",
                 "<button onclick=`window.location.href='mailto:aco.development.studio@gmail.com`;'>Order Now!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ayFrOsnA_bi2IYERZp4l0bgNoZKTQrumLQ&usqp=CAU'>",
                 "<h1>ACO LiveStat</h1>",
                 "<p class='price'>ACO Tech</p>",
                 "<p>Get live data for sports, elections, and everything you can possibly think of with LiveStat</p>",
                 "<button onclick=`window.location.href='mailto:aco.development.studio@gmail.com`;'>Request beta!</button>",], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREYsES7Vefdn1zf_4GDHjD_WJWsr7IcRcgFA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Blog</h1>",
                 "<p class='price'>ACO Public Info</p>",
                 "<p>Get updates and info on new things on ACO! Search the website for news, articals, or questions.</p>",
                 "<button onclick=`window.location.href='mailto:a.co.network01@gmail.com`;'>Request beta!</button>",],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQI3APc5PbBD6Sz_QOneUDQvCFH_9rIuMJ_A&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO ask</h1>",
                 "<p class='price'>ACO Social</p>",
                 "<p>Ask questions and get answers from others, make threads and conversations and just enjoy!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com`;'>Request beta!</button>"], 

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglmk6Lxnw_ABAoVWe5VkThaH3qdL22SpKEg&usqp=CAU'>",
                 "<h1>ACO WebModeration</h1>",
                 "<p class='price'>ACO Websites</p>",
                 "<p>A briliant tool that helps websites owners moderate websites, it is even used on the website you are on right now! Try doing CTRL+SHIFT+I on your keyboard... notice it wont work as it is blocked, you can do many more with this tool that helps keep you website safe and secure!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com?subject=Request for ACO WebModeration`;'>Request beta!</button>"], 

                    ["<img src='https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x_4x.png' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO Developer Tools</h1>",
                 "<p class='price'>ACO People</p>",
                 "<p>Get the ACO Developer tool kit and be set to make apps, websites, and much more online... This pack gives you <br>1. ACO Git Account<br>2. ACO Code Editor Account<br>3. ACO Code Help Community Account<br>4. Templates that let you make your apps ASAP!</p>",
                 "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com?subject=Request Beta for ACO Developer Tools`;'>Request beta!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWzrQ9UFAnN1PNXil4ckdo8vdq-kQme3qVQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>ACO WHAT?</h1>",
                 "<p class='price'>ACO Help&Support</p>",
                 "<p>Stuck on something related to ACO? Want something other than our live support desk? Well Just click try beta and be part of our new 'Auto Email' system... all you have to do is click what you want to ask a question about and the email is already wrote out for you! Try it!</p>",
                 "<button onclick='window.location.href=`mailto:aco.development.studio@gmail.com?subject=Auto Help Email&body= Auto Composed email!`;'>Ask here!</button>"],

                  ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROAmz7yqStJsIfaICjbFWVgyNEUiqvhODdqQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                  "<h1>ACO Maps</h1>",
                  "<p class='price'>ACO Connectivity</p>",
                  "<p>Navigate the world in 2d or 3d maps that update every week! Become a ACO assistant and add places to the map for everyone else to enjoy! Find something about a place already on the map? Well write a reveiw about it!</p>",
                  "<button onclick='window.location.href=`mailto:a.co.network01@gmail.com`;'>Request beta!</button>"]];

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