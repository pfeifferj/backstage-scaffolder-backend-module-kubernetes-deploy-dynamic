# Dynamic Plugin Wrapper for Kubernetes-Deploy

includes:

```yaml
- @pfeifferj/plugin-scaffolder-backend-module-kubernetes-deploy
- @pfeifferj/plugin-scaffolder-backend-module-read-file
```

## Quickstart

`❯ oc edit cm developer-hub-dynamic-plugins -n rhdh`

```yaml
apiVersion: v1
data:
  dynamic-plugins.yaml: |
    includes:
      - dynamic-plugins.default.yaml
    plugins:
      - package: '@pfeifferj/backstage-scaffolder-backend-module-kubernetes-deploy-dynamic'
        integrity: 'sha512-AwysOmmabZ4mtqk8Z4lb7OHO0j8xtsjOYL+DGnIscIw2RdM6zIjsanbM2EWrLw+Q4N3cEht0gRJAjxW7SWEoFQ==' # check with npm info
        disabled: false
kind: ConfigMap
metadata:
  labels:
    app.kubernetes.io/instance: developer-hub
    app.kubernetes.io/name: backstage
    janus-idp.io/app: backstage-developer-hub
  name: developer-hub-dynamic-plugins
  namespace: rhdh
```
