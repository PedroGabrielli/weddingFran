import ChurchIcon from '../assets/placeholders/church-svgrepo-com.svg';
import PartyIcon from '../assets/placeholders/cheers-toast-svgrepo-com.svg';
import DressIcon from '../assets/placeholders/bow-tie-svgrepo-com.svg';

export class IconFactory {
  private static iconMap: Record<string, string> = {
    church: ChurchIcon,
    party: PartyIcon,
    dress: DressIcon
  };

  static getIcon(iconType: string): string {
    return this.iconMap[iconType] || '';
  }
}
