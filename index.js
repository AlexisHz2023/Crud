import { CRUD } from "./Crud.js";

function app() {
	let Crud = new CRUD("ejemplo");
	Crud.create([1, 2, 3]);
	Crud.create({ message: "Hola mundo" });

	let Crud2 = new CRUD("ejemplo");
	console.log(Crud2.readAll());
}

app();
