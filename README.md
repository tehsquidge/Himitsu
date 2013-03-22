Himitsu
=======

Jquery Plugin for doing something when a secret key combination is entered on the site

Example
=====
```
			$(document).ready( function(){
				$('html').himitsu(
				{
				callback:
					function(){
						//your code here!
					}
				},
				code: [38,40,37,39,65,66,67], 

				);
			});
```

The code is an array of the ASCII values of the keys you want them to press. the example shows UP,DOWN,LEFT,RIGHT,a,b,c.

Jburliegh1 has kindly made something fun with it :) http://codepen.io/jburleigh1/pen/usHCK
