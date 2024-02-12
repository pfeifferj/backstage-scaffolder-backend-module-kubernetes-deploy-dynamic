import { BackendDynamicPluginInstaller } from '@backstage/backend-dynamic-feature-service';
import { deployKubernetesAction } from '@pfeifferj/plugin-scaffolder-backend-module-kubernetes-deploy';
import { readFileAction } from '@pfeifferj/plugin-scaffolder-backend-module-read-file';

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
	kind: 'legacy',

	scaffolder: () => [deployKubernetesAction(), readFileAction()],
};
