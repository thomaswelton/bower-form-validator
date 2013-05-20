bower-form-validator
================
[![Build Status](https://travis-ci.org/thomaswelton/bower-form-validator.png)](https://travis-ci.org/thomaswelton/bower-form-validator)
[![Dependency Status](https://david-dm.org/thomaswelton/bower-form-validator.png)](https://david-dm.org/thomaswelton/bower-form-validator)

Component for validation of codeigniter forms

## Usage

Assuming you are using codeigniter server side validation and setting your rules via an array http://ellislab.com/codeigniter/user-guide/libraries/form_validation.html#validationrulesasarray

```php
$config = array(
               array(
                     'field'   => 'field', 
                     'label'   => 'field label', 
                     'rules'   => 'required'
                  )
            );

$this->form_validation->set_rules($config);
```

Update your HTML with your validation config as JSON

```html
<form id="form" data-validate-fields="<?= json_encode($config) ?>">
```

Add some javascript (coffee) to initialize the FormValidator

```coffee
require ['FormValidator'], (FormValidator) ->
	
	form = document.getElementById 'form'

	new FormValidator form, (errors) ->
		## Callback not fired if form is valid
		## Handle errors below
```
