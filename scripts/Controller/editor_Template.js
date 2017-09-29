 var getwcEditorEle = function(htmlTagName){

                var htmlBlock = ''; 
                                
                switch(htmlTagName) {
                    case "header1":
                        htmlBlock = '<h1 contenteditable="true" style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element"  ng-click="editEnable()">Header One</h1>';
                    break;
                    

                    case "header2":
                        htmlBlock = '<h2 contenteditable="true" style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element"  ng-click = "editEnable()">Header Two</h2>';
                    break;

                    case "header3":
                        htmlBlock = '<h3 contenteditable="true" style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element" ondblclick="eleDbClicked()" ng-click = "editEnable($event)">Header Three</h3>';
                    break;

                    case "header4":
                        htmlBlock ='<h4 contenteditable="true" style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element" ng-dblclick="eleDbClicked($event)" ng-click = "editEnable()">Header Four</h4>';
                    break;

                    case "textOneColumn":
                        htmlBlock = getDummyParagraph();
                    break;

                    case "textTwoColumn":
                        htmlBlock = getDummyParagraph()+
                                    getDummyParagraph();
                    break;

                    case "textThreeColumn":
                        htmlBlock = getDummyParagraph()+
                                    getDummyParagraph()+
                                    getDummyParagraph()
                                
                    break;
                        }

                        $('.dropdiv').append(htmlBlock);
                //return htmlBlock;
            }; 

            var getDummyParagraph = function(){
        var str = '';
        str = '<p contenteditable="true" class="editing_element" ng-dblclick="eleDbClicked($event)" ng-click = "editEnable($event)" style="color:#000000; font-weight:normal; text-align:left; font-size:14px; padding:10px 10px 10px 10px; margin: 0px 0px;line-height:20px;">'+
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'+
            '</p>';

        return str;
    };