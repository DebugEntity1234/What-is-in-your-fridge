import React, { useState , createContext , useContext } from "react";

export const AuthContext = createContext({ authState: {uid:"", username:"", signedIn: false}, setAuthState: () => {} });