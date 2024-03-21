export class Agency {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public visible: number,
    public lat: string,
    public lng: string,
    public url: string,
    public created_at: string,
    public updated_at: string,
    public district: string,
    public email: string,
    public phone: string,
    public whatsapp: string,
    public businessHour: string,
    public service: string,
    public state: number
  ) { }
}