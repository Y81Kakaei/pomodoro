
//run Jquery
//the sound doent work
$(document).ready(function(){
    //I added a buzz sound to the page to make it work bu it doens't work
    var buzzer = $("#buzzer")[0];
    //now I added a variable which conatain what ever i add as the break time. 
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());

    //console.log(count);
    $("#reset").hide();

    $("#start").click(function(){

        var counter = setInterval(timer, 1000);
        count *= 60;
        breakTime *= 60;
        

        function timer() {

            //hide some variables
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break,#breakNum, #title1, #title2").hide();
            $("#timeType").show();
            $("#timeType").html("Session Time:");


            count -= 1;
            if(count === 0){
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $("#num").hide();
            }

            if(count % 60 >= 10){

                $("#num").html(Math.floor(count/60) + " : " + count % 60);

            } else{
                $("#num").html(Math.floor(count/60) + " : " +"0"+ count % 60)
            }





            function breakTimer(){
                $("#timeType").html("Break Time: ");
                $("#breakNum").show();
                
                $("#timeType").show();

                breakTime -= 1;
                console.log(breakTime);
                if(breakTime === 0){
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset").show();
                    $("#breakNum, #timeType").hide();
                }

                if(breakTime % 60 >= 10){

                    $("#breakNum").html(Math.floor(breakTime/60) + " : " + breakTime % 60);
                    console.log(breakTime);
    
                } else{

                    $("#breakNum").html(Math.floor(breakTime/60) + " : " +"0"+ breakTime % 60)
                }
    

                //$("#breakNum").html(breakTime);
            
        }


            
        }


    });

    $("#reset").click(function () {

        count = 25;
        breakTime = 25;
        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
        $("#reset, #timeType").hide();
        
    });

    $("#minus5Clock").click(function(){

        //we want to run it until we reach 5 minutes, minimum is 5 minutes. 

        if(count > 5){
            count -= 5;
            //i want to change the html value
            $("#num").html(count);
            //console.log(count);
        }
        

    });


    $("#add5Clock").click(function(){
       
        count += 5;
        //i want to change the html value
        $("#num").html(count);
        //console.log(count);
        
        

    });




    $("#minus5Break").click(function(){

        //we want to run it until we reach 5 minutes, minimum is 5 minutes. 

        if(breakTime > 5){
            breakTime -= 5;
            //i want to change the html value
            $("#breakNum").html(breakTime);
            //console.log(count);
        }
        

    });


    $("#add5Break").click(function(){
       
        breakTime += 5;
        //i want to change the html value
        $("#breakNum").html(breakTime);
        //console.log(count);
        
        

    });
});
