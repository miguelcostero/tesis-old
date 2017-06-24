export interface Event {
  name: string;
  status: string;
  icon: string;
  type: string;
  itinerary: Itinerary[];
  dateAdded: Date;
  client: {
    ci: string;
    email: string;
    firstName: string;
    lastName: string;
    telephone: string;
  };
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

export class Itinerary {
  constructor(public description: string, public date: string, public time: string, public timezone: string) {}
}