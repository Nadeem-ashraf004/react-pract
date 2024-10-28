// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);
    const openSignUpModal = () => setIsSignUpOpen(true);
    const closeSignUpModal = () => setIsSignUpOpen(false);

    return (
        <ModalContext.Provider value={{
            isLoginOpen,
            closeLoginModal,
            isSignUpOpen,
            closeSignUpModal,
            openLoginModal,
            openSignUpModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
