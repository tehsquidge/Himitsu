(function($) {

    $.himitsu = function(element, options) {

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;
             
        var defaults = {
            code: ["UP","DOWN","LEFT","RIGHT","a","b","c"],
            codeComplete: $.noop,
            correctKey: $.noop,
            wrongKey: $.noop
        }
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
			plugin.settings.code = convertInput(plugin.settings.code, 0);
			plugin.settings.i = 0;
			$('html').keyup(function(event) {
				if(event.which == plugin.settings.code[plugin.settings.i]){
					plugin.settings.i++;
                    plugin.settings.correctKey.call(this, event.which);
				}else{
					plugin.settings.i = 0;
                    plugin.settings.wrongKey.call(this, event.which);
                }
				if(plugin.settings.i == plugin.settings.code.length)
				{
                    plugin.settings.i = 0;
					plugin.settings.codeComplete.call(this);
				}
			});
        }
		
		 function convertInput(character, x){
			if (typeof character[x] == "string"){
				if (character[x].toUpperCase() == "LEFT"){character[x] = 37;}
				else if (character[x].toUpperCase() == "UP"){character[x] = 38;}
				else if (character[x].toUpperCase() == "RIGHT"){character[x] = 39;}
				else if (character[x].toUpperCase() == "DOWN"){character[x] = 40;}
				else {character[x] = (character[x].charCodeAt(0) - 32);}
				x++;
				return convertInput(character, x);
			} else {
				x++;
				return character;
				return convertInput(character, x);
			}
		}
		
        plugin.init();
        
        

    }

    $.fn.himitsu = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('himitsu')) {
                var plugin = new $.himitsu(this, options);
                $(this).data('himitsu', plugin);
            }
        });

    }

})(jQuery);