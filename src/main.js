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
        $('#buttons').show();
        $('#nameForm').hide();




        //Hunger and feed
        p.setHunger();
        setInterval(function() {
            $('#foodLevel').text(p.foodLevel);
            
            if (p.foodLevel) {
                $('#dead').text(p.didYouDie());
            //     console.log("i think your dead");
                // $('#dead').text(p.name + "has died!!!!!!!");
            }
        }, 100);

        $('#feed').click(function (event) {
            event.preventDefault();
            p.feed();
            $('#foodLevel').text(p.foodLevel);    
        });
        console.log(p.foodLevel);



        //Rest and rest
        p.setRest();
        setInterval(function() {
            $('#restLevel').text(p.restLevel);
        }, 1000);

        $('#nap').click(function(event) {
            event.preventDefault();
            p.rest();
            $('#restLevel').text(p.restLevel);
        });
        p.didYouDie();
    });
    


    
    
});