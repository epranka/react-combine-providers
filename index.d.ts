import * as React from "react";
export declare class CombineProviders {
    private stack;
    constructor();
    private getNode;
    push<P extends any>(Component: React.ComponentType<P>, props?: Omit<P, "children">): void;
    private createProvidersTree;
    render(children: any): any;
    master(): ({ children }: {
        children: any;
    }) => any;
}
export declare const combineProviders: () => CombineProviders;
