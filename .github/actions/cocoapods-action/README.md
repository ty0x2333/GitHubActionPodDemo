```yaml
on: push
jobs:
  lint:
    runs-on: macOS-latest
    steps:
    - uses: actions/checkout@master
    - name: Lint podspec file
      uses: ./.github/actions/cocoapods-action
```