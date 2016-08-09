function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	else
		return true;
}

function validateEmail(email) {//passing controlas a argument
	var re_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z])+$/;
		if (!re_mail.test(email.value)) {
			return false;
		}
		return true;
}

function validate(){
	if(document.newsletterform.subscribe.value.trim() == "" || document.newsletterform.subscribe.value.trim() == "Email Address"){
		alert("Please Insert Email Address");
		document.newsletterform.subscribe.focus();
		return false;
	}
	if(!validateEmail(document.newsletterform.subscribe))
	{
		alert("Please provide a valid email address");
		document.newsletterform.subscribe.select();
		return false;
	}
	document.newsletterform.submit();	
}

function validateinquiry(){
	if(document.inquiryform.fnamei.value.trim() == "" || document.inquiryform.fnamei.value.trim() == "Full Name"){
		alert("Please Insert Full Name");
		document.inquiryform.fnamei.focus();
		return false;
	}
	if(document.inquiryform.emaili.value.trim() == "" || document.inquiryform.emaili.value.trim() == "Email Address"){
		alert("Please Insert Email Address");
		document.inquiryform.emaili.focus();
		return false;
	}
	if(!validateEmail(document.inquiryform.emaili))
	{
		alert("Please provide a valid email address");
		document.inquiryform.emaili.select();
		return false;
	}	
	if(document.inquiryform.categoryi.value.trim() == ""){
		alert("Please select Category");
		document.inquiryform.categoryi.focus();
		return false;
	}
	if(document.inquiryform.commneti.value.trim() == ""){
		alert("Please insert Commnet");
		document.inquiryform.commneti.focus();
		return false;
	}
	if(document.inquiryform.captcha.value.trim() == ""){
		alert("Please insert the value that appear in right side of image");
		document.inquiryform.captcha.focus();
		return false;
	}
	document.inquiryform.submit();	
}

function validateresume(){
	if(document.resumeform.fnamer.value.trim() == "" || document.resumeform.fnamer.value.trim() == "Full Name"){
		alert("Please Insert Full Name");
		document.resumeform.fnamer.focus();
		return false;
	}
	if(document.resumeform.emailr.value.trim() == "" || document.resumeform.emailr.value.trim() == "Email Address"){
		alert("Please Insert Email Address");
		document.resumeform.emailr.focus();
		return false;
	}
	if(!validateEmail(document.resumeform.emailr))
	{
		alert("Please provide a valid email address");
		document.resumeform.emailr.select();
		return false;
	}	
	if(document.resumeform.resumeattr.value == ""){
		alert("Please select Resume");
		document.resumeform.resumeattr.focus();
		return false;
	}
	if(document.resumeform.captcha.value.trim() == ""){
		alert("Please insert the value that appear in right side of image");
		document.resumeform.captcha.focus();
		return false;
	}
	document.resumeform.submit();	
}


function validateContact(){
	if(document.contactform.txtFirstName.value.trim() == ""){
		alert("Please Insert First Name");
		document.contactform.txtFirstName.focus();
		return false;
	}
	if(document.contactform.emailAddress.value.trim() == ""){
		alert("Please Insert Email Address");
		document.contactform.emailAddress.focus();
		return false;
	}
	if(!validateEmail(document.contactform.emailAddress))
	{
		alert("Please provide a valid email address");
		document.contactform.emailAddress.select();
		return false;
	}	
	if(document.contactform.captcha1.value.trim() == ""){
		alert("Please insert the value that appear in right side of image");
		document.contactform.captcha1.focus();
		return false;
	}
	document.contactform.submit();	
}



function validateApply(){
	if(document.applyform.txtFirstName.value.trim() == ""){
		alert("Please Insert First Name");
		document.applyform.txtFirstName.focus();
		return false;
	}
	if(document.applyform.txtLastName.value.trim() == ""){
		alert("Please Insert Last Name");
		document.applyform.txtLastName.focus();
		return false;
	}
	if(document.applyform.phoneNum.value.trim() == ""){
		alert("Please Insert Phone Number");
		document.applyform.phoneNum.focus();
		return false;
	}
	if(document.applyform.txtState.value.trim() == ""){
		alert("Please Insert State");
		document.applyform.txtState.focus();
		return false;
	}
	if(document.applyform.zipCode.value.trim() == ""){
		alert("Please Insert ZIP Code");
		document.applyform.zipCode.focus();
		return false;
	}
	if(document.applyform.emailAddress.value.trim() == ""){
		alert("Please Insert Email Address");
		document.applyform.emailAddress.focus();
		return false;
	}
	if(!validateEmail(document.applyform.emailAddress))
	{
		alert("Please provide a valid email address");
		document.applyform.emailAddress.select();
		return false;
	}
	if(document.applyform.vEmailAddress.value.trim() == ""){
		alert("Please Insert Verify Email Address");
		document.applyform.vEmailAddress.focus();
		return false;
	}
	var txtEmailAddress = document.getElementById("emailAddress").value;
	var txtVEmailAddress = document.getElementById("vEmailAddress").value;
	if(txtEmailAddress != txtVEmailAddress){
		alert("Verify Email Address is different then Primary Email Address");
		document.applyform.vEmailAddress.focus();
		return false;
	}
	if(document.applyform.txtCountry.value.trim() == ""){
		alert("Please Select Country");
		document.applyform.txtCountry.focus();
		return false;
	}
	if(document.applyform.txtAttached.value.trim() == ""){
		alert("Please Attache your Resume");
		document.applyform.txtAttached.focus();
		return false;
	}
	if(document.applyform.txtSpeciality.value.trim() == ""){
		alert("Please Select Speciality");
		document.applyform.txtSpeciality.focus();
		return false;
	}
	if ((document.applyform.empEligibility[0].checked == false) && (document.applyform.empEligibility[1].checked == false) && (document.applyform.empEligibility[2].checked == false)){
		alert("Please Choose any one option of Eligibility");
		return false;
	}
	if(document.applyform.captcha.value.trim() == ""){
		alert("Please insert the value that appear in right side of image");
		document.applyform.captcha.focus();
		return false;
	}
	document.applyform.done.value = 'Yes';
	//document.applyform.submit();	
}


function validateRef(){
	if(document.referral.txtFirstNameRefr.value.trim() == ""){
		alert("Please Insert Referrer First Name");
		document.referral.txtFirstNameRefr.focus();
		return false;
	}
	if(document.referral.txtLastNameRefr.value.trim() == ""){
		alert("Please Insert Referrer Last Name");
		document.referral.txtLastNameRefr.focus();
		return false;
	}
	if(document.referral.emailAddressRefr.value.trim() == ""){
		alert("Please Insert Referrer Email Address");
		document.referral.emailAddressRefr.focus();
		return false;
	}
	if(!validateEmail(document.referral.emailAddressRefr))
	{
		alert("Please provide a valid email address");
		document.referral.emailAddressRefr.select();
		return false;
	}
	
	if(document.referral.txtFirstNameRefd.value.trim() == ""){
		alert("Please Insert Referred First Name");
		document.referral.txtFirstNameRefd.focus();
		return false;
	}
	if(document.referral.txtLastNameRefd.value.trim() == ""){
		alert("Please Insert Referred Last Name");
		document.referral.txtLastNameRefd.focus();
		return false;
	}
	if(document.referral.emailAddressRefd.value.trim() == ""){
		alert("Please Insert Referred Email Address");
		document.referral.emailAddressRefd.focus();
		return false;
	}
	if(!validateEmail(document.referral.emailAddressRefd))
	{
		alert("Please provide a valid email address");
		document.referral.emailAddressRefd.select();
		return false;
	}
	
	
	if(document.referral.captcha1.value.trim() == ""){
		alert("Please insert the value that appear in right side of image");
		document.referral.captcha1.focus();
		return false;
	}
	document.referral.done.value = 'Yes';
	//document.applyform.submit();	
}

function clearfieldsapplyform(){
	document.applyform.txtFirstName.value='';
	document.applyform.txtLastName.value='';
	document.applyform.phoneNum.value='';
	document.applyform.txtState.value='';
	document.applyform.zipCode.value='';
	document.applyform.emailAddress.value='';
	document.applyform.vEmailAddress.value='';
	document.applyform.txtCountry.value='';
	document.applyform.txtAttached.value='';
	document.applyform.txtSpeciality.value='';
	document.applyform.empEligibility[0].checked = false;
	document.applyform.empEligibility[1].checked = false;
	document.applyform.empEligibility[2].checked = false;
	document.applyform.captcha.value='';
	return false;
}
function clearfieldsinquiry(){
	document.inquiryform.fnamei.value='Full Name';
	document.inquiryform.phonei.value='Phone';
	document.inquiryform.emaili.value='Email Address';
	document.inquiryform.categoryi.value='';
	document.inquiryform.commneti.value='';
	document.inquiryform.captcha.value='';
	return false;
}
function clearfieldsresume(){
	document.resumeform.fnamer.value='Full Name';
	document.resumeform.phoner.value='Phone';
	document.resumeform.emailr.value='Email Address';
	document.resumeform.resumeattr.value='';
	document.resumeform.captcha.value='';
	return false;
}