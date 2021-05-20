tableids = []
enabled = false;
canvastab = []
var ctrldown = false;
var allcanvases = [];
var mymap;
var undo = [];
var undooneelement = []
var redo = []
var topaste = []
saveditems = []
var fasttable = [];
var undoafterpaste;
window.addEventListener("DOMContentLoaded", function () {
    img = new Image();
    img.src = "sprites.png";
    img.addEventListener("load", () => {
        left.DrawLeftSide()
        right.DrawRightSide()
    })
    left = new leftside();
    right = new rightside();
})