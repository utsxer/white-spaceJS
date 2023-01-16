import type { Node } from 'esprima';
export default function getEsTree(partsOfEsTree): Node {
  return {
    type: 'Program',
    body: [
      {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: 'memory',
            },
            init: {
              type: 'ArrayExpression',
              elements: [
                {
                  type: 'Literal',
                  value: 'dummy',
                  raw: "'dummy'",
                },
              ],
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
              name: 'label',
            },
            init: {
              type: 'ObjectExpression',
              properties: [],
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
              name: 'stack',
            },
            init: {
              type: 'ArrayExpression',
              elements: [],
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
              name: 'bp',
            },
            init: {
              type: 'ArrayExpression',
              elements: [],
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
              name: 'heap',
            },
            init: {
              type: 'ObjectExpression',
              properties: [],
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
              name: 'pointer',
            },
            init: {
              type: 'Literal',
              value: 0,
              raw: '0',
            },
          },
        ],
        kind: 'let',
      },
      {
        type: 'FunctionDeclaration',
        id: {
          type: 'Identifier',
          name: 'main',
        },
        params: [],
        body: {
          type: 'BlockStatement',
          body: [
            {
              type: 'WhileStatement',
              test: {
                type: 'BinaryExpression',
                operator: '>=',
                left: {
                  type: 'Identifier',
                  name: 'pointer',
                },
                right: {
                  type: 'Literal',
                  value: 0,
                  raw: '0',
                },
              },
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'UpdateExpression',
                      operator: '++',
                      argument: {
                        type: 'Identifier',
                        name: 'pointer',
                      },
                      prefix: false,
                    },
                  },
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'CallExpression',
                      callee: {
                        type: 'MemberExpression',
                        computed: true,
                        object: {
                          type: 'Identifier',
                          name: 'memory',
                        },
                        property: {
                          type: 'Identifier',
                          name: 'pointer',
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
      ...partsOfEsTree,
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: 'main',
          },
          arguments: [],
        },
      },
    ],
    sourceType: 'script',
  };
}
