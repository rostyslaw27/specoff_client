import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const PopupDialog = ({
  content,
  closeModal,
  paperProps,
}) => {
  const styles = {
    box: {
      margin: { xs: '0 auto', sm: 0 },
      display: { xl: 'flex' },
      flexDirection: 'column',
      justifyContent: 'center',
      height: { xl: '100%' }
    },
    contentWraper: { overflowY: { lg: 'auto' } },
    icon: {
      color: 'primary.900',
      position: 'absolute',
      right: { xs: '8px', sm: '20px' },
      top: { xs: '8px', sm: '20px' }
    }
  }

  return (
    <Dialog
      PaperProps={paperProps}
      fullScreen={false}
      maxWidth="xl"
      onClose={() => closeModal()}
      open
    >
      <Box sx={styles.box}>
        <IconButton onClick={() => closeModal()} sx={styles.icon}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.contentWraper}>{content}</Box>
      </Box>
    </Dialog>
  )
}

export default PopupDialog
