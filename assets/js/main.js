require ("jquery-modal");

$('a[href="#ex7"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        fadeDuration: 250
      });
    });

$('a.open-modal').click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});
