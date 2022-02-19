(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 2000,
            interval: 5000,
            
        };
        $.extend(true, setting, options);
        var states = [
            // { $zIndex: 1, width: 120, height: 120, top: 69, left: 134, $opacity: 1 },
            { $zIndex: 2, width: 250, height: 350, top: 0, left: 0, $opacity: 1 },
            { $zIndex: 3, width: 250, height: 350, top: 0, left: 130, $opacity: 1 },
            { $zIndex: 4, width: 250, height: 350, top: 0, left: 240, $opacity: 1 },
            { $zIndex: 3, width: 250, height: 350, top: 0, left: 380, $opacity: 1 },
            { $zIndex: 1, width: 250, height: 350, top: 0, left: 520, $opacity: 1 },
            // { $zIndex: 1, width: 120, height: 120, top: 69, left: 500, $opacity: 1 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('.slide-title,.slide-desc').css('opacity', 0);
                //$(element).find('').css('opacity', 0);
                for (let i = 1; i <= 4; i++) {
                    if(state.$zIndex === 4){
                        $(element).find('.slide-title,.slide-desc').css('opacity', 1);
                    }
                    
                }
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
