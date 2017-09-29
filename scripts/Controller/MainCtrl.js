$(function() {
    $(".dragdiv span.page_title").draggable({
        appendTo: "body",
        helper: "clone",
        cursor: "move",
        revert: "invalid",
    });
     //$(".editing_element").selectable ();
     //$(".editing_element").disableSelection();
    initDroppable($(".dropdiv"));
    function initDroppable($elements) {
        $elements.droppable({
            activeClass: "ui-state-default",
            accept: ":not(.ui-sortable-helper)",
            hoverClass: "ui-state-active",

            over: function(event, ui) {
                var $this = $(this);
            },

            drop: function( event, ui ) {
                var getvalue = $(ui.helper).attr('key');
                 var eleToAppend = getvalue;
                    getwcEditorEle(eleToAppend);
                    $(".editing_element").draggable({
                        grid: [10, 10],
                        start: function(){ console.log('start')},
                        stop: function(){console.log('stop')},
                        containment: $('.dropdiv')
                    });
                    $(".editing_element").resizable({
                        grid: [ 10, 10 ],
                        handles:'n, e, s, w, ne, se, sw, nw'
                    });
                      
                    $('p').dblclick(function(event){
                        var p = $(event.target);
                        p.remove();
                    });
                    $('h1').dblclick(function(event){
                        var h1 = $(event.target);
                        h1.remove();
                    });
                    $('h2').dblclick(function(event){
                        var h2 = $(event.target);
                        h2.remove();
                    });
                    $('h3').dblclick(function(event){
                        var h3 = $(event.target);
                        h3.remove();
                    });
                    $('h4').dblclick(function(event){
                        var h4 = $(event.target);
                        h4.remove();
                    });
                    //$(".sorting_element").dialog();
            },                    
            
            drag: function(event, ui){
                var $this = $(this);
                $("<div></div>").text(ui.draggable.text()).appendTo($this);
            }
        });
    }
});

