/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global nivel, conte, murphy, iconM, cartel, audio, cartel2, juego, nums, tijera */


//------------------------------------------------------------------------------------------------------------------
//JUEGO
//------------------------------------------------------------------------------------------------------------------


function Juego(cadena, murphy, nivel, tijera) {
    this.cadena = cadena;
    this.nivel = nivel;
    this.murphy = murphy;
    this.tijera = tijera;

}


Juego.prototype.crearNivel = function () {
    contnums = 0;
    for (var i = 0; i < this.nivel.length; i++) {
        this.nivel[i] = new Array(900 / 30);
        for (var j = 0; j < this.nivel[i].length; j++) {
            if (parseInt(this.cadena.substring(contnums, contnums + 1)) == 8) {
                this.nivel[i][j] = new Bloques(i * 30, j * 30, parseInt(this.cadena.substring(contnums, contnums + 1)));
                this.nivel[i][j].crearBloques();
                this.murphy.crearMurphy();
            } else if (parseInt(this.cadena.substring(contnums, contnums + 1)) == 4) {

                this.nivel[i][j] = new Bloques(i * 30, j * 30, parseInt(this.cadena.substring(contnums, contnums + 1)));
                this.nivel[i][j].crearBloques();
                tijera = new Tijeras(i * 30, j * 30);
                tijera.crearTijeras();
                //this.nivel[i][j] = this.tijera;
                //this.nivel[i][j].crearTijeras();
            }else if (parseInt(this.cadena.substring(contnums, contnums + 1)) == 9) {
                salidai=i;
                salidaj=j;
                this.nivel[i][j] = new Bloques(i * 30, j * 30, parseInt(this.cadena.substring(contnums, contnums + 1)));
                this.nivel[i][j].crearBloques();
            }
            else {
                this.nivel[i][j] = new Bloques(i * 30, j * 30, parseInt(this.cadena.substring(contnums, contnums + 1)));
                this.nivel[i][j].crearBloques();
            }
            contnums++;
        }

    }
};
Juego.prototype.caeBomba = function () {
    for (var i = 0; i < this.nivel.length; i++) {
        for (var j = 0; j < this.nivel[i].length; j++) {

            if (this.nivel[i][j].className == "bomba") //Si es bomba
            {
                if (this.nivel[i + 1][j].saberSiOculto()) { //Si no tiene bloque debajo
                    if (!(i + 1 == this.murphy.murphyi && j == this.murphy.murphyj)) { //Si no esta Murphy debajo.                     
                        this.nivel[i][j].moverBloque(i, j);
                    }

                }
            }
        }
    }
};
Juego.prototype.explosiones = function (e) {

    if (disq && e.keyCode === 32) { //Si ha cogido un disquete y ha pulsado espacio
        nivel[murphy.murphyi][murphy.murphyj].disquete();
        //nivel[murphy.murphyi][murphy.murphyj].mostrar();
        pos8 = nivel[murphy.murphyi][murphy.murphyj];
        juego.cambiarexplosion(pos8);
        console.log("murph");
        if (murphy.murphyi - 1 > 0 && murphy.murphyj - 1 > 0 && nivel[murphy.murphyi - 1][murphy.murphyj - 1].className != "pared") {//Arriba a la Izq
            if (nivel[murphy.murphyi - 1][murphy.murphyj - 1].className == "bomba") {
                nivel[murphy.murphyi - 1][murphy.murphyj - 1].className = "vacio";
                nivel[murphy.murphyi - 1][murphy.murphyj - 1].mostrar();
            }
            if (nivel[murphy.murphyi - 1][murphy.murphyj - 1].saberSiOculto()) {
                nivel[murphy.murphyi - 1][murphy.murphyj - 1].negro();
                nivel[murphy.murphyi - 1][murphy.murphyj - 1].mostrar();
            }
            pos = nivel[murphy.murphyi - 1][murphy.murphyj - 1];
            juego.cambiarexplosion(pos);
            console.log("arriba izq");
        }

        if (murphy.murphyi - 1 > 0 && nivel[murphy.murphyi - 1][murphy.murphyj].className != "pared") {//Arriba
            if (nivel[murphy.murphyi - 1][murphy.murphyj].className == "bomba") {
                nivel[murphy.murphyi - 1][murphy.murphyj].className = "vacio";
                nivel[murphy.murphyi - 1][murphy.murphyj].mostrar();
            }
            if (nivel[murphy.murphyi - 1][murphy.murphyj].saberSiOculto()) {
                nivel[murphy.murphyi - 1][murphy.murphyj].negro();
                nivel[murphy.murphyi - 1][murphy.murphyj].mostrar();
            }
            pos1 = nivel[murphy.murphyi - 1][murphy.murphyj];
            juego.cambiarexplosion(pos1);
            console.log("arriba");
        }

        if (murphy.murphyi - 1 > 0 && murphy.murphyj + 1 < nivel[0].length && nivel[murphy.murphyi - 1][murphy.murphyj + 1].className != "pared") {//Arriba a la Derecha
            if (nivel[murphy.murphyi - 1][murphy.murphyj + 1].className == "bomba") {
                nivel[murphy.murphyi - 1][murphy.murphyj + 1].className = "vacio";
                nivel[murphy.murphyi - 1][murphy.murphyj + 1].mostrar();
            }
            if (nivel[murphy.murphyi - 1][murphy.murphyj + 1].saberSiOculto()) {
                nivel[murphy.murphyi - 1][murphy.murphyj + 1].negro();
                nivel[murphy.murphyi - 1][murphy.murphyj + 1].mostrar();
            }

            pos2 = nivel[murphy.murphyi - 1][murphy.murphyj + 1];
            juego.cambiarexplosion(pos2);
            console.log("arriba derech");
        }

        if (murphy.murphyj - 1 > 0 && nivel[murphy.murphyi][murphy.murphyj - 1].className != "pared") {//Izq
            if (nivel[murphy.murphyi][murphy.murphyj - 1].className == "bomba") {
                nivel[murphy.murphyi][murphy.murphyj - 1].className = "vacio";
                nivel[murphy.murphyi][murphy.murphyj - 1].mostrar();
            }
            if (nivel[murphy.murphyi][murphy.murphyj - 1].saberSiOculto()) {
                nivel[murphy.murphyi][murphy.murphyj - 1].negro();
                nivel[murphy.murphyi][murphy.murphyj - 1].mostrar();
            }

            pos3 = nivel[murphy.murphyi][murphy.murphyj - 1];
            juego.cambiarexplosion(pos3);
            console.log("izq");
        }

        console.log(nivel[murphy.murphyi][murphy.murphyj + 1]);
        if (murphy.murphyj + 1 < nivel[0].length && nivel[murphy.murphyi][murphy.murphyj + 1].className != "pared") {//Derech
            if (nivel[murphy.murphyi][murphy.murphyj + 1].className == "bomba") {
                nivel[murphy.murphyi][murphy.murphyj + 1].className = "vacio";
                nivel[murphy.murphyi][murphy.murphyj + 1].mostrar();
            }
            if (nivel[murphy.murphyi][murphy.murphyj + 1].saberSiOculto()) {
                nivel[murphy.murphyi][murphy.murphyj + 1].negro();
                nivel[murphy.murphyi][murphy.murphyj + 1].mostrar();
            }


            pos4 = nivel[murphy.murphyi][murphy.murphyj + 1];
            juego.cambiarexplosion(pos4);
            console.log("derecg");
        }

        if (murphy.murphyi + 1 < nivel.length && murphy.murphyj - 1 > 0 && nivel[murphy.murphyi + 1][murphy.murphyj - 1].className != "pared") {//Abajo a la Izq
            if (nivel[murphy.murphyi + 1][murphy.murphyj - 1].className == "bomba") {
                nivel[murphy.murphyi + 1][murphy.murphyj - 1].className = "vacio";
                nivel[murphy.murphyi + 1][murphy.murphyj - 1].mostrar();
            }
            if (nivel[murphy.murphyi + 1][murphy.murphyj - 1].saberSiOculto()) {
                nivel[murphy.murphyi + 1][murphy.murphyj - 1].negro();
                nivel[murphy.murphyi + 1][murphy.murphyj - 1].mostrar();
            }
            pos5 = nivel[murphy.murphyi + 1][murphy.murphyj - 1];
            juego.cambiarexplosion(pos5);
            console.log("abajo izq");
        }

        if (murphy.murphyi + 1 < nivel.length && nivel[murphy.murphyi + 1][murphy.murphyj].className != "pared") {//Abajo
            if (nivel[murphy.murphyi + 1][murphy.murphyj].className == "bomba") {
                nivel[murphy.murphyi + 1][murphy.murphyj].className = "vacio";
                nivel[murphy.murphyi + 1][murphy.murphyj].mostrar();
            }
            if (nivel[murphy.murphyi + 1][murphy.murphyj].saberSiOculto()) {
                nivel[murphy.murphyi + 1][murphy.murphyj].negro();
                nivel[murphy.murphyi + 1][murphy.murphyj].mostrar();
            }
            pos6 = nivel[murphy.murphyi + 1][murphy.murphyj];
            juego.cambiarexplosion(pos6);
            console.log("abajo");
        }

        if (murphy.murphyi + 1 < nivel.length && murphy.murphyj + 1 < nivel[0].length && nivel[murphy.murphyi + 1][murphy.murphyj + 1].className != "pared") {//Abajo a la Derecha
            if (nivel[murphy.murphyi + 1][murphy.murphyj + 1].className == "bomba") {
                nivel[murphy.murphyi + 1][murphy.murphyj + 1].className = "vacio";
                nivel[murphy.murphyi + 1][murphy.murphyj + 1].mostrar();
            }
            if (nivel[murphy.murphyi + 1][murphy.murphyj + 1].saberSiOculto()) {
                nivel[murphy.murphyi + 1][murphy.murphyj + 1].negro();
                nivel[murphy.murphyi + 1][murphy.murphyj + 1].mostrar();
            }
            pos7 = nivel[murphy.murphyi + 1][murphy.murphyj + 1];
            juego.cambiarexplosion(pos7);
            console.log("abajo derech");
        }

        disq = false;
    }
}
;
Juego.prototype.cambiarexplosion = function (posicion) {
    var cont = 500;
    var primeraExplosion = true;
    var segundaExplosion = false;
    var terceraExplosion = false;
    var visibilidadExplosion = false;
    for (var i = 0; i < 4; i++) {
        setTimeout(mover, cont);
        cont = cont + 500;
    }
    function mover() {
        if (primeraExplosion) {
            posicion.bloques.style.backgroundImage = "url('explosion1.png')";
            posicion.bloques.style.visibility = "visible";
            primeraExplosion = false;
            segundaExplosion = true;
            if (posicion == nivel[murphy.murphyi][murphy.murphyj]) {
                murphyexplota = true;
                audio.pause();
                clearInterval(int);
            }
        } else if (segundaExplosion) {
            posicion.bloques.style.backgroundImage = "url('explosion2.png')";
            posicion.bloques.style.visibility = "visible";
            segundaExplosion = false;
            terceraExplosion = true;
        } else if (terceraExplosion) {
            posicion.bloques.style.backgroundImage = "url('explosion3.png')";
            posicion.bloques.style.visibility = "visible";
            terceraExplosion = false;
            visibilidadExplosion = true;
        } else if (visibilidadExplosion) {
            posicion.ocultar();
            visibilidadExplosion = false;
            primeraExplosion = true;
        }
    }


};
Juego.prototype.cosasInter = function ()
{
    juego.termina();
    juego.caeBomba();
};
Juego.prototype.termina = function () {
    if (puntos >= 10) {
        console.log(murphy.murphyi + " " + murphy.murphyj);
        if (salidai === murphy.murphyi && salidaj === murphy.murphyj) //Si está en salida
        {
            cartel.style.backgroundImage = "url('Game_Over.jpg')";
            cartel.style.visibility = "visible";
            cartel2.innerHTML = "PUNTOS : " + puntos;
            cartel2.style.visibility = "visible";
        }
    }
    if (murphyexplota) {

        cartel.style.backgroundImage = "url('Game_Over.jpg')";
        cartel.style.visibility = "visible";
        cartel2.innerHTML = "PUNTOS : " + puntos;
        cartel2.style.visibility = "visible";
    }

}
;
//------------------------------------------------------------------------------------------------------------------------
//BLOQUES
//------------------------------------------------------------------------------------------------------------------------

function Bloques(t, l, tipo) {
    this.x = l;
    this.y = t;
    this.tipo = tipo;
}

Bloques.prototype.anchoBloques = 30;
Bloques.prototype.altoBloques = 30;
Bloques.prototype.crearBloques = function () {
    this.bloques = document.createElement("div");
    this.bloques.style.width = this.anchoBloques + "px";
    this.bloques.style.height = this.altoBloques + "px";
    this.bloques.style.position = "absolute";
    this.bloques.style.left = this.x + "px";
    this.bloques.style.top = this.y + "px";
    if (this.tipo === 1) {
        this.className = 'circuito';
        this.bloques.style.backgroundImage = "url('circuito.png')";
    } else if (this.tipo === 2) {
        this.className = 'pared';
        this.bloques.style.backgroundImage = "url('pared.png')";
    } else if (this.tipo === 3) {
        this.className = 'bomba';
        this.bloques.style.backgroundImage = "url('bomba.png')";
    } //else if (this.tipo === 4) {
    //this.className = 'circuito2';
    //this.bloques.style.backgroundImage = "url('circuito2.png')";
    //} 
    else if (this.tipo === 5) {

        this.className = 'triforce';
        this.bloques.style.backgroundImage = "url('triforce.png')";
    } else if (this.tipo === 6) {

        this.className = 'disquete';
        this.bloques.style.backgroundImage = "url('disquete.png')";
    } else if (this.tipo == 9) {
        this.className = 'salida';
        this.bloques.style.backgroundImage = "url('salida.png')";
    } else if (this.tipo === 7) { //Bloques negros
        this.className = "vacio";
        this.bloques.style.visibility = "hidden";
    }

    document.getElementById("contenedor").appendChild(this.bloques);
}


Bloques.prototype.saberSiOculto = function () {

    if (this.bloques.style.visibility == 'hidden') {
        return true;
    }
    return false;
};
Bloques.prototype.moverBloque = function (alto, ancho) {
    nivel[alto][ancho].ocultar();
    nivel[alto][ancho] = new Bloques(alto * 30, ancho * 30, 7);
    nivel[alto][ancho].crearBloques();
    nivel[alto + 1][ancho] = new Bloques((alto + 1) * 30, ancho * 30, 3);
    nivel[alto + 1][ancho].crearBloques();
}

Bloques.prototype.ocultar = function () {
    this.bloques.style.visibility = 'hidden';
};
Bloques.prototype.mostrar = function () {
    this.bloques.style.visibility = 'visible';
};
Bloques.prototype.negro = function () {
    this.bloques.style.backgroundImage = "url('negro.jpg')";
};
Bloques.prototype.disquete = function () {
    this.bloques.style.backgroundImage = "url('disquete.png')";
};
//---------------------------------------------------------------------------------------------------------------
//TIJERAS
//---------------------------------------------------------------------------------------------------------------


function Tijeras(t, l) {
    this.x = l;
    this.y = t;
    this.tijerasj = 0;
    this.tijerasi = 0;
}

Tijeras.prototype.anchotijeras = 30;
Tijeras.prototype.altotijeras = 30;
Tijeras.prototype.incremento = 30;
Tijeras.prototype.url = "url('tijeras.png')";
Tijeras.prototype.crearTijeras = function () {
    this.tijeras = document.createElement("div"); //this.murphy es el ojeto DOM que se va a ver en pantalla
    this.tijeras.style.width = this.anchotijeras + "px";
    this.tijeras.style.height = this.altotijeras + "px";
    this.tijeras.style.position = "absolute";
    this.tijeras.style.left = this.x + "px";
    this.tijeras.style.top = this.y + "px";
    //this.tijeras.style.zIndex = "-99"; 
    this.tijerasi = this.y / this.altotijeras;
    this.tijerasj = this.x / this.anchotijeras;
    this.tijeras.style.backgroundImage = this.url;
    this.tijeras.className = 'cerrada';
    document.getElementById("contenedor").appendChild(this.tijeras);
};
Tijeras.prototype.moverTijeras = function () {


    if (this.tijerasj - 1 >= 0 && izq && nivel[this.tijerasi][this.tijerasj - 1].saberSiOculto()) {//Izq
        console.log("IZQ");
        nivel[this.tijerasi][this.tijerasj].ocultar();
        this.tijerasj = this.tijerasj - 1;
        this.x -= this.incremento;
        tijera.cambiarTijeras('izquierda');
    } else {
        izq = false;
    }
    if (this.tijerasi - 1 > 0 && arriba && nivel[this.tijerasi - 1][this.tijerasj].saberSiOculto()) {//Arriba
        console.log("Arriba");
        this.tijerasi = this.tijerasi - 1;
        this.y -= this.incremento;
        tijera.cambiarTijeras('arriba');
    } else {
        arriba = false;
    }
    if (this.tijerasj + 1 < nivel[0].length && !izq && nivel[this.tijerasi][this.tijerasj + 1].saberSiOculto()) {//Derecha  
        console.log("Derecha");
        this.tijerasj = this.tijerasj + 1;
        this.x += this.incremento;
        tijera.cambiarTijeras('derecha');
    } else {
        console.log("dentro");
        izq = true;
    }
    if (this.tijerasi + 1 < nivel.length && !arriba && nivel[this.tijerasi + 1][this.tijerasj].saberSiOculto()) {//Abajo
        console.log("Abajo");
        this.tijerasi = this.tijerasi + 1;
        this.y += this.incremento;
        tijera.cambiarTijeras('abajo');
    } else {
        arriba = true;
    }



    this.tijeras.style.left = this.x + "px";
    this.tijeras.style.top = this.y + "px";
    tijera.colisionTijeras();
};
Tijeras.prototype.cambiarTijeras = function (direc) {
    if (direc == 'izquierda') {
        if (this.tijeras.className == "cerrada") {
            this.tijeras.style.backgroundImage = "url('tijeras1.png')";
            this.tijeras.className = "abierta";
        } else if (this.tijeras.className == "abierta") {
            this.tijeras.style.backgroundImage = "url('tijeras.png')";
            this.tijeras.className = "cerrada";
        }
    }
    if (direc == 'derecha') {
        if (this.tijeras.className == "cerrada") {
            this.tijeras.style.backgroundImage = "url('tijeras7.png')";
            this.tijeras.className = "abierta";
        } else if (this.tijeras.className == "abierta") {
            this.tijeras.style.backgroundImage = "url('tijeras6.png')";
            this.tijeras.className = "cerrada";
        }
    }
    if (direc == 'arriba') {
        if (this.tijeras.className == "cerrada") {
            this.tijeras.style.backgroundImage = "url('tijeras3.png')";
            this.tijeras.className = "abierta";
        } else if (this.tijeras.className == "abierta") {
            this.tijeras.style.backgroundImage = "url('tijeras2.png')";
            this.tijeras.className = "cerrada";
        }
    }
    if (direc == 'abajo') {
        if (this.tijeras.className == "cerrada") {
            this.tijeras.style.backgroundImage = "url('tijeras5.png')";
            this.tijeras.className = "abierta";
        } else if (this.tijeras.className == "abierta") {
            this.tijeras.style.backgroundImage = "url('tijeras4.png')";
            this.tijeras.className = "cerrada";
        }
    }


};
Tijeras.prototype.colisionTijeras = function () {
    if (this.tijerasi === murphy.murphyi && this.tijerasj === murphy.murphyj) {

        murphyexplota = true;
        audio.pause();
        clearInterval(int);
    }

};
//---------------------------------------------------------------------------------------------------------------
//MURPHY
//---------------------------------------------------------------------------------------------------------------


function Murphy(t, l) {
    this.x = l;
    this.y = t;
    this.murphyj = 0;
    this.murphyi = 0;
}

Murphy.prototype.anchomurphy = 30;
Murphy.prototype.altomurphy = 30;
Murphy.prototype.incremento = 30;
Murphy.prototype.url = "url('Murphy.png')";
Murphy.prototype.crearMurphy = function () {
    this.murphy = document.createElement("div"); //this.murphy es el ojeto DOM que se va a ver en pantalla
    this.murphy.style.width = this.anchomurphy + "px";
    this.murphy.style.height = this.altomurphy + "px";
    this.murphy.style.position = "absolute";
    this.murphy.style.left = this.x + "px";
    this.murphy.style.top = this.y + "px";
    this.murphy.style.zIndex = "-99";
    this.murphyi = this.y / this.altomurphy;
    this.murphyj = this.x / this.anchomurphy;
    this.murphy.style.backgroundImage = this.url;
    this.murphy.className = 'abierta';
    document.getElementById("contenedor").appendChild(this.murphy);
}
Murphy.prototype.moverMurphy = function (direccion) {

    if (direccion == "derecha") {
        if (this.murphyj + 1 <= nivel[this.murphyi].length) {

            if (nivel[this.murphyi][this.murphyj + 1].className == "circuito") {
                nivel[this.murphyi][this.murphyj + 1].ocultar();
                this.murphyj = this.murphyj + 1;
                puntos = puntos + 1;
                this.x += this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
            if (nivel[this.murphyi][this.murphyj + 1].className == "bomba") {
                return false;
            }
            if (nivel[this.murphyi][this.murphyj + 1].className == "pared") {
                return false;
            }
            if (nivel[this.murphyi][this.murphyj + 1].className == "circuito2") {
                nivel[this.murphyi][this.murphyj + 1].ocultar();
                this.murphyj = this.murphyj + 1;
                puntos = puntos + 2;
                this.x += this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
            if (nivel[this.murphyi][this.murphyj + 1].className == "triforce") {
                nivel[this.murphyi][this.murphyj + 1].ocultar();
                this.murphyj = this.murphyj + 1;
                puntos = puntos + 3;
                this.x += this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }

            if (nivel[this.murphyi][this.murphyj + 1].className == "disquete") {
                nivel[this.murphyi][this.murphyj + 1].ocultar();
                this.murphyj = this.murphyj + 1;
                disq = true;
                this.x += this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            } else {
                this.murphyj = this.murphyj + 1;
                this.x += this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
        }
    }

    if (direccion == "izquierda") {
        if (this.murphyj - 1 >= 0) {
            if (nivel[this.murphyi][this.murphyj - 1].className == "circuito") {
                nivel[this.murphyi][this.murphyj - 1].ocultar();
                this.murphyj = this.murphyj - 1;
                puntos = puntos + 1;
                this.x -= this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
            if (nivel[this.murphyi][this.murphyj - 1].className == "bomba") {
                return false;
            }
            if (nivel[this.murphyi][this.murphyj - 1].className == "pared") {
                return false;
            }
            if (nivel[this.murphyi][this.murphyj - 1].className == "circuito2") {
                nivel[this.murphyi][this.murphyj - 1].ocultar();
                this.murphyj = this.murphyj - 1;
                puntos = puntos + 2;
                this.x -= this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
            if (nivel[this.murphyi][this.murphyj - 1].className == "triforce") {
                nivel[this.murphyi][this.murphyj - 1].ocultar();
                this.murphyj = this.murphyj - 1;
                puntos = puntos + 3;
                this.x -= this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
            if (nivel[this.murphyi][this.murphyj - 1].className == "disquete") {
                nivel[this.murphyi][this.murphyj - 1].ocultar();
                this.murphyj = this.murphyj - 1;
                disq = true;
                this.x -= this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            } else {
                this.murphyj = this.murphyj - 1;
                this.x -= this.incremento;
                this.murphy.style.left = this.x + "px";
                return true;
            }
        }
    }
    if (direccion == "arriba") {
        if (this.murphyi - 1 >= 0) {
            if (nivel[this.murphyi - 1][this.murphyj].className == "circuito") {
                nivel[this.murphyi - 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi - 1;
                puntos = puntos + 1;
                this.y -= this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi - 1][this.murphyj].className == "bomba") {
                return false;
            }
            if (nivel[this.murphyi - 1][this.murphyj].className == "pared") {
                return false;
            }
            if (nivel[this.murphyi - 1][this.murphyj].className == "circuito2") {
                nivel[this.murphyi - 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi - 1;
                puntos = puntos + 2;
                this.y -= this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi - 1][this.murphyj].className == "triforce") {
                nivel[this.murphyi - 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi - 1;
                puntos = puntos + 3;
                this.y -= this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi - 1][this.murphyj].className == "disquete") {
                nivel[this.murphyi - 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi - 1;
                disq = true;
                this.y -= this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            } else {
                this.murphyi = this.murphyi - 1;
                this.y -= this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
        }
    }
    if (direccion == "abajo") {
        if (this.murphyi + 1 <= nivel.length) {
            if (nivel[this.murphyi + 1][this.murphyj].className == "circuito") {
                nivel[this.murphyi + 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi + 1;
                puntos = puntos + 1;
                this.y += this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi + 1][this.murphyj].className == "bomba") {
                return false;
            }
            if (nivel[this.murphyi + 1][this.murphyj].className == "pared") {
                return false;
            }
            if (nivel[this.murphyi + 1][this.murphyj].className == "circuito2") {
                nivel[this.murphyi + 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi + 1;
                puntos = puntos + 2;
                this.y += this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi + 1][this.murphyj].className == "triforce") {
                nivel[this.murphyi + 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi + 1;
                puntos = puntos + 3;
                this.y += this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
            if (nivel[this.murphyi + 1][this.murphyj].className == "disquete") {
                nivel[this.murphyi + 1][this.murphyj].ocultar();
                this.murphyi = this.murphyi + 1;
                disq = true;
                this.y += this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            } else {
                this.murphyi = this.murphyi + 1;
                this.y += this.incremento;
                this.murphy.style.top = this.y + "px";
                return true;
            }
        }
    }
    return false;
};
Murphy.prototype.cambiaFotoMuphy = function (direc) {
    if (direc == 'derecha') {
        if (this.murphy.className == "abierta") {
            this.murphy.style.backgroundImage = "url('Murphy2.png')";
            this.murphy.className = "cerrada";
        } else if (this.murphy.className == "cerrada") {
            this.murphy.style.backgroundImage = "url('Murphy.png')";
            this.murphy.className = "abierta";
        }
    }
    if (direc == 'izquierda') {
        if (this.murphy.className == "abierta") {
            this.murphy.style.backgroundImage = "url('Murphy4.png')";
            this.murphy.className = "cerrada";
        } else if (this.murphy.className == "cerrada") {
            this.murphy.style.backgroundImage = "url('Murphy3.png')";
            this.murphy.className = "abierta";
        }
    }


};
function teclado(e) {
    if (e.keyCode === 39 && murphy.moverMurphy("derecha")) { //derecha
        murphy.cambiaFotoMuphy('derecha');
    } else if (e.keyCode === 37 && murphy.moverMurphy("izquierda")) { //izquierda
        murphy.cambiaFotoMuphy('izquierda');
    } else if (e.keyCode === 38 && murphy.moverMurphy("arriba")) { //arriba
    } else if (e.keyCode === 40 && murphy.moverMurphy("abajo")) { //abajo
    }

}
;
function musica(e) {
    if (!empezado) {
        audio.play();
        audio.loop = true;
        empezado = true;
    }
    if (e.target.id === "volumenimg") {
        audio.pause();
        iconM.src = "mute.png";
        iconM.id = "muteimg";
    } else if (e.target.id === "muteimg") {
        audio.play();
        audio.loop = true;
        iconM.src = "volumen.png";
        iconM.id = "volumenimg";
    }
}
;

function botones(e) {
    entra = false;
    if (e.target.id == 'bt1') {
        juego = new Juego(nums1, murphy, nivel, tijera);
        entra = true;

    }
    if (e.target.id == 'bt2') {
        juego = new Juego(nums2, murphy, nivel, tijera);
        entra = true;
    }


    if (entra === true) {
        cartel3.style.visibility = 'hidden';
        iconM.style.visibility = 'visible';
        bt1.style.visibility = 'hidden';
        bt2.style.visibility = 'hidden';

        juego.crearNivel();
        document.addEventListener("click", musica);
        setInterval(function () {
            juego.cosasInter();
        }, 1);
        int = setInterval(function () {
            tijera.moverTijeras();
        }, 100);
        musica();
    }
}

function principal(e) {
    if (!empezado) {

        if (e.keyCode === 32 && !murphyexplota) {
            clearInterval(interv);
            cartel3.style.backgroundImage = "url('titulo.png')";

            bt1.style.visibility = 'visible';
            bt2.style.visibility = 'visible';

        }

    }
}
function cambiarCartel() {
    if (cartel3.className == '1') {
        cartel3.style.backgroundImage = "url('titulo2.png')";
        cartel3.className = '2';
        return true;
    } else {
        cartel3.style.backgroundImage = "url('titulo.png')";
        cartel3.className = '1';
        return true;
    }
    return false;
}
;



window.onload = function () {

    //Contenedor
    conte = document.getElementById("contenedor");
    conteH = conte.offsetHeight;

    //Cartel
    cartel = document.getElementById("cartel");
    cartel2 = document.getElementById("cartel2");
    cartel3 = document.getElementById("cartel3");
    cartel3.style.backgroundImage = "url('titulo.png')";
    cartel3.className = '1';

    //Botones
    bt1 = document.getElementById("bt1");
    bt2 = document.getElementById("bt2");
    bt1.style.backgroundImage = "url('level1.png')";
    bt2.style.backgroundImage = "url('level2.png')";


    //Puntos
    puntos = 0;

    //Variables
    audio = new Audio('Musica.mp3');
    empezado = false;
    musicaAc = false;
    disq = false;
    murphyexplota = false;
    izq = true;
    arriba = true;
    salidai = 0;
    salidaj = 0;

    //Imagenes sonido
    iconM = document.createElement("IMG");
    iconM.style.position = "absolute";
    iconM.style.width = 30 + "px";
    iconM.style.height = 30 + "px";
    iconM.id = "volumenimg";
    iconM.src = "volumen.png";
    iconM.style.visibility = 'hidden';
    document.body.appendChild(iconM);
    murphy = new Murphy(570, 0);
    nivel = new Array(conteH / 30);

    nums2 = "333333333333333333333333333329"
            + "333333333333333333333333333323"
            + "111111111111111111111111111131"
            + "122222222222222222222222222213"
            + "111111111111111111111111111111"
            + "222222222222222122222222222222"
            + "777777777777777777777777777774"
            + "722222222222222222222222222222"
            + "777777777777777777777777777777"
            + "122222222222222222222222222212"
            + "112111111111111111111352222231"
            + "112111111111111111111355555551"
            + "112111111232221111111322222221"
            + "112111111255521111111121111111"
            + "112111111255521111111121111111"
            + "112111111255513111111121111111"
            + "113111116222221111111121111111"
            + "223222222222222222222222222221"
            + "111111111111111111111111111111"
            + "811111111111111111111111111111";

    nums1 = "333333333333333333333333333333"
            + "333333333333333333333333333333"
            + "111111111111111111111111111111"
            + "122222222222222222222222222211"
            + "111111112111111111111111111111"
            + "122222222122222222222222222227"
            + "111111112121111111112555555537"
            + "122222222121222222212222222227"
            + "777777772121211111212555555537"
            + "722222222121212221212222222222"
            + "772111112121212921212355555531"
            + "772111112121211121212365555551"
            + "772111112121222221212322222221"
            + "772111112121111111212121111111"
            + "772111112122222222212121111111"
            + "772111112111111111112121111111"
            + "772111116222222222222121111111"
            + "743111111111111111111111111111"
            + "223222222222222222222222222221"
            + "811111111111111111111111111111";



    tijera = new Tijeras(180, 180);
    juego = new Juego(nums1, murphy, nivel, tijera);
    document.addEventListener('keydown', teclado);
    document.addEventListener('keydown', juego.explosiones);
    document.addEventListener('click', botones);
    even = document.addEventListener('keydown', principal);
    interv = setInterval(cambiarCartel, 1000);

};
