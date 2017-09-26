$(function() {
            $(".dragdiv span.page_title").draggable({
                appendTo: "body",
                helper: "clone",
                cursor: "move",
                revert: "invalid",
            });
 
            initDroppable($(".dropdiv"));
            function initDroppable($elements) {
                $elements.droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-drop-hover",
                    accept: ":not(.ui-sortable-helper)",

                    over: function(event, ui) {
                        var $this = $(this);
                    },

                     drop: function( event, ui ) {
                        var getvalue = $(ui.helper).attr('key');
                        console.log('getvalue',getvalue);
                         var eleToAppend = getvalue ;
                            getwcEditorEle(eleToAppend);
                     },                    
                    
                    drag: function(event, ui){
                        var $this = $(this);
                        $("<span></span>").text(ui.draggable.text()).appendTo(this);
                    }
                });
            }
        });

