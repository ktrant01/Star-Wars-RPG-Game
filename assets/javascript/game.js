var heroHP;
var enemyHP;
var heroAttack = 8
var enemyHero;
var selectedHero;
var counterAttack;
var heroimage;
var resetbutton;
var data = [{"_id": "0", "hero_name": "Obi-Wan", "counterattackPower": "10", "attackPower": 8, "healthPoints": "200", "imagename": "obiwan"}, 
            {"_id": "1", "hero_name": "Luke Skywalker", "counterattackPower": "14", "attackPower": 8, "healthPoints": "200", "imagename": "skywalker"}, 
            {"_id": "2", "hero_name": "Darth Maul", "counterattackPower": "6", "attackPower": 8, "healthPoints": "200", "imagename": "darthmaul"}, 
            {"_id": "3", "hero_name": "Darth Vader", "counterattackPower": "11", "attackPower": 8, "healthPoints": "600", "imagename": "darthvader"}] 

function startGame() {

for (key in data){
var button = $('<button>')
    hero = data[key];
    // button.text(hero.hero_name ); 
    button.addClass('p-4 border border-primary')
    // button.attr('class', '.text-danger'); 
    heroimage = $('<img>')
    // $('<p>').text(hero.hero_name)
    button.append('<p>'+hero.hero_name);
    heroimage.attr('src', "assets/images/" +hero.imagename + ".png");
    button.append(heroimage);
    button.append('<p123>'+hero.healthPoints);

    // $('h2').text(hero.hero_name);

    // button.append('<p>');
    // $('p').text(hero.healthPoints);
for (var heroAttr in hero){
    button.attr('data-'+heroAttr, hero[heroAttr]);
    }
    

$('#selectionScreen').append(button);

}



$('button').on('click', function(){
// var this = $(this)
// alert('hi');

if ($('#selectionScreen').get(0).childElementCount == data.length && $(this).text() != 'Attack'){
$(this).appendTo($('#yourHero'));
$('#selectionScreen').children().appendTo($('#enemyHeroes')).removeClass().addClass('p-4 border border-danger')
// $('.border').removeClass()
heroHP = $('#yourHero > button').attr('data-healthpoints');
heroAttack = parseInt($('#yourHero > button').attr('data-attackPower'));



}else if ($(this).parent().get(0).id == 'enemyHeroes' ){
$(this).appendTo($('#defenderHero'));

enemyHP = $('#defenderHero > button').attr('data-healthpoints');
enemyAttack = $('#yourHero > button').attr('data-counterattackPower');
counterAttack = $('#defenderHero > button').attr('data-counterattackPower');

// heroAttack = parseInt($('#yourHero > button').attr('data-attackPower'))
// $('#status').text('')

}





})

$('#attackButton').on('click', function(){

selectedHero = $('#yourHero > button').attr('data-hero_name');
enemyHero = $('#defenderHero > button').attr('data-hero_name');
enemyHP = enemyHP - heroAttack
heroAttack = heroAttack + 6

heroHP = heroHP - counterAttack
$('#yourHero > button > p123').text(heroHP)

$('#defenderHero > button > p123').text(enemyHP)
$('#status p1').text('you attacked ' + enemyHero + ' for ' +heroAttack + ' damage')
$('#status p2').text(enemyHero + ' attacked you for ' +enemyAttack + ' damage')



if ($('#defenderHero').children().length == 0){
$('#status').text('No Hero Selected')

}else if (enemyHP <= 0){
$('#defenderHero > button').remove();
$('#status p1').text('You Win!')
$('#status p2').text('')
$('#status').append('<button>')
$('#status button').text('reset')
$('#status button').attr('class', 'resetbutton')
$('.resetbutton').on('click', function(){

var heroHP;
var enemyHP;
var heroAttack = 8
var enemyHero;
var selectedHero;
var counterAttack;
var heroimage;
var resetbutton;

$('#yourHero > button').remove();
$('#defenderHero > button').remove();
$('#enemyHeroes > button').remove();
$('#status > button').remove();
startGame();

})



}else if ( heroHP <= 0){
$('#status p1').text('You Lose!')
$('#status p2').text('')
$('#status').append('<button>')
$('#status button').text('reset')
$('#status button').attr('class', 'resetbutton')
$('.resetbutton').on('click', function(){

var heroHP;
var enemyHP;
var heroAttack = 8
var enemyHero;
var selectedHero;
var counterAttack;
var heroimage;
var resetbutton;

$('#yourHero > button').remove();
$('#defenderHero > button').remove();
$('#enemyHeroes > button').remove();
$('#status > button').remove();
startGame();

})
}

})


// $('#mydiv').on('click', '*', function()
// $('button').on('click', function(){
//   alert('hi')
//     // debugger;
//     // $(this).appendTo($('#defender'));
// })
// $('#enemyHeroes').button.on('click', function(){

}

startGame()