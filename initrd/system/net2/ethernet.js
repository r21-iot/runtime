// Copyright 2014 Runtime.JS project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var assert = require('assert');
var MACAddress = require('./mac-address');

exports.getDestMAC = function(u8, headerOffset) {
  return new MACAddress(u8[headerOffset + 0],
                        u8[headerOffset + 1],
                        u8[headerOffset + 2],
                        u8[headerOffset + 3],
                        u8[headerOffset + 4],
                        u8[headerOffset + 5]);
};

exports.getSrcMAC = function(u8, headerOffset) {
  return new MACAddress(u8[headerOffset + 6],
                        u8[headerOffset + 7],
                        u8[headerOffset + 8],
                        u8[headerOffset + 9],
                        u8[headerOffset + 10],
                        u8[headerOffset + 11]);
};

exports.getEtherType = function(u8, headerOffset) {
  return ((u8[headerOffset + 12] << 8) + u8[headerOffset + 13]) >>> 0;
};

exports.headerLength = 14;
