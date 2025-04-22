"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.UserPostList = void 0;
const classnames_1 = __importDefault(require("classnames"));
const user_post_list_module_scss_1 = __importDefault(require("./user-post-list.module.scss"));
const react_1 = __importStar(require("react"));
const test_data_table_1 = require("../test-data-table/test-data-table");
const apiService_1 = require("../../apiService");
const test_data_grid_1 = require("../test-data-grid/test-data-grid");
const bi_1 = require("react-icons/bi");
const fa_1 = require("react-icons/fa");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserPostList = ({ className }) => {
    const [data1, setData] = (0, react_1.useState)([]);
    const [viewMode, setViewMode] = (0, react_1.useState)('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };
    const token = localStorage.getItem('accessToken');
    (0, react_1.useEffect)(() => {
        fetchDataList();
    }, []);
    const fetchDataList = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-user-list/`;
        try {
            const data = yield (0, apiService_1.fetch_data_token_get)(apiUrl, token);
            if (data.error) {
                console.log('fetchDataList response data.message:', data.message);
            }
            else {
                console.log('fetchDataList response:', data);
            }
            setData(data);
        }
        catch (error) {
            // 处理错误
            console.error('fetchDataList error:', error);
        }
    });
    return <div className={(0, classnames_1.default)(user_post_list_module_scss_1.default.root)}>
                <div>
                    <button className={user_post_list_module_scss_1.default.buttonStyle} onClick={toggleViewMode}>
                     {viewMode === 'list' ? <><bi_1.BiSolidGrid /> Grid View</> : <><fa_1.FaListUl /> List View</>}
                    </button>
                    {viewMode === 'list' ? <test_data_table_1.TestDataTable data={data1}/> : <test_data_grid_1.TestDataGrid data={data1}/>}
                </div>
        </div>;
};
exports.UserPostList = UserPostList;
