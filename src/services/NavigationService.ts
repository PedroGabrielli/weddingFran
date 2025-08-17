import { eventLocation, churchLocation } from '../constants/eventLocationUrl';

export class NavigationService {
  private static getMapUrl(mapType: string): string {
    const urlMap: Record<string, string> = {
      eventLocation,
      churchLocation
    };
    return urlMap[mapType] || '';
  }

  static openMap(mapType: string): void {
    const url = this.getMapUrl(mapType);
    if (url) {
      window.open(url, "_blank");
    }
  }
}
