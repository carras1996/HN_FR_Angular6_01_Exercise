

function pascal(n, k){
	if(k == 0 || k == n) return 1;
	else return (pascal(n-1, k) + pascal(n-1, k-1));
}

function main(n){
	for(let i = 0; i<= n; i++){
		for(let j = 0; j<= i; j++){
			console.log(pascal(i, j));
		}
		console.log("\n");
	}
}

main(5);