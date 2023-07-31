export type Product = {
    id: string;
    name: string;
    price: number;
    qty: number;
    img: string;
}

export type ProductDataEdit = {
    id: string;
    qty: number;
    price: number;
};

export type UserLogin = {
    id: string;
    username: string;
    email:string;
    password: string;
}

 