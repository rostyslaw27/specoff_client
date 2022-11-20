import useAxios from '../hooks/use-axios'
import { useCallback, useContext, useState } from 'react'
import { clientService } from '../services/client-service'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { ModalContext } from '../context/modal-context'
import { solutionService } from '../services/solution-service'
import Loader from '../components/Loader'

const Client = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const serviceFunction = useCallback(() => clientService.getClient(id), [id])

  const { response, loading } = useAxios({ service: serviceFunction })

  const { openModal, closeModal } = useContext(ModalContext)

  const SolutionModal = ({ receiver }) => {
    const [theme, setTheme] = useState('')
    const [text, setText] = useState('')

    const { fetchData: createSolution } = useAxios({
      service: solutionService.createSolution,
      fetchOnMount: false,
    })

    return (
      <Box
        sx={{
          height: '50vh',
          width: '500px',
          py: '50px',
          px: '100px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box typography="h5">Create Solution</Box>
        <TextField
          autoFocus
          label="Theme"
          onChange={(e) => setTheme(e.target.value)}
          size="large"
          sx={{ mt: '20px', mb: '10px' }}
          value={theme}
        />
        <TextField
          multiline
          label="Details"
          onChange={(e) => setText(e.target.value)}
          size="large"
          minRows={3}
          sx={{ mb: '10px' }}
          value={text}
        />
        <TextField
          label="Receiver"
          size="large"
          sx={{ mb: '10px' }}
          value={receiver}
          readOnly
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
          <AttachmentIcon sx={{ fontSize: '30px', pr: '10px' }} />
          <Box typography="body1">Attach file</Box>
        </Box>
        <Button
          size="large"
          variant="contained"
          onClick={async () => {
            await createSolution({
              specialist_id: 'Rostyslav',
              client_id: id,
              client_name: receiver,
              theme,
              text,
            })
            closeModal()
            navigate('/solutions')
          }}
        >
          Create solution
        </Button>
      </Box>
    )
  }

  const name = `${response?.data.firstName} ${response?.data.lastName}`

  if (loading) {
    return <Loader size={70} />
  }

  return (
    <Box
      sx={{
        mt: '50px',
        mx: 'auto',
        display: 'flex',
        height: '100vh',
        width: '70%',
      }}
    >
      <Box
        typography="h3"
        sx={{
          pt: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          fontSize: '30px',
          width: '30%',
          backgroundColor: 'primary.100',
        }}
      >
        { name}
        <Button
          size="large"
          variant="contained"
          onClick={() =>
            openModal({
              component: <SolutionModal receiver={name} />,
            })
          }
        >
          Create solution
        </Button>
      </Box>
      <Box
        sx={{
          width: '80%',
          pt: '300px',
          backgroundColor: 'primary.50',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          typography={'body1'}
          sx={{
            backgroundColor: 'primary.500',
            color: 'white',
            p: '5px 10px',
            borderRadius: '20px',
          }}
        >
          Today
        </Box>
        <Box
          typography="body1"
          sx={{
            mt: '10px',
            ml: '70px',
            backgroundColor: 'primary.200',
            color: 'white',
            p: '5px 10px',
            display: 'flex',
            alignSelf: 'start',
            borderRadius: '20px',
            flexDirection: 'column',
          }}
        >
          <Box>
            Hello, I'm from Kherson and here's no rare drug called <br />{' '}
            Protomensin I need for leukemia
          </Box>
          <Box sx={{ color: 'black', fontWeight: '500', alignSelf: 'end' }}>
            18:12
          </Box>
        </Box>
        <Box
          typography="body1"
          sx={{
            mt: '10px',
            mr: '70px',
            backgroundColor: 'primary.500',
            color: 'white',
            p: '5px 10px',
            display: 'flex',
            alignSelf: 'end',
            borderRadius: '20px',
            flexDirection: 'column',
          }}
        >
          <Box>
            Hello, the situation with drugs in Kherson is tough <br /> right
            now, let's see what can I find for you though
          </Box>
          <Box sx={{ color: 'black', fontWeight: '500', alignSelf: 'end' }}>
            18:16
          </Box>
        </Box>
        <Box
          typography="body1"
          sx={{
            mt: '10px',
            mr: '70px',
            backgroundColor: 'primary.500',
            color: 'white',
            p: '5px 10px',
            display: 'flex',
            alignSelf: 'end',
            borderRadius: '20px',
            flexDirection: 'column',
          }}
        >
          <Box>
            Alright, I found Protomensin in pharmacy of Dariivka near Kherson.{' '}
            <br /> You'll need permission from doctor so let me sign a solution
            for you
          </Box>
          <Box sx={{ color: 'black', fontWeight: '500', alignSelf: 'end' }}>
            18:32
          </Box>
        </Box>
        <Box
          sx={{
            width: '90%',
            height: '50px',
            mt: '10px',
            borderRadius: '50px',
            backgroundColor: 'primary.100',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AttachmentIcon sx={{ px: '50px', fontSize: '30px' }} />
            <Box typography="h5" color="grey">
              Message
            </Box>
          </Box>
          <Box>
            <SendIcon sx={{ px: '50px', fontSize: '30px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Client
