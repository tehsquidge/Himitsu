(function($) {

    $.himitsu = function(element, options) {

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;
             
        var defaults = {
            code: [38,40,37,39,65,66,67],
            codeComplete: $.noop,
            correctKey: $.noop,
            wrongKey: $.noop
        }
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
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
		
        function convertInput(character){
			convertInput(character, 0);
		}
		
        function convertInput(character, x){
			if (character[x].isNaN()){
				if (character[x].equalsIgnoreCase("UP"){
					character[x] = 54;
				}
			} else {
				return character[x];
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