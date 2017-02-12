//http://www.w3schools.com/jsref/met_win_open.asp
function ex1() {
    window.open();
}

//window.open(URL, name, specs, replace)
function ex2() {
    var myWindow = window.open("", "", "width=100,height=100");
    //  window.open("http://www.google.com", "mywindow", "status=1,toolbar=1");
    //myWindow.moveTo(300, 300);
}

//https://developer.mozilla.org/en-US/docs/Web/API/Window/open

var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=no,scrollbars=yes,status=yes";

var objeto = {resizable:'no'};

function openRequestedPopup() {
    windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", objeto);
}

function openRequestedPopup1() {
    windowObjectReference = window.open(
            "http://www.suasletras.com/fotos_artista/c7b0876e4415ca0b532e9a433ab40f2d.jpg",
            "DescriptiveWindowName",
            "resizable=no,scrollbars=no,status"
            );
}

function openRequestedPopup2() {
    windowObjectReference = window.open(
            "http://www.suasletras.com/fotos_artista/c7b0876e4415ca0b532e9a433ab40f2d.jpg",
            "DescriptiveWindowName",
            "width=420,height=230,resizable,scrollbars=yes,status=1"
            );
}

function Popuplink() {
    var url = "formtext2.html";
    window.open(url, 'targetWindow', 'scrollbars=yes, resizable=no');
    return false;
}

function openFFPromotionPopup() {
    console.log(windowObjectReference);
    if (windowObjectReference == null || windowObjectReference.closed)
            /* if the pointer to the window object in memory does not exist
             or if such pointer exists but the window was closed */

            {
                windowObjectReference = window.open("http://www.spreadfirefox.com/",
                        "PromoteFirefoxWindowName", "resizable,scrollbars,status");
                /* then create it. The new window will be created and
                 will be brought on top of any other window. */
            } else {
        windowObjectReference.focus();
        /* else the window reference must exist and the window
         is not closed; therefore, we can bring it back on top of any other
         window with the focus() method. There would be no need to re-create
         the window or to reload the referenced resource. */
    }

}

function ex3() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>Nome da janela: " + myWindow.name + ". I am 200px wide and 100px tall!</p>");

}

function ex4() {
    var myWindow = window.open("", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");
}

function ex5() {
    window.open("http://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

function ex6() {
    window.open("http://www.google.com/","_blank");
    window.open("http://www.w3schools.com/","_blank");
}

function openWin() {
    var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
    //??????
     myWindow.opener.document.write("<p>This is the source window!</p>");
}

function escreve() {
    var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
    myWindow.document.write("<p>This is 'myWindow'</p>");   // Text in the new window
    myWindow.opener.document.write("<p>This is the source window!</p>");  // Text in the window that created the new window
}

function escreve1() {
    myWindow = window.open();
    myWindow.location.assign("http://www.lacunacoil.it/");
}

function escreve2() {
    var myWindow = window.open();
    myWindow.location.href = "http://www.xjapanmusic.com/";
}

function escreve3() {
    window.open("http://www.w3schools.com");
}

function closeWin() {
    myWindow.close();   // Closes the new window
}

//http://www.developersite.cn/904-133940-js
function openWindow() {
    var sf = confirm('Quer digitar uma nova url?');
    if (sf == true) {
        var wz = prompt('padrão', 'https://www.google.com/');
        if (wz != null) {
            window.open(wz, '_blank', 'higth=500')   
        }          
    }
}
