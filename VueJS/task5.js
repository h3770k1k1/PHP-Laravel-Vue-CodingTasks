//Przepisz poniższy fragment kodu na bardziej czytelny zapis
arrA
	.filter((x) => !arrB.includes(x))
	.concat(arrB.filter((x) => !arrA.includes(x)));
