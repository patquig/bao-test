const data = "data/products.json"

fetch(data).then(function (response) {
	console.log('success!', response);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});