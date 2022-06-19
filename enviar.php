 <?php

 $name = $_POST['name'];
 $phone = $_POST['phone'];
 $lastname = $_POST['lastname'];
 $mail = $_POST['mail'];
 $servicio = $_POST['servicio'];
 $message = $_POST['message'];
 $contacto = $_POST['contacto'];

 $header = 'From ' . $mail . " \r\n";
 $header .= "X-Mailer: PHP/ " . phpversion() . " \r\n";
 $header .= "Mime-Version: 1.0 \r\n";
 $header .= "Content-Type: text/plain";

 $message = "Este mensaje fue enviado por " . $name . " \r\n";
 $message = "Su email es " . $mail . " \r\n";
 $message = "Teléfono de contacto " . $phone . " \r\n";
 $message = "Mensaje " . $_POST['message'] . " \r\n";
 $message = "Enviado el " . date('d/m/Y', time()) . " \r\n";

 $para = 'salvador.ambriz.maya@gmail.com';
 $asunto = 'Solicitud de cita'

 mail($para, $asunto, utf8_decode($message), $header);

 header("Location:index.html");
 ?>




