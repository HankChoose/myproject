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
exports.UserApplyContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_apply_content_module_scss_1 = __importDefault(require("./user-apply-content.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const react_1 = require("react");
const apiService_1 = require("../../apiService");
const test_get_images_arrays_1 = require("../test-get-images-arrays/test-get-images-arrays");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserApplyContent = ({ className }) => {
    const { id } = (0, react_router_dom_1.useParams)();
    const apiUrl = `/user-apply-content/${id}`;
    const [applyData, setApplyData] = (0, react_1.useState)([]);
    const fileNames = ['20240110_055037_CELPIP1_image_2.jpg', '20240111_030558__20210715144328_image_1.jpg', 'defaultList.png'];
    (0, react_1.useEffect)(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        try {
            const data = yield (0, apiService_1.fetch_data_csrf_get)(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            }
            else {
                console.log('fetchData response:', data);
            }
            setApplyData(data);
        }
        catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    });
    function processImages(main_image_id, image_path0, image_path1, image_path2) {
        // 创建一个空数组，用于存放处理后的图片路径
        let imageArray = [];
        // 根据 main_image_id 的值确定数组的顺序
        switch (main_image_id) {
            case 0:
                imageArray.push(image_path0);
                break;
            case 1:
                imageArray.push(image_path1);
                break;
            case 2:
                imageArray.push(image_path2);
                break;
            default:
                // 如果 main_image_id 不是 0、1 或 2，可以根据实际需求处理，默认情况下将数组置为空
                imageArray = [];
        }
        // 检查其他图片路径，忽略 default.png
        if (image_path0 !== 'defaultList.png' && image_path0 !== imageArray[0]) {
            imageArray.push(image_path0);
        }
        if (image_path1 !== 'defaultList.png' && image_path1 !== imageArray[0]) {
            imageArray.push(image_path1);
        }
        if (image_path2 !== 'defaultList.png' && image_path2 !== imageArray[0]) {
            imageArray.push(image_path2);
        }
        return imageArray;
    }
    const firstid = applyData.length > 0 ? applyData[0].id : undefined;
    const firstusername = applyData.length > 0 ? applyData[0].username : undefined;
    const firstEmail = applyData.length > 0 ? applyData[0].email : null;
    const firstapply_type = applyData.length > 0 ? applyData[0].apply_type : undefined;
    const firstrequirements = applyData.length > 0 ? applyData[0].requirements : null;
    const firstmain_image_id = applyData.length > 0 ? applyData[0].main_image_id : 0;
    const firstimage_path0 = applyData.length > 0 ? applyData[0].image_path0 : null;
    const firstimage_path1 = applyData.length > 0 ? applyData[0].image_path1 : null;
    const firstimage_path2 = applyData.length > 0 ? applyData[0].image_path2 : null;
    const imageNameArray = processImages(firstmain_image_id, firstimage_path0, firstimage_path1, firstimage_path2);
    console.log(imageNameArray);
    imageNameArray.forEach((value, key) => {
        console.log('imageNameArray[' + key + ']', value);
    });
    // Filter out null values from imageNameArray
    const filteredImageArray = imageNameArray.filter((value) => value !== null);
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_apply_content_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["User Apply Content ID: ", id] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { style: { width: '60vw' }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, {}), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Text, {})] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { className: "list-group-flush", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, { striped: true, bordered: true, hover: true, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { width: '150px' }, children: "Item" }), (0, jsx_runtime_1.jsx)("th", { children: "Content" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Type:" }), (0, jsx_runtime_1.jsx)("td", { children: firstapply_type })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Images:" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(test_get_images_arrays_1.TestGetImagesArrays, { fileNames: filteredImageArray }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Content:" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("div", { style: { whiteSpace: 'pre-line' }, children: firstrequirements }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Username:" }), (0, jsx_runtime_1.jsx)("td", { children: firstusername })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Email:" }), (0, jsx_runtime_1.jsx)("td", { children: firstEmail })] })] })] }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Body, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Link, { href: "#" }) })] })] });
};
exports.UserApplyContent = UserApplyContent;
