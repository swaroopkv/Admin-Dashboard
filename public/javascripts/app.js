$(function(){
    $("#home").on('click', function(){
        $.get( "/", function(  ) {
             });
    });
    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var store = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(store, function(index,stores) {
                string +='<tr><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in1']+'</td><td>'+stores['time_out1']+'</td><td>'+stores['age_group1']+'</td><td>'+stores['gender1']+'</td><td>'+stores['time_in2']+'</td><td>'+stores['time_out2']+'</td><td>'+stores['age_group2']+'</td><td>'+stores['gender2']+'</td></tr>';});
            $("#trdata").html(string);
           
        });
    });
    


$("#query1").on('click', function(){
    $.get( "/query1", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in1']+'</td><td>'+stores['time_out1']+'</td><td>'+stores['age_group1']+'</td><td>'+stores['gender1']+'</td></tr>';
            string1 ='<tr><td> Number of female customers in store 1 having age less than 35 : '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query12").on('click', function(){
    $.get( "/query12", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in2']+'</td><td>'+stores['time_out2']+'</td><td>'+stores['age_group2']+'</td><td>'+stores['gender2']+'</td></tr>';
            string1 ='<tr><td> Number of female customers in store 2 having age less than 35 : '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query2").on('click', function(){
    $.get( "/query2", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in1']+'</td><td>'+stores['time_out1']+'</td><td>'+stores['age_group1']+'</td><td>'+stores['gender1']+'</td></tr>';
            string1 ='<tr><td> Number of male customers in store 1 having age less than 38 and staying in store for the time period of 10-30 mins betwwen 14:00:00 and 17:00:00 : '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query22").on('click', function(){
    $.get( "/query22", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in2']+'</td><td>'+stores['time_out2']+'</td><td>'+stores['age_group2']+'</td><td>'+stores['gender2']+'</td></tr>';
            string1 ='<tr><td> Number of male customers in store 2 having age less than 38 and staying in store for the time period of 10-30 mins betwwen 14:00:00 and 17:00:00 : '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query31").on('click', function(){
    $.get( "/query31", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in1']+'</td><td>'+stores['time_out1']+'</td><td>'+stores['age_group1']+'</td><td>'+stores['gender1']+'</td></tr>';
            string1 ='<tr><td> Number of Millenials in store 1: '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query32").on('click', function(){
    $.get( "/query32", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in1']+'</td><td>'+stores['time_out1']+'</td><td>'+stores['age_group1']+'</td><td>'+stores['gender1']+'</td></tr>';
            string1 ='<tr><td> Number of GenZ in store 1 : '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query33").on('click', function(){
    $.get( "/query33", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in2']+'</td><td>'+stores['time_out2']+'</td><td>'+stores['age_group2']+'</td><td>'+stores['gender2']+'</td></tr>';
            string1 ='<tr><td> Number of Millenials in store 1: '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});

$("#query34").on('click', function(){
    $.get( "/query34", function( data ) {
        var store = data['data'];
        $("#trdata").html('');
        $("#message").hide();
        var string = '';
        var string1 ='';
        $.each(store, function(index,stores) {
            string +='<tr><td>'+index+'</td><td>'+stores['customer_no']+'</td><td>'+stores['date']+'</td><td>'+stores['time_in2']+'</td><td>'+stores['time_out2']+'</td><td>'+stores['age_group2']+'</td><td>'+stores['gender2']+'</td></tr>';
            string1 ='<tr><td> Number of Millenials in store 1: '+index+'</td></tr>'});
        $("#trdata").html(string1+string);

        
    });
});





 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 

