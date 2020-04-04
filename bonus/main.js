// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){
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
  $('.square').click(
    function(){

      if (($(this).hasClass('redWannabe'))) {
        $(this).css('background', 'red');
        $("a").addClass('restartActive');
        $('.square').css('display', 'none');
      }else {
        $(this).css('background', 'green');
      }
    }
  );



});
