/**
* File For Managing the server calls
* @date 19-09-2017
* Webcontentor
*/

// Ajax call for get data
var getPatchRequest = function(url, data, success, error, datatype){
    var url = Global.API.webcontentor + url;
    //var url = url;
    $.ajax({
        url: url,
        type: 'GET',
        data: data,
        dataType: datatype || 'json',
        success: function(response){
            console.log("Request Success");
            success(response);
        },
        error: function(response){
            console.log("Error in getPatchRequest");
            error(response);
        }
    })
}
