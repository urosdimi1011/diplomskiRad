export interface ICart extends Array<ICart> {
        id:number,
        productId:number,
        productName:string,
        productPrice:number,
        prodcutAmount:number,
        ownImage:string,
        length: number
}
export interface ITokenCart{
        UserId: number,
        
}

/* 
Email: "pera@gmail.com"
UseCases: "[1,3,4,5,10,11,13,14,15,16]"
UserId: "2"
aud: "Any"
exp: 1657317418
iat: 1657315618
iss: "ICT_ASP"
jti: "13840f34-7113-4d26-9f67-615db3c7f452"
nbf: 1657315618
*/