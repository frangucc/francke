
// $( '#showTerminal' ).click(function() {
  // $('#tilda').toggle();
// });


String.prototype.strip = function(char) {
    return this.replace(new RegExp("^" + char + "*"), '').
        replace(new RegExp(char + "*$"), '');
}


$.extend_if_has = function(desc, source, array) {
    for (var i=array.length;i--;) {
        if (typeof source[array[i]] != 'undefined') {
            desc[array[i]] = source[array[i]];
        }
    }
    return desc;
};


(function($) {
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;
        }
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '> ',
            name: 'Command Line',
            width: '260px',
            enabled: true,
            greetings: 'pink terminal: yes or no',
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                    
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td"></div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval, settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.which == 96) {
                self.slideToggle('fast');
                self.terminal.focus(focus = !focus);
                self.terminal.attr({
                    scrollTop: self.terminal.attr("scrollHeight")
                });
            }
        });
        $('body').data('tilda', this);
        return self;
    };
})(jQuery);



//--------------------------------------------------------------------------
jQuery(document).ready(function($) {
   
// $('#tilda').hide();
    
    $('#tilda').tilda(function(command, terminal) {
        
   

        if (command == "yes") {
          terminal.echo("<span class='termGreen';><br />Rock. Try one of these commands:<br /></span><br /><span class='termGreen';> <br />ls<br /> help<br /> next<br /> home<br /><br /></span>", {raw: true});
          
        } 
        else if (command == "no" || command == "hide" || command == "quit" || command == "q!") { 
            $('body').data('tilda').hide();
            $('#mainLeft').hide();
            $('#mainRight').addClass('bigger');
            
        }
        else if (command == "resume" || command == "cd resume") { 
           window.location.href = "#/resume";
        }
        else if (command == "home" || command == "cd home" ) { 
          window.location.href = "#/home";
        }
        else if (command == "projects" || command == "cd projects" ) { 
           window.location.href = "#/projects";
        }
        else if (command == "ls") { 
            terminal.echo("<span class='termGreen';> home<br />projects<br /> design<br /> code<br /> resume<br /><br /></span>", {raw: true});
        }
        else if (command == "") { 
             window.location.href = "#/phones";
        }
        else if (command == "clear") { 
            term.clear();
        }
        else if (command == "hide") { 

          
            
        }
        
        else { 
            alert("= no"); 
        }
    });
});