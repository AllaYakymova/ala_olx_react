export const logoImg = '../../img/logo.png';
export const currency = 'USD';
export const mainIconColor = '#FF7051';
export const optionsPerPage= [10, 15, 20, 25, 50];
export const defaultOptionPerPage = optionsPerPage[1];

export const flag = (origin) => {
  switch (origin) {
    case 'usa':
      return '../img/flags/usa_flag.png';
    case 'europe':
      return '../img/flags/europe_flag.png';
    case 'africa':
      return '../img/flags/south_africa_flag.png';
    case 'asia':
      return '../img/flags/china_flag.png';
    default:
      return null;
  }
};

export const imgPlug = (origin) => {
  switch (origin) {
    case 'usa':
      return 'https://picsum.photos/id/580/200/300';
    case 'europe':
      return 'https://picsum.photos/id/1040/200/300';
    case 'africa':
      return 'https://picsum.photos/id/525/200/300';
    case 'asia':
      return 'https://picsum.photos/id/460/200/300';
    default:
      return null;
  }
};
