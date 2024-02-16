export declare const opacity: {
    (c: any): number;
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const red: {
    (c: any): number;
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const green: {
    (c: any): number;
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const blue: {
    (c: any): number;
    _closure: {};
    __initData: {
        code: string;
        location: string;
        sourceMap: string;
        version: string;
    };
    __workletHash: number;
    __stackDetails: (number | Error)[];
};
export declare const rgbaColor: {
    (r: any, g: any, b: any, alpha?: number): string | number;
    _closure: {
        IS_WEB: boolean;
        IS_ANDROID: boolean;
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
export declare const RGBtoHSV: {
    (r: any, g: any, b: any): {
        h: any;
        s: number;
        v: number;
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
export declare const hsvToColor: {
    (h: any, s: any, v: any, a: any): string | number;
    _closure: {
        HSVtoRGB: {
            (h: any, s: any, v: any): {
                r: number;
                g: number;
                b: number;
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
        rgbaColor: {
            (r: any, g: any, b: any, alpha?: number): string | number;
            _closure: {
                IS_WEB: boolean;
                IS_ANDROID: boolean;
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
export declare const processColorInitially: {
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
export declare const isColor: {
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
export declare const processColor: {
    (color: any): any;
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
        IS_ANDROID: boolean;
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
export declare const convertToRGBA: {
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
export declare const rgbaArrayToRGBAColor: {
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
export declare const toLinearSpace: {
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
export declare const toGammaSpace: {
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
