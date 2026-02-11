let firstName = null;
let lastName = null;
let nickName = "Supercoder";


alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 

let height = null;
let width = null;


let area = (height ?? 100) * (width ?? 50);

alert(area);