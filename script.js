//your JS code here. If required.
const form = document.getElementById("myForm").addEventListener('submit', function() {
	event.preventDefault();
	validateForm();
});

function validateForm() {
	const age = parseInt(document.getElementById("age").value);
	const name = document.getElementById("name").value;

	if(!age || !name) {
		alert('Please fill in all fields.');
		return;
	}

	handleValidation(age, name);
}


async function handleValidation(age, name) {
	try{
	const massage = await new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age >= 18) {
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000);
	});
	alert(massage);
	}catch(error) {
	alert(error);
	}
}