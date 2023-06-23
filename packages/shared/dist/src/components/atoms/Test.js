"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUi = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TestUi = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: {
                flex: 1,
                backgroundColor: 'linen',
                borderRadius: 20,
                borderWidth: 14,
                justifyContent: 'center',
                alignItems: 'center'
            } },
            react_1.default.createElement(react_native_1.Text, { style: {
                    alignSelf: 'center',
                    lineHeight: 32,
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'coral'
                } }, "3-th change, and version 1.0.5"))));
};
exports.TestUi = TestUi;
