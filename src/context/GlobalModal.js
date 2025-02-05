import React, {createContext, useContext, useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../utils/colors';

// Create Context
const ModalContext = createContext();

// Modal Provider
export const ModalProvider = ({children}) => {
  const [modal, setModal] = useState({
    visible: false,
    title: '',
    message: '',
    onConfirm: null,
  });

  // Function to Show Modal
  const showModal = (title, message, onConfirm) => {
    setModal({visible: true, title, message, onConfirm});
  };

  // Function to Hide Modal
  const hideModal = () => setModal({visible: false});

  return (
    <ModalContext.Provider value={{showModal}}>
      {children}
      <Modal visible={modal.visible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>{modal.title}</Text>
            <Text style={styles.message}>{modal.message}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                modal.onConfirm && modal.onConfirm();
                hideModal();
              }}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

// Custom Hook to Access Modal
export const useGlobalModal = () => useContext(ModalContext);

// Styles
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
