import * as github from '@actions/github'
import * as core from '@actions/core'
import {Inputs, Labeler} from './labeler'
import {inspect} from 'util'

async function run(): Promise<void> {
  try {
    const [owner, repo] = core.getInput('repository').split('/')

    const inputs: Inputs = {
      labels: [],
      owner,
      repo,
      number:
        core.getInput('number') === ''
          ? github.context.issue.number
          : Number(core.getInput('number')),
      token: core.getInput('token')
    }

    const rawLabels = core.getInput('labels', {required: true})
    if (rawLabels.includes('\n')) {
      inputs.labels = rawLabels.split('\n').filter(l => l === '')
    } else {
      inputs.labels = rawLabels.split(',')
    }

    core.debug(`Inputs: ${inspect(inputs)}`)

    const labeler = new Labeler(inputs)
    await labeler.attachLabels()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
