export enum gameActions {
  GENRE_FILTER = '@@GAME/GENRE_FILTER',
  SEARCH = '@@GAME/SEARCH',
  SORT = '@GAME/SORT'
}

export interface ISelectedFieldsPayload{
  genres: [GenreType, boolean][];
  states: [StateType, boolean][];
}

export const setSelectedFields = (payload: ISelectedFieldsPayload) => ({
  type: gameActions.GENRE_FILTER,
  payload,
});

export const searchGame = (text: string) => ({
  type: gameActions.SEARCH,
  payload: text
});

export const sortGames = () => ({
  type: gameActions.SORT,
})
