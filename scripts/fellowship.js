console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'amwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = $('<section></section>');

function makeMiddleEarth() {
  // your answers here
  section.prop('id', 'middle-earth');
  section.appendTo(body);
  $('#middle-earth').append('<article id="shire"></article>'
    ,'<article id="rivendell"></article>','<article id="mordor"></article>');

   
  $('#shire').append('<h1>' + lands[0] + '</h1>');
  $('#rivendell').append('<h1>' + lands[1] + '</h1>');
  $('#mordor').append('<h1>' + lands[2] + '</h1>');

}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  $('<ul id="list"></ul>').appendTo('#shire');
  
  
  for (var i = 0; i < hobbits.length; i++){
    $('#list').append('<li class="hobbit">' + hobbits[i] + '</li>');
  }

}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  
  $($('#list').children()[0]).append('<div id="the-ring" class="magic-imbued-jewelry"></div>');
  
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
 $('<aside><ul id="bud"></ul></aside>').appendTo('#rivendell');
  
  
  for (var i = 0; i < buddies.length; i++){
    $('#bud').append('<li>' + buddies[i] + '</li>');
  }
}

makeBuddies();

function beautifulStranger(){
  // your answers here
  $($('#bud').children()[3]).text('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  $('.hobbit').appendTo('#rivendell');
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  $('<div class="the-fellowship"></div>').appendTo('#rivendell');
  var fellowshipMembers = $('li');
  for (var i = 0; i < fellowshipMembers.length; i++) {
    $('.the-fellowship').append(fellowshipMembers[i]);
  }
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
  $($('.the-fellowship').children()[0]).text ('Gandalf the White');
  $($('.the-fellowship').children()[0]).css("backgroundColor", "white");
  $($('.the-fellowship').children()[0]).css('border', '2px solid grey');


}

theBalrog();

function hornOfGondor() {
  // your answers here
  alert("the horn of gondor has been blown");
  $($('.the-fellowship').children()[4]).detach();

}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  $($('.the-fellowship').children()[5]).appendTo('#mordor');
  $($('.the-fellowship').children()[4]).appendTo('#mordor');

  $('<div id="mount-doom"></div>').appendTo('#mordor');

}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  $('<div id="gollum"></div>').appendTo('#mordor');
  $('#the-ring').remove($('.the-fellowship').children()[4]);
  $('#gollum').append('#the-ring');
  $($('.the-fellowship').children()[4]).appendTo('#mount-doom');


}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
