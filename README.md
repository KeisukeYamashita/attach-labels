# Attach Labels
[![CI][CI]][CI-status]
[![GitHub Marketplace][MarketPlace]][MarketPlace-status]
[![Mergify Status][mergify-status]][mergify]

A GitHub Action that attach label(s) to a PR or an Issue.
This action extract the number from a pull request or issue by default. You don't need to specify the pull request number by `${{ github.event.pull_request.number }}` or `${{ github.event.issue.number }}` by your own.
Very simple!

## Usage
### 1. With comma seperated labels list

```yml
      - name: Add labels
        uses: KeisukeYamashita/attach-labels@v1
        with:
          labels: hello,bye
```

### 2. With line break seperated labels list

This is just an example to show one way in which this action can be used.

```yml
on: pull_request
jobs:
  auto-merge:
    - name: Merge
      uses: KeisukeYamashita/attach-labels@v1
      with: |
        hello
        bye
```

### Action inputs

| Name | Description | Default |
| --- | --- | --- |
| `labels` | Label to attach. Either line break seperated of comma seperated | -(Required) |
| `repostiory` | The GitHub repository containing the pull request | Current repository | 
| `number` | The number of the pull request. | `github.event.pull_request.number` or  `github.event.issue.number` |
| `token` | `GITHUB_TOKEN` or a `repo` scoped [PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). | `GITHUB_TOKEN` |

### Action outputs

Nothing.

## License

[MIT](LICENSE)

<!-- Badge links -->
[CI]: https://github.com/KeisukeYamashita/attach-labels/workflows/build-test/badge.svg
[CI-status]: https://github.com/KeisukeYamashita/attach-labels/actions?query=workflow%3Abuild-test

[MarketPlace]: https://img.shields.io/badge/Marketplace-Attach%20Labels-blue.svg?colorA=24292e&colorB=0366d6&style=flat&longCache=true&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAM6wAADOsB5dZE0gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRhZG/SsMxFEZPfsVJ61jbxaF0cRQRcRJ9hlYn30IHN/+9iquDCOIsblIrOjqKgy5aKoJQj4O3EEtbPwhJbr6Te28CmdSKeqzeqr0YbfVIrTBKakvtOl5dtTkK+v4HfA9PEyBFCY9AGVgCBLaBp1jPAyfAJ/AAdIEG0dNAiyP7+K1qIfMdonZic6+WJoBJvQlvuwDqcXadUuqPA1NKAlexbRTAIMvMOCjTbMwl1LtI/6KWJ5Q6rT6Ht1MA58AX8Apcqqt5r2qhrgAXQC3CZ6i1+KMd9TRu3MvA3aH/fFPnBodb6oe6HM8+lYHrGdRXW8M9bMZtPXUji69lmf5Cmamq7quNLFZXD9Rq7v0Bpc1o/tp0fisAAAAASUVORK5CYII=
[MarketPlace-status]: https://github.com/marketplace/actions/attach-labels-merge

[mergify]: https://mergify.io
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/KeisukeYamashita/attach-labels&style=flat
