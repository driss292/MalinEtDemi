export interface ProductListtApiResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  room: string;
  images: string[]; // Liste d'URLs des images
}

export class ProductList {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  room: string;
  images: string[];

  constructor(productList: ProductListtApiResponse) {
    this.id = productList.id;
    this.title = productList.title;
    this.description = productList.description;
    this.price = productList.price;
    this.category = productList.category;
    this.room = productList.room;
    this.images = productList.images;
  }

  // Méthode statique pour centraliser la transformation des données
  static fromApiResponse(response: ProductListtApiResponse): ProductList {
    return new ProductList(response);
  }
}
