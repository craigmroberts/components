var OffcanvasMenu = {
  toggleLeftDraw : function() {
    $('.canvas').toggleClass('canvas-left--visible');
  }
}

$('body').on('click', '.canvas-left__toggle', function () {
  OffcanvasMenu.toggleLeftDraw();
});
