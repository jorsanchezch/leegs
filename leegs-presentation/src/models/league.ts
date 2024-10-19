interface League {
    id?: number;
    name: string;
    description?: string;
    owner: number; // Assuming we're using the user's ID
    sport: number; // Assuming we're using the sport's ID
    is_active: boolean;
    is_recurrent: boolean;
    participants: string[];
    date: Date | null;
  }

  export default League;