"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch_data_csrf_get = exports.axios_json_data_get = exports.axios_json_data_post = exports.axios_form_data_post = exports.fetch_data_token_post = exports.fetch_data_token_get = exports.axios_image_file_get = void 0;
const constants_1 = require("./constants");
const js_cookie_1 = __importDefault(require("js-cookie"));
const axios_1 = __importDefault(require("axios"));
const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery
const handleError = (error) => {
    // 处理错误，例如显示一个错误提示或者进行其他操作
    console.error('API Request Error:', error);
    // You can return a specific value or object here
    const errorResponse = { error: true, message: error };
    return errorResponse;
};
/*
//////////////////////////////////axios_json_data_post
responseType: 'arraybuffer'
1. TestGetImages
2.(`${baseUrl}/get-image/${imageInfo}/`
*/
const axios_image_file_get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const console_title = 'axios_image_file_get';
    try {
        const response = yield axios_1.default.get(`${constants_1.baseUrl}${url}`, {
            responseType: 'arraybuffer',
        });
        return response;
    }
    catch (error) {
        console.error(console_title + ' error:', error);
        return handleError(console_title + ' error:' + error);
    }
});
exports.axios_image_file_get = axios_image_file_get;
/*
//////////////////////////////////////fetch_data_token_get
'Content-Type': 'application/json',
1. /user-profile/
2.CSRF token（Cross-site request forgery token）
*/
const fetch_data_csrf_get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    //const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery
    const console_title = 'fetch_data_csrf_get';
    const config_fetch_data_csrf_get = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken || '',
        }
    };
    try {
        const response = yield fetch(`${constants_1.baseUrl}${url}`, config_fetch_data_csrf_get);
        console.log(console_title + ' response:', response);
        if (response.ok) {
            const data = yield response.json();
            console.log(console_title + 'response data', data);
            return data;
        }
        else {
            // 处理请求失败的情况
            console.error(console_title + ' response data error:', response.status, response.statusText);
            return handleError(console_title + ' response data error:' + response.status + response.statusText);
        }
    }
    catch (error) {
        console.error(console_title + ' error:', error);
        return handleError(console_title + ' error:' + error);
    }
});
exports.fetch_data_csrf_get = fetch_data_csrf_get;
/*
//////////////////////////////////////fetch_data_token_get
'Content-Type': 'application/json',
1. /user-profile/
2.
*/
const fetch_data_token_get = (url, token) => __awaiter(void 0, void 0, void 0, function* () {
    const console_title = 'fetch_data_token_get';
    if (token) {
        const config_fetch_data_token_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            }
        };
        try {
            const response = yield fetch(`${constants_1.baseUrl}${url}`, config_fetch_data_token_get);
            console.log(console_title + ' response:', response);
            if (response.ok) {
                const data = yield response.json();
                console.log(console_title + 'response data', data);
                return data;
            }
            else {
                // 处理请求失败的情况
                console.error(console_title + ' response data error:', response.status, response.statusText);
                return handleError(console_title + ' response data error:' + response.status + response.statusText);
            }
        }
        catch (error) {
            console.error(console_title + ' error:', error);
            return handleError(console_title + ' error:' + error);
        }
    }
    else {
        // 处理令牌不存在的情况
        console.error(console_title + ' token is undefined or null');
        return handleError(console_title + ' token is undefined or null');
    }
});
exports.fetch_data_token_get = fetch_data_token_get;
/*
//////////////////////////////////////fetch_data_token_post
'Content-Type': 'application/json', body: JSON.stringify({ new_username: username }),
1./user-change-username/
2.
*/
const fetch_data_token_post = (url, token, username) => __awaiter(void 0, void 0, void 0, function* () {
    const console_title = 'fetch_data_token_post';
    if (token) {
        const config_fetch_data_token_post = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({ new_username: username }),
        };
        try {
            const response = yield fetch(`${constants_1.baseUrl}${url}`, config_fetch_data_token_post);
            if (response.ok) {
                const data = yield response.json();
                console.log(console_title + 'response data', data);
                return data;
            }
            else {
                // 处理请求失败的情况
                console.error(console_title + ' response data error:', response.status, response.statusText);
                return handleError(console_title + ' response data error:' + response.status + response.statusText);
            }
        }
        catch (error) {
            console.error(console_title + ' error:', error);
            return handleError(console_title + ' error:' + error);
        }
    }
    else {
        // 处理令牌不存在的情况
        console.error(console_title + ' token is undefined or null');
        return handleError(console_title + ' token is undefined or null');
    }
});
exports.fetch_data_token_post = fetch_data_token_post;
/*
//////////////////////////////////////axios_form_data_post
'Content-Type':'multipart/form-data','application/x-www-form-urlencoded'
1./accounts/signup/
2.
*/
const axios_form_data_post = (url, userData, contentType) => __awaiter(void 0, void 0, void 0, function* () {
    //const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery
    const console_title = 'axios_form_data_post';
    const config_axios_form_data_post = {
        method: 'POST',
        headers: {
            'Content-Type': contentType,
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
    try {
        const response = yield axios_1.default.post(`${constants_1.baseUrl}${url}`, userData, config_axios_form_data_post);
        if (response.status === 200) {
            console.log(console_title + 'response data', response.data);
            return response.data;
        }
        else {
            // 处理请求失败的情况
            console.error(console_title + ' response data error:', response.status, response.statusText);
            return handleError(console_title + ' response data error:' + response.status + response.statusText);
        }
    }
    catch (error) {
        console.error(console_title + ' error:', error);
        return handleError(console_title + ' error:' + error);
    }
});
exports.axios_form_data_post = axios_form_data_post;
/*
//////////////////////////////////axios_json_data_post
'Content-Type':'application/json',body: JSON.stringify(userData),
1. /user-token/
2./accounts/password/reset/
*/
const axios_json_data_post = (url, userData) => __awaiter(void 0, void 0, void 0, function* () {
    //const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery
    const console_title = 'axios_json_data_post';
    const config_axios_json_data_post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
        body: JSON.stringify(userData),
    };
    try {
        const response = yield axios_1.default.post(`${constants_1.baseUrl}${url}`, userData, config_axios_json_data_post);
        if (response.status === 200) {
            console.log(console_title + 'response data', response.data);
            return response.data;
        }
        else {
            // 处理请求失败的情况
            console.error(console_title + ' response data error:', response.status, response.statusText);
            return handleError(console_title + ' response data error:' + response.status + response.statusText);
        }
    }
    catch (error) {
        console.error(console_title + ' error:', error);
        return handleError(console_title + ' error:' + error);
    }
});
exports.axios_json_data_post = axios_json_data_post;
/*
//////////////////////////////////axios_json_data_post
'Content-Type':'application/json',
1. /user-token/
2./accounts/password/reset/
*/
const axios_json_data_get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    //const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token Cross-Site Request Forgery
    const console_title = 'axios_json_data_get';
    const config_axios_json_data_get = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
    try {
        const response = yield axios_1.default.get(`${constants_1.baseUrl}${url}`, config_axios_json_data_get);
        if (response.status === 200) {
            console.log(console_title + 'response data', response.data);
            return response.data;
        }
        else {
            // 处理请求失败的情况
            console.error(console_title + ' response data error:', response.status, response.statusText);
            return handleError(console_title + ' response data error:' + response.status + response.statusText);
        }
    }
    catch (error) {
        console.error(console_title + ' error:', error);
        return handleError(console_title + ' error:' + error);
    }
});
exports.axios_json_data_get = axios_json_data_get;
