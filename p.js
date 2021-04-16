var textarray = [
' lorem ipsum dolo',
'alk sanet',
'FiraGo'

]
var firago = [
'miyvarxar rogorc asuls uyvars nnino',
'aeeeeiioouuu',
'wnefwnefwef',
'whenever is forever'
]
var fira = [
    'wiwi wuwu',
    'ahahahaha',
    'shakashaka u shakashaka aa'
]
var bed = [
    'klali',
    'bali ',
    'vali'
]
var ged = [
    'piradmida',
    'dida ',
    'didaa'
]
// randoms begin to rise 
const text = Math.floor(Math.random() * textarray.length);
var texta = (text, textarray[text]);
// 2 
const text2 = Math.floor(Math.random() * firago.length);
var texta2 = (text2, firago[text2]);
//3
const text3 = Math.floor(Math.random() * fira.length);
var texta3 = (text3, fira[text3]);
// 4
const text4 = Math.floor(Math.random() * bed.length);
var texta4 = (text4, bed[text4]);
//5 
const text5 = Math.floor(Math.random() * ged.length);
var texta5 = (text5, ged[text5]);
function onclick1() {
document.getElementById('text').innerHTML = texta;
}
function onclick2(){
    document.getElementById('text').innerHTML = texta2;
}
function onclick4(){
    document.getElementById('text').innerHTML = texta3;
}
function onclick5(){
    document.getElementById('text').innerHTML = texta4;
}
function onclick7(){
    document.getElementById('text').innerHTML = texta5;
}