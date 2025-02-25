declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        [$mol_dev_format_head](): any[];
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;
declare const cache: Map<string, any>;

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: readonly Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_run_error_context = {
        pid?: number;
        stdout: Buffer | string;
        stderr: Buffer | string;
    };
    class $mol_run_error extends $mol_error_mix<{
        timeout_kill?: boolean;
        pid?: number;
        signal?: NodeJS.Signals | null;
        status?: number | null;
        command: string;
        dir: string;
    }> {
    }
    const $mol_run_spawn: (command: string, args: readonly string[], options: import("child_process").SpawnOptions) => import("child_process").ChildProcess;
    const $mol_run_spawn_sync: (command: string, args?: readonly string[] | undefined, options?: import("child_process").SpawnSyncOptions | undefined) => import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>>;
    type $mol_run_options = {
        command: readonly string[] | string;
        dir: string;
        timeout?: number;
        env?: Record<string, string | undefined>;
    };
    class $mol_run extends $mol_object {
        static async_enabled(): boolean;
        static spawn(options: $mol_run_options): $mol_run_error_context | import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>>;
        static spawn_async({ dir, sync, timeout, command, env }: $mol_run_options & {
            sync?: boolean;
        }): import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>> | (Promise<$mol_run_error_context> & {
            destructor: () => void;
        });
        static error_message(res?: $mol_run_error_context): string;
    }
}

declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: readonly string[]): $mol_run_error_context | import("child_process").SpawnSyncReturns<string | Buffer<ArrayBufferLike>>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "block" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: null | string): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title_mol_book2_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__align_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_transaction_node extends $mol_file_transaction {
        protected descr(): number;
        write({ buffer, offset, length, position }: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        truncate(size: number): void;
        read(): Uint8Array<ArrayBuffer>;
        close(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    function $mol_file_node_buffer_normalize(buf: Buffer<ArrayBuffer>): Uint8Array<ArrayBuffer>;
    class $mol_file_node extends $mol_file {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        watcher(reset?: null): {
            destructor(): void;
        };
        protected info(path: string): $mol_file_stat | null;
        protected ensure(): null | undefined;
        protected copy(to: string): void;
        protected drop(): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array): undefined;
        protected kids(): this[];
        resolve(path: string): this;
        relate(base?: $mol_file): string;
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts?: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_13 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_15 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__17 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_18 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($.$mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($.$mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => readonly string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_11 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($.$mol_search | $mol_button_minor)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_lock extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=lock.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lock_open_variant_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_hint extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=hint.view.tree.d.ts.map
declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static commit(): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_icon_brightness_4 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=4.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_4
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_page_next extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=next.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_page_next_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        [$mol_dev_format_head](): any[];
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {

	type $mol_view__sub_hyoo_science_article_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__needle_hyoo_science_article_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_hyoo_science_article_3 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_view__sub_hyoo_science_article_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri_hyoo_science_article_5 = $mol_type_enforce<
		ReturnType< $hyoo_science_article['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_science_article_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_hyoo_science_article_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_science_article_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg_hyoo_science_article_9 = $mol_type_enforce<
		({ 
			'doi': ReturnType< $hyoo_science_article['doi'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_science_article_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $hyoo_science_article extends $mol_view {
		uri( ): string
		open_icon( ): string
		Open( ): $mol_view
		highlight( ): string
		title( ): string
		Title( ): $mol_dimmer
		rank_view( ): string
		Rank( ): $mol_view
		Link( ): $mol_link
		journal_title( ): string
		Journal( ): $mol_view
		date_view( ): string
		Date( ): $mol_view
		doi( ): string | null
		Details_icon( ): $mol_icon_page_next_outline
		Details( ): $mol_link
		open( ): boolean
		date( ): $mol_time_moment | null
		rank( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=article.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_science_article extends $.$hyoo_science_article {
        open_icon(): "📄 " | "🔒 ";
        rank_view(): string;
        date_view(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_chip extends $mol_view {
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_row__sub_mol_form_2 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		submit( next?: any ): any
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_form_group extends $mol_view {
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }>, Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>>;
    };
}

declare namespace $ {
    function $mol_data_optional<Sub extends $mol_data_value, Fallback extends undefined | (() => ReturnType<Sub>)>(sub: Sub, fallback?: Fallback): ((val: Parameters<Sub>[0] | undefined) => ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>)) & {
        config: {
            sub: Sub;
            fallback: Fallback | undefined;
        };
        Value: ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>);
    };
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    function $mol_html_decode(text: string): string;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    let $hyoo_science_crossref_ref: ((val: {
        DOI?: string | undefined;
        key: string;
    }) => Readonly<{
        DOI?: string | undefined;
        key: string;
    }>) & {
        config: {
            DOI: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            key: (val: string) => string;
        };
        Value: Readonly<{
            DOI?: string | undefined;
            key: string;
        }>;
    };
    let $hyoo_science_crossref_date: ((val: {
        'date-time'?: string | undefined;
        'date-parts': readonly (readonly number[])[];
    }) => Readonly<{
        'date-time'?: string | undefined;
        'date-parts': readonly (readonly number[])[];
    }>) & {
        config: {
            'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                config: ((val: readonly number[]) => readonly number[]) & {
                    config: typeof $mol_data_integer;
                    Value: readonly number[];
                };
                Value: readonly (readonly number[])[];
            };
            'date-time': ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
        };
        Value: Readonly<{
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        }>;
    };
    let $hyoo_science_crossref_person: ((val: {
        ORCID?: string | undefined;
        given?: string | undefined;
        family?: string | undefined;
        name?: string | undefined;
    }) => Readonly<{
        ORCID?: string | undefined;
        given?: string | undefined;
        family?: string | undefined;
        name?: string | undefined;
    }>) & {
        config: {
            ORCID: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            given: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            family: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            name: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
        };
        Value: Readonly<{
            ORCID?: string | undefined;
            given?: string | undefined;
            family?: string | undefined;
            name?: string | undefined;
        }>;
    };
    let $hyoo_science_crossref_entry: ((val: {
        ISSN?: readonly string[] | undefined;
        abstract?: string | undefined;
        subtitle?: readonly string[] | undefined;
        reference?: readonly {
            DOI?: string | undefined;
            key: string;
        }[] | undefined;
        author?: readonly {
            ORCID?: string | undefined;
            given?: string | undefined;
            family?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        'published-print'?: {
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        } | undefined;
        'published-online'?: {
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        } | undefined;
        volume?: string | undefined;
        issue?: string | undefined;
        page?: string | undefined;
        title: readonly string[];
        DOI: string;
        URL: string;
        'container-title': readonly string[];
        'is-referenced-by-count': number;
        published: {
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        };
    }) => Readonly<{
        ISSN?: readonly string[] | undefined;
        abstract?: string | undefined;
        subtitle?: readonly string[] | undefined;
        reference?: readonly Readonly<{
            DOI?: string | undefined;
            key: string;
        }>[] | undefined;
        author?: readonly Readonly<{
            ORCID?: string | undefined;
            given?: string | undefined;
            family?: string | undefined;
            name?: string | undefined;
        }>[] | undefined;
        'published-print'?: Readonly<{
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        }> | undefined;
        'published-online'?: Readonly<{
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        }> | undefined;
        volume?: string | undefined;
        issue?: string | undefined;
        page?: string | undefined;
        title: readonly string[];
        DOI: string;
        URL: string;
        'container-title': readonly string[];
        'is-referenced-by-count': number;
        published: Readonly<{
            'date-time'?: string | undefined;
            'date-parts': readonly (readonly number[])[];
        }>;
    }>) & {
        config: {
            DOI: (val: string) => string;
            ISSN: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                config: {
                    sub: ((val: readonly string[]) => readonly string[]) & {
                        config: (val: string) => string;
                        Value: readonly string[];
                    };
                    fallback: (() => readonly string[]) | undefined;
                };
                Value: readonly string[] | undefined;
            };
            URL: (val: string) => string;
            abstract: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            'container-title': ((val: readonly string[]) => readonly string[]) & {
                config: (val: string) => string;
                Value: readonly string[];
            };
            'is-referenced-by-count': typeof $mol_data_integer;
            title: ((val: readonly string[]) => readonly string[]) & {
                config: (val: string) => string;
                Value: readonly string[];
            };
            subtitle: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                config: {
                    sub: ((val: readonly string[]) => readonly string[]) & {
                        config: (val: string) => string;
                        Value: readonly string[];
                    };
                    fallback: (() => readonly string[]) | undefined;
                };
                Value: readonly string[] | undefined;
            };
            reference: ((val: readonly {
                DOI?: string | undefined;
                key: string;
            }[] | undefined) => readonly Readonly<{
                DOI?: string | undefined;
                key: string;
            }>[] | undefined) & {
                config: {
                    sub: ((val: readonly {
                        DOI?: string | undefined;
                        key: string;
                    }[]) => readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[]) & {
                        config: ((val: {
                            DOI?: string | undefined;
                            key: string;
                        }) => Readonly<{
                            DOI?: string | undefined;
                            key: string;
                        }>) & {
                            config: {
                                DOI: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                key: (val: string) => string;
                            };
                            Value: Readonly<{
                                DOI?: string | undefined;
                                key: string;
                            }>;
                        };
                        Value: readonly Readonly<{
                            DOI?: string | undefined;
                            key: string;
                        }>[];
                    };
                    fallback: (() => readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[]) | undefined;
                };
                Value: readonly Readonly<{
                    DOI?: string | undefined;
                    key: string;
                }>[] | undefined;
            };
            author: ((val: readonly {
                ORCID?: string | undefined;
                given?: string | undefined;
                family?: string | undefined;
                name?: string | undefined;
            }[] | undefined) => readonly Readonly<{
                ORCID?: string | undefined;
                given?: string | undefined;
                family?: string | undefined;
                name?: string | undefined;
            }>[] | undefined) & {
                config: {
                    sub: ((val: readonly {
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }[]) => readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[]) & {
                        config: ((val: {
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }) => Readonly<{
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }>) & {
                            config: {
                                ORCID: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                given: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                family: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                name: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                            };
                            Value: Readonly<{
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }>;
                        };
                        Value: readonly Readonly<{
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }>[];
                    };
                    fallback: (() => readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[]) | undefined;
                };
                Value: readonly Readonly<{
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }>[] | undefined;
            };
            published: ((val: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }) => Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }>) & {
                config: {
                    'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                        config: ((val: readonly number[]) => readonly number[]) & {
                            config: typeof $mol_data_integer;
                            Value: readonly number[];
                        };
                        Value: readonly (readonly number[])[];
                    };
                    'date-time': ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                };
                Value: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }>;
            };
            'published-print': ((val: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            } | undefined) => Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }) => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly number[]) => readonly number[]) & {
                                    config: typeof $mol_data_integer;
                                    Value: readonly number[];
                                };
                                Value: readonly (readonly number[])[];
                            };
                            'date-time': ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }>;
                    };
                    fallback: (() => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
            };
            'published-online': ((val: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            } | undefined) => Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }) => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly number[]) => readonly number[]) & {
                                    config: typeof $mol_data_integer;
                                    Value: readonly number[];
                                };
                                Value: readonly (readonly number[])[];
                            };
                            'date-time': ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }>;
                    };
                    fallback: (() => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
            };
            volume: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            issue: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            page: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
        };
        Value: Readonly<{
            ISSN?: readonly string[] | undefined;
            abstract?: string | undefined;
            subtitle?: readonly string[] | undefined;
            reference?: readonly Readonly<{
                DOI?: string | undefined;
                key: string;
            }>[] | undefined;
            author?: readonly Readonly<{
                ORCID?: string | undefined;
                given?: string | undefined;
                family?: string | undefined;
                name?: string | undefined;
            }>[] | undefined;
            'published-print'?: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined;
            'published-online'?: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined;
            volume?: string | undefined;
            issue?: string | undefined;
            page?: string | undefined;
            title: readonly string[];
            DOI: string;
            URL: string;
            'container-title': readonly string[];
            'is-referenced-by-count': number;
            published: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }>;
        }>;
    };
    let $hyoo_science_crossref_search_response: ((val: {
        message: {
            'total-results': number;
            items: readonly {
                ISSN?: readonly string[] | undefined;
                abstract?: string | undefined;
                subtitle?: readonly string[] | undefined;
                reference?: readonly {
                    DOI?: string | undefined;
                    key: string;
                }[] | undefined;
                author?: readonly {
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                'published-print'?: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                } | undefined;
                'published-online'?: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                } | undefined;
                volume?: string | undefined;
                issue?: string | undefined;
                page?: string | undefined;
                title: readonly string[];
                DOI: string;
                URL: string;
                'container-title': readonly string[];
                'is-referenced-by-count': number;
                published: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                };
            }[];
        };
    }) => Readonly<{
        message: Readonly<{
            'total-results': number;
            items: readonly Readonly<{
                ISSN?: readonly string[] | undefined;
                abstract?: string | undefined;
                subtitle?: readonly string[] | undefined;
                reference?: readonly Readonly<{
                    DOI?: string | undefined;
                    key: string;
                }>[] | undefined;
                author?: readonly Readonly<{
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }>[] | undefined;
                'published-print'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                'published-online'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                volume?: string | undefined;
                issue?: string | undefined;
                page?: string | undefined;
                title: readonly string[];
                DOI: string;
                URL: string;
                'container-title': readonly string[];
                'is-referenced-by-count': number;
                published: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }>;
            }>[];
        }>;
    }>) & {
        config: {
            message: ((val: {
                'total-results': number;
                items: readonly {
                    ISSN?: readonly string[] | undefined;
                    abstract?: string | undefined;
                    subtitle?: readonly string[] | undefined;
                    reference?: readonly {
                        DOI?: string | undefined;
                        key: string;
                    }[] | undefined;
                    author?: readonly {
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined;
                    'published-print'?: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    } | undefined;
                    'published-online'?: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    } | undefined;
                    volume?: string | undefined;
                    issue?: string | undefined;
                    page?: string | undefined;
                    title: readonly string[];
                    DOI: string;
                    URL: string;
                    'container-title': readonly string[];
                    'is-referenced-by-count': number;
                    published: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    };
                }[];
            }) => Readonly<{
                'total-results': number;
                items: readonly Readonly<{
                    ISSN?: readonly string[] | undefined;
                    abstract?: string | undefined;
                    subtitle?: readonly string[] | undefined;
                    reference?: readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[] | undefined;
                    author?: readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[] | undefined;
                    'published-print'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    'published-online'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    volume?: string | undefined;
                    issue?: string | undefined;
                    page?: string | undefined;
                    title: readonly string[];
                    DOI: string;
                    URL: string;
                    'container-title': readonly string[];
                    'is-referenced-by-count': number;
                    published: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>;
                }>[];
            }>) & {
                config: {
                    'total-results': typeof $mol_data_integer;
                    items: ((val: readonly {
                        ISSN?: readonly string[] | undefined;
                        abstract?: string | undefined;
                        subtitle?: readonly string[] | undefined;
                        reference?: readonly {
                            DOI?: string | undefined;
                            key: string;
                        }[] | undefined;
                        author?: readonly {
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }[] | undefined;
                        'published-print'?: {
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        } | undefined;
                        'published-online'?: {
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        } | undefined;
                        volume?: string | undefined;
                        issue?: string | undefined;
                        page?: string | undefined;
                        title: readonly string[];
                        DOI: string;
                        URL: string;
                        'container-title': readonly string[];
                        'is-referenced-by-count': number;
                        published: {
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        };
                    }[]) => readonly Readonly<{
                        ISSN?: readonly string[] | undefined;
                        abstract?: string | undefined;
                        subtitle?: readonly string[] | undefined;
                        reference?: readonly Readonly<{
                            DOI?: string | undefined;
                            key: string;
                        }>[] | undefined;
                        author?: readonly Readonly<{
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }>[] | undefined;
                        'published-print'?: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                        'published-online'?: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                        volume?: string | undefined;
                        issue?: string | undefined;
                        page?: string | undefined;
                        title: readonly string[];
                        DOI: string;
                        URL: string;
                        'container-title': readonly string[];
                        'is-referenced-by-count': number;
                        published: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }>;
                    }>[]) & {
                        config: ((val: {
                            ISSN?: readonly string[] | undefined;
                            abstract?: string | undefined;
                            subtitle?: readonly string[] | undefined;
                            reference?: readonly {
                                DOI?: string | undefined;
                                key: string;
                            }[] | undefined;
                            author?: readonly {
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }[] | undefined;
                            'published-print'?: {
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            } | undefined;
                            'published-online'?: {
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            } | undefined;
                            volume?: string | undefined;
                            issue?: string | undefined;
                            page?: string | undefined;
                            title: readonly string[];
                            DOI: string;
                            URL: string;
                            'container-title': readonly string[];
                            'is-referenced-by-count': number;
                            published: {
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            };
                        }) => Readonly<{
                            ISSN?: readonly string[] | undefined;
                            abstract?: string | undefined;
                            subtitle?: readonly string[] | undefined;
                            reference?: readonly Readonly<{
                                DOI?: string | undefined;
                                key: string;
                            }>[] | undefined;
                            author?: readonly Readonly<{
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }>[] | undefined;
                            'published-print'?: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }> | undefined;
                            'published-online'?: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }> | undefined;
                            volume?: string | undefined;
                            issue?: string | undefined;
                            page?: string | undefined;
                            title: readonly string[];
                            DOI: string;
                            URL: string;
                            'container-title': readonly string[];
                            'is-referenced-by-count': number;
                            published: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>;
                        }>) & {
                            config: {
                                DOI: (val: string) => string;
                                ISSN: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly string[]) => readonly string[]) & {
                                            config: (val: string) => string;
                                            Value: readonly string[];
                                        };
                                        fallback: (() => readonly string[]) | undefined;
                                    };
                                    Value: readonly string[] | undefined;
                                };
                                URL: (val: string) => string;
                                abstract: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                'container-title': ((val: readonly string[]) => readonly string[]) & {
                                    config: (val: string) => string;
                                    Value: readonly string[];
                                };
                                'is-referenced-by-count': typeof $mol_data_integer;
                                title: ((val: readonly string[]) => readonly string[]) & {
                                    config: (val: string) => string;
                                    Value: readonly string[];
                                };
                                subtitle: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly string[]) => readonly string[]) & {
                                            config: (val: string) => string;
                                            Value: readonly string[];
                                        };
                                        fallback: (() => readonly string[]) | undefined;
                                    };
                                    Value: readonly string[] | undefined;
                                };
                                reference: ((val: readonly {
                                    DOI?: string | undefined;
                                    key: string;
                                }[] | undefined) => readonly Readonly<{
                                    DOI?: string | undefined;
                                    key: string;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            DOI?: string | undefined;
                                            key: string;
                                        }[]) => readonly Readonly<{
                                            DOI?: string | undefined;
                                            key: string;
                                        }>[]) & {
                                            config: ((val: {
                                                DOI?: string | undefined;
                                                key: string;
                                            }) => Readonly<{
                                                DOI?: string | undefined;
                                                key: string;
                                            }>) & {
                                                config: {
                                                    DOI: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                    key: (val: string) => string;
                                                };
                                                Value: Readonly<{
                                                    DOI?: string | undefined;
                                                    key: string;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                DOI?: string | undefined;
                                                key: string;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            DOI?: string | undefined;
                                            key: string;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        DOI?: string | undefined;
                                        key: string;
                                    }>[] | undefined;
                                };
                                author: ((val: readonly {
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }[] | undefined) => readonly Readonly<{
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            ORCID?: string | undefined;
                                            given?: string | undefined;
                                            family?: string | undefined;
                                            name?: string | undefined;
                                        }[]) => readonly Readonly<{
                                            ORCID?: string | undefined;
                                            given?: string | undefined;
                                            family?: string | undefined;
                                            name?: string | undefined;
                                        }>[]) & {
                                            config: ((val: {
                                                ORCID?: string | undefined;
                                                given?: string | undefined;
                                                family?: string | undefined;
                                                name?: string | undefined;
                                            }) => Readonly<{
                                                ORCID?: string | undefined;
                                                given?: string | undefined;
                                                family?: string | undefined;
                                                name?: string | undefined;
                                            }>) & {
                                                config: {
                                                    ORCID: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                    given: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                    family: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                    name: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                };
                                                Value: Readonly<{
                                                    ORCID?: string | undefined;
                                                    given?: string | undefined;
                                                    family?: string | undefined;
                                                    name?: string | undefined;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                ORCID?: string | undefined;
                                                given?: string | undefined;
                                                family?: string | undefined;
                                                name?: string | undefined;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            ORCID?: string | undefined;
                                            given?: string | undefined;
                                            family?: string | undefined;
                                            name?: string | undefined;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        ORCID?: string | undefined;
                                        given?: string | undefined;
                                        family?: string | undefined;
                                        name?: string | undefined;
                                    }>[] | undefined;
                                };
                                published: ((val: {
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }) => Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }>) & {
                                    config: {
                                        'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                            config: ((val: readonly number[]) => readonly number[]) & {
                                                config: typeof $mol_data_integer;
                                                Value: readonly number[];
                                            };
                                            Value: readonly (readonly number[])[];
                                        };
                                        'date-time': ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                    };
                                    Value: Readonly<{
                                        'date-time'?: string | undefined;
                                        'date-parts': readonly (readonly number[])[];
                                    }>;
                                };
                                'published-print': ((val: {
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                } | undefined) => Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }> | undefined) & {
                                    config: {
                                        sub: ((val: {
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }) => Readonly<{
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }>) & {
                                            config: {
                                                'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                                    config: ((val: readonly number[]) => readonly number[]) & {
                                                        config: typeof $mol_data_integer;
                                                        Value: readonly number[];
                                                    };
                                                    Value: readonly (readonly number[])[];
                                                };
                                                'date-time': ((val: string | undefined) => string | undefined) & {
                                                    config: {
                                                        sub: (val: string) => string;
                                                        fallback: (() => string) | undefined;
                                                    };
                                                    Value: string | undefined;
                                                };
                                            };
                                            Value: Readonly<{
                                                'date-time'?: string | undefined;
                                                'date-parts': readonly (readonly number[])[];
                                            }>;
                                        };
                                        fallback: (() => Readonly<{
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }>) | undefined;
                                    };
                                    Value: Readonly<{
                                        'date-time'?: string | undefined;
                                        'date-parts': readonly (readonly number[])[];
                                    }> | undefined;
                                };
                                'published-online': ((val: {
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                } | undefined) => Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }> | undefined) & {
                                    config: {
                                        sub: ((val: {
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }) => Readonly<{
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }>) & {
                                            config: {
                                                'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                                    config: ((val: readonly number[]) => readonly number[]) & {
                                                        config: typeof $mol_data_integer;
                                                        Value: readonly number[];
                                                    };
                                                    Value: readonly (readonly number[])[];
                                                };
                                                'date-time': ((val: string | undefined) => string | undefined) & {
                                                    config: {
                                                        sub: (val: string) => string;
                                                        fallback: (() => string) | undefined;
                                                    };
                                                    Value: string | undefined;
                                                };
                                            };
                                            Value: Readonly<{
                                                'date-time'?: string | undefined;
                                                'date-parts': readonly (readonly number[])[];
                                            }>;
                                        };
                                        fallback: (() => Readonly<{
                                            'date-time'?: string | undefined;
                                            'date-parts': readonly (readonly number[])[];
                                        }>) | undefined;
                                    };
                                    Value: Readonly<{
                                        'date-time'?: string | undefined;
                                        'date-parts': readonly (readonly number[])[];
                                    }> | undefined;
                                };
                                volume: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                issue: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                                page: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                            };
                            Value: Readonly<{
                                ISSN?: readonly string[] | undefined;
                                abstract?: string | undefined;
                                subtitle?: readonly string[] | undefined;
                                reference?: readonly Readonly<{
                                    DOI?: string | undefined;
                                    key: string;
                                }>[] | undefined;
                                author?: readonly Readonly<{
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }>[] | undefined;
                                'published-print'?: Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }> | undefined;
                                'published-online'?: Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }> | undefined;
                                volume?: string | undefined;
                                issue?: string | undefined;
                                page?: string | undefined;
                                title: readonly string[];
                                DOI: string;
                                URL: string;
                                'container-title': readonly string[];
                                'is-referenced-by-count': number;
                                published: Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }>;
                            }>;
                        };
                        Value: readonly Readonly<{
                            ISSN?: readonly string[] | undefined;
                            abstract?: string | undefined;
                            subtitle?: readonly string[] | undefined;
                            reference?: readonly Readonly<{
                                DOI?: string | undefined;
                                key: string;
                            }>[] | undefined;
                            author?: readonly Readonly<{
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }>[] | undefined;
                            'published-print'?: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }> | undefined;
                            'published-online'?: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }> | undefined;
                            volume?: string | undefined;
                            issue?: string | undefined;
                            page?: string | undefined;
                            title: readonly string[];
                            DOI: string;
                            URL: string;
                            'container-title': readonly string[];
                            'is-referenced-by-count': number;
                            published: Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>;
                        }>[];
                    };
                };
                Value: Readonly<{
                    'total-results': number;
                    items: readonly Readonly<{
                        ISSN?: readonly string[] | undefined;
                        abstract?: string | undefined;
                        subtitle?: readonly string[] | undefined;
                        reference?: readonly Readonly<{
                            DOI?: string | undefined;
                            key: string;
                        }>[] | undefined;
                        author?: readonly Readonly<{
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }>[] | undefined;
                        'published-print'?: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                        'published-online'?: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                        volume?: string | undefined;
                        issue?: string | undefined;
                        page?: string | undefined;
                        title: readonly string[];
                        DOI: string;
                        URL: string;
                        'container-title': readonly string[];
                        'is-referenced-by-count': number;
                        published: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }>;
                    }>[];
                }>;
            };
        };
        Value: Readonly<{
            message: Readonly<{
                'total-results': number;
                items: readonly Readonly<{
                    ISSN?: readonly string[] | undefined;
                    abstract?: string | undefined;
                    subtitle?: readonly string[] | undefined;
                    reference?: readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[] | undefined;
                    author?: readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[] | undefined;
                    'published-print'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    'published-online'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    volume?: string | undefined;
                    issue?: string | undefined;
                    page?: string | undefined;
                    title: readonly string[];
                    DOI: string;
                    URL: string;
                    'container-title': readonly string[];
                    'is-referenced-by-count': number;
                    published: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>;
                }>[];
            }>;
        }>;
    };
    let $hyoo_science_crossref_details_response: ((val: {
        message: {
            ISSN?: readonly string[] | undefined;
            abstract?: string | undefined;
            subtitle?: readonly string[] | undefined;
            reference?: readonly {
                DOI?: string | undefined;
                key: string;
            }[] | undefined;
            author?: readonly {
                ORCID?: string | undefined;
                given?: string | undefined;
                family?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            'published-print'?: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            } | undefined;
            'published-online'?: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            } | undefined;
            volume?: string | undefined;
            issue?: string | undefined;
            page?: string | undefined;
            title: readonly string[];
            DOI: string;
            URL: string;
            'container-title': readonly string[];
            'is-referenced-by-count': number;
            published: {
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            };
        };
    }) => Readonly<{
        message: Readonly<{
            ISSN?: readonly string[] | undefined;
            abstract?: string | undefined;
            subtitle?: readonly string[] | undefined;
            reference?: readonly Readonly<{
                DOI?: string | undefined;
                key: string;
            }>[] | undefined;
            author?: readonly Readonly<{
                ORCID?: string | undefined;
                given?: string | undefined;
                family?: string | undefined;
                name?: string | undefined;
            }>[] | undefined;
            'published-print'?: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined;
            'published-online'?: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }> | undefined;
            volume?: string | undefined;
            issue?: string | undefined;
            page?: string | undefined;
            title: readonly string[];
            DOI: string;
            URL: string;
            'container-title': readonly string[];
            'is-referenced-by-count': number;
            published: Readonly<{
                'date-time'?: string | undefined;
                'date-parts': readonly (readonly number[])[];
            }>;
        }>;
    }>) & {
        config: {
            message: ((val: {
                ISSN?: readonly string[] | undefined;
                abstract?: string | undefined;
                subtitle?: readonly string[] | undefined;
                reference?: readonly {
                    DOI?: string | undefined;
                    key: string;
                }[] | undefined;
                author?: readonly {
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
                'published-print'?: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                } | undefined;
                'published-online'?: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                } | undefined;
                volume?: string | undefined;
                issue?: string | undefined;
                page?: string | undefined;
                title: readonly string[];
                DOI: string;
                URL: string;
                'container-title': readonly string[];
                'is-referenced-by-count': number;
                published: {
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                };
            }) => Readonly<{
                ISSN?: readonly string[] | undefined;
                abstract?: string | undefined;
                subtitle?: readonly string[] | undefined;
                reference?: readonly Readonly<{
                    DOI?: string | undefined;
                    key: string;
                }>[] | undefined;
                author?: readonly Readonly<{
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }>[] | undefined;
                'published-print'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                'published-online'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                volume?: string | undefined;
                issue?: string | undefined;
                page?: string | undefined;
                title: readonly string[];
                DOI: string;
                URL: string;
                'container-title': readonly string[];
                'is-referenced-by-count': number;
                published: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }>;
            }>) & {
                config: {
                    DOI: (val: string) => string;
                    ISSN: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                        config: {
                            sub: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            fallback: (() => readonly string[]) | undefined;
                        };
                        Value: readonly string[] | undefined;
                    };
                    URL: (val: string) => string;
                    abstract: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                    'container-title': ((val: readonly string[]) => readonly string[]) & {
                        config: (val: string) => string;
                        Value: readonly string[];
                    };
                    'is-referenced-by-count': typeof $mol_data_integer;
                    title: ((val: readonly string[]) => readonly string[]) & {
                        config: (val: string) => string;
                        Value: readonly string[];
                    };
                    subtitle: ((val: readonly string[] | undefined) => readonly string[] | undefined) & {
                        config: {
                            sub: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            fallback: (() => readonly string[]) | undefined;
                        };
                        Value: readonly string[] | undefined;
                    };
                    reference: ((val: readonly {
                        DOI?: string | undefined;
                        key: string;
                    }[] | undefined) => readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[] | undefined) & {
                        config: {
                            sub: ((val: readonly {
                                DOI?: string | undefined;
                                key: string;
                            }[]) => readonly Readonly<{
                                DOI?: string | undefined;
                                key: string;
                            }>[]) & {
                                config: ((val: {
                                    DOI?: string | undefined;
                                    key: string;
                                }) => Readonly<{
                                    DOI?: string | undefined;
                                    key: string;
                                }>) & {
                                    config: {
                                        DOI: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                        key: (val: string) => string;
                                    };
                                    Value: Readonly<{
                                        DOI?: string | undefined;
                                        key: string;
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    DOI?: string | undefined;
                                    key: string;
                                }>[];
                            };
                            fallback: (() => readonly Readonly<{
                                DOI?: string | undefined;
                                key: string;
                            }>[]) | undefined;
                        };
                        Value: readonly Readonly<{
                            DOI?: string | undefined;
                            key: string;
                        }>[] | undefined;
                    };
                    author: ((val: readonly {
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }[] | undefined) => readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[] | undefined) & {
                        config: {
                            sub: ((val: readonly {
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }[]) => readonly Readonly<{
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }>[]) & {
                                config: ((val: {
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }) => Readonly<{
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }>) & {
                                    config: {
                                        ORCID: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                        given: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                        family: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                        name: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                    };
                                    Value: Readonly<{
                                        ORCID?: string | undefined;
                                        given?: string | undefined;
                                        family?: string | undefined;
                                        name?: string | undefined;
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    ORCID?: string | undefined;
                                    given?: string | undefined;
                                    family?: string | undefined;
                                    name?: string | undefined;
                                }>[];
                            };
                            fallback: (() => readonly Readonly<{
                                ORCID?: string | undefined;
                                given?: string | undefined;
                                family?: string | undefined;
                                name?: string | undefined;
                            }>[]) | undefined;
                        };
                        Value: readonly Readonly<{
                            ORCID?: string | undefined;
                            given?: string | undefined;
                            family?: string | undefined;
                            name?: string | undefined;
                        }>[] | undefined;
                    };
                    published: ((val: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }) => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly number[]) => readonly number[]) & {
                                    config: typeof $mol_data_integer;
                                    Value: readonly number[];
                                };
                                Value: readonly (readonly number[])[];
                            };
                            'date-time': ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }>;
                    };
                    'published-print': ((val: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    } | undefined) => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined) & {
                        config: {
                            sub: ((val: {
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }) => Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>) & {
                                config: {
                                    'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                        config: ((val: readonly number[]) => readonly number[]) & {
                                            config: typeof $mol_data_integer;
                                            Value: readonly number[];
                                        };
                                        Value: readonly (readonly number[])[];
                                    };
                                    'date-time': ((val: string | undefined) => string | undefined) & {
                                        config: {
                                            sub: (val: string) => string;
                                            fallback: (() => string) | undefined;
                                        };
                                        Value: string | undefined;
                                    };
                                };
                                Value: Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }>;
                            };
                            fallback: (() => Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>) | undefined;
                        };
                        Value: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                    };
                    'published-online': ((val: {
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    } | undefined) => Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined) & {
                        config: {
                            sub: ((val: {
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }) => Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>) & {
                                config: {
                                    'date-parts': ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                        config: ((val: readonly number[]) => readonly number[]) & {
                                            config: typeof $mol_data_integer;
                                            Value: readonly number[];
                                        };
                                        Value: readonly (readonly number[])[];
                                    };
                                    'date-time': ((val: string | undefined) => string | undefined) & {
                                        config: {
                                            sub: (val: string) => string;
                                            fallback: (() => string) | undefined;
                                        };
                                        Value: string | undefined;
                                    };
                                };
                                Value: Readonly<{
                                    'date-time'?: string | undefined;
                                    'date-parts': readonly (readonly number[])[];
                                }>;
                            };
                            fallback: (() => Readonly<{
                                'date-time'?: string | undefined;
                                'date-parts': readonly (readonly number[])[];
                            }>) | undefined;
                        };
                        Value: Readonly<{
                            'date-time'?: string | undefined;
                            'date-parts': readonly (readonly number[])[];
                        }> | undefined;
                    };
                    volume: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                    issue: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                    page: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                };
                Value: Readonly<{
                    ISSN?: readonly string[] | undefined;
                    abstract?: string | undefined;
                    subtitle?: readonly string[] | undefined;
                    reference?: readonly Readonly<{
                        DOI?: string | undefined;
                        key: string;
                    }>[] | undefined;
                    author?: readonly Readonly<{
                        ORCID?: string | undefined;
                        given?: string | undefined;
                        family?: string | undefined;
                        name?: string | undefined;
                    }>[] | undefined;
                    'published-print'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    'published-online'?: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }> | undefined;
                    volume?: string | undefined;
                    issue?: string | undefined;
                    page?: string | undefined;
                    title: readonly string[];
                    DOI: string;
                    URL: string;
                    'container-title': readonly string[];
                    'is-referenced-by-count': number;
                    published: Readonly<{
                        'date-time'?: string | undefined;
                        'date-parts': readonly (readonly number[])[];
                    }>;
                }>;
            };
        };
        Value: Readonly<{
            message: Readonly<{
                ISSN?: readonly string[] | undefined;
                abstract?: string | undefined;
                subtitle?: readonly string[] | undefined;
                reference?: readonly Readonly<{
                    DOI?: string | undefined;
                    key: string;
                }>[] | undefined;
                author?: readonly Readonly<{
                    ORCID?: string | undefined;
                    given?: string | undefined;
                    family?: string | undefined;
                    name?: string | undefined;
                }>[] | undefined;
                'published-print'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                'published-online'?: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }> | undefined;
                volume?: string | undefined;
                issue?: string | undefined;
                page?: string | undefined;
                title: readonly string[];
                DOI: string;
                URL: string;
                'container-title': readonly string[];
                'is-referenced-by-count': number;
                published: Readonly<{
                    'date-time'?: string | undefined;
                    'date-parts': readonly (readonly number[])[];
                }>;
            }>;
        }>;
    };
    function $hyoo_science_crossref_search(this: $, query: string, open: boolean, sort: string): {
        total: number;
        article: {
            link: string;
            doi: string;
            title: string;
            journal: string;
            date: $mol_time_moment | null;
            open: boolean;
            rank: number;
        }[];
    };
    function $hyoo_science_crossref_details(this: $, doi: string): {
        doi: string;
        link: string;
        title: string;
        title_sub: string;
        authors: string[];
        journal: string;
        abstract: string;
        rank: number;
        published: $mol_time_moment | null;
        print_location: string;
    };
}

declare namespace $ {

	type $mol_button_copy__hint_hyoo_science_details_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_hyoo_science_details_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['cite'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_link__arg_hyoo_science_details_3 = $mol_type_enforce<
		({ 
			'doi': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_science_details_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__uri_hyoo_science_details_5 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title_hyoo_science_details_6 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['doi'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_8 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Doi'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_9 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['rank_view'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_11 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Rank'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_form_group__sub_hyoo_science_details_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paragraph__title_hyoo_science_details_13 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['journal'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_15 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Journal'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_16 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['published'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_18 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Published'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_form_group__sub_hyoo_science_details_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_paragraph__title_hyoo_science_details_20 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['abstract'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_22 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Abstract'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_paragraph__title_hyoo_science_details_23 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['authors'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_hyoo_science_details_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content_hyoo_science_details_25 = $mol_type_enforce<
		ReturnType< $hyoo_science_details['Authors'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_list__rows_hyoo_science_details_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_science_details extends $mol_page {
		cite( ): string
		Cite( ): $mol_button_copy
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		link( ): string
		doi( ): string
		Doi( ): $mol_link
		Doi_labeler( ): $mol_labeler
		rank_view( ): string
		Rank( ): $mol_paragraph
		Rank_labeler( ): $mol_labeler
		Main( ): $mol_form_group
		journal( ): string
		Journal( ): $mol_paragraph
		Journal_labeler( ): $mol_labeler
		published( ): string
		Published( ): $mol_paragraph
		Published_labeler( ): $mol_labeler
		Publication( ): $mol_form_group
		abstract( ): string
		Abstract( ): $mol_paragraph
		Abstract_labeler( ): $mol_labeler
		authors( ): string
		Authors( ): $mol_paragraph
		Authors_labeler( ): $mol_labeler
		Content( ): $mol_list
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=details.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_science_details extends $.$hyoo_science_details {
        data(): {
            doi: string;
            link: string;
            title: string;
            title_sub: string;
            authors: string[];
            journal: string;
            abstract: string;
            rank: number;
            published: $mol_time_moment | null;
            print_location: string;
        };
        title(): string;
        rank_view(): string;
        journal(): string;
        authors(): string;
        abstract(): string;
        link(): string;
        published(): string;
        print_location(): string;
        cite(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		theme( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $ {
    enum Link_type {
        'scidir' = "scidir",
        'self' = "self",
        'scopus' = "scopus",
        'scopus-citedby' = "scopus-citedby",
        'full-text' = "full-text",
        'author-affiliation' = "author-affiliation"
    }
    export let $hyoo_science_elsevier_link: ((val: {
        '@ref': Link_type;
        '@href': string;
    }) => Readonly<{
        '@ref': Link_type;
        '@href': string;
    }>) & {
        config: {
            '@ref': ((value: Link_type) => Link_type) & {
                config: {
                    name: string;
                    dict: typeof Link_type;
                };
                Value: Link_type;
            };
            '@href': (val: string) => string;
        };
        Value: Readonly<{
            '@ref': Link_type;
            '@href': string;
        }>;
    };
    export let $hyoo_science_elsevier_error: ((val: {
        error: string;
    }) => Readonly<{
        error: string;
    }>) & {
        config: {
            error: (val: string) => string;
        };
        Value: Readonly<{
            error: string;
        }>;
    };
    export let $hyoo_science_elsevier_entry: ((val: {
        openaccess?: any;
        'citedby-count'?: string | undefined;
        'dc:creator'?: string | undefined;
        'prism:doi'?: string | undefined;
        link: readonly {
            '@ref': Link_type;
            '@href': string;
        }[];
        'dc:identifier': string;
        'dc:title': string;
        'prism:coverDate': string;
        'prism:publicationName': string;
        'prism:startingPage': string;
        'prism:url': string;
        'prism:volume': string;
    }) => Readonly<{
        'citedby-count'?: string | undefined;
        'dc:creator'?: string | undefined;
        'prism:doi'?: string | undefined;
        link: readonly Readonly<{
            '@ref': Link_type;
            '@href': string;
        }>[];
        openaccess: boolean;
        'dc:identifier': string;
        'dc:title': string;
        'prism:coverDate': $mol_time_moment;
        'prism:publicationName': string;
        'prism:startingPage': number;
        'prism:url': string;
        'prism:volume': number;
    }>) & {
        config: {
            openaccess: ((this: any, input: any) => boolean) & {
                config: {
                    funcs: [(v: any) => number, (v: number) => boolean] & [(input: any) => number, (input: number) => unknown];
                };
                Value: boolean;
            };
            'citedby-count': ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            'dc:creator': ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            'dc:identifier': (val: string) => string;
            'dc:title': (val: string) => string;
            'prism:coverDate': ((this: any, input: string) => $mol_time_moment) & {
                config: {
                    funcs: [(val: string) => string, typeof $mol_time_moment] & [(input: string) => $mol_time_moment_config | undefined, new (input: $mol_time_moment_config | undefined) => unknown];
                };
                Value: $mol_time_moment;
            };
            'prism:doi': ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            'prism:publicationName': (val: string) => string;
            'prism:startingPage': typeof parseInt;
            'prism:url': (val: string) => string;
            'prism:volume': typeof parseInt;
            link: ((val: readonly {
                '@ref': Link_type;
                '@href': string;
            }[]) => readonly Readonly<{
                '@ref': Link_type;
                '@href': string;
            }>[]) & {
                config: ((val: {
                    '@ref': Link_type;
                    '@href': string;
                }) => Readonly<{
                    '@ref': Link_type;
                    '@href': string;
                }>) & {
                    config: {
                        '@ref': ((value: Link_type) => Link_type) & {
                            config: {
                                name: string;
                                dict: typeof Link_type;
                            };
                            Value: Link_type;
                        };
                        '@href': (val: string) => string;
                    };
                    Value: Readonly<{
                        '@ref': Link_type;
                        '@href': string;
                    }>;
                };
                Value: readonly Readonly<{
                    '@ref': Link_type;
                    '@href': string;
                }>[];
            };
        };
        Value: Readonly<{
            'citedby-count'?: string | undefined;
            'dc:creator'?: string | undefined;
            'prism:doi'?: string | undefined;
            link: readonly Readonly<{
                '@ref': Link_type;
                '@href': string;
            }>[];
            openaccess: boolean;
            'dc:identifier': string;
            'dc:title': string;
            'prism:coverDate': $mol_time_moment;
            'prism:publicationName': string;
            'prism:startingPage': number;
            'prism:url': string;
            'prism:volume': number;
        }>;
    };
    export let $hyoo_science_elsevier_response: ((val: {
        'search-results': {
            'opensearch:totalResults': string;
            'opensearch:startIndex': string;
            'opensearch:itemsPerPage': string;
            entry: readonly {
                openaccess?: any;
                'citedby-count'?: string | undefined;
                'dc:creator'?: string | undefined;
                'prism:doi'?: string | undefined;
                link: readonly {
                    '@ref': Link_type;
                    '@href': string;
                }[];
                'dc:identifier': string;
                'dc:title': string;
                'prism:coverDate': string;
                'prism:publicationName': string;
                'prism:startingPage': string;
                'prism:url': string;
                'prism:volume': string;
            }[] | readonly {
                error: string;
            }[];
        };
    }) => Readonly<{
        'search-results': Readonly<{
            'opensearch:totalResults': number;
            'opensearch:startIndex': number;
            'opensearch:itemsPerPage': number;
            entry: readonly Readonly<{
                'citedby-count'?: string | undefined;
                'dc:creator'?: string | undefined;
                'prism:doi'?: string | undefined;
                link: readonly Readonly<{
                    '@ref': Link_type;
                    '@href': string;
                }>[];
                openaccess: boolean;
                'dc:identifier': string;
                'dc:title': string;
                'prism:coverDate': $mol_time_moment;
                'prism:publicationName': string;
                'prism:startingPage': number;
                'prism:url': string;
                'prism:volume': number;
            }>[] | readonly Readonly<{
                error: string;
            }>[];
        }>;
    }>) & {
        config: {
            'search-results': ((val: {
                'opensearch:totalResults': string;
                'opensearch:startIndex': string;
                'opensearch:itemsPerPage': string;
                entry: readonly {
                    openaccess?: any;
                    'citedby-count'?: string | undefined;
                    'dc:creator'?: string | undefined;
                    'prism:doi'?: string | undefined;
                    link: readonly {
                        '@ref': Link_type;
                        '@href': string;
                    }[];
                    'dc:identifier': string;
                    'dc:title': string;
                    'prism:coverDate': string;
                    'prism:publicationName': string;
                    'prism:startingPage': string;
                    'prism:url': string;
                    'prism:volume': string;
                }[] | readonly {
                    error: string;
                }[];
            }) => Readonly<{
                'opensearch:totalResults': number;
                'opensearch:startIndex': number;
                'opensearch:itemsPerPage': number;
                entry: readonly Readonly<{
                    'citedby-count'?: string | undefined;
                    'dc:creator'?: string | undefined;
                    'prism:doi'?: string | undefined;
                    link: readonly Readonly<{
                        '@ref': Link_type;
                        '@href': string;
                    }>[];
                    openaccess: boolean;
                    'dc:identifier': string;
                    'dc:title': string;
                    'prism:coverDate': $mol_time_moment;
                    'prism:publicationName': string;
                    'prism:startingPage': number;
                    'prism:url': string;
                    'prism:volume': number;
                }>[] | readonly Readonly<{
                    error: string;
                }>[];
            }>) & {
                config: {
                    'opensearch:totalResults': typeof parseInt;
                    'opensearch:startIndex': typeof parseInt;
                    'opensearch:itemsPerPage': typeof parseInt;
                    entry: ((val: readonly {
                        openaccess?: any;
                        'citedby-count'?: string | undefined;
                        'dc:creator'?: string | undefined;
                        'prism:doi'?: string | undefined;
                        link: readonly {
                            '@ref': Link_type;
                            '@href': string;
                        }[];
                        'dc:identifier': string;
                        'dc:title': string;
                        'prism:coverDate': string;
                        'prism:publicationName': string;
                        'prism:startingPage': string;
                        'prism:url': string;
                        'prism:volume': string;
                    }[] | readonly {
                        error: string;
                    }[]) => readonly Readonly<{
                        'citedby-count'?: string | undefined;
                        'dc:creator'?: string | undefined;
                        'prism:doi'?: string | undefined;
                        link: readonly Readonly<{
                            '@ref': Link_type;
                            '@href': string;
                        }>[];
                        openaccess: boolean;
                        'dc:identifier': string;
                        'dc:title': string;
                        'prism:coverDate': $mol_time_moment;
                        'prism:publicationName': string;
                        'prism:startingPage': number;
                        'prism:url': string;
                        'prism:volume': number;
                    }>[] | readonly Readonly<{
                        error: string;
                    }>[]) & {
                        config: [((val: readonly {
                            openaccess?: any;
                            'citedby-count'?: string | undefined;
                            'dc:creator'?: string | undefined;
                            'prism:doi'?: string | undefined;
                            link: readonly {
                                '@ref': Link_type;
                                '@href': string;
                            }[];
                            'dc:identifier': string;
                            'dc:title': string;
                            'prism:coverDate': string;
                            'prism:publicationName': string;
                            'prism:startingPage': string;
                            'prism:url': string;
                            'prism:volume': string;
                        }[]) => readonly Readonly<{
                            'citedby-count'?: string | undefined;
                            'dc:creator'?: string | undefined;
                            'prism:doi'?: string | undefined;
                            link: readonly Readonly<{
                                '@ref': Link_type;
                                '@href': string;
                            }>[];
                            openaccess: boolean;
                            'dc:identifier': string;
                            'dc:title': string;
                            'prism:coverDate': $mol_time_moment;
                            'prism:publicationName': string;
                            'prism:startingPage': number;
                            'prism:url': string;
                            'prism:volume': number;
                        }>[]) & {
                            config: ((val: {
                                openaccess?: any;
                                'citedby-count'?: string | undefined;
                                'dc:creator'?: string | undefined;
                                'prism:doi'?: string | undefined;
                                link: readonly {
                                    '@ref': Link_type;
                                    '@href': string;
                                }[];
                                'dc:identifier': string;
                                'dc:title': string;
                                'prism:coverDate': string;
                                'prism:publicationName': string;
                                'prism:startingPage': string;
                                'prism:url': string;
                                'prism:volume': string;
                            }) => Readonly<{
                                'citedby-count'?: string | undefined;
                                'dc:creator'?: string | undefined;
                                'prism:doi'?: string | undefined;
                                link: readonly Readonly<{
                                    '@ref': Link_type;
                                    '@href': string;
                                }>[];
                                openaccess: boolean;
                                'dc:identifier': string;
                                'dc:title': string;
                                'prism:coverDate': $mol_time_moment;
                                'prism:publicationName': string;
                                'prism:startingPage': number;
                                'prism:url': string;
                                'prism:volume': number;
                            }>) & {
                                config: {
                                    openaccess: ((this: any, input: any) => boolean) & {
                                        config: {
                                            funcs: [(v: any) => number, (v: number) => boolean] & [(input: any) => number, (input: number) => unknown];
                                        };
                                        Value: boolean;
                                    };
                                    'citedby-count': ((val: string | undefined) => string | undefined) & {
                                        config: {
                                            sub: (val: string) => string;
                                            fallback: (() => string) | undefined;
                                        };
                                        Value: string | undefined;
                                    };
                                    'dc:creator': ((val: string | undefined) => string | undefined) & {
                                        config: {
                                            sub: (val: string) => string;
                                            fallback: (() => string) | undefined;
                                        };
                                        Value: string | undefined;
                                    };
                                    'dc:identifier': (val: string) => string;
                                    'dc:title': (val: string) => string;
                                    'prism:coverDate': ((this: any, input: string) => $mol_time_moment) & {
                                        config: {
                                            funcs: [(val: string) => string, typeof $mol_time_moment] & [(input: string) => $mol_time_moment_config | undefined, new (input: $mol_time_moment_config | undefined) => unknown];
                                        };
                                        Value: $mol_time_moment;
                                    };
                                    'prism:doi': ((val: string | undefined) => string | undefined) & {
                                        config: {
                                            sub: (val: string) => string;
                                            fallback: (() => string) | undefined;
                                        };
                                        Value: string | undefined;
                                    };
                                    'prism:publicationName': (val: string) => string;
                                    'prism:startingPage': typeof parseInt;
                                    'prism:url': (val: string) => string;
                                    'prism:volume': typeof parseInt;
                                    link: ((val: readonly {
                                        '@ref': Link_type;
                                        '@href': string;
                                    }[]) => readonly Readonly<{
                                        '@ref': Link_type;
                                        '@href': string;
                                    }>[]) & {
                                        config: ((val: {
                                            '@ref': Link_type;
                                            '@href': string;
                                        }) => Readonly<{
                                            '@ref': Link_type;
                                            '@href': string;
                                        }>) & {
                                            config: {
                                                '@ref': ((value: Link_type) => Link_type) & {
                                                    config: {
                                                        name: string;
                                                        dict: typeof Link_type;
                                                    };
                                                    Value: Link_type;
                                                };
                                                '@href': (val: string) => string;
                                            };
                                            Value: Readonly<{
                                                '@ref': Link_type;
                                                '@href': string;
                                            }>;
                                        };
                                        Value: readonly Readonly<{
                                            '@ref': Link_type;
                                            '@href': string;
                                        }>[];
                                    };
                                };
                                Value: Readonly<{
                                    'citedby-count'?: string | undefined;
                                    'dc:creator'?: string | undefined;
                                    'prism:doi'?: string | undefined;
                                    link: readonly Readonly<{
                                        '@ref': Link_type;
                                        '@href': string;
                                    }>[];
                                    openaccess: boolean;
                                    'dc:identifier': string;
                                    'dc:title': string;
                                    'prism:coverDate': $mol_time_moment;
                                    'prism:publicationName': string;
                                    'prism:startingPage': number;
                                    'prism:url': string;
                                    'prism:volume': number;
                                }>;
                            };
                            Value: readonly Readonly<{
                                'citedby-count'?: string | undefined;
                                'dc:creator'?: string | undefined;
                                'prism:doi'?: string | undefined;
                                link: readonly Readonly<{
                                    '@ref': Link_type;
                                    '@href': string;
                                }>[];
                                openaccess: boolean;
                                'dc:identifier': string;
                                'dc:title': string;
                                'prism:coverDate': $mol_time_moment;
                                'prism:publicationName': string;
                                'prism:startingPage': number;
                                'prism:url': string;
                                'prism:volume': number;
                            }>[];
                        }, ((val: readonly {
                            error: string;
                        }[]) => readonly Readonly<{
                            error: string;
                        }>[]) & {
                            config: ((val: {
                                error: string;
                            }) => Readonly<{
                                error: string;
                            }>) & {
                                config: {
                                    error: (val: string) => string;
                                };
                                Value: Readonly<{
                                    error: string;
                                }>;
                            };
                            Value: readonly Readonly<{
                                error: string;
                            }>[];
                        }];
                        Value: readonly Readonly<{
                            'citedby-count'?: string | undefined;
                            'dc:creator'?: string | undefined;
                            'prism:doi'?: string | undefined;
                            link: readonly Readonly<{
                                '@ref': Link_type;
                                '@href': string;
                            }>[];
                            openaccess: boolean;
                            'dc:identifier': string;
                            'dc:title': string;
                            'prism:coverDate': $mol_time_moment;
                            'prism:publicationName': string;
                            'prism:startingPage': number;
                            'prism:url': string;
                            'prism:volume': number;
                        }>[] | readonly Readonly<{
                            error: string;
                        }>[];
                    };
                };
                Value: Readonly<{
                    'opensearch:totalResults': number;
                    'opensearch:startIndex': number;
                    'opensearch:itemsPerPage': number;
                    entry: readonly Readonly<{
                        'citedby-count'?: string | undefined;
                        'dc:creator'?: string | undefined;
                        'prism:doi'?: string | undefined;
                        link: readonly Readonly<{
                            '@ref': Link_type;
                            '@href': string;
                        }>[];
                        openaccess: boolean;
                        'dc:identifier': string;
                        'dc:title': string;
                        'prism:coverDate': $mol_time_moment;
                        'prism:publicationName': string;
                        'prism:startingPage': number;
                        'prism:url': string;
                        'prism:volume': number;
                    }>[] | readonly Readonly<{
                        error: string;
                    }>[];
                }>;
            };
        };
        Value: Readonly<{
            'search-results': Readonly<{
                'opensearch:totalResults': number;
                'opensearch:startIndex': number;
                'opensearch:itemsPerPage': number;
                entry: readonly Readonly<{
                    'citedby-count'?: string | undefined;
                    'dc:creator'?: string | undefined;
                    'prism:doi'?: string | undefined;
                    link: readonly Readonly<{
                        '@ref': Link_type;
                        '@href': string;
                    }>[];
                    openaccess: boolean;
                    'dc:identifier': string;
                    'dc:title': string;
                    'prism:coverDate': $mol_time_moment;
                    'prism:publicationName': string;
                    'prism:startingPage': number;
                    'prism:url': string;
                    'prism:volume': number;
                }>[] | readonly Readonly<{
                    error: string;
                }>[];
            }>;
        }>;
    };
    export function $hyoo_science_elsevier_search(this: $, service: string, query: string, sort: string): {
        total: number;
        article: {
            link: string;
            doi: string | null;
            title: string;
            journal: string;
            date: $mol_time_moment;
            open: boolean;
            rank: number;
        }[];
    };
    export {};
}

declare namespace $ {

	type $mol_search__hint_hyoo_science_app_1 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['title'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_science_app_2 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['query_changed'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__submit_hyoo_science_app_3 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['search'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_select__hint_hyoo_science_app_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_5 = $mol_type_enforce<
		({ 
			'sciencedirect': string,
			'scopus': string,
			'crossref': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_6 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['service'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__hint_hyoo_science_app_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_8 = $mol_type_enforce<
		({ 
			'': string,
			'AGRI': string,
			'ARTS': string,
			'BIOC': string,
			'BUSI': string,
			'CENG': string,
			'CHEM': string,
			'COMP': string,
			'DECI': string,
			'DENT': string,
			'EART': string,
			'ECON': string,
			'ENER': string,
			'ENGI': string,
			'ENVI': string,
			'HEAL': string,
			'IMMU': string,
			'MATE': string,
			'MATH': string,
			'MEDI': string,
			'NEUR': string,
			'NURS': string,
			'PHAR': string,
			'PHYS': string,
			'PSYC': string,
			'SOCI': string,
			'VETE': string,
			'MULT': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_9 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['area'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_10 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['area_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_view__sub_hyoo_science_app_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__hint_hyoo_science_app_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_13 = $mol_type_enforce<
		({ 
			'': string,
			'TITLE': string,
			'TITLE-ABS-KEY': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_14 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['place'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_15 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['place_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_check_icon__hint_hyoo_science_app_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon_hyoo_science_app_17 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Open_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked_hyoo_science_app_18 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['open'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__enabled_hyoo_science_app_19 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['open_supported'] >
		,
		ReturnType< $mol_check_icon['enabled'] >
	>
	type $mol_select__hint_hyoo_science_app_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__dictionary_hyoo_science_app_21 = $mol_type_enforce<
		({ 
			'': string,
			'refs': string,
			'date': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_hyoo_science_app_22 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_hyoo_science_app_23 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['sort_supported'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_link__hint_hyoo_science_app_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri_hyoo_science_app_25 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['help'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_science_app_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link_source__uri_hyoo_science_app_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $hyoo_science_article__open_hyoo_science_app_28 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_open'] >
		,
		ReturnType< $hyoo_science_article['open'] >
	>
	type $hyoo_science_article__highlight_hyoo_science_app_29 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['query'] >
		,
		ReturnType< $hyoo_science_article['highlight'] >
	>
	type $hyoo_science_article__title_hyoo_science_app_30 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_title'] >
		,
		ReturnType< $hyoo_science_article['title'] >
	>
	type $hyoo_science_article__doi_hyoo_science_app_31 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_doi'] >
		,
		ReturnType< $hyoo_science_article['doi'] >
	>
	type $hyoo_science_article__uri_hyoo_science_app_32 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_link'] >
		,
		ReturnType< $hyoo_science_article['uri'] >
	>
	type $hyoo_science_article__rank_hyoo_science_app_33 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_rank'] >
		,
		ReturnType< $hyoo_science_article['rank'] >
	>
	type $hyoo_science_article__date_hyoo_science_app_34 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_date'] >
		,
		ReturnType< $hyoo_science_article['date'] >
	>
	type $hyoo_science_article__journal_title_hyoo_science_app_35 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_journal'] >
		,
		ReturnType< $hyoo_science_article['journal_title'] >
	>
	type $mol_chip__title_hyoo_science_app_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_list__rows_hyoo_science_app_37 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['found_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__Empty_hyoo_science_app_38 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Found_none'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_view__sub_hyoo_science_app_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__Title_hyoo_science_app_40 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['Query'] >
		,
		ReturnType< $mol_page['Title'] >
	>
	type $mol_page__head_hyoo_science_app_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__tools_hyoo_science_app_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_hyoo_science_app_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $hyoo_science_details__doi_hyoo_science_app_44 = $mol_type_enforce<
		ReturnType< $hyoo_science_app['doi'] >
		,
		ReturnType< $hyoo_science_details['doi'] >
	>
	export class $hyoo_science_app extends $mol_book2 {
		Search_tools( ): ReturnType< ReturnType< $hyoo_science_app['Search'] >['Tools'] >
		title( ): string
		query( ): string
		query_changed( next?: ReturnType< $hyoo_science_app['query'] > ): ReturnType< $hyoo_science_app['query'] >
		search( next?: any ): any
		Query( ): $mol_search
		service( next?: string ): string
		Service( ): $mol_select
		area( next?: string ): string
		area_supported( ): boolean
		Area( ): $mol_select
		Zone( ): $mol_view
		place( next?: string ): string
		place_supported( ): boolean
		Place( ): $mol_select
		Open_icon( ): $mol_icon_lock_open_variant_outline
		open( next?: boolean ): boolean
		open_supported( ): boolean
		Open( ): $mol_check_icon
		sort( next?: string ): string
		sort_supported( ): boolean
		Sort( ): $mol_select
		help( ): string
		Help_icon( ): $mol_icon_hint
		Help( ): $mol_link
		Lights( ): $mol_lights_toggle
		Source( ): $mol_link_source
		found_open( id: any): boolean
		found_title( id: any): string
		found_doi( id: any): string | null
		found_link( id: any): string
		found_rank( id: any): number
		found_date( id: any): $mol_time_moment | null
		found_journal( id: any): string
		Found_row( id: any): $hyoo_science_article
		found_rows( ): readonly(any)[]
		Found_none( ): $mol_chip
		Found_rows( ): $mol_list
		request( ): string
		Request( ): $mol_view
		Search( ): $mol_page
		doi( ): string
		Details( ): $hyoo_science_details
		Theme( ): $mol_theme_auto
		pages( ): readonly(any)[]
		plugins( ): readonly(any)[]
		Placeholder( ): any
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_science_app extends $.$hyoo_science_app {
        service(next?: string): string;
        query(): string;
        doi(): string;
        title(): string;
        area(next?: string): string;
        area_supported(): boolean;
        place(next?: string): string;
        place_supported(): boolean;
        open(next?: boolean): boolean;
        open_supported(): boolean;
        pages(): ($.$hyoo_science_details | $mol_page)[];
        sort(next?: string): string;
        sort_supported(): boolean;
        request(): string;
        help(): string;
        search(): void;
        search_data(): {
            total: number;
            article: {
                link: string;
                doi: string;
                title: string;
                journal: string;
                date: $mol_time_moment | null;
                open: boolean;
                rank: number;
            }[];
        } | {
            total: number;
            article: {
                link: string;
                doi: string | null;
                title: string;
                journal: string;
                date: $mol_time_moment;
                open: boolean;
                rank: number;
            }[];
        };
        found_rows(): $.$hyoo_science_article[];
        found_open(index: number): boolean;
        found_title(index: number): string;
        found_doi(index: number): string | null;
        found_link(index: number): string;
        found_rank(index: number): number;
        found_date(index: number): $mol_time_moment | null;
        found_journal(index: number): string;
    }
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
