import { games } from '../data/game';
import {gameActions, ISelectedFieldsPayload} from './gameActions';

export interface IGameReducer {
  gamesRaw: Array<IGame>;
  filteredGames: Array<IGame>;
  sortType: 'asc' | 'desc';
}

const initialState: IGameReducer = {
  gamesRaw: games,
  filteredGames: games,
  sortType: 'desc',
};

function loaderReducer(
  state = initialState,
  action: {type: any; payload: unknown},
) {
  switch (action.type) {
    case gameActions.GENRE_FILTER:
      const payload = action.payload as unknown as ISelectedFieldsPayload;
      const selectedGenres = payload.genres;
      const selectedStates = payload.states;
      const gamesRaw = state.gamesRaw;

      const filteredGames = gamesRaw.filter((game) => {
        const checkSelectedGenre = selectedGenres.length > 0 ?  selectedGenres.some((genre) => game.genres.includes(genre[0])) : true;
        const checkSelectedState = selectedStates.length > 0 ?  selectedStates.some((state) => game.state.includes(state[0])) : true;

        return checkSelectedGenre && checkSelectedState;
      })
      return {...state, filteredGames};
    case gameActions.SORT:
      let sortType = state.sortType;
      let tempGames = [...state.filteredGames];
      let sortedGames = tempGames.sort((currentGame, nextGame) => {
        const nameCurrent = currentGame.title.toUpperCase();
        const nameNext = nextGame.title.toUpperCase();
        if (nameCurrent < nameNext) {
          return -1;
        }
        if (nameCurrent > nameNext) {
          return 1;
        }
        return 0;
      });
      if(sortType === 'asc'){
        sortType = 'desc';
      } else {
        sortType = 'asc';
        sortedGames.reverse();
      }
      return {...state, sortType, filteredGames: sortedGames};
    case gameActions.SEARCH:
      let searchedText = action.payload as string;
      const searchedGames = state.gamesRaw.filter((game) => game.title.toUpperCase().includes(searchedText.toUpperCase()))
      return({...state, filteredGames: searchedGames})
    default:
      return state;
  }
}

export default loaderReducer;
