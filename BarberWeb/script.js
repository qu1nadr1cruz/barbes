document.addEventListener('DOMContentLoaded', function () {
    let pinkButton = document.querySelector('.pink-button');
    let greenButton = document.querySelector('.green-button');
    let blueButton = document.querySelector('.blue-button');
    let resetButton = document.querySelector('.reset-button');
    let body = document.body;
    let header = document.querySelector('.header');
    let imgWelcome1 = document.querySelector('.welcome-1');
    let imgPrecios = document.querySelector('.precios2');
    let redes = document.querySelector('.redes-contenedor');
    let footer = document.querySelector('.footer-vg');
    

    
    let originalTextColors = getComputedStyle(document.body).color;
    let originalBackgroundColor = getComputedStyle(document.body).backgroundColor;
    let originalBackgroundImage = getComputedStyle(header).backgroundImage;
    let originalWelcome1Image = getComputedStyle(imgWelcome1).backgroundImage;
    let originalPrecios2Image = getComputedStyle(imgPrecios).backgroundImage;
    let originalRedes = getComputedStyle(redes).backgroundColor;
    let originalFooter = getComputedStyle(footer).backgroundImage;
  
    pinkButton.addEventListener('click', () => {
      header.style.backgroundImage = 'url("images/bgPink.jpg")';
      body.style.backgroundColor = 'rgba(228, 77, 102, 0.589)';
      redes.style.backgroundColor = 'rgba(228, 77, 102, 0.589)';
      imgWelcome1.style.backgroundImage = 'url("images/a1Pink.jpg")'
      imgPrecios.style.backgroundImage = 'url("images/a2Pink.jpg")'
      footer.style.backgroundImage = 'url("images/imagenfPink.jpg")'
      changeTextColors('white');
      changeParagraphColor('black','black', 'black')
      
    });
  
    greenButton.addEventListener('click', () => {
        header.style.backgroundImage = 'url("images/bgGreen.jpg")';
        body.style.backgroundColor = '#009b7d';
        redes.style.backgroundColor = '#009b7d';
        imgWelcome1.style.backgroundImage = 'url("images/a1Cyan.jpg")';
        imgPrecios.style.backgroundImage = 'url("images/a2Green.jpg")'
        footer.style.backgroundImage = 'url("images/imagenGreenjpg")'
        changeParagraphColor('black','black', 'black')
    });
  
    blueButton.addEventListener('click', () => {
        header.style.backgroundImage = 'url("images/bgBlue.jpg")';
        body.style.backgroundColor = '#5353ec';
        redes.style.backgroundColor = '#5353ec';
        imgWelcome1.style.backgroundImage = 'url("images/a1Blue.jpg")'
        footer.style.backgroundImage = 'url("images/imagenfBlue.jpg")'
        imgPrecios.style.backgroundImage = 'url("images/a2Blue.jpg")'
        changeTextColors('white');
        changeParagraphColor('black','black', 'black')
    });
  
    resetButton.addEventListener('click', () => {
      header.style.backgroundImage = originalBackgroundImage;
      body.style.backgroundColor = originalBackgroundColor;
      imgWelcome1.style.backgroundImage = originalWelcome1Image;
      imgPrecios.style.backgroundImage = originalPrecios2Image;
      footer.style.backgroundImage = originalFooter;
      redes.style.backgroundColor = originalRedes;
      resetTextColors();
      resetParagraphColors();
    });





   
  
    function changeTextColors(color) {
      document.querySelectorAll('h1, h2,   th, td').forEach((element) => {
        element.style.color = color;
      });
    }
    function resetTextColors() {
        document.querySelectorAll('h1, h2,   th, td').forEach((element) => {
          element.style.color = 'white';
        });
      }
      
      
      




    function changeParagraphColor(color){
        document.querySelectorAll('.services1 p' ).forEach((element) => {
            element.style.color = color
        })

        document.querySelectorAll('.services-txt p' ).forEach((element) => {
            element.style.color = color
        }) 
        document.querySelectorAll('.services1 h3' ).forEach((element) => {
            element.style.color = color
        })

        document.querySelectorAll('.services1 a' ).forEach((element) => {
            element.style.color = color
        })
    }

    function resetParagraphColors() {
        document.querySelectorAll('.services1 p').forEach((element) => {
          element.style.color = 'gray';
        });

        document.querySelectorAll('.services1 h3' ).forEach((element) => {
            element.style.color = 'black';
        })

        document.querySelectorAll('.services1 a' ).forEach((element) => {
            element.style.color = 'black'
        })

        document.querySelectorAll('.services-txt p' ).forEach((element) => {
            element.style.color = 'gray'
        }) 
      }
      function confirmSubmit(event) {
        var campo1 = document.getElementById("campo1");
        var campo2 = document.getElementById("campo2");
        var campo3 = document.getElementById("campo3");
        var campo4 = document.getElementById("campo4");
        var campo5 = document.getElementById("campo5");
        var enviar = document.getElementById("env");
       
        if (campo1.value === "" || campo2.value === "" || campo3.value === "" || campo4.value === "" || campo5.value === "") {
          alert("Por favor, llene todos los campos.");
        }else
          event.preventDefault(); //evita que se recargue la pagina al enviar el formulario
          
          if (campo1.value !== "" || campo2.value !== "" || campo3.value !== "" || campo4.value !== "" || campo5.value !== "") {
            alert("El formulario se ha enviado correctamente.");
          } else {
            alert("No se ha enviado el formulario.");
          }
        
      }
      document.getElementById("myForm").addEventListener("submit", confirmSubmit)
      let form = document.getElementById('myForm');
      form.addEventListener('submit', confirmSubmit);
      form.addEventListener('submit', function(){
        form.reset()
      });
      
  });



  
 