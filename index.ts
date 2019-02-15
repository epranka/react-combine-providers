import * as React from "react";
interface ProviderNode {
    Component: React.ComponentType;
    props?: any;
}
class CombineProviders {
    private stack: ProviderNode[] = [];
    constructor() {
        this.stack = [];
    }

    public push<P extends any>(Component: React.ComponentType<P>, props?: P) {
        this.stack.push({
            Component: Component,
            props
        });
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

    public toElement() {
        const fullStack = [...this.stack];
        return ({ children }) => {
            return this.createProvidersTree(fullStack, 0, children);
        };
    }
}

export const combineProviders = () => {
    return new CombineProviders();
};
