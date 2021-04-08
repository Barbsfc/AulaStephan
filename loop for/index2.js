function msg(){
	//ja ta feito
	imprimirMenorNumero();
	//tem que fazer
	imprimirMaiorNumero();
	imprimirNumeroRepetido();
	ordernarArray();
}

function imprimirMenorNumero(){
	let array = [4,2,1,3];
	let minimo = Number.MAX_SAFE_INTEGER;
	
	for (let i = 0; i < array.length ; i++)
	{		
		if (array[i] < minimo)
		{
			minimo = array[i];
		}			
	}
	console.log('Menor valor do array: ' + minimo);
}

function imprimirMaiorNumero(){
	let array = [4,2,1,3];
	let maximo = 0;
	
	for (let i = 0; i < array.length ; i++)
	{		
		if (array[i] > maximo)
		{
			maximo = array[i];
		}			
	}
	console.log('Maior valor do array: ' + maximo);
}

function imprimirNumeroRepetido(){
	let array = [1,2,2,3];	
	let contador = 1;
	array.sort();
	
	for(let i = 0; i < array.length; i++){
		if(array[i + 1] === array[i]){
			contador += 1;
			valorRepetido = array[i];
		}
	}	
	
	console.log("Numero repetido " + contador);	
}

function ordernarArray(){
	let array = [4,2,1,3];
	for (let i = 0; i < array.length; i++){
		for(let j = i; j < array.length; j++){
			if(array[i] > array[j]){
				
				let ordem = array[i];
				array[i] = array[j];
				array[j] = ordem;
			}
		}
	}
	console.log("Ordem Crescente " + array);
}