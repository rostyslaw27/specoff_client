import { Box } from '@mui/material'
import { useCallback } from 'react'
import Loader from '../components/Loader'
import useAxios from '../hooks/use-axios'
import { solutionService } from '../services/solution-service'

const Solutions = () => {
  const serviceFunction = useCallback(() => solutionService.getSolutions(), [])

  const { response, loading } = useAxios({ service: serviceFunction })

  if (loading) {
    return <Loader size={70} />
  }

  const SolutionItem = ({ theme, clientName }) => {
    return (
      <Box
        typography="h4"
        sx={{
          p: '20px 50px',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '30px',
          fontWeight: '400',
          width: '50%',
          backgroundColor: 'primary.100',
          borderBottom: '1px solid white',
        }}
      >
        <Box>{theme} </Box>
        <Box>{clientName}</Box>    
      </Box>
    )
  }

  const solutions = response.data.map(({ id, theme, client_name }) => (
    <SolutionItem key={id} theme={theme} clientName={client_name} />
  ))

  return (
    <Box
      sx={{
        mt: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {solutions}
    </Box>
  )
}

export default Solutions
