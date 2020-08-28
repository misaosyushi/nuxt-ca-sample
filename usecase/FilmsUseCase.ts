import { Films } from '@/domain/Film/Films'
import { IFilmsRepository } from '@/infrastructure/restful/FilmsRepository'

export interface IFilmsUseCase {
  getAll(): Promise<Films>
}

export class FilmsUseCase implements IFilmsUseCase {
  readonly repository: IFilmsRepository

  constructor(repository: IFilmsRepository) {
    this.repository = repository
  }

  getAll(): Promise<Films> {
    return this.repository.getAll()
  }
}
