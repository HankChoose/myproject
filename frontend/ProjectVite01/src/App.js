"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const react_1 = __importDefault(require("react"));
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
const after_ask_info_1 = require("./components/after-ask-info/after-ask-info");
const ask_info_1 = require("./components/ask-info/ask-info");
//import { TopbarProvider } from './TopbarContext';
// 导入根 reducer
const store = (0, redux_1.createStore)(rootReducer_1.default);
const fileNames = [
    '20240110_055037_CELPIP1_image_2.jpg',
    '20240111_030558__20210715144328_image_1.jpg',
    'defaultList.png',
];
function App() {
    return (<AuthContext_1.AuthProvider>
            <div className={App_module_scss_1.default.root}>
                <react_router_dom_1.BrowserRouter>
                    <div className={App_module_scss_1.default.AppTop}>
                        <top_bar_1.TopBar />
                    </div>
                    <div className={App_module_scss_1.default.App}>
                        <react_router_dom_1.Routes>
                            <react_router_dom_1.Route path="/react" element={<home_1.Home />}/>
                            <react_router_dom_1.Route path="/react/aboutus" element={<about_us_1.AboutUS />}/>
                            <react_router_dom_1.Route path="/react/askinfo" element={<ask_info_1.AskInfo />}/>
                            <react_router_dom_1.Route path="/react/afteraskinfo" element={<after_ask_info_1.AfterAskInfo />}/>
                            <react_router_dom_1.Route path="/react/contactus" element={<contact_us_1.ContactUs />}/>
                            <react_router_dom_1.Route path="/react/signin" element={<sign_card_1.SignCard formType="signin" redirectLink="/react/userprofile"/>}/>
                            <react_router_dom_1.Route path="/react/signup" element={<sign_card_1.SignCard formType="signup" redirectLink="/react/userprofile"/>}/>
                            <react_router_dom_1.Route path="/react/resetpw" element={<sign_card_1.SignCard formType="resetpw" redirectLink="/react/userprofile"/>}/>
                            <react_router_dom_1.Route path="/react/userapply" element={<react_redux_1.Provider store={store}>
                                        <user_apply_1.UserApply />
                                    </react_redux_1.Provider>}/>
                            <react_router_dom_1.Route path="/react/userapply2" element={<react_redux_1.Provider store={store}>
                                        <user_apply_2_1.UserApply2 />
                                    </react_redux_1.Provider>}/>
                            <react_router_dom_1.Route path="/react/userapply3" element={<react_redux_1.Provider store={store}>
                                        <user_apply_3_1.UserApply3 />
                                    </react_redux_1.Provider>}/>
                            <react_router_dom_1.Route path="/react/userapply4" element={<user_apply_4_1.UserApply4 />}/>
                            <react_router_dom_1.Route path="/react/userprofile" element={<user_profile_1.UserProfile />}/>
                            <react_router_dom_1.Route path="/react/userpostlist" element={<user_post_list_1.UserPostList />}/>
                            <react_router_dom_1.Route path="/react/checkemail" element={<test_check_email_1.TestCheckEmail />}/>
                            <react_router_dom_1.Route path="/react/checkemail2" element={<test_check_email_2_1.TestCheckEmail2 />}/>
                            <react_router_dom_1.Route path="/react/userapplycontent/:id" element={<user_apply_content_1.UserApplyContent />}/>
                            <react_router_dom_1.Route path="/react/testtoken" element={<test_token_1.TestToken />}/>
                            <react_router_dom_1.Route path="/react/testlist" element={<test_list_1.TestList />}/>
                            <react_router_dom_1.Route path="/react/testlink" element={<test_link_1.TestLink />}/>
                            <react_router_dom_1.Route path="/react/testnavigate" element={<test_navigate_1.TestNavigate />}/>
                            <react_router_dom_1.Route path="/react/testchangepw" element={<test_change_pw_1.TestChangePW />}/>
                            <react_router_dom_1.Route path="/react/testaxiospost" element={<test_axios_post_1.TestAxiosPost />}/>
                            <react_router_dom_1.Route path="/react/testaxiospost2" element={<test_axios_post_2_1.TestAxiosPost2 />}/>
                            <react_router_dom_1.Route path="/react/testaxiospost3" element={<test_axios_post_3_1.TestAxiosPost3 />}/>
                            <react_router_dom_1.Route path="/react/testrequest" element={<test_request_1.TestRequest />}/>
                            <react_router_dom_1.Route path="/react/testlisdatatable" element={<test_list_data_table_1.TestListDataTable />}/>
                            <react_router_dom_1.Route path="/react/testupload" element={<test_upload_1.TestUpload />}/>
                            <react_router_dom_1.Route path="/react/testgetimages" element={<test_get_images_1.TestGetImages />}/>
                            <react_router_dom_1.Route path="/react/testgetimages2" element={<test_get_images_2_1.TestGetImages2 />}/>
                            <react_router_dom_1.Route path="/react/testgetimagesarrays" element={<test_get_images_arrays_1.TestGetImagesArrays fileNames={fileNames}/>}/>

                            <react_router_dom_1.Route path="/react/page1" element={<page_1_1.Page1 />}>
                                <react_router_dom_1.Route path="test1" element={<test_1_1.Test1 />}/>
                                <react_router_dom_1.Route path="test2" element={<test_2_1.Test2 />}/>
                            </react_router_dom_1.Route>
                            <react_router_dom_1.Route path="/react/page2" element={<page_2_1.Page2 />}>
                                <react_router_dom_1.Route path="test3" element={<test_3_1.Test3 />}/>
                                <react_router_dom_1.Route path="test4" element={<test_4_1.Test4 />}/>
                            </react_router_dom_1.Route>
                        </react_router_dom_1.Routes>
                    </div>
                </react_router_dom_1.BrowserRouter>
            </div>
        
        </AuthContext_1.AuthProvider>);
}
exports.default = App;
