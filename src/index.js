import React from 'react';
import {createRoot} from 'react-dom/client';
import { AppProvider } from "./context/user-hooks";
import './index.css';
import App from './App';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>

    </React.StrictMode>
);