<?php
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === false){
    header("location: login.php");
    exit;
}

?>
<!DOCTYPE html>
<html>
  <head>
    <title>Dashboard</title>
    <link rel="manifest" href="site.webmanifest">
      <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>
      <link rel="stylesheet" href="../css/main.css">
      <link rel="stylesheet" href="../css/bootstrap.css">
      <!---c u s t o m--->
      <link rel="stylesheet" href="https://ayaan-codes.github.io/packages/style/one.css">
      <link rel="stylesheet" href="https://ayaan-codes.github.io/packages/style/two.css">
      <link rel="stylesheet" href="https://ayaan-codes.github.io/packages/style/three.css">
      <link rel="stylesheet" href="https://ayaan-codes.github.io/packages/style/extra.css">
      <style>
         section header {
         font-family:'Comfortaa';
         font-size: 62px;
         }
         
      /* width */
      ::-webkit-scrollbar {
      width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
      background: #202021; 
      }
 
      /* Handle */
      ::-webkit-scrollbar-thumb {
      background: #dbd7d7; 
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
      background: grey; 
      }
	   </style>
  </head>
  <body>
  <h1>Welcome to ACO:</h1>
    <h2><?php echo $_SESSION["usr"]; ?></h2>
  </body>
</html>