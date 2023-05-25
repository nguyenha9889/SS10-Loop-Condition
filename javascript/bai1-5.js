//1. Tìm số chẵn lẻ
function isEvenOrOdd() {
	let num = Number(prompt("Nhập vào số nguyên bất kỳ: "));
	if (num % 2 == 0) {
		alert("Số bạn vừa nhập là số chẵn");
	} else {
		alert("Số bạn vừa nhập là số lẻ");
	}
}

//2. Tìm Min Max
function isMinMax() {
	let num1 = Number(prompt("Nhập vào số thứ 1: "));
	let num2 = Number(prompt("Nhập vào số thứ 2: "));
	let num3 = Number(prompt("Nhập vào số thứ 3: "));
	let max, min;
	if ((max = num1)) {
		if (num2 > num1) {
			max = num2;
		}
		if (num3 > num1) {
			max = num3;
		}
		alert("Số lớn nhất: " + max);
	}

	if ((min = num1)) {
		if (num2 < num1) {
			min = num2;
		}
		if (num3 < num1) {
			min = num3;
		}
		alert("Số nhỏ nhất: " + min);
	}
}
//3. Phiên âm các số nhập từ bàn phím
function convertNumber() {
	let number = Number(prompt("Nhập vào một số từ 0 - 9 "));
	switch (number) {
		case 0:
			alert("Không");
			break;
		case 1:
			alert("Một");
			break;
		case 2:
			alert("Hai");
			break;
		case 3:
			alert("Ba");
			break;
		case 4:
			alert("Bốn");
			break;
		case 5:
			alert("Năm");
			break;
		case 6:
			alert("Sáu");
			break;
		case 7:
			alert("Bảy");
			break;
		case 8:
			alert("Tám");
			break;

		default:
			alert("Chín");
	}
}

//4. Nhập 2 số nguyên và tính toán
function calculate() {
	let num1 = Number(prompt("Nhập số thứ 1: "));
	let num2 = Number(prompt("Nhập số thứ 2: "));
	let operator = prompt("Nhập vào phép tính bạn muốn thực hiện: + - * / ");
	switch (operator) {
		case "/":
			alert(num1 / num2);
			break;
		case "-":
			alert(num1 - num2);
			break;
		case "*":
			alert(num1 * num2);
			break;
		default:
			alert(num1 + num2);
	}
}

// 5. Nhập điểm HTML, CSS, JS. Tính điểm trung bình và in xếp loại
function markAndRank() {
	let markHTML = parseInt(prompt("Nhập điểm HTML đi thánh: "));
	let markCSS = parseInt(prompt("Nhập điểm CSS đi thánh: "));
	let markJS = parseInt(prompt("Nhập điểm JS đi thánh: "));
	let markAvarge = (markHTML + markCSS + markJS) / 3;
	if (markAvarge < 5) {
		alert("Học lực YẾU. Ham chơi quá Thánh ơi.");
	} else if (5 <= markAvarge && markAvarge < 6) {
		alert("Học lực KÉM. Vẫn mải chơi lắm Thánh ơi.");
	} else if (6 <= markAvarge && markAvarge < 7) {
		alert("TRUNG BÌNH thôi. Phải cố gắng nhiều lên.");
	} else if (7 <= markAvarge && markAvarge < 8) {
		alert(
			"Học lực KHÁ. Có tiến bộ rồi đấy nhưng vẫn phải cày tiếp đi."
		);
	} else if (8 <= markAvarge && markAvarge < 9) {
		alert(
			"Học lực GIỎI. Đừng tưởng Giỏi mà lại ham chơi nhé. Cày tiếp đi."
		);
	} else {
		alert("XUẤT SẮC. Học cả đời -> Cày tiếp đi");
	}
}
