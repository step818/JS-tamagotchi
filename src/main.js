import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
    
    $('#nameForm').submit(function(event) {
    event.preventDefault();

    let p = new Tamagotchi(name);

    $('#name').text(p.name);
    });
});