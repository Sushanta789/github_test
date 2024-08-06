function saveData() {
 
  let name, email, password;
  name=document.getElementById("name").value;
  number=document.getElementById("number").value;
  email=document.getElementById("email").value;
  password=document.getElementById("password").value;
  
//  localStorage.setItem("name",name);
//  localStorage.setItem("email",email);
//  localStorage.setItem("number", number);
//  localStorage.setItem("password",password);

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if (user_records.some((v)=>{
  return v.number==number
  
})){
  alert("Duplicate Data");
  
}
else{
  user_records.push({
    "name":name,
    "number":number,
    "email":email,
    "password":password
  })
  localStorage.setItem("users",JSON.stringify(user_records));
}


}



const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const saveBtn = document.getElementById('save-btn');

imageInput.addEventListener('change', (e) => {
	const file = imageInput.files[0];
	const reader = new FileReader();
	reader.onload = (e) => {
		imagePreview.src = e.target.result;
	};
	reader.readAsDataURL(file);
});

saveBtn.addEventListener('click', () => {
	const imageData = imagePreview.src;
	localStorage.setItem('image', imageData);
	window.location.href="index.html";
});