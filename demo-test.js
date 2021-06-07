var lavoro = 0;
var step = 0;

var step_attitudini = 0;

var solitario = 0;
var sociale = 0;
var abitudinario = 0;
var curioso = 0;
var pigro = 0;
var attivo = 0;

var sex = "o";

var testi_lavoro = [
  "No, grazie. Devo continuare a lavorare.",
  "Ora non posso. Se riesco, più tardi.",
  "Mando un paio di mail e arrivo!",
  "Volentieri, vengo subito!",

  'Lo faccio subito. anche a costo di saltare il pranzo.',
  'Mangio velocemente davanti al pc mentre rispondo alle mail.',
  'Stacco, mangio al volo e mi rimetto subito a lavorare.',
  "Faccio pausa pranzo, merito staccare un po'!",

  'Oggi proprio non posso, ho una marea di lavoro da fare.',
  'Vorrei tanto, ma ho ancora molto lavoro da finire...',
  'Cerco di liberarmi il prima possibile e vi raggiungo!',
  'Certo, non posso mancare! Il lavoro può aspettare lunedì!'
];

var testi_domanda = [
  'Un collega ti propone una pausa caffè: cosa rispondi?',
  "All’ora di pranzo hai ancora e-mail a cui rispondere. Come ti comporti?",
  'Sabato pomeriggio: i tuoi amici ti propongono un aperitivo, ma dovresti lavorare. Cosa rispondi?',
  'In una giornata libera:',
  'All’ora di cena:',
  'Durante una pausa di 15 minuti:'
]

var testi_attitudini = [
  'Preferisco stare da solo',
  "Mi piace stare in compagnia",
  'Faccio le solite cose',
  'Provo qualcosa di nuovo!',
  'Opto per il relax assoluto',
  'Anche a costo di fare fatica, scelgo un’attività gratificante',

  'Preparo una cenetta tutta per me',
  "Invito gli amici per mangiare insieme",
  'Preparo il mio piatto preferito',
  'Sperimento nuove ricette',
  'Ordino online: minimo sforzo, massima resa',
  'Opto per un piatto sano, ma gustoso',

  'Bevo un caffè in tranquillità da solo',
  "Offro un caffè ai miei colleghi",
  'Chiacchiero del più e del meno con i colleghi',
  'Propongo di andare in un posto nuovo  per pranzo',
  'Mi riposo, stando seduto alla scrivania',
  'Faccio due passi per sgranchirmi le gambe'
]

var lavoro_container = $(".lavoro_container");
var attitudini_container = $(".attitudini_container");

//click su risposte lavoro
lavoro_container.each(function(x) {
  $(this).click(function() {

    //per ogni lavoro_container aumentami la variabile lavoro del suo numero e anche la domanda
    aumento_lavoro(x);

    if (step < 3) {
      //fai sparire e comparire oggetti lavoro
      sparisci_compari_lavoro(x);
    }
    //passaggio ad attitudini
    else if (step = 3) {
      sparisci_lavoro(x);
    }


  })
})

//click su risposte attitudini
attitudini_container.each(function(x) {
  $(this).click(function() {
    //per ogni lavoro_container aumentami la variabile lavoro del suo numero e anche la domanda
    aumento_attitudini(x);


  })
})

  $("#button_onboarding").click(function() {
    $("#onboarding").addClass("sparisci_fade");

    setTimeout(function() {
      $("#onboarding").addClass("display_none");
      }, 900)
  });

function aumento_lavoro(x) {
  step++;
  lavoro = lavoro + x + 1;

  modifica_domanda(x);

  console.log("lavoro: " + lavoro);

}

function sparisci_compari_lavoro(x) {
  lavoro_container.each(function(x) {
    $(this).addClass("sparisci_fade");

    setTimeout(function() {
      lavoro_container.each(function(x) {
        $(this).html(testi_lavoro[(step * 4) + x]);
        $(this).addClass("compari_fade");
      });
    }, 900)

    setTimeout(function() {
      lavoro_container.each(function(x) {
        $(this).removeClass("sparisci_fade");
        $(this).removeClass("compari_fade");

      });
    }, 1900)
  });
}

function sparisci_lavoro(x) {

  lavoro_container.each(function(x) {
    $(this).addClass("sparisci_fade");

    setTimeout(function() {
      lavoro_container.each(function(x) {
        $(this).addClass("display_none");
        $(this).removeClass("sparisci_fade");
      });
      attitudini_container.each(function(x) {
        $(this).removeClass("display_none");

        if (x < 2) {
          $(this).addClass("compari_fade");
        } else {
          $(this).addClass("compari_fade_50");
        }
      });
    }, 900)

    setTimeout(function() {
      attitudini_container.each(function(x) {
        $(this).removeClass("opacity_0");
        if (x < 2) {
          $(this).removeClass("compari_fade");
        } else {
          $(this).addClass("opacity_50");
          $(this).removeClass("compari_fade_50");
        }
      });
    }, 1900)

  });
}

function aumento_attitudini(x) {
  if (step_attitudini == 0) {
    //aumento socialità
    if (x == 0) {
      solitario++;
      console.log("solitario:" + solitario);
    } else if (x == 1) {
      sociale++;
      console.log("sociale:" + sociale);
    }

//compare prossimo step
    attitudini_container.each(function(x) {
        $(this).addClass("sparisci_fade");
      })

      setTimeout(function() {
        attitudini_container.each(function(x) {
          $(this).html(testi_attitudini[((step-3) * 6) + x +2]);
            $(this).addClass("compari_fade");
        });
      }, 900)

      setTimeout(function() {
        attitudini_container.each(function(x) {
          $(this).removeClass("sparisci_fade");
          $(this).removeClass("compari_fade");

        });
      }, 1900)



//aumento step attitudini
    step_attitudini++;

  }
  else if (step_attitudini == 1) {
    //aumento socialità
    if (x == 0) {
      abitudinario++;
      console.log("abitudinario:" + abitudinario);
    } else if (x == 1) {
      curioso++;
      console.log("curioso:" + curioso);
    }

    //compare prossimo step
        attitudini_container.each(function(x) {
            $(this).addClass("sparisci_fade");
          })

          setTimeout(function() {
            attitudini_container.each(function(x) {
              $(this).html(testi_attitudini[((step-3) * 6) + x + 4]);
                $(this).addClass("compari_fade");
            });
          }, 900)

          setTimeout(function() {
            attitudini_container.each(function(x) {
              $(this).removeClass("sparisci_fade");
              $(this).removeClass("compari_fade");

            });
          }, 1900)


//aumento step abitudini
    step_attitudini++;

  }
  else if (step_attitudini == 2) {
      console.log(step);
    if (step < 5){

      //aumento socialità
      if (x == 0) {
        pigro++;
        console.log("pigro:" + pigro);
      } else if (x == 1) {
        attivo++;
        console.log("attivo:" + attivo);
      }

  //compare prossimo step
      sparisci_compari_attitudini();

  //aumento step abitudini
      step_attitudini=0;
      step++;

    }

else{
  //aumento socialità
  if (x == 0) {
    pigro++;
    console.log("pigro:" + pigro);
  } else if (x == 1) {
    attivo++;
    console.log("attivo:" + attivo);
  }

//compare prossimo step
  sparisci_compari_attitudini();

//aumento step abitudini
  step_attitudini=0;


  sparisci_attitudini();
}

  }
}

function sparisci_compari_attitudini() {
 modifica_domanda();

  attitudini_container.each(function(x) {
    $(this).addClass("sparisci_fade");

    setTimeout(function() {
      attitudini_container.each(function(x) {
        $(this).html(testi_attitudini[((step-3) * 6 ) + x]);
        if (x < 2) {
          $(this).addClass("compari_fade");
        } else {
          $(this).addClass("compari_fade_50");
        }
      });
    }, 900)

    setTimeout(function() {
      attitudini_container.each(function(x) {
        $(this).removeClass("sparisci_fade");
        if (x < 2) {
          $(this).removeClass("compari_fade");
        } else {
          $(this).addClass("opacity_50");
          $(this).removeClass("compari_fade_50");
        }

      });
    }, 1900)
  });
}

function modifica_domanda() {
  $('#domanda').addClass("sparisci_fade");

  setTimeout(function() {
    $('#domanda').html(testi_domanda[step]);
    $('#domanda').addClass("compari_fade");
  }, 900)

  setTimeout(function() {
    $('#domanda').removeClass("sparisci_fade");
    $('#domanda').removeClass("compari_fade");
  }, 1900)
}

function sparisci_attitudini() {
 $("#domanda").addClass("sparisci_fade");

  attitudini_container.each(function(x) {
    $(this).addClass("sparisci_fade");

    setTimeout(function() {
      $("#domanda").addClass("display_none");
      $(".test_container").addClass("display_none");
      $("#domanda").removeClass("sparisci_fade");

      attitudini_container.each(function(x) {
        $(this).addClass("display_none");
        $(this).removeClass("sparisci_fade");

      });

          results();
          $("#risultato").removeClass("display_none");
          $("#risultato").addClass("compari_fade");
    }, 900)

    setTimeout(function() {
          $("#risultato").removeClass("opacity_0");
          $("#risultato").removeClass("compari_fade");
    }, 1900)



  });
}

function results() {

 if (sociale > solitario && curioso > abitudinario && attivo > pigro){
   $("#risultato_attitudini").html("APE");
  $("#img_insetto").attr("src", "assets/APE.png");
  sex = "a";
   console.log("APE");
 }

 else if (sociale > solitario && curioso > abitudinario && attivo < pigro){
   $("#risultato_attitudini").html("VESPA");
     $("#img_insetto").attr("src", "assets/VESPA.png");
       sex = "a";
   console.log("VESPA");
 }

 else if (sociale > solitario && curioso < abitudinario && attivo > pigro){
   $("#risultato_attitudini").html("FORMICA");
     $("#img_insetto").attr("src", "assets/FORMICA.png");
       sex = "a";
   console.log("FORMICA");
 }

 else if (sociale > solitario && curioso < abitudinario && attivo < pigro){
   $("#risultato_attitudini").html("TERMITE");
     $("#img_insetto").attr("src", "assets/TERMITE.png");
       sex = "a";
   console.log("TERMITE");
 }

 else if (sociale < solitario && curioso > abitudinario && attivo > pigro){
   $("#risultato_attitudini").html("COCCINELLA");
     $("#img_insetto").attr("src", "assets/COCCINELLA_ok.png");
       sex = "a";
   console.log("COCCINELLA");
 }

 else if (sociale < solitario && curioso > abitudinario && attivo < pigro){
   $("#risultato_attitudini").html("CAVALLETTA");
     $("#img_insetto").attr("src", "assets/CAVALLETTA.png");
       sex = "a";
   console.log("CAVALLETTA");
 }

 else if (sociale < solitario && curioso < abitudinario && attivo > pigro){
   $("#risultato_attitudini").html("BRUCO");
     $("#img_insetto").attr("src", "assets/BRUCO_ok.png");
       sex = "o";
   console.log("BRUCO");
 }

 else if (sociale < solitario && curioso < abitudinario && attivo < pigro){
   $("#risultato_attitudini").html("INSETTO STECCO");
     $("#img_insetto").attr("src", "assets/INSETTOSTECCO.png");
       sex = "o";
   console.log("INSETTO STECCO");
 }


 if (lavoro < 4) {
   $("#risultato_lavoro").html("Indaffarat" + sex);
   console.log("Indaffarata");
 } else if (lavoro > 3 && lavoro <= 6) {
   $("#risultato_lavoro").html("Laborios" + sex);
         console.log("Laboriosa");
 } else if (lavoro >= 7 && lavoro <= 9) {
   $("#risultato_lavoro").html("Moderat" + sex);
         console.log("Moderata");
 } else {
   $("#risultato_lavoro").html("Equilibrat" + sex);
         console.log("Equilibrata");
}


}
