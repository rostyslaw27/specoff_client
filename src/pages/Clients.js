import { Box, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useCallback } from 'react'
import Loader from '../components/Loader'
import useAxios from '../hooks/use-axios'
import { clientService } from '../services/client-service'
import { useNavigate } from 'react-router-dom'

const Clients = () => {
  const serviceFunction = useCallback(() => clientService.getClients(), [])

  const navigate = useNavigate()

  const { response, loading } = useAxios({ service: serviceFunction })

  if (loading) {
    return <Loader size={70} />
  }

  const ClientItem = ({ id, name, status }) => {
    return (
      <Box
        typography="h4"
        sx={{
          p: '20px 200px',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '40px',
          fontWeight: '400',
          width: '30%',
          backgroundColor: 'primary.100',
          borderBottom: '1px solid white',
        }}
      >
        {name}
        <IconButton onClick={() => navigate(`/clients/${id}`)}>
          {status === 'pending' && (
            <AddCircleOutlineIcon
              color="secondary"
              sx={{
                fontSize: '40px',
              }}
            />
          )}
          {status === 'request' && (
            <EmailIcon
              color="secondary"
              sx={{
                fontSize: '40px',
              }}
            />
          )}
          {status === 'accepted' && (
            <CheckCircleIcon
              color="secondary"
              sx={{
                fontSize: '40px',
              }}
            />
          )}
        </IconButton>
      </Box>
    )
  }

  const clients = response.data.map(({ id, firstName, lastName, status }) => (
    <ClientItem
      key={id}
      name={`${firstName} ${lastName}`}
      status={status}
      id={id}
    />
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
      {clients}
    </Box>
  )
}

export default Clients
