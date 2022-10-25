function hash(input, dictionary) {
	if(typeof input !== "string"){
		throw new Error("Input should be a string");
	}

	dictionary.forEach(element => {
		if(typeof element !== "string"){
			throw new Error("Invalid dictionary format");
		}
	});

	array=input.split(' ');
	array.forEach(x => {
		let ok=0;
		dictionary.forEach(y => {
			if(x.toLowerCase()===y.toLowerCase()){
				cuvant=[];
				ok=1;
				cuvant.push(x[0])
				for(let i=1;i<x.length-1;i++) {
					cuvant.push('#')
				}
				cuvant.push(x[x.length-1])
				cuvString=cuvant.join("");
				rezultat.push(cuvString)
			}
		});
		if(ok==0)
		rezultat.push(x)
	});
	return rezultat.join(" ")
}

input="The dog is Walking fast"
dictionary=["walking","fast"]
rezultat=[]

console.log(hash(input,dictionary))



const app = {
	hash
};

module.exports = app;