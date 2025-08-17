import { eventData, EventInfo } from '../constants/eventData';

export const useEvents = () => {
  const getEvents = (): EventInfo[] => {
    return eventData;
  };

  const getEventById = (id: string): EventInfo | undefined => {
    return eventData.find(event => event.id === id);
  };

  return {
    getEvents,
    getEventById
  };
};
