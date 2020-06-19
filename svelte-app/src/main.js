import TreeComponent from './TreeComponent.svelte';
import generateTree from '../../generateTree';

const app = new TreeComponent({
	target: document.body,
	props: { node: generateTree(100000) }
});

export default app;
