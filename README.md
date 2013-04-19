Himitsu
=======

Jquery Plugin for doing something when a secret key combination is entered on the site.

Example
=====
```
			$(document).ready( function(){
				$('html').himitsu(
				{
				codeComplete:
					function(){
						//your code here!
					},
				correctKey:
					function(key){
						//the user entered the correct key in the sequence (optional)
						//key is the ascii value of the correct key
					},
				wrongKey:
					function(key){
						//the user entered the wrong key in the sequence (optional)
					}
				},
				code: [38,40,37,39,65,66,67],

				);
			});
```

The code is an array of the ASCII values of the keys you want them to press. the example shows UP,DOWN,LEFT,RIGHT,a,b,c.

Jburliegh1 has kindly made something fun with it :) http://codepen.io/jburleigh1/pen/usHCK (older version, callback names have changed since then)
