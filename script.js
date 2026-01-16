//your JS code here. If required.
const head = document.getElementById("head")
const status = document.getElementById("status")
const enterBtn = document.getElementById("enterBtn")

head.style.display = "none"
enterBtn.addEventListener("click",()=>{
	head.style.display = "";
})
enterBtn.addEventListener("click",()=>{
	status.style.display = "none" 
})