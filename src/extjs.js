/*
var butsrc = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#A2A4A4" d="M17,13L12,18L7,13H10V9H14V13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" /></svg>';
*/

var butsrc = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#A2A4A4" d="M13,2.03C17.73,2.5 21.5,6.25 21.95,11C22.5,16.5 18.5,21.38 13,21.93V19.93C16.64,19.5 19.5,16.61 19.96,12.97C20.5,8.58 17.39,4.59 13,4.05V2.05L13,2.03M11,2.06V4.06C9.57,4.26 8.22,4.84 7.1,5.74L5.67,4.26C7.19,3 9.05,2.25 11,2.06M4.26,5.67L5.69,7.1C4.8,8.23 4.24,9.58 4.05,11H2.05C2.25,9.04 3,7.19 4.26,5.67M2.06,13H4.06C4.24,14.42 4.81,15.77 5.69,16.9L4.27,18.33C3.03,16.81 2.26,14.96 2.06,13M7.1,18.37C8.23,19.25 9.58,19.82 11,20V22C9.04,21.79 7.18,21 5.67,19.74L7.1,18.37M12,16.5L7.5,12H11V8H13V12H16.5L12,16.5Z" /></svg>';
    


$(document).ready(function()	{
	var url = window.location.href; 
	var dnld = '<div><form action="http://127.0.0.1:5000/mp3-dl" method="POST" id="dl-form"><input type="text" id="dl-link" name="link" style="display:none"/><button id="dl-button" style="padding:0;border:none;background: none;cursor: pointer;">'+ butsrc +'</button></form></div>';

	$('#end').before(dnld);
	$('#dl-button').click(function() {
		// avoid unexpected url request		
		var url = window.location.href;
		var re = /^https:\/\/www.youtube.com\/.+/;
		if(re.test(url)) {
			$('#dl-link').val(url);
			$('#dl-form').submit();
		}
		return false;
	});
});



    
/*

// ver 1

$(document).ready(function()	{
	var url = window.location.href; 
	var dnld = '<form action="http://127.0.0.1:5000/mp3-dl" method="POST" id="dl-form"><input type="text" id="dl-link" name="link" style="display:none"/><button id="dl-button" style="padding:0;border:none;background: none;cursor: pointer;">'+ butsrc +'</button></form>';

	// append to #buttons will get issues due to polymer(SPA)
	$('#masthead').append(dnld);
	$('#dl-button').css({position:"absolute", top:"28%", left:'85%'});
	
	$('#dl-button').click(function() {
		// avoid unexpected url request		
		var url = window.location.href;
		var re = /^https:\/\/www.youtube.com\/.+/;
		if(re.test(url)) {
			$('#dl-link').val(url);
			$('#dl-form').submit();
		}
		return false;
	});
});
*/
/*

// ver 0

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
*/
