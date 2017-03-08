angular.module("gold_rush",[])
      .controller("gold", goldCtrl);


function goldCtrl () {
  var golden =this;
  console.log ("it works!");



  golden.img = "http://vignette2.wikia.nocookie.net/nexttopthingy/images/c/c2/Potato.png/revision/latest?cb=20140421121844"


  golden.lastClickInfo = {},
  golden.goldMines = []
  golden.addingNote = false;

  golden.mouseClick = function(event){
    console.log(event);

    golden.lastClickInfo = {
      pageX: event.pageX / document.body.clientWidth * 100,
      pageY: event.pageY / document.body.clientWidth * 100,

    },

    golden.goldMines.push(golden.lastClickInfo);
    console.log('adding marker')

    golden.addingNote = true;

  }
  golden.addNote = function (){
    golden.goldMines[golden.goldMines.length-1].note = golden.note
    golden.addingNote = false;
    golden.note = '';
  }

  golden.removeFlag = function(index) {
    golden.goldMines.splice(index, 1);
  }

}
