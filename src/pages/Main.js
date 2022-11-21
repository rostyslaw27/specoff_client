import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  return (
    <Box>
      return (
      <Box
        sx={{
          mt: '100px',
          display: 'flex',
          justifyContent: 'center',
          columnGap: 2,
        }}
      >
        <Box
          sx={{
            height: '50vh',
            p: '50px',
            width: '500px',
            backgroundColor: 'primary.100',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box typography="h5">Personal Information</Box>
          <TextField
            label="Name"
            size="large"
            sx={{ mt: '20px', mb: '20px' }}
            value={'Martynyk Rostyslav'}
          />
          <TextField
            label="Email"
            size="large"
            minRows={3}
            sx={{ mb: '20px' }}
            value={'dontsendme@ucoz.com'}
          />
          <TextField
            label="Profession"
            size="large"
            sx={{ mb: '20px' }}
            value={'Medic'}
            readOnly
          />
          <TextField
            label="Region"
            size="large"
            sx={{ mb: '0px' }}
            value={'Lviv'}
            readOnly
          />
        </Box>
        <Box
          sx={{
            mt: '50px',
            height: '50vh',
            width: '500px',
            backgroundColor: 'primary.50',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 5,
          }}
        >
          <Button
            onClick={() => {
              navigate('/solutions')
            }}
            sx={{
              height: '100px',
              width: '70%',
              borderRadius: '100px',
              fontSize: '30px',
            }}
            size="large"
            variant="contained"
          >
            Solutions
          </Button>
          <Button
            onClick={() => {
              navigate('/clients')
            }}
            sx={{
              height: '100px',
              width: '70%',
              borderRadius: '100px',
              fontSize: '30px',
            }}
            size="large"
            variant="outlined"
          >
            Clients
          </Button>
        </Box>
      </Box>
      )
    </Box>
  )
}

export default Main
