document.addEventListener('DOMContentLoaded', function () { /**/    
  document.getElementById('appointment').addEventListener('submit', function(e) 
  {
        /* e.preventDefault();  */// Evita el envío del formulario
        
    // Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const lastNa = document.getElementById('lastNa').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;    
                
            //validación de email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email))
    {
      /*   document.getElementById('confirmationMessage').textContent ='Por favor revisa la informacíon e   intenta nuevamente'
          sustituimos por sweetsalert */
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El formato de correo no es correcto.",
                
              });
              return;  
        }
        
         /*Validación para que el numero de telefono sea 10 digitos */
         const phonePAttern =  /^\d{10}$/; 
         if (!phonePAttern.test(phone)){
             /* document.getElementById('confirmationMessage').textContent = 'Por favor revisa la informacíon e intenta nuevamente' */
             Swal.fire("Ingresa un número de Telefono valido.")

             return;
         }        

         /*Validacion de fecha para cita */
         const today = new Date().toISOString().split('T')[0];
         if (date < today){
            /*  document.getElementById('confirmationMessage').textContent ='Por favor revisa la informacíon e intenta nuevamente' */
             Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: "La fecha de cita no puede ser menor a HOY",
                 
               });
             return;

         }

          /*Logica para que la hr sea mayor a 1 hr de la hora de ingreso*/

          const selectedTime = new Date (`${date}T${time}`);
          const currectTime = new Date();
          const minimumTime = new Date(currectTime.getTime () + 2 * 60 *60 * 1000);
 
          if (selectedTime < minimumTime){
             /* document.getElementById('confirmationMessage').textContent = 'Por favor selecciona otra Hora' */
             Swal.fire("Selecciona otra hora por favor.")

             return;
          }
        
        // Valida que todos los campos tengan valor
        if (nombre && date && time && email || phone) {
            // Muestra un mensaje de confirmación
            /* document.getElementById('confirmationMessage').textContent ='hola mundo */
             Swal.fire({
                title: "Gracias!",
                text: `Cita agendada para ${nombre} ${lastNa} el ${date} a las ${time}.`,
                icon: "success"
                
            });
                
            // Limpia los campos del formulario
            document.getElementById('appointment').reset();
         
            
        } else {
            
        // Muestra un mensaje de error
        document.getElementById('confirmationMessage').textContent = 'Por favor, completa todos los campos.';
    }
  });

})
