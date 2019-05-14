export class ShippingDetails {
  constructor(
    public city: string,
    public address: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phones: string[]
  ) {}
}
