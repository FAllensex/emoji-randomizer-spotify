<?php

$emjis = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Poetra</title>
</head>
<body>
<div class="wrapper">
<h1 class="title">აირჩიეთ ემოჯი</h1>
<div class="cont">
    <a href="#" onclick="leqsebi()"><?php echo $emjis[array_rand($emjis)]; ?></a>

    <a href="#"id="em5" onclick="leqsebi()"><?php echo $emjis[array_rand($emjis)]; ?></a>

    <a href="#" id="em4"onclick="leqsebi()"><?php echo $emjis[array_rand($emjis)]; ?></a>

    <a href="#" id="em3" onclick="leqsebi()"><?php echo $emjis[array_rand($emjis)]; ?></a>

    <a href="#" id="em1"onclick="leqsebi()"><?php echo $emjis[array_rand($emjis)]; ?></a>
    </div>
</div>
<div class="tag">
<iframe src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" id="embed"></iframe>




</div>
<script src="app.js"></script>
</body>

<h1 class="text-light"></h1>

<div class="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4=" crossorigin="anonymous"></script>
</html>