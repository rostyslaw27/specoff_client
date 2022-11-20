import { axiosClient } from '../plugins/axiosClient'
import { URLs } from '../constants/request'

export const solutionService = {
  getSolutions: () => {
    return axiosClient.get(URLs.solutions.get)
  },
  createSolution: (solutionData) => {
    return axiosClient.post(URLs.solutions.create, solutionData)
  }
}
