//Przepisz poniższy fragment kodu na bardziej czytelny zapis
arrA
	.filter((x) => !arrB.includes(x))
	.concat(arrB.filter((x) => !arrA.includes(x)));

// Alternatywny zapis
 const uniqueElementsInArrA = arrA.filter(x => !arrB.includes(x));// Elementy unikalne w arrA
 const uniqueElementsInArrB = arrB.filter(x => !arrA.includes(x)); // Elementy unikalne w arrB
const combinedUniqueArrays = uniqueElementsInArrA.concat(uniqueElementsInArrB);// Połączenie unikalnych elementów z obu tablic
