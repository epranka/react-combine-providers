import * as React from "react";
declare class CombineProviders {
    private stack;
    constructor();
    push<P extends any>(Component: React.ComponentType<P>, props?: P): void;
    private createProvidersTree;
    master(): ({ children }: {
        children: any;
    }) => any;
}
export declare const combineProviders: () => CombineProviders;
export {};
