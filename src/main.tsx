import {createRoot} from "react-dom/client"
import {App} from "./App.tsx"
import React from "react"
import {Provider} from "@/components/ui/provider"
import "./i18n/i18n";


createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>
)
