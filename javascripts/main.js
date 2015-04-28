console.log('This would be the main JS file.');

function Door() {
    this.prize = false;
    this.pick = false;
    this.open = false;
}

var red = new Door();
var blue = new Door();
var yellow = new Door();

var openledoor = function(door, cool){
    if(!cool.prize){
        $(door).addClass('open');
        $(door).append('<img src="http://www.peta.org/wp-content/uploads/2013/10/goat_2D00_list_2D00_4.jpg"/>');
    } else {
        $(door).addClass('open');
        $(door).append('<img src="http://vignette1.wikia.nocookie.net/pixar/images/b/b2/Lightning_mcqueen_cars_2.png/revision/20110723073418"/>');
    }
}

var check = function(){
    if(!blue.prize && Math.floor(Math.random()*3) && !blue.pick){
        openledoor('#blue', blue)
        blue.open = true;
    } else if(!yellow.prize && Math.floor(Math.random()*2) && !yellow.pick){
        openledoor('#yellow', yellow)
        yellow.open = true;
    } else if(!red.pick && !red.prize){
        openledoor('#red', red)
        red.open = true;
    } else if(!blue.pick && !blue.prize){
        openledoor('#blue', blue)
        blue.open = true;
    } else {
        openledoor('#yellow', yellow)
        yellow.open = true;
    }
}

var switchy = function(){
    if(blue.pick){
        if(red.open){
        switching('#blue', blue, '#yellow', yellow)
        } else{
        switching('#blue', blue, '#red', red)
        }
    } else if(yellow.pick){
        if(red.open){
        switching('#yellow', yellow, '#blue', blue)
        } else{
        switching('#yellow', yellow, '#red', red)
        }
    } else if(red.pick){
        if(blue.open){
        switching('#red', red, '#yellow', yellow)
        } else{
        switching('#red', red, '#blue', blue)
        }
    }
}

var switching = function(pick, pick1, other, other1){
    urchoice = confirm("One of the ZONKS! Has been revealed, now I give you the chioce to switch to the other door! OK or CANCEL");
    if(!urchoice){
        openledoor(pick, pick1)
        $(pick).addClass('highlighted');
        $(pick).animate({
           height: '+=200px'
       });
       $(pick).animate({
           width: '+=200px'
       });
    } else {
        openledoor(other, other1)
        $(other).addClass('highlighted');
        $(other).animate({
           height: '+=200px'
       });
       $(other).animate({
           width: '+=200px'
       });
    }
}

var carfinder = Math.floor(Math.random()*3)
if (carfinder === 0){
    red.prize = true
} else if (carfinder === 1){
    blue.prize = true
} else if (carfinder === 2){
    yellow.prize = true
}
    

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).fadeTo('slow', 0.2);
   });
   $('div').mouseleave(function() {
       $(this).fadeTo('slow', 1);
   });
   $('#red').click(function() {
       $(this).addClass('highlighted');
       red.pick = true
       check()
       switchy()
   });
   $('#blue').click(function() {
       $(this).toggle('highlighted');
       blue.pick = true
       check()
       switchy()
   });
   $('#yellow').click(function() {
       $(this).addClass('highlighted');
       yellow.pick = true
       check()
       switchy()
   }); 
});
