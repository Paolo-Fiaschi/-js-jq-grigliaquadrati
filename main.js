// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){

  // tenere il punteggio dei Verdi VS Rossi
var redPoint = 0, greenPoint = 0;

  // faccio cose
  // $('.square').click(
  //   function () {
  //     if($(this).hasClass('redWannabe')){
  //       $(this).css('background', 'red');
  //       redPoint++;
  //       console.log("punteggio rosso: " + redPoint);
  //       $('.prossa').html("punteggio rosso: " + redPoint);
  //     } else {
  //       $(this).css('background', 'green');
  //       greenPoint++;
  //       console.log("punteggio verde: " + greenPoint);
  //       $('.pverde').html("punteggio verde: " + greenPoint);
  //     }
  //   }
  // );


  // ciclo per aggiungere 15 volete redWannabe in maniera randomica a square
  for (var i = 0; i < 15; i++) {

    var random = Math.floor(Math.random() * 64);
    var square = $(".square");

    square.eq(random % square.length).addClass('redWannabe')[i]++;

  }
  console.log(square);



  $('.square').click(
    function () {
      if($(this).hasClass('active')){
        console.log("OH! l'hai già cliccato!");
      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redPoint++;
        $(this).addClass('active');
        // $(this).attr('active', 'vero');
        console.log("punteggio rosso: " + redPoint);
        $('.prossa').html("punteggio rosso: " + redPoint);
      } else {
        $(this).css('background', 'green');
        greenPoint++;
        $(this).addClass('active');
        console.log("punteggio verde: " + greenPoint);
        $('.pverde').html("punteggio verde: " + greenPoint);
      }
    }
  );





});
