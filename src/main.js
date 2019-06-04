import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Tamagotchi  from './tamagotchi.js';

$(document).ready(function() {
    console.log('at least this');

    $('#nameForm').submit(function(event) {
    event.preventDefault();
    console.log(name);

    let p = new Tamagotchi($("#tamagotchiName").val());

    $('#name').text(p.name);
    });
    $('#nameForm').hide();
    p.setHunger();

  
    setInterval(() => {
        if (p.didYouDie() == false) {
            $('#showFood').text(p.foodLevel);
        } else {
            alert("your tamagotchi has died:'(");
        }
    }, 1000);

    $('#feed').click(function (event) {
        event.preventDefault();
        p.feed();
        $('#foodLevels').text(p.foodLevel);    
    });

    // function reset() {
    //     location.reload(true);
    // }
});