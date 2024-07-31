function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
      
  
    if (document.getElementById("texto").value.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito";
     
      document.getElementById("muñeco") .src="imagenes.img/encriptado.jpg";
      document.getElementById("parrafo").textContent = "";
      
      
    } else {
        document.getElementById("muñeco").src="imagenes.img/muñeco.png"
        document.getElementById("titulo-mensaje").textContent = "Ningún mensaje fue encontrado";
        document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto");
      
    }
  }


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "imagenes.img/desencriptado.jpg";
      } else {
        muñeco.src = "imagenes.img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto");
      }
  }