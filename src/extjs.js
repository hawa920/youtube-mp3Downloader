$(document).ready(function()	{
	var url = window.location.href; 
	var dnld = '<form action="http://127.0.0.1:5000/mp3-dl" method="POST" id="dl-form">	\
					<input type="text" id="dl-link" name="link" style="display:none"/>	\
					<input type="button" id="dl-button" value="♥"/>	\
				</form>';
	$('#masthead').append(dnld);
	
	// If onclick event prior to submit or vise versa if a button element contains both at a time
	$('#dl-button').click(function() {
		var url = window.location.href;
		$('#dl-link').val(url);
		$('#dl-form').submit();
	})
})

