declare const _default: import("vue").DefineComponent<{}, {
    layoutRoot: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    menu: import("vue").Ref<any[], any[]>;
    collapsed: import("vue").Ref<boolean, boolean>;
    themes: import("vue").Ref<{
        name: string;
        input: string;
    }[], {
        name: string;
        input: string;
    }[] | {
        name: string;
        input: string;
    }[]>;
    selectedTheme: import("vue").Ref<string, string>;
    isOnMobile: import("vue").Ref<boolean, boolean>;
    onToggleCollapse: (c: boolean) => void;
    onItemClick: (event: Event, item: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
