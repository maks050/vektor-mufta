<?php

$message = '<html>
			<head>
				<style type="text/css">
					td{
						border-bottom:1px dotted #000000;
						border-left:none;
						border-right:none;
						padding:5px 10px;
						font-family:arial,sans-serif;
						font-size:14px;
					}
				</style>
			</head>
			<body>
				<table border="0">'; 

if(isset($_REQUEST["mf_product_name"]))$message .= '<tr><td><strong>'.$config->product_title.'</strong></td><td>'.$_REQUEST["mf_product_name"].'</td></tr>';
if(isset($_REQUEST["mf_phone"])) $message .= '<tr><td><strong>'.$config->phone_title.'</strong></td><td>'.$_REQUEST["mf_phone"].'</td></tr>';
if(isset($_REQUEST["mf_message"]))$message .= '<tr><td><strong>'.$config->message_title.'</strong></td><td>'.$_REQUEST["mf_message"].'</td></tr>';
if(isset($_REQUEST["mf_email"])) $message .= '<tr><td><strong>'.$config->email_title.'</strong></td><td>'.$_REQUEST["mf_email"].'</td></tr>';
if(isset($_REQUEST["mf_name"])) $message .= '<tr><td><strong>'.$config->name_title.'</strong></td><td>'.$_REQUEST["mf_name"].'</td></tr>';

$message .= '	</table>
			</body>
			</html>';
?>