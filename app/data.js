module.exports = {
  projects: [
    {
      project: {
        id: '1',
        name: 'Project 1',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: [
        {
          session: {
            id: '1',
            project_id: '1',
            user: 'me@test.coming',
            start_time: '2024-08-09T12:09:12.091Z',
            end_time: '2024-08-09T12:09:12.091Z'
          },
          events: [
            {
              id: '1',
              session_id: '1',
              type: 'input',
              content: 'string',
              timestamp: '2024-08-09T12:23:17.694Z',
              model_name: 'string',
              model_metadata: {
                additionalProp1: {}
              },
              token_usage: 0,
              cost: 0,
              additional_properties: {
                additionalProp1: {}
              }
            }
          ]
        }
      ]
    },
    {
      project: {
        id: '2',
        name: 'Project 2',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: [
        {
          session: {
            id: '2',
            project_id: '2',
            user: 'me@test.coming',
            start_time: '2024-08-09T12:09:12.091Z',
            end_time: '2024-08-09T12:09:12.091Z'
          },
          events: [
            {
              id: '2',
              session_id: '2',
              type: 'input',
              content: 'string',
              timestamp: '2024-08-09T12:23:17.694Z',
              model_name: 'string',
              model_metadata: {
                additionalProp1: {}
              },
              token_usage: 0,
              cost: 0,
              additional_properties: {
                additionalProp1: {}
              }
            }
          ]
        }
      ]
    },
    {
      project: {
        id: '3',
        name: 'Project 3',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: [
        {
          session: {
            id: '3',
            project_id: '3',
            user: 'me@test.coming',
            start_time: '2024-08-09T12:09:12.091Z',
            end_time: '2024-08-09T12:09:12.091Z'
          },
          events: [
            {
              id: '3',
              session_id: '3',
              type: 'input',
              content: 'string',
              timestamp: '2024-08-09T12:23:17.694Z',
              model_name: 'string',
              model_metadata: {
                additionalProp1: {}
              },
              token_usage: 0,
              cost: 0,
              additional_properties: {
                additionalProp1: {}
              }
            }
          ]
        }
      ]
    }
  ],
  project_overview: [
    {
      project: {
        id: '1',
        name: 'Project 1',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: {
        session_count: 0,
        average_latency: 0,
        event_count: 0
      },
      model_usage: {
        model_name: 'ChatGPT-4o',
        token_usage: 0,
        average_latency: 0,
        cost: 0
      },
      traces_per_day: [
        {
          label: '2024-08-09',
          value: 22
        },
        {
          label: '2024-08-10',
          value: 34
        },
        {
          label: '2024-08-11',
          value: 18
        },
        {
          label: '2024-08-12',
          value: 75
        },
        {
          label: '2024-08-13',
          value: 55
        },
        {
          label: '2024-08-15',
          value: 14
        }
      ]

    },
    {
      project: {
        id: '2',
        name: 'Project 2',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: {
        session_count: 0,
        average_latency: 0,
        event_count: 0
      },
      model_usage: {
        model_name: 'chatgpt-4o',
        token_usage: 0,
        average_latency: 0,
        cost: 0
      }
    },
    {
      project: {
        id: '3',
        name: 'Project 3',
        created_on: '2024-08-09T11:25:42.481Z'
      },
      sessions: {
        session_count: 0,
        average_latency: 0,
        event_count: 0
      },
      model_usage: {
        model_name: 'chatgpt-4o',
        token_usage: 0,
        average_latency: 0,
        cost: 0
      }
    }
  ],
  model_cost: [
    {
      model_name: 'ChatGPT-4o',
      cost_per_token: 0.005
    }
  ]
}
