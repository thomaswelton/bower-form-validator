(function() {
  requirejs.config({
    shim: {
      "validate": {
        "exports": "FormValidator"
      }
    }
  });

  define(['validate', 'mootools'], function(FormValidator) {
    var FormValidation;

    return FormValidation = (function() {
      function FormValidation(form, options) {
        var field, formName, i, messages, rule, string, validateFields, validator, _i, _len;

        this.form = form;
        this.options = options != null ? options : {};
        messages = JSON.parse(this.form.getProperty('data-validate-messages'));
        validateFields = JSON.parse(this.form.getProperty('data-validate-fields'));
        for (i = _i = 0, _len = validateFields.length; _i < _len; i = ++_i) {
          field = validateFields[i];
          validateFields[i].name = field.field;
        }
        formName = this.form.getProperty('name');
        if (formName == null) {
          formName = 'FormValidator' + (new Date().getTime());
          this.form.setProperty('name', 'FormValidator' + (new Date().getTime()));
        }
        validator = new FormValidator(formName, validateFields, this.options.onError);
        for (rule in messages) {
          string = messages[rule];
          validator.setMessage(rule, string);
        }
      }

      return FormValidation;

    })();
  });

}).call(this);
