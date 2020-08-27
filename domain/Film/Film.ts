export class Film {
    readonly episode_id: number
    readonly title: string

    constructor(episodeId: number, title: string) {
        this.episode_id = episodeId
        this.title = title
    }
}
