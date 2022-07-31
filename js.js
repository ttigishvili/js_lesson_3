
// WORk 1  შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს
          

// function sum(...numbers){
         
    
//     for(let x = 0; x < numbers.length; x++){
//         let numberSum = 0;
//         for (let item of numbers){
        
//             if(item > 0){
//                     numberSum = numberSum + item;                                        
//             }
            
//         }
//         return numberSum;
//     }
// }
// let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8, );
// console.log(result);




// WORK 2 ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:

// function sum(...numbers){
         
    
//     for(let x = 0; x < numbers.length; x++){
//         let numberSum = 0;
//         for (let item of numbers){
                                                                                      
//            numberSum = numberSum + item;
//         }
//         return numberSum;
//     }
// }
// let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);



//  WORK 3 ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით


// function sum(){

//     let user = {
//         firstname: 'giorgi',
//         lastname: 'saakadze',
//         age: 32,
//         isloggedin: true
//       } 
     
//       if(user.isloggedin == true || user.isloggedin == false){

//         console.log(user.firstname + ' ' + user.lastname);

//       }

      
// }
// sum();




// WORK 4 შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:



// function sum(){
    
//     let array = [40, 45, 3, 8, 2, 22, 6, 25, 9, 140]
    
//     console.log( Math.max(...array)); 


// }
// sum();




// WORK 5 მოცემულია მასივი let array = [1,2,4,10,34,5,7,87] გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

                                                                                           
// function logNumbers(){
// let numbers = [1,2,4,10,34,5,7,87]

// for(let x = 0; x < numbers.length; x++){
//         if (numbers[x] > 0 && numbers[x] < 10){                          
//             console.log(numbers[x]);
//         }
//     }
// }
// logNumbers();


// WORK 6 ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 

// let numbers =[1,2,3,4,5,6,7,8,9,10]

// for(let x = 0; x < numbers.length; x++){
//     if (numbers[x] > 4 && numbers[x] < 6){                                     

//     console.log(numbers[x]);
    
//     }
//  }
