//11. Nhập vào số nguyên n. Kiểm tra n có phải số hoàn hảo không
function isPerfect() {
	let n = parseInt(prompt("Nhập số nguyên bất kỳ lớn hơn 0: "));
	sum = 0;
	for (let i = 1; i < n; i++) {
		if (n % i == 0) {
			sum += i;
		}
	}
	if (sum === n) {
		alert(n + " là số hoàn hảo");
	} else {
		alert(n + " KHÔNG phải số hoàn hảo");
	}
}

//12. Nhập vào số nguyên, in ra số đảo ngược của nó
function reverseNumber() {
	let n = parseInt(prompt("Nhập số nguyên bất kỳ lớn hơn 0: "));
	let reverse = "";
	while (n != 0) {
		let digit = n % 10;
		reverse += digit;
		n = Math.floor(n / 10);
	}
	alert("Số đảo ngược: " + reverse);
}

//13. Nhập n số nguyên dương rồi tính tổng. Chương trình kết thúc khi nhập số nguyên âm
function sumPositiveInt() {
	let num;
	let sum = 0;
	do {
		num = parseInt(prompt("Nhập vào số nguyên bất kỳ: "));
		if (num >= 0) {
			sum += num;
		}
	} while (num >= 0);
	alert("Tổng các số vừa nhập: " + sum);
}

//14. Nhập vào số nguyên n. In ra số nguyên tố từ 1 đến n
function printPrimeArr() {
	let n = parseInt(prompt("Nhập vào số nguyên bất kỳ: "));
	let i = 2;
	let isPrime;
	let primeArr = "";
	do {
		if (n % i == 0) {
			isPrime = false;
		} else {
			isPrime = true;
			primeArr += i + " ";
		}
		i++;
	} while (i <= Math.sqrt(n));
	if (isPrime == true) {
		alert(
			"Dãy các số nguyên tố từ 1 đến số bạn nhập vào: 1 " +
				primeArr +
				n
		);
	}
}

//15. Tính tiền lãi và tiền nhận được khi gửi ngân hàng, biết lãi nhập gốc
function totalDeposit() {
	let initialDeposit = Number(
		prompt("Nhập vào số tiền gửi ngân hàng ban đầu: ")
	);
	let month = parseInt(prompt("Nhập vào số tháng gửi tiết kiệm: "));
	let rate = Number(prompt("Nhập vào lãi suất năm: ")) / 100;
	let monthlyRate = rate / 12;
	let interest = 0;
	let totalAmount = initialDeposit;
	for (let i = 1; i <= month; i++) {
		totalAmount += totalAmount * monthlyRate;
	}
	interest = totalAmount - initialDeposit;
	alert(
		"Tiền lãi nhận được: " +
			interest +
			" --- Tổng tiền: " +
			totalAmount
	);
}
