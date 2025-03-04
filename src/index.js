"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("flowbite");
require("./index.css");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const translation_json_1 = __importDefault(require("./locales/en/translation.json"));
const translation_json_2 = __importDefault(require("./locales/es/translation.json"));
const translation_json_3 = __importDefault(require("./locales/fr/translation.json"));
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
i18next_1.default.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'en', // language to use
    resources: {
        en: {
            global: translation_json_1.default, // 'common' is our custom namespace
        },
        es: { global: translation_json_2.default },
        fr: { global: translation_json_3.default },
    },
});
const container = document.getElementById('root');
if (container) {
    const root = client_1.default.createRoot(container);
    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_i18next_1.I18nextProvider, { i18n: i18next_1.default, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
