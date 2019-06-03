import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Health } from './tamagotchi.js';

$(document).ready(function() {
    
    $('#submit').click(function(event) {
    event.preventDefault();

    let h = new Health(name);

    $('#name').text(h.this.name);
    });
});