import { Client } from './Client'
import { Itinerary } from './Itinerary'

export interface Event {
  name: string;
  status: string;
  icon: string;
  type: string;
  itinerary: Itinerary[];
  dateAdded: Date;
  client: Client;
  location: {
    name: string;
    address: string;
    capacity: number;
  };
  time: {
    start: string;
    timezone: string;
  };
  createdBy: {
    fullName: string;
    uid: string;
  };
}