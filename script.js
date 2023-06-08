
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-agregar').addEventListener('click', function() {
        var comentario = document.getElementById('comentario').value;
        if (comentario !== '') {
          var boton = this;
          boton.classList.add('bounce-out');
          boton.disabled = true;
          setTimeout(function() {
            boton.style.display = 'none';
            setTimeout(function() {
              boton.style.display = 'block';
              boton.disabled = false;
              boton.classList.remove('bounce-out');
            }, 700);
          }, 800);
          var listaComentarios = document.getElementById('lista-comentarios');
          var nuevoComentario = document.createElement('li');
          nuevoComentario.textContent = comentario;
          listaComentarios.appendChild(nuevoComentario);
          document.getElementById('comentario').value = '';
        }
      });
  });
  