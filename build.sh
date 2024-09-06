#!/bin/bash
rm -rf ./secterm/**

# pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_sftp.js  proto/secterm/v1/chard_h5_sftp.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_nego.js  proto/secterm/v1/chard_h5_nego.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_terminal.js  proto/secterm/v1/chard_h5_terminal.proto
# pbjs -t static-module --es6 -w es6 -o secterm/chard_h5_file.js  proto/secterm/v1/chard_h5_file.proto
pbjs -t static-module --es6 -w es6 -o secterm/chard_file.js  proto/secterm/v1/chard_file.proto
pbjs -t static-module --es6 -w es6 -o secterm/secterm.js  proto/secterm/v1/secterm.proto

pbts -o secterm/chard_h5_terminal.ts secterm/chard_h5_terminal.js
# pbts -o secterm/chard_h5_file.ts secterm/chard_h5_file.js
# pbts -o secterm/chard_h5_sftp.ts secterm/chard_h5_sftp.js
pbts -o secterm/chard_h5_nego.ts secterm/chard_h5_nego.js
pbts -o secterm/chard_file.ts secterm/chard_file.js
pbts -o secterm/secterm.d.ts secterm/secterm.js
