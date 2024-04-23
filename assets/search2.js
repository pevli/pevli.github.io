/*

  PEVL-lausuntohaku ajax-koodina

  Antti Tanskanen 2024

*/

function hiliter(word, element) {
  var rgxp = new RegExp(word, 'g');
  var repl = '<span class="myClass">' + word + '</span>';
  element.innerHTML = element.innerHTML.replace(rgxp, repl);
}

function run_search() {
  run_search_num(0);
}

function edellinen_search(num) {
  run_search_num(num - 1);
  return false;
}

function seuraava_search(num) {
  run_search_num(num + 1);
  return false;
}

function bold_year(i) {
  if (($('#year' + i).attr('class') != 'boldyear') || ($('#year' + i).attr('class') == '')) {
    $('#year' + i).attr("class", "boldyear");
  } else {
    $('#year' + i).attr("class", "nostrike");
  }
  run_search_num(0);
}

function add_years() {
  if ($('#vuodet').text().length < 10) {
    for (let i = 1980; i <= 2024; i++) {
      $('#vuodet').append('<a class="nostrike" id="year' + i + '" href="javascript:bold_year(' + i + ');">' + i + '</a> ');
    }
  }
}

function toggle_perusoikeus(flt) {
  toggle_perusoikeus_num(flt, 0);
}

function toggle_perusoikeus_num(flt, num) {
  if (($('#' + flt).attr('class') != 'boldyear') || ($('#' + flt).attr('class') == '')) {
    $('#' + flt).attr("class", "boldyear");
  } else {
    $('#' + flt).attr("class", "nostrike");
  }
  run_search_num(num);
}

function get_luokittelu(datax) {
  //return 'Sanahaku: ' + get_oikeudet(datax.oikeudet_sanahaku) + '<br>Chatgpt: ' + get_oikeudetget_oikeudet(datax.oikeudet_chatgpt)
  return 'Perusoikeudet: ' + get_oikeudet(datax.oikeudet_sanahaku) + '<br>';
}

function get_filter_or() {
  //var ids = new Array();
  //var hrefs = new Array();
  var haku = '('
  var first = true;
  $('#tagfilters a').each(function () {
    //ids.push($(this).text()); // attr('id')
    //hrefs.push($(this).find('a').attr('href'));
    if (first) {
      haku += $(this).text()
    } else {
      haku += '|' + $(this).text()
    }
  })
  haku += ')'
  console.log(haku)

  return haku;
}

function fix_oikeus(str) {
  return str.replace(/ /g, '_').replace(',', '');
}

function get_oikeudet(lista, num) {
  x = ''
  for (let i = 0; i < lista.length; i++) {
    x += '<a href="javascript:toggle_perusoikeus_num(\'' + fix_oikeus(lista[i]) + '\',' + num + ');">' + lista[i] + '</a> ';
  }
  return x;
}

function get_oikeus_filter() {
  //var ids = new Array();
  //var hrefs = new Array();
  var haku = '('
  var first = true;
  var use_yearfilter;
  $('#tagfilters a').each(function () {
    //ids.push($(this).text()); // attr('id')
    //hrefs.push($(this).find('a').attr('href'));
    if ($(this).attr('class') == 'boldyear') {
      if (first) {
        haku += $(this).text();
        first = false;
      } else {
        haku += '|' + $(this).text();
      }
    }
  })
  if (!first) {
    haku += ')';
  } else {
    haku = '';
  }
  console.log('haku', haku)

  return haku;
}

function get_year_filter() {
  //var ids = new Array();
  //var hrefs = new Array();
  var haku = '(';
  var use_yearfilter;
  var first = true;
  $('#vuodet a').each(function () {
    if ($(this).attr('class') == 'boldyear') {
      if (first) {
        haku += $(this).text();
        first = false;
      } else {
        haku += '|' + $(this).text();
      }
    }
  });
  if (!first) {
    haku += ')';
  } else {
    haku = '';
  }
  return haku;
}

function clear_yearfilters() {
  $('#vuodet a').each(function () {
    $(this).attr("class", "nostrike");
  });
  run_search_num(0);
}

function clear_tagfilters() {
  $('#tagfilters a').each(function () {
    $(this).attr("class", "nostrike");
  });
  run_search_num(0);
}


function run_search_num(listnum) {
  searching = false;
  if (!searching) { //} && $.trim($("#searchbox").val()) != "") {
    // don't let multiples run at the same time
    add_years()
    searching = true;
    // disable the input/button 
    $.getJSON('/assets/search.json', function (data, status) {

      var s_words = $.trim($("#searchbox").val()).toLowerCase().split(" ");

      // get filters
      yearfilter = get_year_filter();
      var use_yearfilter;
      if (yearfilter == '') {
        use_yearfilter = false;
      } else {
        use_yearfilter = true;
      }

      oikeusfilter = get_oikeus_filter();
      var use_oikeusfilter;
      if (oikeusfilter == '') {
        use_oikeusfilter = false;
      } else {
        use_oikeusfilter = true;
      }

      num = 0;
      $('#tuloslista').empty()
      $('#lkm').empty()
      $('#sisalto').empty()
      $('#otsikko').empty()

      if (true) {
        data = data.sort(function (a, b) {
          if (a.year > b.year) return -1; return 1;
        });
      }

      // run through the search with filters
      $.each(data, function (key, datax) {
        sanalista = get_oikeudet(datax.oikeudet_sanahaku, 0);
        //chatlista = get_oikeudet(datax.oikeudet_chatgpt, 0);
        sanalista_match = sanalista.match(oikeusfilter);
        //chatlista_match = false; //chatlista.match(oikeusfilter);

        if ((datax.text.match(s_words) || datax.title.match(s_words))
          && ((!use_yearfilter) || datax.year.match(yearfilter))
          && ((!use_oikeusfilter) || sanalista_match)) { //  || chatlista_match
          // MATCH!
          ots = datax.title
          doc = datax.document
          year = datax.year
          if (doc.length > 0) {
            doc2 = doc;
          } else {
            doc2 = '';
          }
          if (num == listnum) { // display the given lausunto
            sis = datax.text.replace(s_words, "<span class = 'highlight'>" + s_words + "</span>");
            $('#otsikko').html("<h2>" + doc2 + "<a href='" + datax.href_eduskunta + "' class = 'otsikko'>" + ots + "</a></h2>");
            $('#sisalto').html('<span style="white-space: pre-line">' + sis + '<span>');
            luokittelut = 'Perusoikeudet: ' + get_oikeudet(datax.oikeudet_sanahaku, 0) + '<br>'; //Chatgpt: ' + get_oikeudet(datax.oikeudet_chatgpt, 0)
            $('#tagit').html(luokittelut);
            $('#tuloslista').append('<div onclick="javascript:run_search_num(' + num + ')">' + (num + 1) + '. <a href="javascript:run_search_num(' + num + ')"><b>' + doc2 + ' ' + ots + '</b></a></div><br>');
          } else {
            $('#tuloslista').append('<div onclick="javascript:run_search_num(' + num + ')">' + (num + 1) + '. <a href="javascript:run_search_num(' + num + ')">' + doc2 + ' ' + ots + '</a></div><br>');
          }
          num++;

        }
      });  // 

      // update stats
      if (num > 0) {
        lst = (listnum + 1);
        $('#lkm').html('Lausunto ' + lst + '/' + num + '<br>');
        if ((listnum < num) && (listnum > 0)) {
          $('#lkm').append('<a class="edseur" href="javascript:edellinen_search(' + listnum + ')">&laquo;Edellinen</a> <a class="edseur" href="javascript:seuraava_search(' + listnum + ')">Seuraava &raquo;</a><br>')
        } else if (listnum == 0) {
          $('#lkm').append('<a class="edseur disabled" href="javascript:edellinen_search(' + listnum + ' )">&laquo; Edellinen</a> <a class="edseur" href="javascript:seuraava_search(' + listnum + ')">Seuraava &raquo;</a><br>')
        } else {
          $('#lkm').append('<a class="edseur disabled" href="javascript:edellinen_search(' + listnum + ')">&laquo; Edellinen</a> <a class="edseur" href="javascript:seuraava_search(' + listnum + ')">Seuraava &raquo;</a><br>')
        }
      } else {
        $('#lkm').html('Haulla löytyi ' + num + ' lausuntoa<br>');
        $('#sisalto').html('Tuloksia ei löytynyt.');
        $('#tagit').empty();
      }

      searching = false;
      // console.log('done');
    });
  }
  return false;
}