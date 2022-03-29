type StateType = 'available' | 'pathcing' | 'maintanance';
type GenreType = 'shooters' | 'action' | 'rpg' | 'racing' | 'moba' | 'simulation' | 'strategy' | 'sports' | 'kids' | 'casual' | 'demo' | 'horror' | 'platformer' | 'battle-royale' | 'adventure' | 'open-world';

interface IGame {
  state: Array<StateType>;
  genres: Array<GenreType>;
  title: string;
  description: string;
  description2: string;
}

interface StateLabelValue {
  label: string;
  value: StateType;
}

interface GenreLabelValue {
  label: string;
  value: GenreType;
}