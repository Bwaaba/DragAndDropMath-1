$('.onglet').click(function(){
  $('.onglet').removeClass('actif');
  $(this).addClass('actif');
  $('.contenu').removeClass('actif');
});

$('#onglet1').click(function(){
  $('#contenu1').addClass('actif');
});

$('#onglet2').click(function(){
  $('#contenu2').addClass('actif');
});

$('#onglet3').click(function(){
  $('#contenu3').addClass('actif');
});
