require ['FormValidator', 'domReady!'], (FormValidator) ->
	console.log 'FormValidator demo load'

	form = document.getElementById 'form'
	messagesEl = document.getElementById 'errors'

	new FormValidator form, (errors) ->
		console.log 'Form Validation Errors', errors

		if errors.length > 0
			messagesArray = []
			for error in errors
				messagesArray.push error.message

			messagesEl.innerHTML = messagesArray.join '<br>'


