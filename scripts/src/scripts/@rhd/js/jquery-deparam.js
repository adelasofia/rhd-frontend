(function (deparam) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var jquery = require('jquery');
        module.exports = deparam(jquery);
    }
    else if (typeof define === 'function' && define.amd) {
        define(['jquery'], function (jquery) {
            return deparam(jquery);
        });
    }
    else {
        var global = (false || eval)('this');
        global.deparam = deparam(jQuery);
    }
})(function ($) {
    return function (params, coerce) {
        var obj = {}, coerce_types = { 'true': !0, 'false': !1, 'null': null };
        $.each(params.replace(/\+/g, ' ').split('&'), function (j, v) {
            var param = v.split('='), key = decodeURIComponent(param[0]), val, cur = obj, i = 0, keys = key.split(']['), keys_last = keys.length - 1;
            if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
                keys[keys_last] = keys[keys_last].replace(/\]$/, '');
                keys = keys.shift().split('[').concat(keys);
                keys_last = keys.length - 1;
            }
            else {
                keys_last = 0;
            }
            if (param.length === 2) {
                val = decodeURIComponent(param[1]);
                if (coerce) {
                    val = val && !isNaN(val) ? +val
                        : val === 'undefined' ? undefined
                            : coerce_types[val] !== undefined ? coerce_types[val]
                                : val;
                }
                if (keys_last) {
                    for (; i <= keys_last; i++) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                            ? cur[key] || (keys[i + 1] && isNaN(keys[i + 1]) ? {} : [])
                            : val;
                    }
                }
                else {
                    if ($.isArray(obj[key])) {
                        obj[key].push(val);
                    }
                    else if (obj[key] !== undefined) {
                        obj[key] = [obj[key], val];
                    }
                    else {
                        obj[key] = val;
                    }
                }
            }
            else if (key) {
                obj[key] = coerce
                    ? undefined
                    : '';
            }
        });
        return obj;
    };
});
