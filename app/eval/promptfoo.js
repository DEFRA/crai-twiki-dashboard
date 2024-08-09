const promptfoo = require('promptfoo')
const gpt4oMini = require('./provider/gpt-4o-mini')

const evaluate = async () => {
  try {
    const prompt = `Retrieved context: {{context}}
    User query: {{user_input}}
    Assistant: Please respond to the user query based on the retrieved context.`

    const results = await promptfoo.evaluate(
      {
        cache: false,
        prompts: [prompt],
        providers: [gpt4oMini],
        tests: [
          {
            vars: {
              context: 'Milo is a black labrador and is 3 years of age.',
              user_input: 'Can you tell me about Milo? if you do not know, say you uncertain or unable to answer the question'
            },
            assert: [
              {
                type: 'javascript',
                value: (output) => {
                  const pass = output.toLowerCase().includes('3 years')
                  return {
                    pass,
                    score: pass ? 1.0 : 0.0,
                    reason: pass ? 'Output contained substring' : 'Output did not contain substring'
                  }
                }
              },
              {
                type: 'factuality',
                value: 'Milos age is 3 years',
                provider: gpt4oMini
              }
              // {
              //   type: 'is-json',
              //   value: {
              //     required: ['bread', 'color', 'age'],
              //     type: 'object',
              //     proerties: {
              //       bread: {
              //         type: 'string'
              //       },
              //       color: {
              //         type: 'string'
              //       },
              //       age: {
              //         type: 'string'
              //       }
              //     }
              //   }
              // }
            ]
          }
        ],
        writeLatestResults: true
      },
      {
        maxConcurrency: 2
      }
    )

    return results
  } catch (error) {
    console.error(error)
  }
  return null
}

module.exports = {
  evaluate
}
