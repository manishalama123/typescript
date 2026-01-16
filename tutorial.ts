// let id: number = 5;
// let company: string ="Acme Corp";
// let isPublished: boolean = true;
// let ids: string[] = [1,2,3,3];
// let x: any[] = ["fff"];

// const concatenateValues = (a:string,b:string): string =>{
//     return a+b;
// }
// console.log(concatenateValues(9,8));
// console.log(concatenateValues("hello", "workd"));

interface UserInterface{
    id: number;
    age?: number;
    name: string;
    greet(message:string): void;
}

const User: UserInterface = {
    id:2,
    name:"John doe",
    greet(message){
        console.log(message);
        
    }
}
User.greet("hello"+ User.name);
// if(!User.age){
//     console.log("No age of user");
    
// }else{
//     console.log(User.age);
// }

