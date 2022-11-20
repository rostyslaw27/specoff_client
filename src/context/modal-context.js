import { createContext, useCallback, useState } from 'react'
import PopupDialog from '../components/PopupDialog'

const ModalContext = createContext()

const ModalProvider = (props) => {
  const [modal, setModal] = useState()
  const [paperProps, setPaperProps] = useState({})

  const closeModal = useCallback(() => {
    setModal()
    setPaperProps({})
  }, [setModal, setPaperProps])

  const openModal = useCallback(
    ({ component, paperProps }) => {
      setModal(component)
      setPaperProps(paperProps)
    },
    [setModal, setPaperProps]
  )

  return (
    <ModalContext.Provider value={{ openModal, closeModal }} {...props}>
      {props.children}
      {modal && (
        <PopupDialog
          closeModal={closeModal}
          content={modal}
          paperProps={paperProps}
        />
      )}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }
