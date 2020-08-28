import { Film } from './Film'

export class Films {
  readonly results: Film[]

  constructor(results: Film[]) {
    this.results = results
  }

  sortByEpisodeId(): Films {
    return new Films(
      this.results.sort((a, b) => {
        if (a.episode_id < b.episode_id) return -1
        if (a.episode_id > b.episode_id) return 1
        return 0
      })
    )
  }
}
