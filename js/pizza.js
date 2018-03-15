// Write your Pizza Builder JavaScript in this file.
  var btnPep = $('.btn-pepperonni');
  btnPep.click(toggleBtnPep);
  $('.pep').hide();

  var btnMusho = $('.btn-mushrooms');
  btnMusho.click(toggleBtnMusho);
  $('.mushroom').hide();

  var btnGrePe = $('.btn-green-peppers');
  btnGrePe.click(toggleBtnGrePe);
  $('.green-pepper').hide();

  var btnSau = $('.btn-sauce');
  btnSau.click(toggleBtnSau);

  var sauce = $('.sauce');
  sauce.toggleClass('sauce-white');

  var btnCru = $('.btn-crust');
  btnCru.click(toggleBtnCru);

  var crust = $('.crust');
  crust.toggleClass('crust-gluten-free');

  function toggleBtnPep(e) {
    $('.pep').fadeToggle();
  }

  function toggleBtnMusho(e) {
    $('.mushroom').fadeToggle();
  }

  function toggleBtnGrePe(e) {
    $('.green-pepper').fadeToggle();
  }

  function toggleBtnSau(e) {
    sauce.toggleClass('sauce-white');
  }

  function toggleBtnCru(e) {
    crust.toggleClass('sauce-white');
  }

