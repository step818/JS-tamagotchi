import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Tamagotchi  from './tamagotchi.js';

$(document).ready(function() {
    console.log('at least this');
    let p;
    
    $('#nameForm').submit(function(event) {
    event.preventDefault();
    console.log('clicked');

    p = new Tamagotchi($("#tamagotchiName").val());

    $('#name').text(p.name);
    console.log(p.name);

    p.setHunger();
    setInterval(function() {
        console.log("time");
        $('#foodLevels').text(p.foodLevel);
        $('#dead').text(p.didYouDie());
        if (p.foodLevel <= 0) {
            $('#dead').show();
        }
    }, 200);

    $('#feed').click(function (event) {
        event.preventDefault();
        p.feed();
        $('#foodLevels').text(p.foodLevel);    
    });
    console.log(p.foodLevel);
    });
    


    
    // function reset() {
    //     location.reload(true);
    // }
});