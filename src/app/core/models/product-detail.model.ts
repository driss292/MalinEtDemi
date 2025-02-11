export interface ProductDetailApiResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  room: string;
  images: string[]; // Liste d'URLs des images
  color: string;
  material: string;
}

export class ProductDetail {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  room: string;
  images: string[];
  color: string;
  material: string;

  constructor(productDetail: ProductDetailApiResponse) {
    this.id = productDetail.id;
    this.title = productDetail.title;
    this.description = productDetail.description;
    this.price = productDetail.price;
    this.category = productDetail.category;
    this.room = productDetail.room;
    this.images = productDetail.images;
    this.color = productDetail.color;
    this.material = productDetail.material;
  }
  static fromApiResponse(response: ProductDetailApiResponse): ProductDetail {
    return new ProductDetail(response);
  }
}
