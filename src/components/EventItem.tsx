import { Button } from 'antd';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { Parallax } from 'rc-scroll-anim';
import { EventInfo } from '../constants/eventData';
import { IconFactory } from '../factories/IconFactory';
import { NavigationService } from '../services/NavigationService';
import { EventBlock, EventImage } from '../pages/Evento';
import { Subtitle, Text, TitleCursive } from './Title';

interface EventItemProps {
  event: EventInfo;
}

export const EventItem = ({ event }: EventItemProps) => {
  const handleMapClick = () => {
    if (event.mapUrl) {
      NavigationService.openMap(event.mapUrl);
    }
  };

  const animationTransform = event.animationDirection === 'left' 
    ? 'translateX(-100px)' 
    : 'translateX(100px)';

  return (
    <Parallax
      animation={{ x: 0, playScale: event.playScale }}
      style={{ transform: animationTransform, margin: '10px auto' }}
    >
      <EventBlock>
        <EventImage src={IconFactory.getIcon(event.icon)} alt={event.title} />
        <TitleCursive>{event.title}</TitleCursive>
        <Subtitle>{event.time}</Subtitle>
        {event.location && <Subtitle>{event.location}</Subtitle>}
        {event.address && <Text>{event.address}</Text>}
        {event.description && <Text>{event.description}</Text>}
        {event.mapUrl && (
          <Button onClick={handleMapClick} type='primary' icon={<FaMapMarkedAlt />}>
            Ver mapa
          </Button>
        )}
      </EventBlock>
    </Parallax>
  );
};
