<?php
if(!isset($_REQUEST["mf_path"]) && !isset($_REQUEST["mf_captcha_code"])) die("Restricted access");?>
<div class="exform_wrapper style-callback4">
 
 <form name="exform">
 <div class="form-body">
  <div class="inpt_wrpr">
    <?php if(isset($field_value["name_err"])) :?><div class="err"><img src="<?php echo $_SESSION['mf_path'];?>imgs/error.gif" title="<?php echo $field_value["name_err"];?>" /></div><?php endif;?>
   <input type="text" name="mf_name" value="<?php echo $field_value["name"];?>" class="<?php echo $field_class["name"];?>" placeholder="<?php echo $config->name_title;?>" />
    <!--input type="checkbox" id="checkBoxId">
    <label for="checkBoxId" class="lab">- <?php echo $config->checbox_name;?></label-->

   <?php if(isset($field_value["phone_err"])) :?><div class="err"><img src="<?php echo $_SESSION['mf_path'];?>imgs/error.gif" title="<?php echo $field_value["phone_err"];?>" /></div><?php endif;?>
   <input type="text" name="mf_phone" value="<?php echo $field_value["phone"];?>" class="<?php echo $field_class["phone"];?>" placeholder="<?php echo $config->phone_title;?>" />

   <input type="text" style="display:none;" name="mf_phone_time" value="<?php echo $field_value["phone_time"];?>" class="<?php echo $field_class["phone_time"];?>" placeholder="<?php echo $config->phone_time_title;?>" />
 
   
   <?php if($config->enable_captcha) : ?>
   <div class="exf_captcha">
	<a href="#" title="<?php echo $config->captcha_refresh;?>" onclick="document.getElementById('mf_captcha_<?php echo $_REQUEST["mf_theme"];?>').src='<?php echo $_SESSION['mf_path'];?>captcha/securimage_show.php?' + Math.random(); return false"></a> 
    <input type="text" name="mf_captcha_code" size="10" maxlength="6" value="<?php echo $field_value["captcha"];?>"  placeholder="<?php echo $config->captcha_code;?>" class="<?php echo $field_class["captcha"];?>"/>
	<div class="captcha_img lading"><img class="brdrad7" id="mf_captcha_<?php echo $_REQUEST["mf_theme"];?>" src="<?php echo $_SESSION['mf_path'];?>captcha/securimage_show.php" alt="" /></div>
   </div>
 
  <?php else : ?>
   <input type="hidden" name="mf_captcha_code" value="false" /> 
  <?php endif; ?>
  </div>
  <div class="mf_submit"><input type="submit" class="send_btn" value="Отправить заявку" onclick="ym(83460433, 'reachGoal', 'otpravka1'); return true;" ></div>
   </div>
  
  <input type="text" name="user_name" class="name" />
  <input type="hidden" name="mf_theme" value="<?php echo $_REQUEST["mf_theme"];?>" />
  <input type="hidden" name="send" value="yes" />
 </form>
	<div class="mf_submit"><input class="close_btn" type="button"></div>
</div> 
