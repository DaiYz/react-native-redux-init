'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Urlencode = exports.Urlencode = require('form-urlencoded');

var POSTUrlencodeJSON = exports.POSTUrlencodeJSON = function POSTUrlencodeJSON() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
            var options, res, json;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            options = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                },
                                body: Urlencode(params)
                            };
                            _context.next = 4;
                            return fetch(url, options);

                        case 4:
                            res = _context.sent;
                            _context.next = 7;
                            return res.json();

                        case 7:
                            json = _context.sent;

                            resolve(json);
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](0);

                            reject(_context.t0);

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 11]]);
        }));

        return function (_x3, _x4) {
            return _ref.apply(this, arguments);
        };
    }());
};

var POSTRawJSON = exports.POSTRawJSON = function POSTRawJSON() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resolve, reject) {
            var options, res, json;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            options = {
                                method: 'POST',
                                body: JSON.stringify(params),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            };
                            _context2.next = 4;
                            return fetch(url, options);

                        case 4:
                            res = _context2.sent;
                            _context2.next = 7;
                            return res.json();

                        case 7:
                            json = _context2.sent;

                            resolve(json);
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](0);

                            reject(_context2.t0);

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 11]]);
        }));

        return function (_x7, _x8) {
            return _ref2.apply(this, arguments);
        };
    }());
};

var GETJSON = exports.GETJSON = function GETJSON() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(resolve, reject) {
            var res, json;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return fetch(url + '?' + Urlencode(query));

                        case 3:
                            res = _context3.sent;
                            _context3.next = 6;
                            return res.json();

                        case 6:
                            json = _context3.sent;

                            resolve(json);
                            _context3.next = 13;
                            break;

                        case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3['catch'](0);

                            reject(_context3.t0);

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 10]]);
        }));

        return function (_x11, _x12) {
            return _ref3.apply(this, arguments);
        };
    }());
};

var DELETEJSON = exports.DELETEJSON = function DELETEJSON() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(resolve, reject) {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return fetch(url, {
                                method: 'DELETE'
                            });

                        case 3:
                            res = _context4.sent;
                            _context4.t0 = resolve;
                            _context4.next = 7;
                            return res.json();

                        case 7:
                            _context4.t1 = _context4.sent;
                            (0, _context4.t0)(_context4.t1);
                            _context4.next = 14;
                            break;

                        case 11:
                            _context4.prev = 11;
                            _context4.t2 = _context4['catch'](0);

                            reject(_context4.t2);

                        case 14:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 11]]);
        }));

        return function (_x15, _x16) {
            return _ref4.apply(this, arguments);
        };
    }());
};

var PUTJSON = exports.PUTJSON = function PUTJSON() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function () {
        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(resolve, reject) {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return fetch(url, {
                                method: "PUT",
                                form: Urlencode(query)
                            });

                        case 3:
                            res = _context5.sent;
                            _context5.next = 9;
                            break;

                        case 6:
                            _context5.prev = 6;
                            _context5.t0 = _context5['catch'](0);

                            reject(_context5.t0);

                        case 9:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 6]]);
        }));

        return function (_x19, _x20) {
            return _ref5.apply(this, arguments);
        };
    }());
};

var Mock = exports.Mock = function Mock(mockData) {
    return new Promise(function () {
        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(resolve, reject) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            resolve(mockData);

                        case 1:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined);
        }));

        return function (_x21, _x22) {
            return _ref6.apply(this, arguments);
        };
    }());
};
