export declare const isAffineMatrixFlat: {
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
export declare const isAffineMatrix: {
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
export declare const flatten: {
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
export declare const unflatten: {
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
export declare const multiplyMatrices: {
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
export declare const subtractMatrices: {
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
export declare const addMatrices: {
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
export declare const scaleMatrix: {
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
export declare const getRotationMatrix: {
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
export declare const decomposeMatrix: {
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
export declare const decomposeMatrixIntoMatricesAndAngles: {
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
