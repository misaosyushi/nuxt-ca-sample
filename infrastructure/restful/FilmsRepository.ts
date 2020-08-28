import { AxiosResponse } from 'axios'
import axios from './axiosConfig'
import { Films } from '@/domain/Film/Films'

export interface IFilmsRepository {
  getAll(): Promise<Films>
}

export class FilmsRepository implements IFilmsRepository {
  async getAll(): Promise<Films> {
    const res: AxiosResponse<Films> = await axios.get<Films>('/films/')
    return res.data
  }
}
