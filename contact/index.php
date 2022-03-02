<!DOCTYPE html>
<html lang="en/us">
    <head> 
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
        <link rel="manifest" href="site.webmanifest">
        <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/bootstrap.css">
<!--META META META META META META META EMBEDS META META META META META META META META META META META META META META-->
<meta name=description content="Official Website">
<meta name=viewport content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<meta itemprop=name content=ACO>
<meta itemprop=description content="Official Website">
<meta itemprop=image content=https://i.ibb.co/hXKcGjy/aco-chip-set-logo-blue.png>
<meta name=twitter:card content=summary_large_image>
<meta name=twitter:title content=ACO Website>
<meta name=twitter:description content="Official Website">
<meta name=twitter:image content=https://i.ibb.co/hXKcGjy/aco-chip-set-logo-blue.png>
<meta property=og:title content=ACO Website>
<meta property=og:url content=https://ayaan-codes.github.io/web>
<meta property=og:site_name content=ACO>
<meta property=og:type content=website>
<meta property=og:description content="Official Website">
<meta property=og:image content=https://i.ibb.co/hXKcGjy/aco-chip-set-logo-blue.png>
<!--META META META META META META META EMBEDS META META META META META META META META META META META META META META-->
        <title>About Us | ACO</title>
<script>
            function disableCtrlKeyCombination(e)
            {
            //list all CTRL + key combinations you want to disable
            var forbiddenKeys = new Array('a', 'b', 'c', 'd', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',);
            var key;
            var isCtrl;
            if(window.event)
            {
            key = window.event.keyCode;     //IE
            if(window.event.ctrlKey)
            isCtrl = true;
            else
            isCtrl = false;
            }
            else
            {
            key = e.which;     //firefox
            if(e.ctrlKey)
            isCtrl = true;
            else
            isCtrl = false;
            }
            //if ctrl is pressed check if other key is in forbidenKeys array
            if(isCtrl)
            {
            for(i=0; i<forbiddenKeys.length; i++)
            {
            //case-insensitive comparation
            if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
            {
            alert('🔴 ACO WebModeration™ : ctrl + '+String.fromCharCode(key) +' has been disabled for security reasons.');
            return false;
            }
            }
            }
            return true;
            }
</script>
        <style>
            section header {
                font-family: 'Comfortaa';
                font-size: 62px;
            }
        </style>
        <script src="security.js"></script>
    </head>
    <body onkeypress="return disableCtrlKeyCombination(event);" onkeydown="return disableCtrlKeyCombination(event);">
        <section id="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark navbar-blue">
                <a class="navbar-brand" href="#"><img src="../images/icoSmall.png"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.php">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../about/index.php">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../products/index.php">Products</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="../contact/index.php">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://acogoogle.business.site/">Updates/More</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../login/login.php">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
        <section>
            <header class="home">Contact Us</header>
            <a class="buttonss" href="#explore">Contact...</a> <br><br><br><br><br><br><br><br><br><br><br>
        </section>
        <section class="explore" id="explore">
        <div class="middle">
            <h4>
Soon...
            </h4>
        </div>
        </section>

    </body>

</html>
