(function() {
  require(['FormValidator', 'domReady!'], function(FormValidator) {
    var form, messagesEl;

    console.log('FormValidator demo load');
    form = document.getElementById('form');
    messagesEl = document.getElementById('errors');
    return new FormValidator(form, function(errors) {
      var error, messagesArray, _i, _len;

      console.log('Form Validation Errors', errors);
      if (errors.length > 0) {
        messagesArray = [];
        for (_i = 0, _len = errors.length; _i < _len; _i++) {
          error = errors[_i];
          messagesArray.push(error.message);
        }
        return messagesEl.innerHTML = messagesArray.join('<br>');
      }
    });
  });

}).call(this);
