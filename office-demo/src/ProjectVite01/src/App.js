"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const App_module_scss_1 = __importDefault(require("./App.module.scss"));
const AuthContext_1 = require("./AuthContext");
const react_router_dom_1 = require("react-router-dom");
const home_1 = require("./components/home/home");
const page_1_1 = require("./components/page-1/page-1");
const page_2_1 = require("./components/page-2/page-2");
const test_1_1 = require("./components/test-1/test-1");
const test_2_1 = require("./components/test-2/test-2");
const test_3_1 = require("./components/test-3/test-3");
const test_4_1 = require("./components/test-4/test-4");
const rootReducer_1 = __importDefault(require("./reducers/rootReducer"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const user_apply_2_1 = require("./components/user-apply-2/user-apply-2");
const user_apply_1 = require("./components/user-apply/user-apply");
const sign_card_1 = require("./components/sign-card/sign-card");
const test_check_email_1 = require("./components/test-check-email/test-check-email");
const test_check_email_2_1 = require("./components/test-check-email-2/test-check-email-2");
const test_axios_post_1 = require("./components/test-axios-post/test-axios-post");
const test_axios_post_2_1 = require("./components/test-axios-post-2/test-axios-post-2");
const test_axios_post_3_1 = require("./components/test-axios-post-3/test-axios-post-3");
const user_profile_1 = require("./components/user-profile/user-profile");
const test_token_1 = require("./components/test-token/test-token");
const test_list_1 = require("./components/test-list/test-list");
const user_apply_content_1 = require("./components/user-apply-content/user-apply-content");
const test_list_data_table_1 = require("./components/test-list-data-table/test-list-data-table");
const top_bar_1 = require("./components/top-bar/top-bar");
const user_apply_3_1 = require("./components/user-apply-3/user-apply-3");
const test_link_1 = require("./components/test-link/test-link");
const test_navigate_1 = require("./components/test-navigate/test-navigate");
const user_apply_4_1 = require("./components/user-apply-4/user-apply-4");
const test_change_pw_1 = require("./components/test-change-pw/test-change-pw");
const test_request_1 = require("./components/test-request/test-request");
const test_upload_1 = require("./components/test-upload/test-upload");
const test_get_images_1 = require("./components/test-get-images/test-get-images");
const test_get_images_2_1 = require("./components/test-get-images-2/test-get-images-2");
const test_get_images_arrays_1 = require("./components/test-get-images-arrays/test-get-images-arrays");
const about_us_1 = require("./components/about-us/about-us");
const contact_us_1 = require("./components/contact-us/contact-us");
const user_post_list_1 = require("./components/user-post-list/user-post-list");
//import { TopbarProvider } from './TopbarContext';
// 导入根 reducer
const store = (0, redux_1.createStore)(rootReducer_1.default);
const fileNames = [
    '20240110_055037_CELPIP1_image_2.jpg',
    '20240111_030558__20210715144328_image_1.jpg',
    'defaultList.png',
];
function App() {
    return ((0, jsx_runtime_1.jsx)(AuthContext_1.AuthProvider, { children: (0, jsx_runtime_1.jsx)("div", { className: App_module_scss_1.default.root, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)("div", { className: App_module_scss_1.default.AppTop, children: (0, jsx_runtime_1.jsx)(top_bar_1.TopBar, {}) }), (0, jsx_runtime_1.jsx)("div", { className: App_module_scss_1.default.App, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react", element: (0, jsx_runtime_1.jsx)(home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/aboutus", element: (0, jsx_runtime_1.jsx)(about_us_1.AboutUS, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/contactus", element: (0, jsx_runtime_1.jsx)(contact_us_1.ContactUs, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/signin", element: (0, jsx_runtime_1.jsx)(sign_card_1.SignCard, { formType: "signin", redirectLink: "/react/userprofile" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/signup", element: (0, jsx_runtime_1.jsx)(sign_card_1.SignCard, { formType: "signup", redirectLink: "/react/userprofile" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/resetpw", element: (0, jsx_runtime_1.jsx)(sign_card_1.SignCard, { formType: "resetpw", redirectLink: "/react/userprofile" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userapply", element: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(user_apply_1.UserApply, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userapply2", element: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(user_apply_2_1.UserApply2, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userapply3", element: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(user_apply_3_1.UserApply3, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userapply4", element: (0, jsx_runtime_1.jsx)(user_apply_4_1.UserApply4, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userprofile", element: (0, jsx_runtime_1.jsx)(user_profile_1.UserProfile, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userpostlist", element: (0, jsx_runtime_1.jsx)(user_post_list_1.UserPostList, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/checkemail", element: (0, jsx_runtime_1.jsx)(test_check_email_1.TestCheckEmail, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/checkemail2", element: (0, jsx_runtime_1.jsx)(test_check_email_2_1.TestCheckEmail2, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/userapplycontent/:id", element: (0, jsx_runtime_1.jsx)(user_apply_content_1.UserApplyContent, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testtoken", element: (0, jsx_runtime_1.jsx)(test_token_1.TestToken, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testlist", element: (0, jsx_runtime_1.jsx)(test_list_1.TestList, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testlink", element: (0, jsx_runtime_1.jsx)(test_link_1.TestLink, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testnavigate", element: (0, jsx_runtime_1.jsx)(test_navigate_1.TestNavigate, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testchangepw", element: (0, jsx_runtime_1.jsx)(test_change_pw_1.TestChangePW, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testaxiospost", element: (0, jsx_runtime_1.jsx)(test_axios_post_1.TestAxiosPost, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testaxiospost2", element: (0, jsx_runtime_1.jsx)(test_axios_post_2_1.TestAxiosPost2, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testaxiospost3", element: (0, jsx_runtime_1.jsx)(test_axios_post_3_1.TestAxiosPost3, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testrequest", element: (0, jsx_runtime_1.jsx)(test_request_1.TestRequest, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testlisdatatable", element: (0, jsx_runtime_1.jsx)(test_list_data_table_1.TestListDataTable, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testupload", element: (0, jsx_runtime_1.jsx)(test_upload_1.TestUpload, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testgetimages", element: (0, jsx_runtime_1.jsx)(test_get_images_1.TestGetImages, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testgetimages2", element: (0, jsx_runtime_1.jsx)(test_get_images_2_1.TestGetImages2, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/react/testgetimagesarrays", element: (0, jsx_runtime_1.jsx)(test_get_images_arrays_1.TestGetImagesArrays, { fileNames: fileNames }) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/react/page1", element: (0, jsx_runtime_1.jsx)(page_1_1.Page1, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "test1", element: (0, jsx_runtime_1.jsx)(test_1_1.Test1, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "test2", element: (0, jsx_runtime_1.jsx)(test_2_1.Test2, {}) })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/react/page2", element: (0, jsx_runtime_1.jsx)(page_2_1.Page2, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "test3", element: (0, jsx_runtime_1.jsx)(test_3_1.Test3, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "test4", element: (0, jsx_runtime_1.jsx)(test_4_1.Test4, {}) })] })] }) })] }) }) }));
}
exports.default = App;
