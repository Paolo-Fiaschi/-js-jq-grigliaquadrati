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


  // ciclo per generare 64 div random
  for (var i = 0; i < 64; i++) {
    var random = Math.floor(Math.random() * 64);
    var nuovoRandom = Math.floor(Math.random() * 64);
    var divTableConteiner = $(".tablecontainer");
    var divRandom = $("div .tablecontainer").append('<div class="square"></div>');

  }
  // ciclo per aggiungere 15 volete redWannabe in maniera randomica a square

  var i = 0;
  while (i < 15) {

    var random = Math.floor(Math.random() * 64);
    var square = $(".square");
    console.log(random);

    if (!$(".tablecontainer").find(square).eq(random).hasClass('redWannabe')) {

      $(".tablecontainer").find(square).eq(random).addClass('redWannabe');

      i++; // se no ha la classe redWannabe incrementa di uno e continua il ciclo

      // $(".tablecontainer").find(square).eq(random).addClass('redWannabe');
      console.log(random);
    }else{ //se ha la classe redWannabe ripeti il ciclo con un altro numero random
      $(".tablecontainer").find(square).eq(random).addClass('redWannabe');

    }
  }
  console.log(square);

  // al click segna il punteggio del verde e del rosso
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

  // $('.square').click(
  //   function(){
  //
  //     if (($(this).hasClass('redWannabe'))) {
  //       $(this).css('background', 'red');
  //       alert("Hai perso");
  //     }else {
  //       $(this).css('background', 'green');
  //     }
  //
  //   }
  // );



});
