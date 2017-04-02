$(document).ready(function() {
	$('#1variant').click(function() {
		$('#variantFirst').css("display", "block");
		$('#variantThird, #variantSecond, #variantFour').css("display", "none");
		$('#doit2, #doit3, #doit4').css("display", "none");
		$('#doit1').css("display", "block");
	});
});
$(document).ready(function() {
	$('#2variant').click(function() {
		$('#variantFirst, #variantThird, #variantFour').css("display", "none");
		$('#variantSecond').css("display", "block");
		$('#doit1, #doit3, #doit4').css("display", "none");
		$('#doit2').css("display", "block");
	});
});
$(document).ready(function() {
	$('#3variant').click(function() {
		$('#variantThird').css("display", "block");
		$('#variantFirst, #variantSecond, #variantFour').css("display", "none");
		$('#doit2, #doit1, #doit4').css("display", "none");
		$('#doit3').css("display", "block");
	});
});
$(document).ready(function() {
	$('#4variant').click(function() {
		$('#variantFour').css("display", "block");
		$('#variantFirst, #variantThird, #variantSecond').css("display", "none");
		$('#doit2, #doit3, #doit1').css("display", "none");
		$('#doit4').css("display", "block");
	});
});
