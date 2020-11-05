import * as github from '@actions/github'

export interface Inputs {
  labels: string[]
  repo: string
  owner: string
  number: number
  token: string
}

export class Labeler {
  constructor(private cfg: Inputs) {}

  async attachLabels(): Promise<void> {
    const client = github.getOctokit(this.cfg.token)
    const {owner, repo, labels, number} = this.cfg

    await client.issues.addLabels({
      labels,
      owner,
      repo,
      issue_number: number
    })
  }
}

export default {
  Labeler
}
