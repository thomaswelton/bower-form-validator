define ['validate','mootools'], (FormValidator) ->
	class FormValidation
		constructor: (@form, @options = {}) ->

			messages = JSON.parse @form.getProperty 'data-validate-messages'
			validateFields = JSON.parse @form.getProperty 'data-validate-fields'
			
			validateFields[i].name = field.field for field, i in validateFields

			formName = @form.getProperty 'name'

			if !formName?
				formName = 'FormValidator' + (new Date().getTime())
				@form.setProperty 'name', 'FormValidator' + (new Date().getTime())

			validator = new FormValidator formName, validateFields, @options.onError

			validator.setMessage(rule, string) for rule, string of messages