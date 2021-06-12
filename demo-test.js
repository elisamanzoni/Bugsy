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

$("#button_results").click(function() {
  $("#popup_results").addClass("sparisci_fade");

  setTimeout(function() {
    $("#popup_results").addClass("display_none");
  }, 900)
});

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
        $(this).html(testi_attitudini[((step - 3) * 6) + x + 2]);
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

  } else if (step_attitudini == 1) {
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
        $(this).html(testi_attitudini[((step - 3) * 6) + x + 4]);
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

  } else if (step_attitudini == 2) {
    console.log(step);
    if (step < 5) {

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
      step_attitudini = 0;
      step++;

    } else {
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
      step_attitudini = 0;


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
        $(this).html(testi_attitudini[((step - 3) * 6) + x]);
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
      $("#popup_results").removeClass("display_none");
      $("#popup_results").addClass("compari_fade");

    }, 900)

    setTimeout(function() {
      $("#popup_results").removeClass("opacity_0");
      $("#popup_results").removeClass("compari_fade");
      $("#risultato").removeClass("display_none");
      $("#risultato").removeClass("opacity_0");

    }, 1900)




  });
}

function results() {

  if (sociale > solitario && curioso > abitudinario && attivo > pigro) {
    $("#risultato_attitudini").html("APE");
    $("#img_insetto").attr("src", "assets/APE.png");

     if(lavoro < 4) {
        $("#risultato_profilo").html("Proprio come un’ape, sei sociale, curioso e attivo: tutte doti che potresti volgere a tuo favore. Il tuo benessere potrebbe di gran lunga migliorare, se non dedicassi tutte le tue energie unicamente al lavoro. Impiegare una parte del tuo tempo agli interessi del tuo privato potrebbe solo farti del bene. Hai tutte le qualità per migliorare e cambiare la tua vita in positivo. Ti piacerebbe trovare un equilibrio tra la vita privata e quella lavorativa?");

     } else if (lavoro > 3 && lavoro <= 6) {
       $("#risultato_profilo").html("Ti comporti proprio come un’ape: sei sociale, curioso e attivo, tutte doti che potresti volgere a tuo favore. Il tuo benessere potrebbe migliorare molto, se non dedicassi la maggior parte delle tue energie specialmente al lavoro. Impiegare una parte del tuo tempo agli interessi del tuo privato è più che legittimo e ti porterebbe un gran beneficio. Hai tutti i mezzi per ritagliare i tuoi spazi e imparare a dire “no” quando necessario: ricorda che il tempo per te è prezioso.");
     } else if (lavoro > 7 && lavoro <= 9){
       $("#risultato_profilo").html("Ti comporti come un’ape: sei sociale, curioso e attivo, tutte doti che potresti volgere a tuo favore. Ti stai impegnando per dedicare al lavoro il tempo necessario e imparare a dire “no” quando serve, anche se non sempre è facile. Sei a un passo dal raggiungere l’equilibrio tra la vita lavorativa e quella privata: quello che puoi fare per migliorare ancora di più è condividere le tue esperienze incoraggiando gli altri a seguire buone abitudini: ce la puoi fare!");
     } else{
        $("#risultato_profilo").html("Proprio come un’ape, sei sociale, curioso e attivo: tutte doti che potresti volgere a tuo favore. Sei in grado di dedicare con serietà e diligenza il tempo adeguato al lavoro e si può dire decisamente lo stesso per la tua vita privata. Quest’equilibrio raggiunto è molto importante e devi essere in grado di mantenerlo più a lungo possibile: le tue esperienze condivise e le tue buone pratiche possono essere un esempio significativo per tutti coloro che vogliono migliorare.");
     }

    sex = "a";

    console.log("APE");
  } else if (sociale > solitario && curioso > abitudinario && attivo < pigro) {
    $("#risultato_attitudini").html("VESPA");
    $("#img_insetto").attr("src", "assets/VESPA.png");
    sex = "a";

         if(lavoro < 4) {
            $("#risultato_profilo").html("Come la vespa, ami frequentare ambienti sociali e fare le solite cose senza muoverti troppo. Nonostante tu preferisca la comodità e la ripetitività del quotidiano, ti attivi molto per il lavoro, forse fin troppo per le tue qualità: dovresti sfruttarle di più per bilanciare la tua vita lavorativa e quella privata. Avresti bisogno di condividere esperienze più rilassanti e sociali in modo che il tuo benessere fisico e quello mentale migliorino: presto potrai provarle e cambiare la tua vita.");
         } else if (lavoro > 3 && lavoro <= 6) {
           $("#risultato_profilo").html("Sei proprio come la vespa: ami frequentare ambienti sociali e fare le solite cose in tutta comodità. Eppure, nel mondo del lavoro ti applichi decisamente molto. Non vorresti ritagliare più tempo per te e trovare un equilibrio tra la vita privata e quella lavorativa? Hai tutti i mezzi per imparare a dire “no” e far rispettare i tuoi spazi: condividere esperienze rilassanti e sociali al di fuori del lavoro può essere un ottimo punto per cominciare a migliorare.");
         } else if (lavoro > 7 && lavoro <= 9){
           $("#risultato_profilo").html("Proprio come la vespa, ami frequentare ambienti sociali e fare le solite cose in tutta comodità. Ti applichi molto nel tuo lavoro, ma probabilmente stai imparando a far rispettare i tuoi spazi, anche se magari a volte risulta ancora difficile dire “no”. Sei a un passo dal raggiungere l’equilibrio di cui hai bisogno: fai ancora un piccolo sforzo! La tua vita privata è ancora più importante del tuo lavoro, ma entrambi meritano di essere vissuti in maniera sana ed equilibrata.");
         } else{
            $("#risultato_profilo").html("Sei come una vespa: ami frequentare ambienti sociali e fare le solite cose senza muoverti troppo. Dedichi al tuo lavoro il tempo adeguato, così come alla tua vita privata. Possiedi l’equilibrio necessario per vivere entrambi in maniera bilanciata e sana, senza che uno infici sull’altra e viceversa. Le tue doti possono essere un esempio importante per coloro che vogliono migliorare: usa la tua socialità e la tua pacatezza per instillare buone abitudini.");
         }

    console.log("VESPA");


  } else if (sociale > solitario && curioso < abitudinario && attivo > pigro) {
    $("#risultato_attitudini").html("FORMICA");
    $("#img_insetto").attr("src", "assets/FORMICA.png");
    sex = "a";

    if(lavoro < 4) {
       $("#risultato_profilo").html("Come la formica, ami svolgere tante attività in luoghi familiari, basta stare insieme! Forse sei fin troppo zelante nel tuo ambito lavorativo, il che ti rende spesso sia la vita privata sia il lavoro insostenibili. Probabilmente sai anche tu che non è sano vivere così, ma ti sembra di non avere i mezzi per cambiare: invece puoi farlo! C’è ancora strada da fare per raggiungere l’equilibrio, ma ricordati che la socialità e l’energia sono i tuoi punti di forza per poter migliorare.");
    } else if (lavoro > 3 && lavoro <= 6) {
      $("#risultato_profilo").html("Sei come la formica: ami svolgere tante attività in luoghi familiari, specialmente in compagnia! Sei molto attivo nel tuo ambito lavorativo, ma dovresti tenere più a freno la tua operosità e imparare a dire “no” con più fermezza. Puoi fare ancora meglio per migliorare la tua condizione e raggiungere un equilibrio tra la sfera lavorativa e quella privata. Hai ancora un po’ di strada da fare per bilanciare le due sfere, ma ricordati che la socialità e l’energia sono i tuoi punti di forza.");
    } else if (lavoro > 7 && lavoro <= 9){
      $("#risultato_profilo").html("Sei come la formica: ami svolgere tante attività in luoghi familiari, ancora di più in compagnia! Al lavoro cerchi di essere operativo solo quanto necessario, anche se a volte è ancora difficile tenere a freno l’operosità e dire “no”. Sei sulla strada giusta per raggiungere un equilibrio tra la vita lavorativa e quella privata, ma puoi fare ancora un piccolo sforzo. Fai leva sulla tua voglia di socialità e di movimento: ci sono tante persone con cui potresti condividere buone abitudini.");
    } else{
       $("#risultato_profilo").html("Come la formica, ami svolgere tante attività in luoghi familiari, specialmente in compagnia! Sei diligente e operativo al lavoro, ma solo quanto necessario: sei in grado di dedicare il resto delle energie alle esperienze della tua vita privata. Questo tuo equilibrio è senz’altro lodevole: puoi essere un ottimo modello di riferimento per altre persone che vorrebbero migliorare. Usa al meglio la tua socialità e la tua energia per incoraggiare gli altri a praticare buone abitudini.")
     }

    console.log("FORMICA");


  } else if (sociale > solitario && curioso < abitudinario && attivo < pigro) {
    $("#risultato_attitudini").html("TERMITE");
    $("#img_insetto").attr("src", "assets/TERMITE.png");
    sex = "a";

    if(lavoro < 4) {
       $("#risultato_profilo").html("Sei come una termite: ami frequentare ambienti sociali, basta stare insieme in luoghi tranquilli. Forse hai fin troppa voglia di fare nel tuo ambito lavorativo, il che ti rende spesso sia la vita privata sia il lavoro insostenibili. Probabilmente sai anche tu che non è sano vivere così, ma ti sembra di non avere i mezzi per cambiare: invece puoi farlo! C’è ancora strada da fare per raggiungere l’equilibrio, ma ricordati che la socialità e la pacatezza sono i tuoi punti di forza.");
    } else if (lavoro > 3 && lavoro <= 6) {
      $("#risultato_profilo").html("Come la termite, ami frequentare ambienti sociali, basta che siano tranquilli e familiari. Al contrario, tendi ad applicarti nel lavoro in maniera più attiva, forse fin troppo. Puoi fare decisamente meglio per raggiungere un equilibrio tra la sfera lavorativa e quella privata: di certo ne senti la mancanza. Hai ancora un po’ di strada da fare per bilanciare le due sfere, ma ricordati che la socialità e la pacatezza sono i tuoi punti di forza.");
    } else if (lavoro > 7 && lavoro <= 9){
      $("#risultato_profilo").html("Come la termite, ami frequentare ambienti sociali, basta che siano tranquilli e familiari. Ti dedichi con serietà al tuo lavoro cercando di ricavarti i tuoi spazi, anche se a volte ancora non è facile dire “no”. Ma stai facendo degli sforzi enormi che probabilmente ti premieranno presto: manca poco, infatti, per raggiungere un equilibrio tra la sfera lavorativa e quella privata. E, se vuoi un aiuto in più, prova a condividere le buone abitudini con gli altri: l’unione fa la forza!");
    } else{
       $("#risultato_profilo").html("Come la termite, ami frequentare ambienti sociali, basta che siano tranquilli e familiari. Sei in grado di dedicare al lavoro il tempo adeguato e lo stesso fai con la vita privata. Sono queste le tue grandi qualità: fare ciò che più ti piace dove puoi sentirti a casa ed in mezzo alle persone. Non è cosa da tutti, per questo puoi essere d’ispirazione per gli altri affinché apprendano buone abitudini: con la tua socialità sarai un ottimo esempio per apprendere buone pratiche.")
     }

    console.log("TERMITE");


  } else if (sociale < solitario && curioso > abitudinario && attivo > pigro) {
    $("#risultato_attitudini").html("COCCINELLA");
    $("#img_insetto").attr("src", "assets/COCCINELLA_ok.png");
    sex = "a";

        if(lavoro < 4) {
           $("#risultato_profilo").html("Proprio come la coccinella, non ami frequentare tanta gente; eppure, sei molto attivo ed in movimento. Questa può essere decisamente un’ottima dote, ma va moderata nel mondo del lavoro. Hai tutte le potenzialità per volgere la tua curiosità e le tue energie anche verso altri ambiti: ti piacerebbe trovare un equilibrio migliore tra la tua vita lavorativa e quella privata? Ci sono tante buone abitudini che ti aspettano per essere apprese e condivise.");
        } else if (lavoro > 3 && lavoro <= 6) {
          $("#risultato_profilo").html("Proprio come la coccinella, preferisci stare nella tua bolla anziché partecipare a eventi sociali o conoscere persone nuove. Ciò ti permette di dedicarti a te stesso facendo ciò che ami e ciò di cui hai bisogno. Sei sempre in movimento e questo è uno dei tuoi punti di forza: tuttavia, il tuo essere attivo ti spinge a lavorare molto, a volte anche troppo e fai fatica a scindere la sfera lavorativa da quella privata. Ti piacerebbe trovare un equilibrio migliore tra le due?");
        } else if (lavoro > 7 && lavoro <= 9){
          $("#risultato_profilo").html("Anche se il tuo lavoro ti impegna, sei in grado di capire quando è il momento di fermarsi, anche se a volte non è facile dire “no”. Nonostante il tuo essere solitario, come la coccinella, la condivisione delle buone abitudini con i colleghi potrebbe rendere l’atmosfera del team più equilibrata e leggera e la tua forza interiore ti permette di affrontare al meglio le avversità. Ricorda che la tua indole curiosa è un punto di forza per la creazione di una routine molto varia e mai banale.");
        } else{
           $("#risultato_profilo").html("Come la coccinella, sei principalmente solitario, ma ami guardarti intorno: gli stimoli esterni ti rendono attivo e suscitano una certa curiosità. Hai un ottimo rapporto con il tuo lavoro e sei in grado di conciliarlo al meglio con la vita privata: decisamente hai un tuo equilibrio e hai tutte le capacità per mantenerlo. Pratica sempre routine varie che si avvicinino ai tuoi gusti: sei sulla buona strada per mantenere questo stile di vita e per essere d’ispirazione agli altri per creare buone abitudini.")
         }

    console.log("COCCINELLA");


  } else if (sociale < solitario && curioso > abitudinario && attivo < pigro) {
    $("#risultato_attitudini").html("CAVALLETTA");
    $("#img_insetto").attr("src", "assets/CAVALLETTA.png");
    sex = "a";

            if(lavoro < 4) {
               $("#risultato_profilo").html("Proprio come la cavalletta, sei solitario e non fai “troppi salti”: preferisci una vita tranquilla e abitudinaria, ma hai fatto dell’attività lavorativa il tuo unico rifugio sicuro. Questo, a lungo andare, può nuocere alla tua salute e farti chiudere in una bolla di fatica e di stress. Meriti di godere del relax e della tranquillità che desideri, specialmente fuori dal mondo lavorativo: prova di creare una routine per trovare un equilibrio tra il lavoro e la vita privata e presto farai un gran “salto” di qualità.");
            } else if (lavoro > 3 && lavoro <= 6) {
              $("#risultato_profilo").html("Sei un tipo piuttosto abitudinario e pacato, ma ti dai molto da fare nel tuo lavoro, forse fin troppo. A volte, non riesci facilmente a dire “no”: dovresti ritagliarti i tuoi spazi con più determinazione e costanza. Meriti di godere del relax e della tranquillità che desideri, specialmente fuori dal mondo lavorativo: ricorda sempre che hai le capacità per volgere le tue doti personali a tuo favore. Dedica il tempo giusto al tuo lavoro, ma soprattutto dedicalo a te!");
            } else if (lavoro > 7 && lavoro <= 9){
              $("#risultato_profilo").html("Come la cavalletta, preferisci una vita condotta prevalentemente in solitaria e in tranquillità, ma sempre con uno sguardo curioso verso il mondo. Ti dedichi con serietà al tuo lavoro, ma cerchi di impegnarti al massimo per ricavare i tuoi spazi nella vita privata, dedicandoti ai tuoi interessi. La curiosità è il tuo punto di forza e può permetterti di fare quest’ultimo salto: non ti manca molto ormai per raggiungere l’equilibrio.");
            } else{
               $("#risultato_profilo").html("Come la cavalletta, preferisci una vita condotta in solitaria e in tranquillità, ma sempre con uno sguardo curioso verso il mondo. Nella tua quotidianità, in qualche modo hai raggiunto un tuo equilibrio: dedichi il tempo adeguato al lavoro e fai altrettanto con la tua vita privata. Questa tua caratteristica è decisamente una qualità che ti permette di vivere in maniera più sana e autentica la tua vita facendo ciò che ami con i tuoi tempi e i tuoi ritmi: continua così!")
             }

    console.log("CAVALLETTA");


  } else if (sociale < solitario && curioso < abitudinario && attivo > pigro) {
    $("#risultato_attitudini").html("BRUCO");
    $("#img_insetto").attr("src", "assets/BRUCO_ok.png");
    sex = "o";

            if(lavoro < 4) {
               $("#risultato_profilo").html("Sei proprio come un bruco: sempre in movimento nei soliti luoghi per conto tuo. Sembra che l’ambiente che frequenti di più sia quello lavorativo: avresti tutte le potenzialità per farti spazio in altre attività, più inerenti alla vita privata. Ci sono tanti hobby e interessi che ti stanno a cuore e che potresti tornare a coltivare: con il giusto set puoi intraprendere la strada per acquisire buone abitudini che ti permetteranno di bilanciare meglio il lavoro e la vita privata.");
            } else if (lavoro > 3 && lavoro <= 6) {
              $("#risultato_profilo").html("Come il bruco, ami muoverti in tanti luoghi, purché ti permettano di trovare i tuoi spazi e farti sentire a tuo agio. Sei molto attivo anche nel lavoro, tuttavia, nonostante i tuoi sforzi, ti risulta spesso difficile trovare il tempo da dedicare a te stesso. La possibilità per vivere esperienze al di fuori del lavoro è a portata di mano. Preparati per un altro viaggio, bruco laborioso: questa volta, il percorso ti porterà ad acquisire buone abitudini per una vita più equilibrata e sana.");
            } else if (lavoro > 7 && lavoro <= 9){
              $("#risultato_profilo").html("Sei proprio come un bruco: ti muovi nei soliti luoghi e preferisci una vita in solitaria. Ogni tanto al lavoro ti è difficile dire “no”, ma stai facendo tanti sforzi affinché la situazione migliori. Sei già sulla buona strada, ma con i giusti stimoli puoi fare ancora meglio: hai tutti i mezzi per raggiungere l’equilibrio tra la vita lavorativa e quella privata. La curiosità e l’energia inesauribile sono i tuoi punti di forza: continua così e migliorerai ancora di più!");
            } else{
               $("#risultato_profilo").html("Come il bruco, ami muoverti in tanti luoghi, purché ti permettano di trovare i tuoi spazi e farti sentire a tuo agio. Sei pieno di curiosità ed energia, che sei in grado di utilizzare in maniera efficiente sia nel lavoro sia nel privato. Non eccedi né nell’uno né nell’altro: l’equilibrio tra queste due sfere ti permette di vivere in maniera sana e autentica. Preserva questo equilibrio che ti connota: non è cosa da tutti, ottimo lavoro!")
}

    console.log("BRUCO");


  } else if (sociale < solitario && curioso < abitudinario && attivo < pigro) {
    $("#risultato_attitudini").html("INSETTO STECCO");
    $("#img_insetto").attr("src", "assets/INSETTOSTECCO.png");
    sex = "o";

                if(lavoro < 4) {
                   $("#risultato_profilo").html("Sei come un insetto stecco: ti piace stare fisso in un luogo sicuro e preferisci una vita tranquilla ed in solitaria. Eppure, sembra che nel lavoro tu sia eccessivamente attivo, al punto che la pigrizia stessa potrebbe diventare il tuo punto di forza. Ti piacerebbe dedicare una parte del tuo tempo anche ad altri interessi? Cerca di alleggerire questo carico di fatica e di stress: con le tue capacità puoi trovare il modo di bilanciare la vita privata e quella lavorativa, basta volerlo!");
                } else if (lavoro > 3 && lavoro <= 6) {
                  $("#risultato_profilo").html("Come l’insetto stecco, ami frequentare luoghi familiari e preferisci una vita tranquilla ed in solitaria. Sembra che il lavoro sia l’ambito in cui ti applichi di più in maniera attiva: non sempre è facile dire “no”. Usa la pacatezza che ti connota in tuo favore: potresti trovare il modo di bilanciare la vita privata e quella lavorativa, dedicando ad entrambe il tempo che meritano. Prova a creare una routine che si avvicini ai tuoi gusti e ai tuoi interessi: non te ne pentirai!");
                } else if (lavoro > 7 && lavoro <= 9){
                  $("#risultato_profilo").html("Come l’insetto stecco, ami frequentare luoghi familiari e preferisci una vita tranquilla ed in solitaria. Stai facendo del tuo meglio per dire “no” al lavoro quando non è necessario: il desiderio di ricavare più spazio per te è già un passo avanti, ma puoi fare ancora un piccolo sforzo. Sei sulla strada giusta per raggiungere un equilibrio tra la vita privata e quella lavorativa. Fai leva sulla tua voglia di tranquillità: meriti di dedicare più tempo a te, perciò rilassati ancora di più!");
                } else{
                   $("#risultato_profilo").html("Sei proprio un insetto stecco: ti piace stare in un luogo sicuro e preferisci una vita tranquilla ed in solitaria. Con la tua pacatezza e la tua serenità interiore sei in grado di mantenere un equilibrio perfetto tra la sfera lavorativa e quella privata. Sai dedicarti al lavoro esattamente quanto basta: è sufficiente questo per vivere delle esperienze autentiche e positive. Ora non puoi fare altro che continuare così e condividere le tue buone pratiche con gli altri colleghi.")
                 }

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
