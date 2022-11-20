import { axiosClient } from '../plugins/axiosClient'
import { URLs } from '../constants/request'

export const clientService = {
  getClients: () => {
    return axiosClient.get(URLs.clients.get)
  },
  getClient: (clientId) => {
    return axiosClient.get(`${URLs.clients.get}/${clientId}`)
  }
}
