const contactForm = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    //let messageText = document.getElementById("message").value.replace(/\n/g, "\\n");
    // Récupérez les données du formulaire
    const formData = {
        name: document.getElementById("name").value,
        //firstname: document.getElementById("firstname").value,
        from: document.getElementById("email").value,
        subject: "Demande de renseignements",
        message: document.getElementById("message").value,
        to: 'orange.ccx.demo+demo1@gmail.com'

    };

// Convertissez les données du formulaire en une chaîne JSON
const jsonData = JSON.stringify(formData);
console.log("jsonData",jsonData)
// Spécifiez l'URL de votre webhook
const webhookUrl = "https://cisco-portal.ccs.orange-business.com/wxccdemo/formtoemail";

//const webhookUrl = "https://hooks.us.webexconnect.io/events/4VA5LP5ZIR";

  // Envoiez les données du formulaire au webhook en utilisant fetch()
  fetch(webhookUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: jsonData
  })
  .then(response => {
      if (response.ok) {
          console.log("Données du formulaire envoyées avec succès.");
          confirmation.style.display = "block"; // Afficher la confirmation
      } else {
          console.error("Erreur lors de l'envoi des données du formulaire au webhook.");
      }
  })
  .catch(error => {
      console.error("Erreur lors de l'envoi des données du formulaire au webhook : " + error);
  });

});