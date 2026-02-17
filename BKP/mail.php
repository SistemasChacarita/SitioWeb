 
     
<?php



if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

    require 'assets/phpmailer/PHPMailer.php';
    require 'assets/phpmailer/Exception.php';
    use PHPMailer\PHPMailer\PHPMailer;
 

    $email = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $nombres = $_POST['nombres'];
    $apellido = $_POST['apellido'];

    $genero = $_POST['genero']; 
    $direccion = $_POST['direccion'];
    $provincia = $_POST['provincia'];
    $localidad = $_POST['localidad'];

    $fechanacimiento = $_POST['fechanacimiento'];


    $cp = $_POST['cp'];
    $tipoDocumento = $_POST['tipoDocumento'];
    $ndocumento = $_POST['ndocumento'];

    $profesion = $_POST['profesion'];
    $observaciones = $_POST['observaciones'];
    $foto = $_FILES['foto'];
    $fotoDNIfrente = $_FILES['fotoDNIfrente'];
    $fotoDNIreverso = $_FILES['fotoDNIreverso'];


if( empty(trim($nombres)) ) $nombres = 'anonimo';
if( empty(trim($apellido)) ) $apellido = '';

$body = <<<HTML
    <h3>Contacto desde la web, para hacerse socio.</h3>
    <hr>
    <p>Nombre Completo: $nombres $apellido</p>
    <p>Género: $genero</p>
    <p>Fecha de nacimiento: $fechanacimiento</p>
    <p>Tipo documento y número: $tipoDocumento - $ndocumento </p>
    <p>Telefono: $telefono Mail:  $email</p>
    <p>Dirección: $direccion Código postal:  $cp</p>
    <p>Localidad: $localidad Provincia: $provincia</p>
    <p>Profesión: $profesion</p>
    <p>observaciones : $observaciones</p>


    
HTML;



$mailer = new PHPMailer();
$mailer->setFrom( $email, "$nombre $apellido" );
$mailer->addAddress('infosocios@chacaritajuniors.com.ar','Sitio web, nuevo socio');
$mailer->Subject = "Nuevo Socio $nombres $apellido";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

if( $foto['size'] > 0 ){
    $mailer->addAttachment( $foto['tmp_name'], $foto['name'] );
}

if( $fotoDNIfrente['size'] > 0 ){
    $mailer->addAttachment( $fotoDNIfrente['tmp_name'], $fotoDNIfrente['name'] );
}

if( $fotoDNIreverso['size'] > 0 ){
    $mailer->addAttachment( $fotoDNIreverso['tmp_name'], $fotoDNIreverso['name'] );
}

$rta = $mailer->send( );



// $headers = "MIME-Version: 1.0 \r\n";
// $headers.= "Content-type: text/html; charset=utf-8 \r\n";
// $headers.= "From: Nuevo Socio <$email> \r\n";
// $headers.= "To: Sitio web, nuevo socio <infosocios@chacaritajuniors.com.ar> \r\n";
 
// $rta = mail('infosocios@chacaritajuniors.com.ar', "Nuevo Socio $nombres $apellido", $body, $headers );
 

header("Location: index.html" );
 
?>