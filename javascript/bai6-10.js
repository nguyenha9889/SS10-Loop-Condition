//6. Nhập 3 cạnh của tam giác và tìm xem loại tam giác gì
function checkTypeTriangle() {
	let a = Number(prompt("Nhập vào cạnh thứ 1: "));
	let b = Number(prompt("Nhập vào cạnh thứ 2: "));
	let c = Number(prompt("Nhập vào cạnh thứ 3: "));
	let powA = a * a;
	let powB = b * b;
	let powC = c * c;

	if (a + b > c && b + c > a && a + c > b) {
		if (a == b && a == c) {
			alert("Đây là tam giác đều");
		} else if (a == b || a == c || b == c) {
			if (
				powA + powB == powC ||
				powA + powC == powB ||
				powB + powC == powA
			) {
				alert("Đây là tam giác VUÔNG CÂN");
			} else {
				alert("Đây là tam giác CÂN");
			}
		} else if (
			powA + powB == powC ||
			powA + powC == powB ||
			powB + powC == powA
		) {
			alert("Đây là tam giác VUÔNG");
		}
	} else {
		alert("Đây không phải 3 cạnh của một tam giác");
	}
}

//7. Nhập tháng và năm rồi in ra số ngày trong tháng đó
function calculateDaysInMonth() {
	let year = Number(prompt("Nhập vào năm bất kỳ: "));
	let month = Number(prompt("Nhập vào tháng bất kỳ"));
	let isLeapYear;
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				isLeapYear = true;
			}
		} else {
			isLeapYear = false;
		}
	} else {
		isLeapYear = true;
	}
	switch (month) {
		case 4:
		case 6:
		case 9:
		case 11:
			alert("Tháng này có 30 ngày");
			break;
		case 2:
			if (isLeapYear) {
				alert("Tháng 2 năm Nhuận có 29 ngày");
			} else {
				alert("Tháng 2 năm Không nhuận có 28 ngày");
			}
			break;
		default:
			alert("Tháng này có 31 ngày");
			break;
	}
}

//8. Nhập vào 1 số nguyên. In ra các số chẵn. Sau đó tính tổng các số chẵn từ 1 đến n
function sumEvens() {
	let n = parseInt(prompt("Nhập vào 1 số nguyên bất kỳ lớn hơn 1: "));
	let evensStr = "";
	let sumEvens = 0;
	for (let i = 2; i <= n; i += 2) {
		evensStr += i + " ";
		sumEvens += i;
	}
	alert(
		"Dãy các số chẵn: " +
			evensStr +
			" --- Tổng các số chẵn: " +
			sumEvens
	);
}

//9. Nhập vào số nguyên n và in ra các ước số của n
function findDivisors() {
	let n = parseInt(prompt("Nhập vào số nguyên bất kỳ lớn hơn 1: "));
	let divisorStr = "";
	for (let i = 1; i <= n; i++) {
		if (n % i == 0) {
			divisorStr += i + " ";
		}
	}
	alert("Các ước số: " + divisorStr);
}

//10. Nhập vào số nguyên n. Kiểm tra n có phải số nguyên tố không
function checkPrime() {
	let n = parseInt(prompt("Nhập vào số nguyên bất kỳ: "));
	let isPrime = true;
	// Check điều kiện số nguyên tố phải > 1
	if (n <= 1) {
		isPrime = false;
	}
      //chạy từ i đến SQRT(n) -> n ko chia hết cho i -> số nguyên tố (vì số nguyên tố chỉ chia hết cho 1 và chính nó)
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (n % i === 0) {
			isPrime = false;
		} else {
			isPrime = true;
		}
	}
	if (isPrime) {
		alert(n + " là số nguyên tố");
	} else {
		alert(n + " KHÔNG phải số nguyên tố");
	}
}
