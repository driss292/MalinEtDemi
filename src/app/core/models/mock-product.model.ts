export class MockProduct {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public category: string,
    public room: string,
    public images: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.room = room;
    this.images = images;
  }
}
