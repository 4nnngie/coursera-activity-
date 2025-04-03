function submitFeedback() {
    // Obtener los valores de los campos del formulario
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Mostrar mensaje de agradecimiento
    alert('Thank you for your valuable feedback'); 

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback; 

    document.getElementById('userInfo').style.display = 'block';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
 


// Asignar la función al botón de envío (esto debe estar FUERA de la función)
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
