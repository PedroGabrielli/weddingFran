export interface EventInfo {
  id: string;
  title: string;
  time: string;
  location: string;
  address: string;
  icon: string;
  mapUrl: string;
  description?: string;
  animationDirection: 'left' | 'right';
  playScale: [number, number];
}

export const eventData: EventInfo[] = [
  {
    id: 'church',
    title: 'Iglesia',
    time: '5:00 pm',
    location: 'Parroquia Cristo Redentor',
    address: 'Gdor. Justiniano Posse 864',
    icon: 'church',
    mapUrl: 'churchLocation',
    animationDirection: 'left',
    playScale: [0.05, 0.5]
  },
  {
    id: 'reception',
    title: 'Recepción',
    time: '6:30 pm',
    location: 'Salón Santa Barbara',
    address: 'Av. Cdad. de Valparaíso 6000',
    icon: 'party',
    mapUrl: 'eventLocation',
    animationDirection: 'right',
    playScale: [0.05, 0.5]
  },
  {
    id: 'dress-code',
    title: 'Vestimenta',
    time: 'Formal',
    location: '',
    address: '',
    description: '¡Luce tu mejor look!',
    icon: 'dress',
    mapUrl: '',
    animationDirection: 'left',
    playScale: [0.0, 0.3]
  }
];

