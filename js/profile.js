function makePayment(exam,subject,amount)
{
	document.getElementById("exam_name_id").value=exam;
	document.getElementById("subject_id").value=subject;
	document.getElementById("amount").value=amount;
	document.getElementById("productinfo").value="Make payment for exam id "+exam+" and subject id "+subject;
	document.getElementById("payment-form").submit();
	
	
}