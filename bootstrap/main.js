function verify(){
    // variables
    const inputpassword= document.querySelector('#inputpassword')
    const confirmpassword=document.querySelector('#confirmpassword')
    const passwordalert= document.querySelector('#password')
    // variables end

    // password verify condition

    if(inputpassword.value=== confirmpassword.value){
        console.log("password match")
        passwordalert.Style.display="none"
      }
      else{
        console.log("password not match")
        //innerhtml used for object manupilation
        passwordalert.innerHTML="hello password doesnt match"
        // manupilation end
        passwordalert.style.display="block"
      }
    //  password verify end 
    

}
// display things in console
let fruits=("mangoes","apples", "banna")
console.log(fruits);
const details=[{name:"rakesh",
    age=22
},{
    name:"mr nobody",
    age:34
}{
    name:"dumbo",
    age:56
}]
console.log(details);
// array end

console.log(hello);
 ["hello world"]
concatination
    echo(){
     $= "hello world"/n
}   
   


var_dumb($cartoons);
//  index array print using print_r
print_r(cartoons);
// associative array
$details=array("name"=>"rakesh","age"=>"22");
var_dump($detail);
// for each loop
foreach($detail as $detail){
    echo $detail."</br>";
}
// conditions statment
 if($age>22){
    echo "not allowed to drink";
 }else{
    echo "allow to not allow to drink";
 }





   