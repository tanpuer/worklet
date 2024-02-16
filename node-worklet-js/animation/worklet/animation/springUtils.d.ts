export declare const initialCalculations: {
    (mass: number, config: any): {
        zeta: any;
        omega0: number;
        omega1: number;
    };
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const calculateNewMassToMatchDuration: {
    (x0: any, config: any, v0: any): number;
    _closure: {
        bisectRoot: {
            ({ min, max, func, maxIterations }: {
                min: any;
                max: any;
                func: any;
                maxIterations?: number;
            }): number;
            _closure: {};
            __initData: {
                code: string;
                location: string;
                sourceMap: string;
                version: string;
            };
            __workletHash: number;
            __stackDetails: (number | Error)[];
        };
    };
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const criticallyDampedSpringCalculations: {
    (animation: any, precalculatedValues: any): {
        position: number;
        velocity: number;
    };
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const underDampedSpringCalculations: {
    (animation: any, precalculatedValues: any): {
        position: number;
        velocity: number;
    };
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const isAnimationTerminatingCalculation: {
    (animation: any, config: any): {
        isOvershooting: boolean;
        isVelocity: boolean;
        isDisplacement: boolean;
    };
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
