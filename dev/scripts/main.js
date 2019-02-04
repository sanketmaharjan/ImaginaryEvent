
// navigation menu button

(function() {       
    var bodyEl = $('body'),
        // navToggleBtn = bodyEl.find('.nav-toggle-btn');
        navToggleBtn = bodyEl.find('.menu__toggle');
        navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });
    
})();

(function() {       
    var bodyEl = $('body'),
        // navToggleBtn = bodyEl.find('.nav-toggle-btn');
        navToggleBtn = bodyEl.find('.close-btn');
        navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });
    
})();

//navigation menu animation

// $('.menu__toggle').on('click', function(){
//     $(this).toggleClass('on');
//   })




