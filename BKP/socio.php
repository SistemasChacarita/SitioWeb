<?php
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
if(isset($_POST['submit'])){
    // Get the submitted form data
    $postData = $_POST;
    $email = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $nombres = $_POST['nombres'];
    $apellido = $_POST['apellido'];

    $genereM = $_POST['genereM'];
    $genereF = $_POST['genereF'];
    $direccion = $_POST['direccion'];
    $provincia = $_POST['provincia'];
    $localidad = $_POST['localidad'];

    $fechanacimiento = $_POST['fechanacimiento'];


    $cp = $_POST['cp'];
    $tipoDocumento = $_POST['tipoDocumento'];
    $ndocumento = $_POST['ndocumento'];


    $observaciones = $_POST['observaciones'];
    
    // Check whether submitted data is not empty
    if(!empty($email) && !empty($nombres) && !empty($apellido) && !empty($observaciones)){
        
        // Validate email
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            $statusMsg = 'Por favor ingrese un mail valido';
        }else{
            $uploadStatus = 1;
            
            // Upload attachment file
            if(!empty($_FILES["attachment"]["name"])){
                
                // File path config
                $targetDir = "uploads/";
                $fileName = basename($_FILES["attachment"]["name"]);
                $targetFilePath = $targetDir . $fileName;
                $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
                
                // Allow certain file formats
                $allowTypes = array('pdf', 'jpg', 'png', 'jpeg');
                if(in_array($fileType, $allowTypes)){
                    // Upload file to the server
                    if(move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath)){
                        $uploadedFile = $targetFilePath;
                    }else{
                        $uploadStatus = 0;
                        $statusMsg = "Lo siento, hubo un error al subir el/los archivos.";
                    }
                }else{
                    $uploadStatus = 0;
                    $statusMsg = 'Lo siento, solo archivos PDF, JPG, JPEG y PNG pueden subirse.';
                }
            }
            
            if($uploadStatus == 1){
                
                // Recipient
                $toEmail = 'hjcasalderrey@gmail.com';

                // Sender
                $from = 'hjcasalderrey@gmail.com';
                $fromName = 'Chacarita Juniors web oficial';
                
                // Subject
                $emailSubject = ':: Nuevo Socio ::' 
                
                // Message 

                $contenido = "Has enviado un mensaje desde la web\n";
                   


                $htmlContent = '<h2>Contact Request Submitted</h2>';
                    // <p><b>Nombre:</b> '.$nombres.'</p>
                    //  <p><b>Apellido:</b> '.$apellido.'</p>
                    // <p><b>Email:</b> '.$email.'</p>
        
                    // <p><b>Observaciones:</b><br/>'.$observaciones.'</p>';
                
                // Header for sender info
                $headers = "From: $email\n" 
 . "Reply-To: $email\n";

                if(!empty($uploadedFile) && file_exists($uploadedFile)){
                    
                    // Boundary 
                    $semi_rand = md5(time()); 
                    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
                    
                    // Headers for attachment 
                    $headers .= "nMIME-Version: 1.0n" . "Content-Type: multipart/mixed;n" . " boundary="{$mime_boundary}""; 
                    
                    // Multipart boundary 
                    $observaciones = "--{$mime_boundary}n" . "Content-Type: text/html; charset="UTF-8"n" .
                    "Content-Transfer-Encoding: 7bitnn" . $contenido . "nn"; 
                    
                    // Preparing attachment
                    if(is_file($uploadedFile)){
                        $observaciones .= "--{$mime_boundary}n";
                        $fp =    @fopen($uploadedFile,"rb");
                        $data =  @fread($fp,filesize($uploadedFile));
                        @fclose($fp);
                        $data = chunk_split(base64_encode($data));
                        $observaciones .= "Content-Type: application/octet-stream; name="".basename($uploadedFile).""n" . 
                        "Content-Description: ".basename($uploadedFile)."n" .
                        "Content-Disposition: attachment;n" . " filename="".basename($uploadedFile).""; size=".filesize($uploadedFile).";n" . 
                        "Content-Transfer-Encoding: base64nn" . $data . "nn";
                    }
                    
                    $observaciones .= "--{$mime_boundary}--";
                    $returnpath = "-f" . $email;
                    
                    // Send email
                    $mail = mail($toEmail, $emailSubject, $observaciones, $headers, $returnpath);
                    
                    // Delete attachment file from the server
                    @unlink($uploadedFile);
                }else{
                     // Set content-type header for sending HTML email
                    $headers .= "rn". "MIME-Version: 1.0";
                    $headers .= "rn". "Content-type:text/html;charset=UTF-8";
                    
                    // Send email
                    $mail = mail($toEmail, $emailSubject, utf8_decode($contenido), $headers); 
                }
                
                // If mail sent
                if($mail){
                    $statusMsg = 'Se envió correctamente el formulario de nuevo socio!';
                    $msgClass = 'succdiv';
                    
                    $postData = '';
                }else{
                    $statusMsg = 'No se pudo enviar el formulario, por favor intente nuevamente.';
                }
            }
        }
    }else{
        $statusMsg = 'Por favor ingrese todos los campos, para mejorar el contacto.';
    }
}
?>