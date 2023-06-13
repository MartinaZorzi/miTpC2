document.getElementById('menu').addEventListener('click',function () {
    document.getElementById('navega').classList.toggle('mostrar');

})


lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': "Imagen %1 de %2",
      'maxWidth' : 300,
      'positionFromTop': 250,
      'imageFadeDuration': 1500
    })

    document.getElementById('boton').addEventListener('click', function () {

      if (document.getElementById('miVideo').paused)
          document.getElementById('miVideo').play();
  
      else
  
  
          document.getElementById('miVideo').pause();
  
  
  
  })

 