var items = [
'https://open.spotify.com/embed/track/3tSmXSxaAnU1EPGKa6NytH',
'https://open.spotify.com/embed/track/5ghIJDpPoe3CfHMGu71E6T',
'https://open.spotify.com/embed/track/1YHIX390WgL6fPmhZ1dLGz',
'https://open.spotify.com/embed/track/41wWrTueWew7qUU0Ru87Mp',
'https://open.spotify.com/embed/track/0NWPxcsf5vdjdiFUI8NgkP',
'https://open.spotify.com/embed/track/2PzU4IB8Dr6mxV3lHuaG34',
'https://open.spotify.com/embed/track/2K2M0TcglCRLLpFOzKeFZA',
'https://open.spotify.com/embed/track/21Qsj3cMVCx2xF2EVVNbEu',
'https://open.spotify.com/embed/track/4YGJwvqK8ZfMdpnD4vqyFI',
'https://open.spotify.com/embed/track/63T7DJ1AFDD6Bn8VzG6JE8',
'https://open.spotify.com/embed/track/6guXhXMAHU4QYaEsobnS6v',
'https://open.spotify.com/embed/track/6LVkntQPrL5GUZKgN6E1fC',
'https://open.spotify.com/embed/track/3fOc9x06lKJBhz435mInlH',
'https://open.spotify.com/embed/track/6mib3N4E8PZHAGQ3xy7bho',
'https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox',
'https://open.spotify.com/embed/track/64yrDBpcdwEdNY9loyEGbX',
'https://open.spotify.com/embed/track/5XcZRgJv3zMhTqCyESjQrF',
'https://open.spotify.com/embed/track/4Li2WHPkuyCdtmokzW2007',
'https://open.spotify.com/embed/track/1hqrYSqvNc9x3BETX1cZhk',
'https://open.spotify.com/embed/track/2K2M0TcglCRLLpFOzKeFZA',
'https://open.spotify.com/embed/track/7GonnnalI2s19OCQO1J7Tf',
'https://open.spotify.com/embed/track/21Qsj3cMVCx2xF2EVVNbEu',
'https://open.spotify.com/embed/track/6i4Qi1mJxXjqNIL9HfJhRs',
'https://open.spotify.com/embed/track/4E5xVW505akJX0wcKj8Mpd',
'https://open.spotify.com/embed/track/2l6mxqDEbISPOhF3k2bJ9G',
'https://open.spotify.com/embed/track/0WTc2jsUgF4Y2MOz0aYvsR'

];

const random = Math.floor(Math.random() * items.length);
var itr = (random, items[random]);

function leqsebi() {
    document.getElementById('embed').style = "display: block";
    $("#embed").attr("src", itr);
}