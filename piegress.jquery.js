// Piegress jQuery Plugin
// version 1.0.0
// by Caffeina - http://caffeina.co
// https://github.com/CaffeinaLab/piegress

(function($) {

    $.Piegress = function(element, options) {

        var defaults = {
            color: '#000',
            size: '50',
            speed: 8,
            value: 0
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

      
        var setValueforLoader = function(angle,$element){
          angle = Math.min(99.999,Math.max(0,angle)) * 3.6;
          var r = ( angle * Math.PI / 180 )
            , x = Math.sin( r ) * 125
            , y = Math.cos( r ) * - 125
            , mid = ( angle > 180 ) ? 1 : 0
            , anim = 'M 0 0 v -125 A 125 125 1 ' 
                   + mid + ' 1 ' 
                   +  x  + ' ' 
                   +  y  + ' z'; 
          $element.find("#f").attr( 'd', anim );
        }
        
        var setValueforLoaderAnimated = function(angle,$element){
          var angle_curr = 0;
          var draw = function() {
            angle_curr++;
            setValueforLoader(angle_curr,$element);
            if (angle_curr<angle) setTimeout(draw, plugin.settings.speed);
          };
          draw();
        };     
      
        plugin.setProgress = function(value) {
            setValueforLoaderAnimated(value,$element);
        }
      
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, {
              color:$element.data('color'),
              size:$element.data('size'),
              speed:$element.data('speed'),
              value:$element.data('value')
            }, options);
            $element.html('<svg class="loader" style="display:inline-block" width="'+plugin.settings.size+'" height="'+plugin.settings.size+'" viewbox="0 0 250 250"><circle id="b" cx="125" cy="125" r="115" stroke="'+plugin.settings.color+'" stroke-width="20" fill="none" /><path id="f" transform="translate(125, 125) scale(.84)" fill="'+plugin.settings.color+'" opacity="0.5"/></svg>');
            $(function(){ setValueforLoaderAnimated(plugin.settings.value,$element); });
        }      
       
        plugin.init();

    }

    $.fn.Piegress = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('Piegress')) {
                var plugin = new $.Piegress(this, options);
                $(this).data('Piegress', plugin);
            }
        });

    }

})(jQuery);
