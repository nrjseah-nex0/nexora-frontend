function trackVisit(){

let visits=localStorage.getItem("visits")

if(!visits){
visits=0
}

visits++

localStorage.setItem("visits",visits)

console.log("عدد الزيارات:",visits)

}
