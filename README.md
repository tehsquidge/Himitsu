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
						//you're code here!
					}
				},
				code: [38,40,37,39,65,66,67], 

				);
			});
```

The code is an array of the ASCII values of the keys you want them to press. the example shows UP,DOWN,LEFT,RIGHT,a,b,c.