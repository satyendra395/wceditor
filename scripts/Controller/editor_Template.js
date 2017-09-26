 var getwcEditorEle = function(htmlTagName){
                var htmlBlock = '';

                var common_100_percent_prefix = '<tr class="myClass">'+
                                        '<td valign="top" align="" class="mcnTextBlockInner props_bar tdContainTables ui-sortable">'+
                                        '<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
                                        '<tr>'+
                                        '<td align="center" valign="top" width="100%" style="width: 100%; padding-left: 7px;">'+
                                        '<![endif]-->'+
                                        '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" align="center" class="sorting_element" style="text-align: center; width: 100%; padding:15px 0% 10px 0%; ">';

                var common_50_percent_prefix = '<tr class="myClass">'+
                                        '<td valign="top" align="center" class="mcnTextBlockInner props_bar tdContainTables ui-sortable">'+
                                        '<!--[if (gte mso 9)|(IE)]>'+
                                        '<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
                                        '<tr>'+
                                        '<td align="center" valign="top" width="290" style="width:290px;     padding-left: 7px;">'+
                                        '<![endif]-->'+
                                        '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="280" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer" style="padding: 9px;">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="280" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

                var common_50_percent_prefix_sec = '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="280" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer" style="padding: 9px;">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="280" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_50_percent_prefix_1_ratio_3 = '<tr class="myClass">'+
                                        '<td valign="top" align="center" class="mcnTextBlockInner props_bar tdContainTables ui-sortable">'+
                                        '<!--[if (gte mso 9)|(IE)]>'+
                                        '<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
                                        '<tr>'+
                                        '<td align="center" valign="top" width="133" style="width:133px; padding-left: 7px;">'+
                                        '<![endif]-->'+
                                        '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="133" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="133" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_50_percent_prefix_sec_1_ratio_3 = '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="430" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="430" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_50_percent_prefix_3_ratio_1 = '<tr class="myClass">'+
                                        '<td valign="top" align="center" class="mcnTextBlockInner props_bar tdContainTables ui-sortable">'+
                                        '<!--[if (gte mso 9)|(IE)]>'+
                                        '<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
                                        '<tr>'+
                                        '<td align="center" valign="top" width="430" style="width:430px; padding-left: 7px;">'+
                                        '<![endif]-->'                                      +
                                        '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="430" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="430" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_50_percent_prefix_sec_3_ratio_1 = '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="133" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="133" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_33_percent_prefix = '<tr class="myClass">'+
                                        '<td valign="top" align="center" class="mcnTextBlockInner props_bar tdContainTables ui-sortable">'+
                                        '<!--[if (gte mso 9)|(IE)]>'+
                                        '<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
                                        '<tr>'+
                                        '<td align="center" valign="top" width="199" style="width:199px; padding-left: 7px;">'+
                                        '<![endif]-->'+
                                        '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="190" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer" style="padding-top: 9px; padding-right: 6px; padding-bottom: 9px; padding-left: 6px;">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="190" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_33_percent_prefix_sec = '<table id="row" class="columnWrapper one_column" border="0" cellpadding="0" cellspacing="0" width="190" style="display: inline-block;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" class="columnContainer" style="padding-top: 9px; padding-right: 6px; padding-bottom: 9px; padding-left: 6px;">'+
                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
                                        '<tbody>'+
                                        '<tr>'+
                                        '<td valign="top" width="190" class="sorting_element" style="padding:15px 0% 10px 0%; ">';

        var common_suffix_common = '</td></tr></tbody></table></td></tr></tbody></table>';

        var ie_Conditional_Statement_50 = '<!--[if (gte mso 9)|(IE)]>'+
                                        '</td>'+
                                        '<td align="center" valign="top" width="280" style="width:280px;">'+
                                        '<![endif]-->';

        var ie_Conditional_Statement_50_1_ratior_3 = '<!--[if (gte mso 9)|(IE)]>'+
                                        '</td>'+
                                        '<td align="center" valign="top" width="430" style="width:430px;">'+
                                        '<![endif]-->';

        var ie_Conditional_Statement_50_3_ratior_1 = '<!--[if (gte mso 9)|(IE)]>'+
                                        '</td>'+
                                        '<td align="center" valign="top" width="133" style="width:133px;">'+
                                        '<![endif]-->';

        var ie_Conditional_Statement_30 = '<!--[if (gte mso 9)|(IE)]>'+
                                        '</td>'+
                                        '<td align="center" valign="top" width="199" style="width:199px;">'+
                                        '<![endif]-->';

        var common_suffix_common_last = '</td></tr></tbody></table></td></tr></tbody></table>'+
                                        '<!--[if (gte mso 9)|(IE)]>'+
                                        '</td>'+
                                        '</tr>'+
                                        '</table>'+
                                        '<![endif]-->'+
                                        '</td></tr>';                        

                console.log('htmlTagName',htmlTagName);
                switch(htmlTagName) {
                    case "header1":
                        htmlBlock = common_100_percent_prefix+
                                    '<h1 style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element"  on-click = "editEnable($event)">Header One</h1>'+
                                    common_suffix_common_last;
                    break;
                    

                    case "header2":
                        htmlBlock = common_100_percent_prefix+
                                    '<h2 style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element"  ng-click = "editEnable()">Header Two</h2>'+
                                    common_suffix_common_last;
                    break;

                    case "header3":
                        htmlBlock = common_100_percent_prefix+
                                    '<h3 style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element" ng-dblclick="eleDbClicked()" ng-click = "editEnable($event)">Header Three</h3>'+
                                    common_suffix_common_last;
                    break;

                    case "header4":
                        htmlBlock = common_100_percent_prefix+
                                    '<h4 style="padding:10px 10px 10px 10px; text-align:center; margin:0px" class = "editing_element" ng-dblclick="eleDbClicked($event)" ng-click = "editEnable()">Header Four</h4>'+
                                    common_suffix_common_last;
                    break;

                    case "textOneColumn":
                        htmlBlock = common_100_percent_prefix+
                                    getDummyParagraph()+
                                    common_suffix_common_last;
                    break;

                    case "textTwoColumn":
                        htmlBlock = common_50_percent_prefix+
                                    getDummyParagraph()+
                                    common_suffix_common+
                                    ie_Conditional_Statement_50+
                                    common_50_percent_prefix_sec +
                                    getDummyParagraph()+
                                    common_suffix_common_last;
                    break;

                    case "textThreeColumn":
                        htmlBlock = common_33_percent_prefix+
                                    getDummyParagraph()+
                                    common_suffix_common+
                                    ie_Conditional_Statement_30+
                                    common_33_percent_prefix_sec+
                                    getDummyParagraph()+
                                    common_suffix_common+
                                    ie_Conditional_Statement_30+
                                    common_33_percent_prefix_sec+
                                    getDummyParagraph()+
                                    common_suffix_common_last;
                    break;
                        }

                $('.dropdiv').append(htmlBlock);

                return htmlBlock;
            }; 

            var getDummyParagraph = function(){
        var str = '';
        str = '<p class="editing_element" ng-dblclick="eleDbClicked($event)" ng-click = "editEnable($event)" style="color:#000000; font-weight:normal; text-align:left; font-size:14px; padding:10px 10px 10px 10px; margin: 0px 0px;line-height:20px;">'+
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.'+
            '</p>';

        return str;
    };