console.log("Załadowano rightside.js")

class rightside {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.img = new Image();
        this.img.src = "sprites.png"
        this.id;
        this.checkbox = document.getElementById("automat")
        this.isEnabled();
        this.Markingonhold();
        this.isControlClicked();
        this.mouseup = false
        this.marX;
        this.divmark = document.createElement("div")
        this.startpointX;
        this.startpointY;
        this.rightclick = false
        this.RightMouseClick();
        this.testtab = [];
        this.deletetab = [];
        this.KeyboardShortcuts();
        this.saveditems = [];
        this.temporarytab = [];
        this.pasteongo = true;
    }
    DrawRightSide() {
        this.b = 33;

        for (let i = 0; i < 40; i++) {

            this.a = 0;

            for (let j = 0; j < 40; j++) {
                var canvas = document.createElement("CANVAS");

                canvas.id = "r" + i + "r" + j;
                canvas.className = "add";
                canvas.height = 30;
                canvas.width = 30;
                canvas.style.position = "absolute";
                canvas.style.left = this.a + 40 + "px";
                canvas.style.top = this.b + 40 + "px";
                canvastab.push(canvas);
                var ctx = canvas.getContext("2d")
                ctx.beginPath()
                ctx.drawImage(this.img, 1.1, 240.8, 45.5, 45.5, 0, 0, 30, 30);

                this.a += 33;
                mymap = new Object();
                mymap.id = "r" + i + "r" + j;
                mymap.x = 1.1;
                mymap.y = 240.8;
                allcanvases.push(mymap);
                document.getElementById("right").append(canvas)

                canvas.addEventListener("click", (ev) => {
                    this.testtab.push(ev.path[0].id)
                    this.Click(ev.path[0].id);


                })

            }


            this.b += 33;


        }

    }
    Click(element) {
        var element = document.getElementById(element)
        if (this.isControlClicked() == false) {
            for (let i = 0; i < this.testtab.length; i++) {

                document.getElementById(this.testtab[i]).className = "add"

            }
            tableids = []
            element.className = "clicked"
            tableids.push(element.id)
            this.deletetab.push(element.id)

        }
        if (this.isControlClicked() == true) {

            if (element.className == "add") {

                element.className = "clicked"
                tableids.push(element.id)
                this.deletetab.push(element.id)

            }
            else {
                element.className = "add"
            }

        }

    }
    isEnabled() {
        this.checkbox.addEventListener("click", () => {
            if (enabled == false) {
                enabled = true;
            }
            else if (enabled == true) {
                enabled = false;
            }


        })

    }
    Markingonhold() {

        document.getElementById("right").addEventListener("mousedown", (e) => {

            if (e.which == 1) {
                for (let k = 0; k < tableids.length; k++) {
                    var clicked = document.getElementById(tableids[k])
                    if (ctrldown == false) {
                        clicked.className = "add";
                        tableids = []
                    }
                }

                this.startpointX = e.pageX
                this.startpointY = e.pageY
                document.getElementById("right").appendChild(this.divmark)
                this.mouseup = false
                this.isControlClicked()
                document.getElementById("right").addEventListener("mousemove", (ev) => {
                    if (this.mouseup == false) {

                        var width = ev.pageX - this.startpointX

                        var height = ev.pageY - this.startpointY
                        if (width < 0) {
                            this.divmark.style.left = ev.pageX - 620 + "px"
                            this.divmark.style.width = this.startpointX - ev.pageX + "px"
                        }
                        else {
                            this.divmark.style.left = this.startpointX - 620 + "px"
                            this.divmark.style.width = ev.pageX - this.startpointX + "px"
                        }
                        if (height < 0) {
                            this.divmark.style.top = ev.pageY + "px"
                            this.divmark.style.height = height * (-1) + "px"
                        }
                        else {
                            this.divmark.style.top = this.startpointY + "px"
                            this.divmark.style.height = ev.pageY - this.startpointY + "px"
                        }

                        this.divmark.setAttribute("id", "mark")
                        var rect = this.divmark.getBoundingClientRect()

                        this.Markingcanvas(rect.x, rect.y, rect.width, rect.height)
                    }

                })
            }

        })
        document.getElementById("right").addEventListener("mouseup", () => {
            this.mouseup = true;
            this.divmark.style.width = 0 + "px";
            this.divmark.style.height = 0 + "px";
            this.divmark.style.top = 0 + "px";
            this.divmark.style.left = 0 + "px";



        })


    }
    Markingcanvas(rectX, rectY, rectWidth, rectHeight) {
        for (let i = 0; i < canvastab.length; i++) {
            var rect = this.getCanvasProperty(canvastab[i])
            if (rect.x > rectX &&
                rect.y > rectY &&
                rect.x < rectX + rectWidth &&
                rect.y < rectY + rectHeight) {
                canvastab[i].className = "clicked";
                tableids.push(canvastab[i].id);
                this.testtab.push(canvastab[i].id)
                this.deletetab.push(canvastab[i].id)

            }

            else if (ctrldown == false) {
                canvastab[i].className = "add";

            }
        }
    }
    getCanvasProperty(canvas) {

        return canvas.getBoundingClientRect();
    }
    isControlClicked() {

        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 17 || e.keyCode == 93) {
                ctrldown = true;

            }

        })
        window.addEventListener("keyup", (ev) => {
            if (ev.keyCode == 17 || ev.keyCode == 93) {
                ctrldown = false;

            }

        })
        return ctrldown;
    }
    RightMouseClick() {
        window.addEventListener("contextmenu", (ev) => {
            this.rightclick = true;
            ev.preventDefault();

            document.getElementById("menu").style.display = "block"
            document.getElementById("menu").style.left = ev.pageX + "px"
            document.getElementById("menu").style.top = ev.pageY + "px"
            document.getElementById("body").style.opacity = "0.5";
            document.getElementById("menu").style.opacity = "1";

        })
        window.addEventListener("click", (ev) => {
            this.rightclick = false;
            document.getElementById("menu").style.display = "none"
            document.getElementById("body").style.opacity = "1";

        })


    }
    KeyboardShortcuts() {
        window.addEventListener("keydown", (ev) => {
            switch (ev.keyCode) {
                case 46:
                    ev.preventDefault()
                    this.Delete()
                    break;
                case 93 && 88:
                    ev.preventDefault()
                    this.Cut()
                    break;
                case 17 && 90:
                    ev.preventDefault()
                    this.Undo()
                    break;
                case 17 && 89:
                    ev.preventDefault()
                    this.Redo()
                    break;
                case 17 && 83:
                    ev.preventDefault()
                    this.Savetofile()
                    break;
                case 17 && 76:
                    ev.preventDefault()
                    document.getElementById("input").click()
                    break;
                case 17 && 86:
                    ev.preventDefault()
                    if (this.pasteongo == true) {
                        this.Paste()
                        this.pasteongo = false;
                    }
                    break;
                case 17 && 67:
                    ev.preventDefault()
                    this.Copy()
                    break;


            }


        })


    }
    Delete() {
        console.log("DELETACJA")
        console.log(tableids)
        for (let i = 0; i < this.deletetab.length; i++) {
            if (document.getElementById(this.deletetab[i]).className == "clicked") {
                var canvas = document.getElementById(this.deletetab[i])
                canvas.className = "add"
                for (let l = 0; l < allcanvases.length; l++) {
                    if (this.deletetab[i] == allcanvases[l].id) {
                        var xundo = allcanvases[l].x
                        var yundo = allcanvases[l].y
                        undooneelement.push({ id: allcanvases[l].id, x: xundo, y: yundo })
                        allcanvases[l].x = 1.1;
                        allcanvases[l].y = 240.8;

                    }
                }

                var ctx = canvas.getContext("2d")
                ctx.beginPath()
                ctx.drawImage(img, 1.1, 240.8, 45.5, 45.5, 0, 0, 30, 30);
            }

        }
        undo.push(undooneelement)
        undooneelement = [];
    }
    Cut() {
        this.saveditems = []
        for (let j = 0; j < allcanvases.length; j++) {

            if (this.deletetab.includes(allcanvases[j].id) && !this.saveditems.includes(allcanvases[j]) && document.getElementById(allcanvases[j].id).className == "clicked") {
                var obj = { id: allcanvases[j].id, x: allcanvases[j].x, y: allcanvases[j].y }

                this.saveditems.push(obj)
            }

        }

        for (let i = 0; i < this.deletetab.length; i++) {
            if (document.getElementById(this.deletetab[i]).className == "clicked") {
                var canvas = document.getElementById(this.deletetab[i])
                canvas.className = "add";
                for (let l = 0; l < allcanvases.length; l++) {
                    if (this.deletetab[i] == allcanvases[l].id) {
                        var xundo = allcanvases[l].x
                        var yundo = allcanvases[l].y
                        undooneelement.push({ id: allcanvases[l].id, x: xundo, y: yundo })
                        allcanvases[l].x = 1.1;
                        allcanvases[l].y = 240.8;

                    }
                }
                var ctx = canvas.getContext("2d");
                ctx.beginPath();
                ctx.drawImage(this.img, 1.1, 240.8, 45.5, 45.5, 0, 0, 30, 30);

            }

        }
        undo.push(undooneelement)
        undooneelement = [];


    }
    Undo() {
        console.log(undo)
        var toredo = undo.pop()
        var helpertab = [];
        for (let i = 0; i < toredo.length; i++) {
            var canvas = document.getElementById(toredo[i].id)
            for (let l = 0; l < allcanvases.length; l++) {
                if (toredo[i].id == allcanvases[l].id) {
                    var xundo = allcanvases[l].x
                    var yundo = allcanvases[l].y
                    helpertab.push({ id: allcanvases[l].id, x: xundo, y: yundo })
                    allcanvases[l].x = toredo[i].x;
                    allcanvases[l].y = toredo[i].y;
                }
            }
            var ctx = canvas.getContext("2d")
            ctx.beginPath()
            ctx.drawImage(this.img, toredo[i].x, toredo[i].y, 45.5, 45.5, 0, 0, 30, 30);

        }

        redo.push(helpertab)
        helpertab = []
        toredo = []

    }
    Redo() {
        var toundo = [];

        toundo = redo.pop();

        var helpredotab = []
        for (let i = 0; i < toundo.length; i++) {


            for (let l = 0; l < allcanvases.length; l++) {
                if (toundo[i].id == allcanvases[l].id) {
                    var xundo = allcanvases[l].x
                    var yundo = allcanvases[l].y
                    helpredotab.push({ id: allcanvases[l].id, x: xundo, y: yundo })
                    allcanvases[l].x = toundo[i].x;
                    allcanvases[l].y = toundo[i].y;
                }
            }
            var canvas = document.getElementById(toundo[i].id)
            var ctx = canvas.getContext("2d")
            ctx.beginPath()
            ctx.drawImage(this.img, toundo[i].x, toundo[i].y, 45.5, 45.5, 0, 0, 30, 30);

        }

        undo.push(helpredotab)
        helpredotab = []
        toundo = [];
    }
    Savetofile() {
        console.log(allcanvases)
        var json = JSON.stringify(allcanvases)
        var blob = new Blob([json], { type: "text/javascript" });

        // download the file:
        download(blob, "map.js");


        function download(blob, name) {
            var url = URL.createObjectURL(blob),
                div = document.createElement("div"),
                anch = document.createElement("a");

            document.body.appendChild(div);
            div.appendChild(anch);

            anch.innerHTML = "&nbsp;";
            div.style.width = "0";
            div.style.height = "0";
            anch.href = url;
            anch.download = name;

            var ev = new MouseEvent("click", {});
            anch.dispatchEvent(ev);
            document.body.removeChild(div);
        }
    }
    LoadFromFile() {

        var file = document.getElementById('input').files[0];

        startRead()
        function startRead() {
            // obtain input element through DOM
            if (file) {
                getAsText(file);
            }
        }

        function getAsText(readFile) {

            var reader = new FileReader();

            // Read file into memory as UTF-16
            reader.readAsText(readFile, "UTF-8");

            // Handle progress, success, and errors
            reader.onprogress = updateProgress;
            reader.onload = loaded;
            reader.onerror = errorHandler;
        }

        function updateProgress(evt) {
            if (evt.lengthComputable) {
                // evt.loaded and evt.total are ProgressEvent properties
                var loaded = (evt.loaded / evt.total);
                if (loaded < 1) {
                    // Increase the prog bar length
                    // style.width = (loaded * 200) + "px";
                }
            }
        }

        function loaded(evt) {
            // Obtain the read file data
            var fileString = evt.target.result;
            var obj = JSON.parse(fileString);
            for (let i = 0; i < obj.length; i++) {
                var canvas = document.getElementById(obj[i].id)
                var ctx = canvas.getContext("2d")
                ctx.beginPath()
                ctx.drawImage(img, obj[i].x, obj[i].y, 45.5, 45.5, 0, 0, 30, 30);

            }
        }
        function errorHandler(evt) {
            if (evt.target.error.name == "NotReadableError") {
                // The file could not be read
            }
        }


    }
    Paste() {
        var moveenable = true;
        this.temporarytab = [];
        this.b = 33;
        for (let i = 0; i < 40; i++) {

            this.a = 0;
            for (let j = 0; j < 40; j++) {

                var canvas = document.createElement("CANVAS");
                canvas.id = "r" + i + "r" + j;

                for (let k = 0; k < this.saveditems.length; k++) {
                    if (this.saveditems[k].id == canvas.id) {
                        canvas.className = "paste";
                        canvas.height = 30;
                        canvas.width = 30;
                        canvas.style.position = "absolute";
                        canvas.style.left = this.a + "px";
                        canvas.style.top = this.b + "px";
                        var ctx = canvas.getContext("2d")
                        ctx.beginPath()
                        ctx.drawImage(this.img, this.saveditems[k].x, this.saveditems[k].y, 45.5, 45.5, 0, 0, 30, 30);
                        document.getElementById("temporarypaste").append(canvas)

                        var obj = { i: i, j: j, x: this.saveditems[k].x, y: this.saveditems[k].y }
                        this.temporarytab.push(canvas)
                        topaste.push(obj)
                        this.a += 33;
                    }

                }

            }
            this.b += 33;
        }
        var pastediv = document.getElementById("temporarypaste")
        pastediv.style.display = "block";

        var left = this.temporarytab[0].style.left.split("p")
        var top = this.temporarytab[0].style.top.split("p")



        document.getElementById("right").addEventListener("mouseover", (ev) => {
            if (moveenable == true) {
                console.log(Math.round(Math.round(ev.pageX / 33) * 33))
                if (Math.round(Math.round(ev.pageX / 33) * 33) > 670 && Math.round(Math.round((ev.pageX - left[0]) / 33) * 33) < 1950 && (Math.round(Math.round(ev.pageY / 33) * 33) - 17) > 50) {


                    pastediv.style.left = Math.round(Math.round(((ev.pageX - left[0]) / 33) - 0.5) * 33) + 2 + "px";
                    pastediv.style.top = Math.round(Math.round((ev.pageY - top[0]) / 33) * 33) - 17 + "px";

                }


                for (let i = 0; i < allcanvases.length; i++) {
                    document.getElementById(allcanvases[i].id).addEventListener("click", () => {
                        if (topaste[0] != undefined) {
                            var helpx = allcanvases[i].id.split("r")
                            var counti = topaste[0].i - parseInt(helpx[1]);
                            var countj = topaste[0].j - parseInt(helpx[2]);

                            for (let j = 0; j < topaste.length; j++) {

                                var firstid = topaste[j].i - counti
                                var secondid = topaste[j].j - countj
                                var canvas = document.getElementById("r" + firstid + "r" + secondid)
                                if (canvas != null) {
                                    for (let l = 0; l < allcanvases.length; l++) {
                                        if ("r" + firstid + "r" + secondid == allcanvases[l].id) {
                                            var xundo = allcanvases[l].x
                                            var yundo = allcanvases[l].y
                                            undooneelement.push({ id: allcanvases[l].id, x: xundo, y: yundo })

                                            allcanvases[l].x = this.saveditems[j].x;
                                            allcanvases[l].y = this.saveditems[j].y;


                                        }
                                    }

                                    var ctx = canvas.getContext("2d")
                                    ctx.beginPath()
                                    ctx.drawImage(img, topaste[j].x, topaste[j].y, 45.5, 45.5, 0, 0, 30, 30);
                                }
                            }
                            undo.push(undooneelement)
                            undooneelement = [];
                            pastediv.style.display = "none";
                            pastediv.innerHTML = "";
                            topaste = [];


                        }
                        this.pasteongo = true;
                        moveenable = false;
                    }, false)

                }

            }
        })

    }

    Copy() {

        this.saveditems = []
        for (let j = 0; j < allcanvases.length; j++) {

            if (this.deletetab.includes(allcanvases[j].id) && !this.saveditems.includes(allcanvases[j]) && document.getElementById(allcanvases[j].id).className == "clicked") {
                var obj = { id: allcanvases[j].id, x: allcanvases[j].x, y: allcanvases[j].y }

                this.saveditems.push(obj)
            }

        }

    }


}