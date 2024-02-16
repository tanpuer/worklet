export declare const Easing: {
    linear: {
        (t: any): any;
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
    ease: {
        (t: any): any;
        _closure: {
            Bezier: {
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
    quad: {
        (t: any): number;
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
    cubic: {
        (t: any): number;
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
    poly: {
        (n: any): {
            (t: any): number;
            _closure: {
                n: any;
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
    sin: {
        (t: any): number;
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
    circle: {
        (t: any): number;
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
    exp: {
        (t: any): number;
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
    elastic: {
        (bounciness?: number): {
            (t: any): number;
            _closure: {
                p: number;
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
    back: {
        (s?: number): {
            (t: any): number;
            _closure: {
                s: number;
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
    bounce: {
        (t: any): number;
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
    bezier: {
        (x1: any, y1: any, x2: any, y2: any): {
            factory: {
                (): {
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
                _closure: {
                    Bezier: {
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
                    x1: any;
                    y1: any;
                    x2: any;
                    y2: any;
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
        _closure: {
            Bezier: {
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
    bezierFn: {
        (x1: any, y1: any, x2: any, y2: any): {
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
        _closure: {
            Bezier: {
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
    steps: {
        (n?: number, roundToNextStep?: boolean): {
            (t: any): number;
            _closure: {
                n: number;
                roundToNextStep: boolean;
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
    in: {
        (easing: any): any;
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
    out: {
        (easing: any): {
            (t: any): number;
            _closure: {
                easing: any;
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
    inOut: {
        (easing: any): {
            (t: any): number;
            _closure: {
                easing: any;
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
};
