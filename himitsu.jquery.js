(function($) {

    $.himitsu = function(element, options) {

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;
             
        var defaults = {
            code: [38,40,37,39,65,66,67],
            callback: $.noop()
        }
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
			plugin.settings.i = 0;
			$('html').keyup(function(event) {
				
				if(event.which == plugin.settings.code[plugin.settings.i])
					plugin.settings.i++;
				else
					plugin.settings.i = 0;
				if(plugin.settings.i == plugin.settings.code.length)
				{
					plugin.settings.callback.call(this);
				}
				console.log(plugin.settings.i);
			});
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