import * as React from "react";
interface ProviderNode {
	Component: React.ComponentType;
	props?: any;
}
export class CombineProviders {
	private stack: ProviderNode[] = [];
	constructor() {
		this.stack = [];
	}

	private getNode(Component: React.ComponentType) {
		return this.stack.find(node => {
			return node.Component === Component;
		});
	}

	public push<P extends any>(Component: React.ComponentType<P>, props?: P) {
		// @ts-ignore
		const node = this.getNode(Component);
		if (node) {
			node.props = props;
		} else {
			// @ts-ignore
			this.stack.push({ Component, props });
		}
	}

	private createProvidersTree(
		stack: ProviderNode[],
		index: number = 0,
		children
	) {
		const isLastNode = index === stack.length - 1;
		const providerNode = stack[index];
		const component = providerNode.Component;
		const props = providerNode.props;
		if (isLastNode) {
			return React.createElement(component, {
				...(props || {}),
				children: children
			});
		} else {
			return React.createElement(
				component,
				props,
				this.createProvidersTree(stack, ++index, children)
			);
		}
	}

	public render(children) {
		return this.createProvidersTree(this.stack, 0, children);
	}

	public master() {
		return ({ children }) => {
			return this.createProvidersTree(this.stack, 0, children);
		};
	}
}

export const combineProviders = () => {
	return new CombineProviders();
};
