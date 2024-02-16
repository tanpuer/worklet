export declare const withTiming: {
    (toValue: any, userConfig: any, callback: any): any;
    _closure: {
        defineAnimation: {
            (starting: any, factory: any): any;
            _closure: {
                IN_STYLE_UPDATER: boolean;
                decorateAnimation: {
                    (animation: any): void;
                    _closure: {
                        recognizePrefixSuffix: {
                            (value: any): {
                                prefix: string;
                                suffix: string;
                                strippedValue: number;
                            } | {
                                strippedValue: any;
                                prefix?: undefined;
                                suffix?: undefined;
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
                        isColor: {
                            (value: any): boolean;
                            _closure: {
                                processColorInitially: {
                                    (color: any): any;
                                    _closure: {
                                        normalizeColor: {
                                            (color: any): any;
                                            _closure: {
                                                MATCHERS: {
                                                    rgb: RegExp;
                                                    rgba: RegExp;
                                                    hsl: RegExp;
                                                    hsla: RegExp;
                                                    hex3: RegExp;
                                                    hex4: RegExp;
                                                    hex6: RegExp;
                                                    hex8: RegExp;
                                                };
                                                names: any;
                                                parse255: {
                                                    (str: any): number;
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
                                                parse1: {
                                                    (str: any): number;
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
                                                hslToRgb: {
                                                    (h: any, s: any, l: any): number;
                                                    _closure: {
                                                        hue2rgb: {
                                                            (p: any, q: any, t: any): any;
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
                                                parse360: {
                                                    (str: any): number;
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
                                                parsePercentage: {
                                                    (str: any): number;
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
                        toLinearSpace: {
                            (RGBA: any, gamma?: number): any[];
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
                        convertToRGBA: {
                            (color: any): number[];
                            _closure: {
                                processColorInitially: {
                                    (color: any): any;
                                    _closure: {
                                        normalizeColor: {
                                            (color: any): any;
                                            _closure: {
                                                MATCHERS: {
                                                    rgb: RegExp;
                                                    rgba: RegExp;
                                                    hsl: RegExp;
                                                    hsla: RegExp;
                                                    hex3: RegExp;
                                                    hex4: RegExp;
                                                    hex6: RegExp;
                                                    hex8: RegExp;
                                                };
                                                names: any;
                                                parse255: {
                                                    (str: any): number;
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
                                                parse1: {
                                                    (str: any): number;
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
                                                hslToRgb: {
                                                    (h: any, s: any, l: any): number;
                                                    _closure: {
                                                        hue2rgb: {
                                                            (p: any, q: any, t: any): any;
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
                                                parse360: {
                                                    (str: any): number;
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
                                                parsePercentage: {
                                                    (str: any): number;
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
                        rgbaArrayToRGBAColor: {
                            (RGBA: any): string;
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
                        toGammaSpace: {
                            (RGBA: any, gamma?: number): any[];
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
                        decomposeMatrixIntoMatricesAndAngles: {
                            (matrix: any): {
                                scaleMatrix: number[][];
                                rotationMatrix: any[][];
                                translationMatrix: any[][];
                                skewMatrix: any[][];
                                rx: any;
                                ry: number;
                                rz: any;
                            };
                            _closure: {
                                decomposeMatrix: {
                                    (unknownTypeMatrix: any): {
                                        translationMatrix: any[][];
                                        scaleMatrix: number[][];
                                        rotationMatrix: any[][];
                                        skewMatrix: any[][];
                                    };
                                    _closure: {
                                        maybeFlattenMatrix: {
                                            (matrix: any): any;
                                            _closure: {
                                                isAffineMatrix: {
                                                    (x: any): boolean;
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
                                                flatten: {
                                                    (matrix: any): any;
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
                                        norm3d: {
                                            (x: any, y: any, z: any): number;
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
                                        gramSchmidtAlgorithm: {
                                            (matrix: any): {
                                                rotationMatrix: any[][];
                                                skewMatrix: any[][];
                                            };
                                            _closure: {
                                                subtractVectors: {
                                                    (a: any, b: any): any;
                                                    _closure: {
                                                        assertVectorsHaveEqualLengths: {
                                                            (a: any, b: any): void;
                                                            _closure: {
                                                                __DEV__: boolean;
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
                                                projection: {
                                                    (u: any, a: any): any;
                                                    _closure: {
                                                        assertVectorsHaveEqualLengths: {
                                                            (a: any, b: any): void;
                                                            _closure: {
                                                                __DEV__: boolean;
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
                                                        innerProduct: {
                                                            (a: any, b: any): any;
                                                            _closure: {
                                                                assertVectorsHaveEqualLengths: {
                                                                    (a: any, b: any): void;
                                                                    _closure: {
                                                                        __DEV__: boolean;
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
                                                scaleVector: {
                                                    (u: any, a: any): any;
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
                                                innerProduct: {
                                                    (a: any, b: any): any;
                                                    _closure: {
                                                        assertVectorsHaveEqualLengths: {
                                                            (a: any, b: any): void;
                                                            _closure: {
                                                                __DEV__: boolean;
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
                                                transposeMatrix: {
                                                    (matrix: any): any[][];
                                                    _closure: {
                                                        flatten: {
                                                            (matrix: any): any;
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
                        applyProgressToMatrix: {
                            (progress: any, a: any, b: any): any;
                            _closure: {
                                addMatrices: {
                                    (maybeFlatA: any, maybeFlatB: any): any;
                                    _closure: {
                                        isAffineMatrixFlat: {
                                            (x: any): boolean;
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
                                        maybeFlattenMatrix: {
                                            (matrix: any): any;
                                            _closure: {
                                                isAffineMatrix: {
                                                    (x: any): boolean;
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
                                                flatten: {
                                                    (matrix: any): any;
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
                                        unflatten: {
                                            (m: any): any[][];
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
                                scaleMatrix: {
                                    (maybeFlatA: any, scalar: any): any;
                                    _closure: {
                                        isAffineMatrixFlat: {
                                            (x: any): boolean;
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
                                        maybeFlattenMatrix: {
                                            (matrix: any): any;
                                            _closure: {
                                                isAffineMatrix: {
                                                    (x: any): boolean;
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
                                                flatten: {
                                                    (matrix: any): any;
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
                                        unflatten: {
                                            (m: any): any[][];
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
                                subtractMatrices: {
                                    (maybeFlatA: any, maybeFlatB: any): any;
                                    _closure: {
                                        isAffineMatrixFlat: {
                                            (x: any): boolean;
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
                                        maybeFlattenMatrix: {
                                            (matrix: any): any;
                                            _closure: {
                                                isAffineMatrix: {
                                                    (x: any): boolean;
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
                                                flatten: {
                                                    (matrix: any): any;
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
                                        unflatten: {
                                            (m: any): any[][];
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
                        applyProgressToNumber: {
                            (progress: any, a: any, b: any): any;
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
                        getRotationMatrix: {
                            (angle: any, axis?: string): number[][];
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
                        multiplyMatrices: {
                            (a: any, b: any): number[][];
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
                        flatten: {
                            (matrix: any): any;
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
                        isAffineMatrixFlat: {
                            (x: any): boolean;
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
        Easing: {
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
