#!/bin/bash
rm -rf ./secterm/**

# pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_sftp.js  proto/secterm/v1/chard_h5_sftp.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_connect.js  proto/secterm/v1/chard_h5_connect.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_terminal.js  proto/secterm/v1/chard_h5_terminal.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_file.js  proto/secterm/v1/chard_h5_file.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_common.js  proto/secterm/v1/chard_h5_common.proto
pbjs -t static-module --es6 -w es6 -o secterm/secterm.js  proto/secterm/v1/secterm.proto
pbts -o secterm/chard_h5_terminal.ts secterm/chard_h5_terminal.js
pbts -o secterm/chard_h5_connect.ts secterm/chard_h5_connect.js
pbts -o secterm/chard_h5_file.ts secterm/chard_h5_file.js
pbts -o secterm/chard_h5_common.ts secterm/chard_h5_common.js
pbts -o secterm/secterm.d.ts secterm/secterm.js
