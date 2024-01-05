player1name=localStorage.getItem("player1name");
player1score=0;
document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player1score").innerHTML=player1score;

player2name=localStorage.getItem("player2name");
player2score=0;
document.getElementById("player2name").innerHTML=player2name+" : ";
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question Turn: "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn: "+player2name;

questionturn="player1";
answerturn="player2";

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    
    question_number="<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}

function check(){
    getanswer=document.getElementById("input_check_box").value;

    
    if (getanswer==actual_answer){
       
        if(answerturn=="player1"){
            update_player1_score= player1score+1;
            document.getElementById("player1score").innerHTML= update_player1_score;
        }
        else{
            update_player2_score=player2score+1;
            document.getElementById("player2score").innerHTML=update_player2_score;
        }
    }

    if (questionturn=="player1"){
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="Question Turn: "+player2name;
    }
    else{
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="Question Turn: "+player1name;
    }

    if (answerturn=="player2"){
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="Answer Turn: "+player1name;
    }
    else{
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="Answer Turn: "+player2name;
    }

    document.getElementById("output").innerHTML="";
    }
