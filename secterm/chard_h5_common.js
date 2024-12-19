/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const secterm = $root.secterm = (() => {

    /**
     * Namespace secterm.
     * @exports secterm
     * @namespace
     */
    const secterm = {};

    secterm.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof secterm
         * @namespace
         */
        const v1 = {};

        /**
         * CommonCode enum.
         * @name secterm.v1.CommonCode
         * @enum {number}
         * @property {number} SUCCES=0 SUCCES value
         * @property {number} ERROR=1 ERROR value
         * @property {number} WARN=2 WARN value
         */
        v1.CommonCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCES"] = 0;
            values[valuesById[1] = "ERROR"] = 1;
            values[valuesById[2] = "WARN"] = 2;
            return values;
        })();

        return v1;
    })();

    return secterm;
})();

export { $root as default };
