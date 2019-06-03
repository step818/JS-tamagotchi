import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './tamagotchi.js';

$(document).ready(function() {
    
    $('#submit').click(function(event) {
    event.preventDefault();

    let p = new bear(name);

    $('#name').show(p.name);
    });
});