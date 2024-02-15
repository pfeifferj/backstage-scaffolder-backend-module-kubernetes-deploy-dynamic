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
      - package: '@pfeifferj/dynamic-plugin-kubernetes-deploy'
        integrity: 'sha512-25kS7j/apKsL4jidmPH8tCmcpUIKSfxv1Vq2N3qNB+hj2oWhcnOp7Cf/HLxE8ZGHVW8eg6wgoY8DlHficLkQAA=='
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
