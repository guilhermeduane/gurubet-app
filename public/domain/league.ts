export class League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;

  constructor(
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.logo = logo;
    this.flag = flag;
  }
}
