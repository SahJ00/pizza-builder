// Write your Pizza Builder JavaScript in this file.

/*    pepperonni     */
var btnPep = $('.btn-pepperonni');
btnPep.click(toggleBtnPep);
$('.pep').hide();
btnPep.toggleClass('active');
$("li:contains('pepperonni')").toggle();

function toggleBtnPep(e) {
  $('.pep').fadeToggle();
  btnPep.toggleClass('active');
  $("li:contains('pepperonni')").toggle();
  calcPrice();
}
/*    FIN pepperonni     */

/*    mushrooms     */
var btnMusho = $('.btn-mushrooms');
btnMusho.click(toggleBtnMusho);
$('.mushroom').hide();
btnMusho.toggleClass('active');
$("li:contains('mushrooms')").toggle();

function toggleBtnMusho(e) {
  $('.mushroom').fadeToggle();
  btnMusho.toggleClass('active');
  $("li:contains('mushrooms')").toggle();
  calcPrice();
}
/*    FIN mushrooms     */

/*    green pepper     */
var btnGrePe = $('.btn-green-peppers');
btnGrePe.click(toggleBtnGrePe);
$('.green-pepper').hide();
btnGrePe.toggleClass('active');
$("li:contains('green peppers')").toggle();

function toggleBtnGrePe(e) {
  $('.green-pepper').fadeToggle();
  btnGrePe.toggleClass('active');
  $("li:contains('green peppers')").toggle();
  calcPrice();
}
/*    FIN green pepper     */

/*    sauce     */
var btnSau = $('.btn-sauce');
btnSau.click(toggleBtnSau);
btnSau.toggleClass('active');
$("li:contains('white sauce')").toggle();

var sauce = $('.sauce');
sauce.toggleClass('sauce-white');

function toggleBtnSau(e) {
  sauce.toggleClass('sauce-white');
  btnSau.toggleClass('active');
  $("li:contains('white sauce')").toggle();
  calcPrice();
}
/*    FIN sauce     */

/*    crust     */
var btnCru = $('.btn-crust');
btnCru.click(toggleBtnCru);
btnCru.toggleClass('active');
$("li:contains('gluten-free crust')").toggle();

var crust = $('.crust');
crust.toggleClass('crust-gluten-free');

function toggleBtnCru(e) {
  crust.toggleClass('crust-gluten-free');
  btnCru.toggleClass('active');
  $("li:contains('gluten-free crust')").toggle();
  calcPrice();
}
/*    FIN crust     */

/*    Var for CalcPrice     */
var totalPrice = $('strong');
totalPrice.addClass('totalPrice');
var initialPrice = 10;
totalPrice.html('$' + initialPrice);

/*    function for CalcPrice     */
function calcPrice(totalPrice) {
  var totalPrice = 10;
  if ($('.btn-pepperonni').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    totalPrice += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    totalPrice += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    totalPrice += 5;
  }

  $('.totalPrice').html('$' + totalPrice);
}
/*    FIN CalcPrice     */


