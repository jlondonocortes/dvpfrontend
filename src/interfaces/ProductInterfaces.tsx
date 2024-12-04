export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    creationAt: string;
    updatedAt: string;
    category: Category;
    addedAt?: string;  
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

