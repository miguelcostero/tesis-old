import { Client } from './Client'
import { Itinerary } from './Itinerary'

export interface Event {
  name: string;
  status: string;
  icon: string;
  type: string;
  itinerary: Itinerary[];
  dateAdded: string;
  client: Client;
  location: {
    name: string;
    address: string;
    capacity: number;
  };
  createdBy: {
    fullName: string;
    uid: string;
  };
}