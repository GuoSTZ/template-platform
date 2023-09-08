declare module '*.less';
declare module '*.png';
declare module '*.jpg';
declare module '*.sass';

declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    const src: string;
    export default src;
}

declare namespace NodeJS {
    interface Global {
        API_PREFIX: string;
        NAME_SPACE: string;
        ENV: string;
    }
}

interface Window {
    devToolsExtension: any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    [key: string]: any
}
