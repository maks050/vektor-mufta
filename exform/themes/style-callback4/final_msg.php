<?php

if (!isset($_REQUEST["mf_path"]) && !isset($_REQUEST["mf_captcha_code"])) die("Restricted access");?>
<div class="exform_wrapper style-callback4 finmsg brdrad7 boxshdw"><p><?php echo $config->final_message;?></p></div>