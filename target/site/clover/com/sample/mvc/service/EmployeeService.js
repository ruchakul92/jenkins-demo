var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":63,"id":58,"methods":[{"el":15,"sc":2,"sl":13},{"el":19,"sc":2,"sl":17},{"el":28,"sc":2,"sl":21},{"el":36,"sc":2,"sl":30},{"el":52,"sc":2,"sl":38},{"el":62,"sc":2,"sl":54}],"name":"EmployeeService","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":13},{"sl":21}],"name":"findByEmployeeCodeFalse","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":23},{"sl":24},{"sl":27}]},"test_10":{"methods":[{"sl":13},{"sl":21}],"name":"findByEmployeeCodeTrue","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":23},{"sl":24}]},"test_12":{"methods":[{"sl":13},{"sl":30}],"name":"testAddTrue","pass":true,"statements":[{"sl":14},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_14":{"methods":[{"sl":13},{"sl":38}],"name":"deleteEmployeeTrue","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51}]},"test_15":{"methods":[{"sl":13},{"sl":38}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51}]},"test_17":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeEditControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_18":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeEditControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_19":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeAddControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_2":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeAddControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_20":{"methods":[{"sl":13},{"sl":21}],"name":"findByEmployeeCodeFalse","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":23},{"sl":24},{"sl":27}]},"test_21":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"editEmployeeTrue","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61}]},"test_22":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeDeleteControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_23":{"methods":[{"sl":13},{"sl":21}],"name":"findByEmployeeCodeTrue","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":23},{"sl":24}]},"test_24":{"methods":[{"sl":13},{"sl":17}],"name":"testEmployeeDeleteControllerTrue","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_26":{"methods":[{"sl":13},{"sl":30}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_28":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61}]},"test_29":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"editEmployeeFalse","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":61}]},"test_3":{"methods":[{"sl":13},{"sl":38}],"name":"deleteEmployeeFalse","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":51}]},"test_30":{"methods":[{"sl":13},{"sl":17},{"sl":30}],"name":"testAddFalse","pass":true,"statements":[{"sl":14},{"sl":18},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_31":{"methods":[{"sl":13},{"sl":17}],"name":"testHandleRequestInternal","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_32":{"methods":[{"sl":13}],"name":"testEmployeeControllerTrue","pass":true,"statements":[{"sl":14}]},"test_34":{"methods":[{"sl":13},{"sl":38}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51}]},"test_36":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"editEmployeeFalse","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":61}]},"test_37":{"methods":[{"sl":13},{"sl":30}],"name":"testAddTrue","pass":true,"statements":[{"sl":14},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_38":{"methods":[{"sl":13}],"name":"testEmployeeControllerTrue","pass":true,"statements":[{"sl":14}]},"test_39":{"methods":[{"sl":13},{"sl":17},{"sl":30}],"name":"testAddFalse","pass":true,"statements":[{"sl":14},{"sl":18},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_42":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"editEmployeeTrue","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61}]},"test_5":{"methods":[{"sl":13},{"sl":38},{"sl":54}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":61}]},"test_6":{"methods":[{"sl":13},{"sl":38}],"name":"deleteEmployeeFalse","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":51}]},"test_7":{"methods":[{"sl":13},{"sl":30}],"name":"testOnsubmit","pass":true,"statements":[{"sl":14},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_8":{"methods":[{"sl":13},{"sl":17}],"name":"testHandleRequestInternal","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_9":{"methods":[{"sl":13},{"sl":38}],"name":"deleteEmployeeTrue","pass":true,"statements":[{"sl":14},{"sl":40},{"sl":41},{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":51}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [0, 3, 17, 26, 42, 9, 28, 32, 22, 18, 15, 7, 20, 2, 36, 31, 10, 29, 23, 12, 38, 14, 39, 34, 19, 5, 37, 24, 8, 30, 6, 21], [0, 3, 17, 26, 42, 9, 28, 32, 22, 18, 15, 7, 20, 2, 36, 31, 10, 29, 23, 12, 38, 14, 39, 34, 19, 5, 37, 24, 8, 30, 6, 21], [], [], [17, 22, 18, 2, 31, 39, 19, 24, 8, 30], [17, 22, 18, 2, 31, 39, 19, 24, 8, 30], [], [], [0, 20, 10, 23], [0, 20, 10, 23], [0, 20, 10, 23], [0, 20, 10, 23], [], [], [0, 20], [], [], [26, 7, 12, 39, 37, 30], [26, 7, 12, 39, 37, 30], [26, 7, 12, 39, 37, 30], [26, 7, 12, 39, 37, 30], [26, 7, 12, 39, 37, 30], [26, 7, 12, 39, 37, 30], [], [], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [], [42, 9, 28, 15, 14, 34, 5, 21], [42, 9, 28, 15, 14, 34, 5, 21], [], [], [3, 42, 9, 28, 15, 36, 29, 14, 34, 5, 6, 21], [], [], [42, 28, 36, 29, 5, 21], [], [42, 28, 36, 29, 5, 21], [42, 28, 36, 29, 5, 21], [42, 28, 36, 29, 5, 21], [42, 28, 5, 21], [], [42, 28, 36, 29, 5, 21], [], []]
