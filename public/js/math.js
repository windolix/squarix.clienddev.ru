$(document).ready(function() {
	$('#doit1').click(function() {
		var coffA_1 = document.getElementById("coffA_1");
		var coffB_1 = document.getElementById("coffB_1");
		var coffC_1 = document.getElementById("coffC_1");;
		var A_1 = coffA_1.value;
		var B_1 = coffB_1.value;
		var C_1 = coffC_1.value;
		var A_1_wrapper = +A_1;
		var B_1_wrapper = +B_1;
		var C_1_wrapper = +C_1;
		if (A_1_wrapper == 0) {
				A_1_wrapper = 1;
			}
		if (B_1_wrapper == 0) {
				B_1_wrapper = 1;
			}
		if (C_1_wrapper == 0) {
				C_1_wrapper = 1;
			}
		$('#firstCoff').text("A = " + A_1_wrapper);
		$('#secondCoff').text("B = " + B_1_wrapper);
		$('#thirdCoff').text("C = " + C_1_wrapper)
		var Diskr = B_1_wrapper*B_1_wrapper-4*A_1_wrapper*C_1_wrapper;
		$('#diskr').text("Дискриминант = " + Diskr);
		if (Diskr < 0) {
			$('.diskrMines').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrZero').css("display", "none");
			$('#root, #root2').css("display", "none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-none");
			$('#full-q-wrapper span').css("display", "none");
		}
		if (Diskr == 0) {
			$('.diskrZero').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrMines').css("display", "none");
			$('#root2').css("display", "none");
			$('#root').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').addClass("full-q-block");
			var Zroot = -B_1_wrapper/(2*A_1_wrapper);
			$('#root').text("X1 = " + Zroot);
			$('#full-q_1').text("D = " +  B_1_wrapper + " * " +B_1_wrapper + " - " + 4 + " * " + A_1_wrapper + " * " + C_1_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1 = " + -B_1_wrapper +  " / " + " 2 * " + A_1_wrapper );
			$('#full-q_4').text("X1 = " + Zroot);
			$('#full-q-wrapper span').css("display", "block");
		}
		if (Diskr > 0) {
			$('.diskrPlus').css("display", "block");
			$('.diskrMines').css("display", "none");
			$('.diskrZero').css("display", "none");
			var Qroot_1 = (-B_1_wrapper + Math.sqrt(Diskr))/(2*A_1_wrapper);
			var Qroot_2 = (-B_1_wrapper - Math.sqrt(Diskr))/(2*A_1_wrapper);
			$('#root').text("X1 = " + Qroot_1);
			$('#root2').text("X2 = " + Qroot_2);
			$('#root, #root2').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-block");
			$('#full-q_1').text("D = " +  B_1_wrapper + " * " +B_1_wrapper + " - " + 4 + " * " + A_1_wrapper + " * " + C_1_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1,2 = " + -B_1_wrapper + " +-"+ " √" + Diskr + " / " + " 2 * " + A_1_wrapper );
			$('#full-q_4').text("X1 = " + Qroot_1);
			$('#full-q_5').text("X2 = " + Qroot_2);
			$('#full-q-wrapper span').css("display", "block");
		}
	});
});
$(document).ready(function() {
	$('#doit2').click(function() {
		var coffA_2 = document.getElementById("coffA_2");
		var coffB_2 = document.getElementById("coffB_2");
		var coffC_2 = document.getElementById("coffC_2");;
		var A_2 = coffA_2.value;
		var B_2 = coffB_2.value;
		var C_2 = coffC_2.value;
		var A_2_wrapper = -+A_2;
		var B_2_wrapper = -+B_2;
		var C_2_wrapper = -+C_2;
		if (A_2_wrapper == 0) {
				A_2_wrapper = 1;
			}
		if (B_2_wrapper == 0) {
				B_2_wrapper = -1;
			}
		if (C_2_wrapper == 0) {
				C_2_wrapper = -1;
			}
		$('#firstCoff').text("A = " + A_2_wrapper);
		$('#secondCoff').text("B = " + B_2_wrapper);
		$('#thirdCoff').text("C = " + C_2_wrapper)
		var Diskr = B_2_wrapper * B_2_wrapper-4*A_2_wrapper*C_2_wrapper;
		$('#diskr').text("Дискриминант = " + Diskr);
		if (Diskr < 0) {
			$('.diskrMines').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrZero').css("display", "none");
			$('#root, #root2').css("display", "none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-none");
			$('#full-q-wrapper span').css("display", "none");
		}
		if (Diskr == 0) {
			$('.diskrZero').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrMines').css("display", "none");
			$('#root2').css("display", "none");
			$('#root').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').addClass("full-q-block");
			var Zroot = -B_2_wrapper/(2*A_2_wrapper);
			$('#root').text("X1 = " + Zroot);
			$('#full-q_1').text("D = " +  B_2_wrapper + " * " +B_2_wrapper + " - " + 4 + " * " + A_2_wrapper + " * " + C_2_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1 = " + -B_2_wrapper +  " / " + " 2 * " + A_2_wrapper );
			$('#full-q_4').text("X1 = " + Zroot);
			$('#full-q-wrapper span').css("display", "block");
		}
		if (Diskr > 0) {
			$('.diskrPlus').css("display", "block");
			$('.diskrMines').css("display", "none");
			$('.diskrZero').css("display", "none");
			var Qroot_1 = (-B_2_wrapper + Math.sqrt(Diskr))/(2*A_2_wrapper);
			var Qroot_2 = (-B_2_wrapper - Math.sqrt(Diskr))/(2*A_2_wrapper);
			$('#root').text("X1 = " + Qroot_1);
			$('#root2').text("X2 = " + Qroot_2);
			$('#root, #root2').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-block");
			$('#full-q_1').text("D = " +  B_2_wrapper + " * " +B_2_wrapper + " - " + 4 + " * " + A_2_wrapper + " * " + C_2_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1,2 = " + -B_2_wrapper + " +-"+ " √" + Diskr + " / " + " 2 * " + A_2_wrapper );
			$('#full-q_4').text("X1 = " + Qroot_1);
			$('#full-q_5').text("X2 = " + Qroot_2);
			$('#full-q-wrapper span').css("display", "block");
		}
	});
});
$(document).ready(function() {
	$('#doit3').click(function() {
		var coffA_3 = document.getElementById("coffA_3");
		var coffB_3 = document.getElementById("coffB_3");
		var coffC_3 = document.getElementById("coffC_3");;
		var A_3 = coffA_3.value;
		var B_3 = coffB_3.value;
		var C_3 = coffC_3.value;
		var A_3_wrapper = +A_3;
		var B_3_wrapper = +B_3;
		var C_3_wrapper = -+C_3;
		if (A_3_wrapper == 0) {
				A_3_wrapper = 1;
			}
		if (B_3_wrapper == 0) {
				B_3_wrapper = 1;
			}
		if (C_3_wrapper == 0) {
				C_3_wrapper = -1;
			}
		$('#firstCoff').text("A = " + A_3_wrapper);
		$('#secondCoff').text("B = " + B_3_wrapper);
		$('#thirdCoff').text("C = " + C_3_wrapper)
		var Diskr = B_3_wrapper*B_3_wrapper-4*A_3_wrapper*C_3_wrapper;
		$('#diskr').text("Дискриминант = " + Diskr);
		if (Diskr < 0) {
			$('.diskrMines').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrZero').css("display", "none");
			$('#root, #root2').css("display", "none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-none");
			$('#full-q-wrapper span').css("display", "none");
		}
		if (Diskr == 0) {
			$('.diskrZero').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrMines').css("display", "none");
			$('#root2').css("display", "none");
			$('#root').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').addClass("full-q-block");
			var Zroot = -B_3_wrapper/(2*A_3_wrapper);
			$('#root').text("X1 = " + Zroot);
			$('#full-q_1').text("D = " +  B_3_wrapper + " * " +B_3_wrapper + " - " + 4 + " * " + A_3_wrapper + " * " + C_3_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1 = " + -B_3_wrapper +  " / " + " 2 * " + A_3_wrapper );
			$('#full-q_4').text("X1 = " + Zroot);
			$('#full-q-wrapper span').css("display", "block");
		}
		if (Diskr > 0) {
			$('.diskrPlus').css("display", "block");
			$('.diskrMines').css("display", "none");
			$('.diskrZero').css("display", "none");
			var Qroot_1 = (-B_3_wrapper + Math.sqrt(Diskr))/(2*A_3_wrapper);
			var Qroot_2 = (-B_3_wrapper - Math.sqrt(Diskr))/(2*A_3_wrapper);
			$('#root').text("X1 = " + Qroot_1);
			$('#root2').text("X2 = " + Qroot_2);
			$('#root, #root2').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-block");
			$('#full-q_1').text("D = " +  B_3_wrapper + " * " +B_3_wrapper + " - " + 4 + " * " + A_3_wrapper + " * " + C_3_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1,2 = " + -B_3_wrapper + " +-"+ " √" + Diskr + " / " + " 2 * " + A_3_wrapper );
			$('#full-q_4').text("X1 = " + Qroot_1);
			$('#full-q_5').text("X2 = " + Qroot_2);
			$('#full-q-wrapper span').css("display", "block");
		}
	});
});
$(document).ready(function() {
	$('#doit4').click(function() {
		var coffA_4 = document.getElementById("coffA_4");
		var coffB_4 = document.getElementById("coffB_4");
		var coffC_4 = document.getElementById("coffC_4");;
		var A_4 = coffA_4.value;
		var B_4 = coffB_4.value;
		var C_4 = coffC_4.value;
		var A_4_wrapper = +A_4;
		var B_4_wrapper = -+B_4;
		var C_4_wrapper = +C_4;
		if (A_4_wrapper == 0) {
				A_4_wrapper = 1;
			}
		if (B_4_wrapper == 0) {
				B_4_wrapper = -1;
			}
		if (C_4_wrapper == 0) {
				C_4_wrapper = 1;
			}
		$('#firstCoff').text("A = " + A_4_wrapper);
		$('#secondCoff').text("B = " + B_4_wrapper);
		$('#thirdCoff').text("C = " + C_4_wrapper)
		var Diskr = B_4_wrapper*B_4_wrapper-4*A_4_wrapper*C_4_wrapper;
		$('#diskr').text("Дискриминант = " + Diskr);
		if (Diskr < 0) {
			$('.diskrMines').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrZero').css("display", "none");
			$('#root, #root2').css("display", "none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-none");
			$('#full-q-wrapper span').css("display", "none");
		}
		if (Diskr == 0) {
			$('.diskrZero').css("display", "block");
			$('.diskrPlus').css("display", "none");
			$('.diskrMines').css("display", "none");
			$('#root2').css("display", "none");
			$('#root').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4').addClass("full-q-block");
			var Zroot = -B_4_wrapper/(2*A_4_wrapper);
			$('#root').text("X1 = " + Zroot);
			$('#full-q_1').text("D = " +  B_4_wrapper + " * " +B_4_wrapper + " - " + 4 + " * " + A_4_wrapper + " * " + C_4_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1 = " + -B_4_wrapper +  " / " + " 2 * " + A_4_wrapper );
			$('#full-q_4').text("X1 = " + Zroot);
			$('#full-q-wrapper span').css("display", "block");
		}
		if (Diskr > 0) {
			$('.diskrPlus').css("display", "block");
			$('.diskrMines').css("display", "none");
			$('.diskrZero').css("display", "none");
			var Qroot_1 = (-B_4_wrapper + Math.sqrt(Diskr))/(2*A_4_wrapper);
			var Qroot_2 = (-B_4_wrapper - Math.sqrt(Diskr))/(2*A_4_wrapper);
			$('#root').text("X1 = " + Qroot_1);
			$('#root2').text("X2 = " + Qroot_2);
			$('#root, #root2').css("display", "block");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').removeClass("full-q-none");
			$('#full-q_1, #full-q_2, #full-q_3, #full-q_4, #full-q_5').addClass("full-q-block");
			$('#full-q_1').text("D = " +  B_4_wrapper + " * " +B_4_wrapper + " - " + 4 + " * " + A_4_wrapper + " * " + C_4_wrapper);
			$('#full-q_2').text("D = " + Diskr)
			$('#full-q_3').text("X1,2 = " + -B_4_wrapper + " +-"+ " √" + Diskr + " / " + " 2 * " + A_4_wrapper );
			$('#full-q_4').text("X1 = " + Qroot_1);
			$('#full-q_5').text("X2 = " + Qroot_2);
			$('#full-q-wrapper span').css("display", "block");
		}
	});
});