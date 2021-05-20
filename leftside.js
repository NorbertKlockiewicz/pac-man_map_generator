console.log("Załadowano leftside.js")

class leftside {
    constructor() {
        this.x;
        this.y = 0.9;
        this.a = 0;
        this.b = 33;
        this.clickedcanvas;
        this.placex;
        this.placey;

    }
    DrawLeftSide() {


        for (let i = 0; i < 20; i++) {
            this.x = 0.9;
            this.a = 0;

            for (let j = 0; j < 16; j++) {
                var canvas = document.createElement("CANVAS");
                canvas.id = "r" + this.x + "r" + this.y
                canvas.height = 30;
                canvas.width = 30;
                canvas.style.position = "absolute";
                canvas.style.left = this.a + 25 + "px";
                canvas.style.top = this.b + 45 + "px"
                var ctx = canvas.getContext("2d")
                ctx.beginPath()
                ctx.drawImage(img, this.x, this.y, 45.5, 45.5, 0, 0, 30, 30);
                this.x += 48.1;
                this.a += 33
                document.getElementById("left").append(canvas)

                canvas.addEventListener("click", (ev) => {
                    this.Click(ev.path[0].id)

                })

            }
            this.b += 660;
            this.a = 0;
            this.x -= 1.8
            for (let j = 0; j < 16; j++) {
                var canvas = document.createElement("CANVAS");
                canvas.id = "r" + this.x + "r" + this.y
                canvas.height = 30
                canvas.width = 30;
                canvas.style.position = "absolute";
                canvas.style.left = this.a + 25 + "px";
                canvas.style.top = this.b + 45 + "px"
                var ctx = canvas.getContext("2d")
                ctx.beginPath()
                ctx.drawImage(img, this.x, this.y, 45.5, 45.5, 0, 0, 30, 30);
                this.x += 48;
                this.a += 33

                document.getElementById("left").append(canvas)

                canvas.addEventListener("click", (ev) => {
                    this.Click(ev.path[0].id)

                })

            }


            this.y += 48;
            this.b -= 660
            this.b += 33;

        }
    }
    Click(element) {
        redo = []
        var xy = element.split("r")
        var x = parseFloat(xy[1])
        var y = parseFloat(xy[2])
        for (let k = 0; k < tableids.length; k++) {

            var clicked = document.getElementById(tableids[k])
            if (clicked.className != "add") {


                var ctx = clicked.getContext("2d");
                clicked.className = "add";
                ctx.beginPath()
                ctx.drawImage(img, x, y, 45.5, 45.5, 0, 0, 30, 30);

                for (let l = 0; l < allcanvases.length; l++) {
                    if (clicked.id == allcanvases[l].id) {
                        var xundo = allcanvases[l].x
                        var yundo = allcanvases[l].y
                        undooneelement.push({ id: allcanvases[l].id, x: xundo, y: yundo })
                        allcanvases[l].x = x;
                        allcanvases[l].y = y;

                    }
                }


            }

        }

        undo.push(undooneelement)
        undooneelement = []

        var clickednum = tableids[tableids.length - 1].split("r");


        tableids = []

        if (enabled == true) {
            tableids.push(document.getElementById("r" + (parseInt(clickednum[1])) + "r" + (parseInt(clickednum[2]))).nextSibling.id)
            document.getElementById("r" + (parseInt(clickednum[1])) + "r" + (parseInt(clickednum[2]))).nextSibling.className = "clicked"

        }

    }
}
