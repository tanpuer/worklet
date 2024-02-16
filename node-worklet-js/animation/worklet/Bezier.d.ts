export declare const Bezier: {
    (mX1: any, mY1: any, mX2: any, mY2: any): {
        (x: any): any;
        _closure: {};
        __initData: {
            code: string;
            location: string;
            sourceMap: string;
            version: string;
        };
        __workletHash: number;
        __stackDetails: (number | Error)[];
    } | {
        (x: any): any;
        _closure: {
            mX1: any;
            mY1: any;
            mX2: any;
            mY2: any;
            calcBezier: {
                (aT: any, aA1: any, aA2: any): number;
                _closure: {
                    A: {
                        (aA1: any, aA2: any): number;
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
                    B: {
                        (aA1: any, aA2: any): number;
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
                    C: {
                        (aA1: any): number;
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
            getTForX: {
                (aX: any): any;
                _closure: {
                    kSplineTableSize: number;
                    sampleValues: any[];
                    kSampleStepSize: number;
                    getSlope: {
                        (aT: any, aA1: any, aA2: any): number;
                        _closure: {
                            A: {
                                (aA1: any, aA2: any): number;
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
                            B: {
                                (aA1: any, aA2: any): number;
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
                            C: {
                                (aA1: any): number;
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
                    mX1: any;
                    mX2: any;
                    NEWTON_MIN_SLOPE: number;
                    newtonRaphsonIterate: {
                        (aX: any, aGuessT: any, mX1: any, mX2: any): any;
                        _closure: {
                            NEWTON_ITERATIONS: number;
                            getSlope: {
                                (aT: any, aA1: any, aA2: any): number;
                                _closure: {
                                    A: {
                                        (aA1: any, aA2: any): number;
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
                                    B: {
                                        (aA1: any, aA2: any): number;
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
                                    C: {
                                        (aA1: any): number;
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
                            calcBezier: {
                                (aT: any, aA1: any, aA2: any): number;
                                _closure: {
                                    A: {
                                        (aA1: any, aA2: any): number;
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
                                    B: {
                                        (aA1: any, aA2: any): number;
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
                                    C: {
                                        (aA1: any): number;
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
                    binarySubdivide: {
                        (aX: any, aA: any, aB: any, mX1: any, mX2: any): any;
                        _closure: {
                            SUBDIVISION_PRECISION: number;
                            SUBDIVISION_MAX_ITERATIONS: number;
                            calcBezier: {
                                (aT: any, aA1: any, aA2: any): number;
                                _closure: {
                                    A: {
                                        (aA1: any, aA2: any): number;
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
                                    B: {
                                        (aA1: any, aA2: any): number;
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
                                    C: {
                                        (aA1: any): number;
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
