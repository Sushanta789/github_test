function saveData() {
 
  let name, number, email, password;
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
  return v.email==email
  
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



function saveImage() {
  const imageInput = document.getElementById("imageInput");
  const image = imageInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function() {
    const imageDataURL = reader.result;
    localStorage.setItem("image", imageDataURL);
    window.location.href = "index.html";
  };
  
  reader.readAsDataURL(image);
}
	