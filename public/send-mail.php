<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php'; // adjust path to project root vendor

// Simple CORS + preflight handling
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // respond to preflight
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST allowed"]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$location = trim($data['location'] ?? '');
$budget = trim($data['budget'] ?? '');
$subject = trim($data['subject'] ?? 'New inquiry');
$message = trim($data['message'] ?? '');

// Basic validation
if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name and valid email are required"]);
    exit;
}

// SMTP Configuration - use environment variables in production
$smtpHost = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
$smtpUser = getenv('SMTP_USER') ?: 'dummydambi@gmail.com';
$smtpPass = getenv('SMTP_PASS') ?: 'hjxu mcqt blnp dtnt'; // Use environment variable in production
$smtpPort = getenv('SMTP_PORT') ?: 587;
$smtpSecure = getenv('SMTP_SECURE') ?: 'tls';

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = (int)$smtpPort;
    $mail->CharSet    = 'UTF-8';
    $mail->SMTPDebug = 0; // Ensure clean JSON response

    // Important: set From to an address allowed by your SMTP server
    $mail->setFrom($smtpUser, 'Website Contact'); // do not set arbitrary From
    // set Reply-To to the visitor so you can reply directly
    $mail->addReplyTo($email, $name);

    // Recipient(s) - deliver to your inbox
    $mail->addAddress('dummydambi@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
    $mail->Body    = "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>New Contact Form Submission</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .email-container {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background-color: #ffffff;
                border-bottom: 1px solid #e1e5e9;
                padding: 20px 30px;
            }
            .header h1 {
                margin: 0;
                font-size: 20px;
                font-weight: 600;
                color: #1a1a1a;
            }
            .content {
                padding: 30px;
            }
            .greeting {
                font-size: 16px;
                color: #333333;
                margin-bottom: 20px;
            }
            .info-section {
                background-color: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 6px;
                padding: 20px;
                margin: 20px 0;
            }
            .info-title {
                font-size: 18px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 15px;
                
                padding-bottom: 8px;
            }
            .field-row {
                display: flex;
                margin-bottom: 12px;
                align-items: flex-start;
            }
            .field-label {
                font-weight: 600;
                color: #495057;
                min-width: 100px;
                margin-right: 15px;
            }
            .field-value {
                color: #212529;
                flex: 1;
                word-wrap: break-word;
            }
            .message-section {
                background-color: #ffffff;
                border: 1px solid #e9ecef;
                border-radius: 6px;
                padding: 20px;
                margin: 20px 0;
            }
            .message-title {
                font-size: 16px;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 15px;
               
                padding-bottom: 8px;
            }
            .message-content {
                color: #212529;
                font-size: 15px;
                line-height: 1.6;
                white-space: pre-wrap;
            }
            .footer {
                background-color: #f8f9fa;
                border-top: 1px solid #e9ecef;
                padding: 20px 30px;
                text-align: center;
                color: #6c757d;
                font-size: 14px;
            }
            .timestamp {
                color: #6c757d;
                font-size: 12px;
                text-align: right;
                margin-bottom: 20px;
                font-style: italic;
            }
            .cta-section {
                background-color: #e3f2fd;
                border-left: 4px solid #2196f3;
                padding: 15px 20px;
                margin: 20px 0;
                border-radius: 4px;
            }
            .cta-text {
                color: #1565c0;
                font-weight: 500;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <div class='header'>
                <h1>New Contact Form Submission</h1>
            </div>
            <div class='content'>
                <div class='timestamp'>
                    " . date('D j M, H:i') . " (" . date('j M Y') . ")
                </div>
                
                <div class='greeting'>
                    Dear Khurt,
                </div>
                
                <p>You have received a new inquiry through your website contact form. Please find the details below:</p>
                
                <div class='info-section'>
                    <div class='info-title'>Contact Information</div>
                    
                    <div class='field-row'>
                        <div class='field-label'>Name:</div>
                        <div class='field-value'>" . htmlspecialchars($name) . "</div>
                    </div>
                    
                    <div class='field-row'>
                        <div class='field-label'>Email:</div>
                        <div class='field-value'>" . htmlspecialchars($email) . "</div>
                    </div>
                    
                    <div class='field-row'>
                        <div class='field-label'>Location:</div>
                        <div class='field-value'>" . htmlspecialchars($location) . "</div>
                    </div>
                    
                    <div class='field-row'>
                        <div class='field-label'>Budget:</div>
                        <div class='field-value'>" . htmlspecialchars($budget) . "</div>
                    </div>
                </div>
                
                <div class='message-section'>
                    <div class='message-title'>Message</div>
                    <div class='message-content'>{$safeMessage}</div>
                </div>
                
                <div class='cta-section'>
                    <p class='cta-text'>Please respond to this inquiry promptly to maintain professional communication standards.</p>
                </div>
                
                <p>Best regards,<br>Website Contact System</p>
            </div>
            <div class='footer'>
                This email was automatically generated from your website contact form.
            </div>
        </div>
    </body>
    </html>
    ";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nLocation: {$location}\nBudget: {$budget}\n\nMessage:\n{$message}";

    $mail->send();
    echo json_encode(["status" => "success"]);
    exit; // stop any extra output
} catch (Exception $e) {
    http_response_code(500);
    $errorMsg = $mail->ErrorInfo ?: $e->getMessage();
    // Log the full error for debugging (remove in production)
    error_log("Email sending failed: " . $errorMsg);
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please check your SMTP settings."]);
    exit; // stop any extra output
}
