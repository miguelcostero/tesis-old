export interface Event {
  name: string;
  status: string;
  icon: string;
  type: string;
  date: string;
  dateAdded: number;
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