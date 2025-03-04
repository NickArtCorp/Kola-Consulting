"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./Home"));
const Alert_1 = __importDefault(require("./Alert"));
const About_us_1 = __importDefault(require("./About_us"));
const Realisation_1 = __importDefault(require("./Realisation"));
const Services_1 = __importDefault(require("./Services"));
const Regions_1 = __importDefault(require("./Regions"));
const Career_1 = __importDefault(require("./Career"));
const News_1 = __importDefault(require("./News"));
const The_group_1 = __importDefault(require("./Components/About_us/The_group"));
const History_1 = __importDefault(require("./Components/About_us/History"));
const Our_Team_1 = __importDefault(require("./Components/About_us/Our_Team"));
const Our_Code_of_Ethics_1 = __importDefault(require("./Components/About_us/Our_Code_of_Ethics"));
const Performance_1 = __importDefault(require("./Performance"));
const Contact_1 = __importDefault(require("./Components/About_us/Contact"));
const DetailPage_1 = __importDefault(require("./Components/Realisation/DetailPage"));
const react_1 = require("@material-tailwind/react");
const DropdownContext_1 = require("./DropdownContext");
const Insights_1 = __importDefault(require("./Components/About_us/Insights"));
const react_i18next_1 = require("react-i18next");
function App() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(DropdownContext_1.DropdownProvider, { children: (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)("main", { className: "flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800 font-sans", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting'), element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Alert'), element: (0, jsx_runtime_1.jsx)(Alert_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/About_us'), element: (0, jsx_runtime_1.jsx)(About_us_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Services'), element: (0, jsx_runtime_1.jsx)(Services_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Realisation'), element: (0, jsx_runtime_1.jsx)(Realisation_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Regions'), element: (0, jsx_runtime_1.jsx)(Regions_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Career'), element: (0, jsx_runtime_1.jsx)(Career_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/News'), element: (0, jsx_runtime_1.jsx)(News_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/The_group'), element: (0, jsx_runtime_1.jsx)(The_group_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/History'), element: (0, jsx_runtime_1.jsx)(History_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Our_Team'), element: (0, jsx_runtime_1.jsx)(Our_Team_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Our_Code_of_Ethics'), element: (0, jsx_runtime_1.jsx)(Our_Code_of_Ethics_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Performance'), element: (0, jsx_runtime_1.jsx)(Performance_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Insights'), element: (0, jsx_runtime_1.jsx)(Insights_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/Kola-consulting/Contact'), element: (0, jsx_runtime_1.jsx)(Contact_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: t('/DetailPage/:id'), element: (0, jsx_runtime_1.jsx)(DetailPage_1.default, {}) })] }) }) }) }) }));
}
exports.default = App;
