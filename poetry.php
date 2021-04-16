<?php

$angryp = ['🤬','😡','😨','👿','😒','☠️','🤯'];
$sadp = ['🌨','🌪','🥀','😔','😩','🙁','😭','😥',];
$happyp = ['😌','🙃','😊','☺️','😀','🎉','💥',];
$energyp = ['🤩','👻','🚀','🤘🏻','🎸','😇','😝','🤪','🍻','🔥','🌈'];
$inlovep = ['🥺','🥰','😘','❤️','💘','💝',];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="p.css">
    <title>Poetra</title>
</head>
<body>

<div class="p">
<a href="#" onclick="onclick1()"><?php echo $angryp[array_rand($angryp)]; ?></a>
<a href="#" onclick="onclick2()"><?php echo $sadp[array_rand($sadp)]; ?></a>
<a href="#" onclick="onclick4()"><?php echo $energyp[array_rand($energyp)]; ?></a>
<a href="#" onclick="onclick5()"><?php echo $inlovep[array_rand($inlovep)]; ?></a>
<a href="#" onclick="onclick7()"><?php echo $happyp[array_rand($happyp)]; ?></a>
</div>
<div class="out">
<p id="text">qweqw</p>
</div>
<script src="p.js"></script>
</body>
</html>