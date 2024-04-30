<script src="https://smtpjs.com/v3/smtp.js"></script>

function sendEmail(){Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sasankkanchrla30@gmail.com",
    Password : "password",
    To : 'kancharlasasank30@gmail.com',
    From : document.getElementById("Email").value,
    Subject : "new contactform",
    Body : "Name:"+document.getElementById("Name").value
    +"<br> Email :"
}).then(
  message => alert(message)
);}
