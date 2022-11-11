import { createServer } from 'http';
import fetch from 'node-fetch';


createServer((req, res) => {
  let formData = new FormData();
	formData.append(
		"key",
		"ZFtrHZgY4lBAxPacQPiapdAFCCs6GQu3Vk8vnnzhrVSGqHm70msQG30UMxbgsx8B"
	);
	formData.append("sign", "2c1a72e53c246770b3f2aae2c80e3ff9");
 
// note: use npm install node-fetch@2.0 to be able to use "require"

console.log("trying ...")

let body = {

fetch('https://reetenstore.id/api/profile', {
    method: 'POST',
    body: formdata,
   
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch (err => console.log(err))


  res.write('Hello Worldsa!');
  res.end();
}).listen(process.env.PORT);
