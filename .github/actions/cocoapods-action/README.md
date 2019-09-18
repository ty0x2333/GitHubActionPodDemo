```yml
on: push
jobs:
  test:
    runs-on: macOS-latest
    steps:
    - uses: actions/checkout@master
    - uses: ./.github/actions/cocoapods-action
      with:
        workspace: Example/GitHubActionPodDemo.xcworkspace
        scheme: GitHubActionPodDemo-Example
```