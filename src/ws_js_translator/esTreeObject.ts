import type { Node } from 'esprima';

const genEsTreeFunctions = {
  pushNum: (num: number): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'Literal',
                        value: num,
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },

  dup: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'BinaryExpression',
                          operator: '-',
                          left: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'length',
                            },
                          },
                          right: {
                            type: 'Literal',
                            value: 1,
                            raw: '1',
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },

  copy: (num: number): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'BinaryExpression',
                          operator: '-',
                          left: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'length',
                            },
                          },
                          right: {
                            type: 'Literal',
                            value: num,
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  swap: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'splice',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '-',
                        left: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'stack',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'length',
                          },
                        },
                        right: {
                          type: 'Literal',
                          value: 2,
                          raw: '2',
                        },
                      },
                      {
                        type: 'Literal',
                        value: 2,
                        raw: '2',
                      },
                      {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'BinaryExpression',
                          operator: '-',
                          left: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'length',
                            },
                          },
                          right: {
                            type: 'Literal',
                            value: 1,
                            raw: '1',
                          },
                        },
                      },
                      {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'BinaryExpression',
                          operator: '-',
                          left: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'length',
                            },
                          },
                          right: {
                            type: 'Literal',
                            value: 2,
                            raw: '2',
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },

  discard: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'splice',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '-',
                        left: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'stack',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'length',
                          },
                        },
                        right: {
                          type: 'Literal',
                          value: 1,
                          raw: '1',
                        },
                      },
                      {
                        type: 'Literal',
                        value: 1,
                        raw: '1',
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  slide: (num: number): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'splice',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '-',
                        left: {
                          type: 'BinaryExpression',
                          operator: '-',
                          left: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'length',
                            },
                          },
                          right: {
                            type: 'Literal',
                            value: num,
                          },
                        },
                        right: {
                          type: 'Literal',
                          value: 1,
                          raw: '1',
                        },
                      },
                      {
                        type: 'Literal',
                        value: num,
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  add: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                        right: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  sub: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '-',
                        left: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                        right: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  mul: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                        right: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  div: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '/',
                        left: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                        right: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  mod: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'BinaryExpression',
                        operator: '%',
                        left: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                        right: {
                          type: 'CallExpression',
                          callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'stack',
                            },
                            property: {
                              type: 'Identifier',
                              name: 'pop',
                            },
                          },
                          arguments: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  store: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'VariableDeclaration',
                  declarations: [
                    {
                      type: 'VariableDeclarator',
                      id: {
                        type: 'Identifier',
                        name: 'value',
                      },
                      init: {
                        type: 'CallExpression',
                        callee: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'stack',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'pop',
                          },
                        },
                        arguments: [],
                      },
                    },
                  ],
                  kind: 'const',
                },
                {
                  type: 'VariableDeclaration',
                  declarations: [
                    {
                      type: 'VariableDeclarator',
                      id: {
                        type: 'Identifier',
                        name: 'address',
                      },
                      init: {
                        type: 'CallExpression',
                        callee: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'stack',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'pop',
                          },
                        },
                        arguments: [],
                      },
                    },
                  ],
                  kind: 'const',
                },
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                      type: 'MemberExpression',
                      computed: true,
                      object: {
                        type: 'Identifier',
                        name: 'heap',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'address',
                      },
                    },
                    right: {
                      type: 'Identifier',
                      name: 'value',
                    },
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  retrieve: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'VariableDeclaration',
                  declarations: [
                    {
                      type: 'VariableDeclarator',
                      id: {
                        type: 'Identifier',
                        name: 'address',
                      },
                      init: {
                        type: 'CallExpression',
                        callee: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'stack',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'pop',
                          },
                        },
                        arguments: [],
                      },
                    },
                  ],
                  kind: 'const',
                },
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'heap',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'address',
                        },
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  mark: (label: string): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'AssignmentExpression',
        operator: '=',
        left: {
          type: 'MemberExpression',
          computed: true,
          object: {
            type: 'Identifier',
            name: 'label',
          },
          property: {
            type: 'Literal',
            value: label,
          },
        },
        right: {
          type: 'BinaryExpression',
          operator: '-',
          left: {
            type: 'MemberExpression',
            computed: false,
            object: {
              type: 'Identifier',
              name: 'memory',
            },
            property: {
              type: 'Identifier',
              name: 'length',
            },
          },
          right: {
            type: 'Literal',
            value: 1,
            raw: '1',
          },
        },
      },
    };
  },
  call: (label: string): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'bp',
                      },
                      property: {
                        type: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [
                      {
                        type: 'Identifier',
                        name: 'pointer',
                      },
                    ],
                  },
                },
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                      type: 'Identifier',
                      name: 'pointer',
                    },
                    right: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'label',
                      },
                      property: {
                        type: 'Identifier',
                        name: label,
                      },
                    },
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  jmp: (label: string): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                      type: 'Identifier',
                      name: 'pointer',
                    },
                    right: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'Identifier',
                        name: 'label',
                      },
                      property: {
                        type: 'Identifier',
                        name: label,
                      },
                    },
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  jmpz: (label: string): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'IfStatement',
                  test: {
                    type: 'BinaryExpression',
                    operator: '===',
                    left: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'pop',
                        },
                      },
                      arguments: [],
                    },
                    right: {
                      type: 'Literal',
                      value: 0,
                      raw: '0',
                    },
                  },
                  consequent: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'AssignmentExpression',
                          operator: '=',
                          left: {
                            type: 'Identifier',
                            name: 'pointer',
                          },
                          right: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'label',
                            },
                            property: {
                              type: 'Identifier',
                              name: label,
                            },
                          },
                        },
                      },
                    ],
                  },
                  alternate: null,
                },
                {
                  type: 'EmptyStatement',
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  jmpn: (label: string): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'IfStatement',
                  test: {
                    type: 'BinaryExpression',
                    operator: '<=',
                    left: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'Identifier',
                          name: 'stack',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'pop',
                        },
                      },
                      arguments: [],
                    },
                    right: {
                      type: 'Literal',
                      value: 0,
                      raw: '0',
                    },
                  },
                  consequent: {
                    type: 'BlockStatement',
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'AssignmentExpression',
                          operator: '=',
                          left: {
                            type: 'Identifier',
                            name: 'pointer',
                          },
                          right: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                              type: 'Identifier',
                              name: 'label',
                            },
                            property: {
                              type: 'Identifier',
                              name: label,
                            },
                          },
                        },
                      },
                    ],
                  },
                  alternate: null,
                },
                {
                  type: 'EmptyStatement',
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  ends: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                      type: 'Identifier',
                      name: 'pointer',
                    },
                    right: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'Identifier',
                          name: 'bp',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'pop',
                        },
                      },
                      arguments: [],
                    },
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  end: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                      type: 'Identifier',
                      name: 'pointer',
                    },
                    right: {
                      type: 'UnaryExpression',
                      operator: '-',
                      argument: {
                        type: 'Literal',
                        value: 1,
                        raw: '1',
                      },
                      prefix: true,
                    },
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  putChar: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'Identifier',
                          name: 'process',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'stdout',
                        },
                      },
                      property: {
                        type: 'Identifier',
                        name: 'write',
                      },
                    },
                    arguments: [
                      {
                        type: 'CallExpression',
                        callee: {
                          type: 'MemberExpression',
                          computed: false,
                          object: {
                            type: 'Identifier',
                            name: 'String',
                          },
                          property: {
                            type: 'Identifier',
                            name: 'fromCharCode',
                          },
                        },
                        arguments: [
                          {
                            type: 'CallExpression',
                            callee: {
                              type: 'MemberExpression',
                              computed: false,
                              object: {
                                type: 'Identifier',
                                name: 'stack',
                              },
                              property: {
                                type: 'Identifier',
                                name: 'pop',
                              },
                            },
                            arguments: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
  putNum: (): Node => {
    return {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'memory',
          },
          property: {
            type: 'Identifier',
            name: 'push',
          },
        },
        arguments: [
          {
            type: 'FunctionExpression',
            id: null,
            params: [],
            body: {
              type: 'BlockStatement',
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'CallExpression',
                    callee: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'Identifier',
                          name: 'process',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'stdout',
                        },
                      },
                      property: {
                        type: 'Identifier',
                        name: 'write',
                      },
                    },
                    arguments: [
                      {
                        type: 'CallExpression',
                        callee: {
                          type: 'Identifier',
                          name: 'String',
                        },
                        arguments: [
                          {
                            type: 'CallExpression',
                            callee: {
                              type: 'MemberExpression',
                              computed: false,
                              object: {
                                type: 'Identifier',
                                name: 'stack',
                              },
                              property: {
                                type: 'Identifier',
                                name: 'pop',
                              },
                            },
                            arguments: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            generator: false,
            expression: false,
            async: false,
          },
        ],
      },
    };
  },
};

export default genEsTreeFunctions;
