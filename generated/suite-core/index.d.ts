
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model TenantModule
 * 
 */
export type TenantModule = $Result.DefaultSelection<Prisma.$TenantModulePayload>
/**
 * Model IntegrationEvent
 * 
 */
export type IntegrationEvent = $Result.DefaultSelection<Prisma.$IntegrationEventPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserModuleAccess
 * 
 */
export type UserModuleAccess = $Result.DefaultSelection<Prisma.$UserModuleAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SuiteModule: {
  BOOKING_REVIEWS: 'BOOKING_REVIEWS',
  HOUSEKEEPING: 'HOUSEKEEPING',
  MAINTENANCE: 'MAINTENANCE'
};

export type SuiteModule = (typeof SuiteModule)[keyof typeof SuiteModule]


export const EventStatus: {
  PENDING: 'PENDING',
  DELIVERED: 'DELIVERED',
  FAILED: 'FAILED',
  SKIPPED_MODULE_DISABLED: 'SKIPPED_MODULE_DISABLED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const GlobalRole: {
  MASTER: 'MASTER',
  GERENTE: 'GERENTE',
  GOVERNANTA: 'GOVERNANTA',
  CAMAREIRA: 'CAMAREIRA',
  LAVANDERIA: 'LAVANDERIA',
  MANUTENCAO: 'MANUTENCAO',
  ATENDIMENTO: 'ATENDIMENTO'
};

export type GlobalRole = (typeof GlobalRole)[keyof typeof GlobalRole]

}

export type SuiteModule = $Enums.SuiteModule

export const SuiteModule: typeof $Enums.SuiteModule

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type GlobalRole = $Enums.GlobalRole

export const GlobalRole: typeof $Enums.GlobalRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.tenantModule`: Exposes CRUD operations for the **TenantModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantModules
    * const tenantModules = await prisma.tenantModule.findMany()
    * ```
    */
  get tenantModule(): Prisma.TenantModuleDelegate<ExtArgs>;

  /**
   * `prisma.integrationEvent`: Exposes CRUD operations for the **IntegrationEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationEvents
    * const integrationEvents = await prisma.integrationEvent.findMany()
    * ```
    */
  get integrationEvent(): Prisma.IntegrationEventDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userModuleAccess`: Exposes CRUD operations for the **UserModuleAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModuleAccesses
    * const userModuleAccesses = await prisma.userModuleAccess.findMany()
    * ```
    */
  get userModuleAccess(): Prisma.UserModuleAccessDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    TenantModule: 'TenantModule',
    IntegrationEvent: 'IntegrationEvent',
    User: 'User',
    UserModuleAccess: 'UserModuleAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "tenantModule" | "integrationEvent" | "user" | "userModuleAccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      TenantModule: {
        payload: Prisma.$TenantModulePayload<ExtArgs>
        fields: Prisma.TenantModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          findFirst: {
            args: Prisma.TenantModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          findMany: {
            args: Prisma.TenantModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>[]
          }
          create: {
            args: Prisma.TenantModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          createMany: {
            args: Prisma.TenantModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>[]
          }
          delete: {
            args: Prisma.TenantModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          update: {
            args: Prisma.TenantModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          deleteMany: {
            args: Prisma.TenantModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantModulePayload>
          }
          aggregate: {
            args: Prisma.TenantModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantModule>
          }
          groupBy: {
            args: Prisma.TenantModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantModuleCountArgs<ExtArgs>
            result: $Utils.Optional<TenantModuleCountAggregateOutputType> | number
          }
        }
      }
      IntegrationEvent: {
        payload: Prisma.$IntegrationEventPayload<ExtArgs>
        fields: Prisma.IntegrationEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          findFirst: {
            args: Prisma.IntegrationEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          findMany: {
            args: Prisma.IntegrationEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>[]
          }
          create: {
            args: Prisma.IntegrationEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          createMany: {
            args: Prisma.IntegrationEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>[]
          }
          delete: {
            args: Prisma.IntegrationEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          update: {
            args: Prisma.IntegrationEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntegrationEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationEventPayload>
          }
          aggregate: {
            args: Prisma.IntegrationEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationEvent>
          }
          groupBy: {
            args: Prisma.IntegrationEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationEventCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationEventCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserModuleAccess: {
        payload: Prisma.$UserModuleAccessPayload<ExtArgs>
        fields: Prisma.UserModuleAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModuleAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModuleAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          findFirst: {
            args: Prisma.UserModuleAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModuleAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          findMany: {
            args: Prisma.UserModuleAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>[]
          }
          create: {
            args: Prisma.UserModuleAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          createMany: {
            args: Prisma.UserModuleAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModuleAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>[]
          }
          delete: {
            args: Prisma.UserModuleAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          update: {
            args: Prisma.UserModuleAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserModuleAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModuleAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserModuleAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleAccessPayload>
          }
          aggregate: {
            args: Prisma.UserModuleAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModuleAccess>
          }
          groupBy: {
            args: Prisma.UserModuleAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModuleAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModuleAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserModuleAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    modules: number
    events: number
    users: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | TenantCountOutputTypeCountModulesArgs
    events?: boolean | TenantCountOutputTypeCountEventsArgs
    users?: boolean | TenantCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantModuleWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationEventWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    moduleAccess: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moduleAccess?: boolean | UserCountOutputTypeCountModuleAccessArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modules?: boolean | Tenant$modulesArgs<ExtArgs>
    events?: boolean | Tenant$eventsArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | Tenant$modulesArgs<ExtArgs>
    events?: boolean | Tenant$eventsArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      modules: Prisma.$TenantModulePayload<ExtArgs>[]
      events: Prisma.$IntegrationEventPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modules<T extends Tenant$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Tenant$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.modules
   */
  export type Tenant$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    where?: TenantModuleWhereInput
    orderBy?: TenantModuleOrderByWithRelationInput | TenantModuleOrderByWithRelationInput[]
    cursor?: TenantModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantModuleScalarFieldEnum | TenantModuleScalarFieldEnum[]
  }

  /**
   * Tenant.events
   */
  export type Tenant$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    where?: IntegrationEventWhereInput
    orderBy?: IntegrationEventOrderByWithRelationInput | IntegrationEventOrderByWithRelationInput[]
    cursor?: IntegrationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationEventScalarFieldEnum | IntegrationEventScalarFieldEnum[]
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model TenantModule
   */

  export type AggregateTenantModule = {
    _count: TenantModuleCountAggregateOutputType | null
    _min: TenantModuleMinAggregateOutputType | null
    _max: TenantModuleMaxAggregateOutputType | null
  }

  export type TenantModuleMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    module: $Enums.SuiteModule | null
    enabled: boolean | null
    apiBaseUrl: string | null
    apiKeyHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantModuleMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    module: $Enums.SuiteModule | null
    enabled: boolean | null
    apiBaseUrl: string | null
    apiKeyHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantModuleCountAggregateOutputType = {
    id: number
    tenantId: number
    module: number
    enabled: number
    apiBaseUrl: number
    apiKeyHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantModuleMinAggregateInputType = {
    id?: true
    tenantId?: true
    module?: true
    enabled?: true
    apiBaseUrl?: true
    apiKeyHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantModuleMaxAggregateInputType = {
    id?: true
    tenantId?: true
    module?: true
    enabled?: true
    apiBaseUrl?: true
    apiKeyHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantModuleCountAggregateInputType = {
    id?: true
    tenantId?: true
    module?: true
    enabled?: true
    apiBaseUrl?: true
    apiKeyHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantModule to aggregate.
     */
    where?: TenantModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantModules to fetch.
     */
    orderBy?: TenantModuleOrderByWithRelationInput | TenantModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantModules
    **/
    _count?: true | TenantModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantModuleMaxAggregateInputType
  }

  export type GetTenantModuleAggregateType<T extends TenantModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantModule[P]>
      : GetScalarType<T[P], AggregateTenantModule[P]>
  }




  export type TenantModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantModuleWhereInput
    orderBy?: TenantModuleOrderByWithAggregationInput | TenantModuleOrderByWithAggregationInput[]
    by: TenantModuleScalarFieldEnum[] | TenantModuleScalarFieldEnum
    having?: TenantModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantModuleCountAggregateInputType | true
    _min?: TenantModuleMinAggregateInputType
    _max?: TenantModuleMaxAggregateInputType
  }

  export type TenantModuleGroupByOutputType = {
    id: string
    tenantId: string
    module: $Enums.SuiteModule
    enabled: boolean
    apiBaseUrl: string | null
    apiKeyHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantModuleCountAggregateOutputType | null
    _min: TenantModuleMinAggregateOutputType | null
    _max: TenantModuleMaxAggregateOutputType | null
  }

  type GetTenantModuleGroupByPayload<T extends TenantModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantModuleGroupByOutputType[P]>
            : GetScalarType<T[P], TenantModuleGroupByOutputType[P]>
        }
      >
    >


  export type TenantModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    module?: boolean
    enabled?: boolean
    apiBaseUrl?: boolean
    apiKeyHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantModule"]>

  export type TenantModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    module?: boolean
    enabled?: boolean
    apiBaseUrl?: boolean
    apiKeyHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantModule"]>

  export type TenantModuleSelectScalar = {
    id?: boolean
    tenantId?: boolean
    module?: boolean
    enabled?: boolean
    apiBaseUrl?: boolean
    apiKeyHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TenantModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantModule"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      module: $Enums.SuiteModule
      enabled: boolean
      apiBaseUrl: string | null
      apiKeyHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantModule"]>
    composites: {}
  }

  type TenantModuleGetPayload<S extends boolean | null | undefined | TenantModuleDefaultArgs> = $Result.GetResult<Prisma.$TenantModulePayload, S>

  type TenantModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantModuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantModuleCountAggregateInputType | true
    }

  export interface TenantModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantModule'], meta: { name: 'TenantModule' } }
    /**
     * Find zero or one TenantModule that matches the filter.
     * @param {TenantModuleFindUniqueArgs} args - Arguments to find a TenantModule
     * @example
     * // Get one TenantModule
     * const tenantModule = await prisma.tenantModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantModuleFindUniqueArgs>(args: SelectSubset<T, TenantModuleFindUniqueArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TenantModule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantModuleFindUniqueOrThrowArgs} args - Arguments to find a TenantModule
     * @example
     * // Get one TenantModule
     * const tenantModule = await prisma.tenantModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TenantModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleFindFirstArgs} args - Arguments to find a TenantModule
     * @example
     * // Get one TenantModule
     * const tenantModule = await prisma.tenantModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantModuleFindFirstArgs>(args?: SelectSubset<T, TenantModuleFindFirstArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TenantModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleFindFirstOrThrowArgs} args - Arguments to find a TenantModule
     * @example
     * // Get one TenantModule
     * const tenantModule = await prisma.tenantModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TenantModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantModules
     * const tenantModules = await prisma.tenantModule.findMany()
     * 
     * // Get first 10 TenantModules
     * const tenantModules = await prisma.tenantModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantModuleWithIdOnly = await prisma.tenantModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantModuleFindManyArgs>(args?: SelectSubset<T, TenantModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TenantModule.
     * @param {TenantModuleCreateArgs} args - Arguments to create a TenantModule.
     * @example
     * // Create one TenantModule
     * const TenantModule = await prisma.tenantModule.create({
     *   data: {
     *     // ... data to create a TenantModule
     *   }
     * })
     * 
     */
    create<T extends TenantModuleCreateArgs>(args: SelectSubset<T, TenantModuleCreateArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TenantModules.
     * @param {TenantModuleCreateManyArgs} args - Arguments to create many TenantModules.
     * @example
     * // Create many TenantModules
     * const tenantModule = await prisma.tenantModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantModuleCreateManyArgs>(args?: SelectSubset<T, TenantModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantModules and returns the data saved in the database.
     * @param {TenantModuleCreateManyAndReturnArgs} args - Arguments to create many TenantModules.
     * @example
     * // Create many TenantModules
     * const tenantModule = await prisma.tenantModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantModules and only return the `id`
     * const tenantModuleWithIdOnly = await prisma.tenantModule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TenantModule.
     * @param {TenantModuleDeleteArgs} args - Arguments to delete one TenantModule.
     * @example
     * // Delete one TenantModule
     * const TenantModule = await prisma.tenantModule.delete({
     *   where: {
     *     // ... filter to delete one TenantModule
     *   }
     * })
     * 
     */
    delete<T extends TenantModuleDeleteArgs>(args: SelectSubset<T, TenantModuleDeleteArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TenantModule.
     * @param {TenantModuleUpdateArgs} args - Arguments to update one TenantModule.
     * @example
     * // Update one TenantModule
     * const tenantModule = await prisma.tenantModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantModuleUpdateArgs>(args: SelectSubset<T, TenantModuleUpdateArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TenantModules.
     * @param {TenantModuleDeleteManyArgs} args - Arguments to filter TenantModules to delete.
     * @example
     * // Delete a few TenantModules
     * const { count } = await prisma.tenantModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantModuleDeleteManyArgs>(args?: SelectSubset<T, TenantModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantModules
     * const tenantModule = await prisma.tenantModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantModuleUpdateManyArgs>(args: SelectSubset<T, TenantModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TenantModule.
     * @param {TenantModuleUpsertArgs} args - Arguments to update or create a TenantModule.
     * @example
     * // Update or create a TenantModule
     * const tenantModule = await prisma.tenantModule.upsert({
     *   create: {
     *     // ... data to create a TenantModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantModule we want to update
     *   }
     * })
     */
    upsert<T extends TenantModuleUpsertArgs>(args: SelectSubset<T, TenantModuleUpsertArgs<ExtArgs>>): Prisma__TenantModuleClient<$Result.GetResult<Prisma.$TenantModulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TenantModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleCountArgs} args - Arguments to filter TenantModules to count.
     * @example
     * // Count the number of TenantModules
     * const count = await prisma.tenantModule.count({
     *   where: {
     *     // ... the filter for the TenantModules we want to count
     *   }
     * })
    **/
    count<T extends TenantModuleCountArgs>(
      args?: Subset<T, TenantModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantModuleAggregateArgs>(args: Subset<T, TenantModuleAggregateArgs>): Prisma.PrismaPromise<GetTenantModuleAggregateType<T>>

    /**
     * Group by TenantModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantModuleGroupByArgs['orderBy'] }
        : { orderBy?: TenantModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantModule model
   */
  readonly fields: TenantModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantModule model
   */ 
  interface TenantModuleFieldRefs {
    readonly id: FieldRef<"TenantModule", 'String'>
    readonly tenantId: FieldRef<"TenantModule", 'String'>
    readonly module: FieldRef<"TenantModule", 'SuiteModule'>
    readonly enabled: FieldRef<"TenantModule", 'Boolean'>
    readonly apiBaseUrl: FieldRef<"TenantModule", 'String'>
    readonly apiKeyHash: FieldRef<"TenantModule", 'String'>
    readonly createdAt: FieldRef<"TenantModule", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantModule findUnique
   */
  export type TenantModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter, which TenantModule to fetch.
     */
    where: TenantModuleWhereUniqueInput
  }

  /**
   * TenantModule findUniqueOrThrow
   */
  export type TenantModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter, which TenantModule to fetch.
     */
    where: TenantModuleWhereUniqueInput
  }

  /**
   * TenantModule findFirst
   */
  export type TenantModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter, which TenantModule to fetch.
     */
    where?: TenantModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantModules to fetch.
     */
    orderBy?: TenantModuleOrderByWithRelationInput | TenantModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantModules.
     */
    cursor?: TenantModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantModules.
     */
    distinct?: TenantModuleScalarFieldEnum | TenantModuleScalarFieldEnum[]
  }

  /**
   * TenantModule findFirstOrThrow
   */
  export type TenantModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter, which TenantModule to fetch.
     */
    where?: TenantModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantModules to fetch.
     */
    orderBy?: TenantModuleOrderByWithRelationInput | TenantModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantModules.
     */
    cursor?: TenantModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantModules.
     */
    distinct?: TenantModuleScalarFieldEnum | TenantModuleScalarFieldEnum[]
  }

  /**
   * TenantModule findMany
   */
  export type TenantModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter, which TenantModules to fetch.
     */
    where?: TenantModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantModules to fetch.
     */
    orderBy?: TenantModuleOrderByWithRelationInput | TenantModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantModules.
     */
    cursor?: TenantModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantModules.
     */
    skip?: number
    distinct?: TenantModuleScalarFieldEnum | TenantModuleScalarFieldEnum[]
  }

  /**
   * TenantModule create
   */
  export type TenantModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantModule.
     */
    data: XOR<TenantModuleCreateInput, TenantModuleUncheckedCreateInput>
  }

  /**
   * TenantModule createMany
   */
  export type TenantModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantModules.
     */
    data: TenantModuleCreateManyInput | TenantModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantModule createManyAndReturn
   */
  export type TenantModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TenantModules.
     */
    data: TenantModuleCreateManyInput | TenantModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantModule update
   */
  export type TenantModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantModule.
     */
    data: XOR<TenantModuleUpdateInput, TenantModuleUncheckedUpdateInput>
    /**
     * Choose, which TenantModule to update.
     */
    where: TenantModuleWhereUniqueInput
  }

  /**
   * TenantModule updateMany
   */
  export type TenantModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantModules.
     */
    data: XOR<TenantModuleUpdateManyMutationInput, TenantModuleUncheckedUpdateManyInput>
    /**
     * Filter which TenantModules to update
     */
    where?: TenantModuleWhereInput
  }

  /**
   * TenantModule upsert
   */
  export type TenantModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantModule to update in case it exists.
     */
    where: TenantModuleWhereUniqueInput
    /**
     * In case the TenantModule found by the `where` argument doesn't exist, create a new TenantModule with this data.
     */
    create: XOR<TenantModuleCreateInput, TenantModuleUncheckedCreateInput>
    /**
     * In case the TenantModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantModuleUpdateInput, TenantModuleUncheckedUpdateInput>
  }

  /**
   * TenantModule delete
   */
  export type TenantModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
    /**
     * Filter which TenantModule to delete.
     */
    where: TenantModuleWhereUniqueInput
  }

  /**
   * TenantModule deleteMany
   */
  export type TenantModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantModules to delete
     */
    where?: TenantModuleWhereInput
  }

  /**
   * TenantModule without action
   */
  export type TenantModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantModule
     */
    select?: TenantModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantModuleInclude<ExtArgs> | null
  }


  /**
   * Model IntegrationEvent
   */

  export type AggregateIntegrationEvent = {
    _count: IntegrationEventCountAggregateOutputType | null
    _avg: IntegrationEventAvgAggregateOutputType | null
    _sum: IntegrationEventSumAggregateOutputType | null
    _min: IntegrationEventMinAggregateOutputType | null
    _max: IntegrationEventMaxAggregateOutputType | null
  }

  export type IntegrationEventAvgAggregateOutputType = {
    attempts: number | null
  }

  export type IntegrationEventSumAggregateOutputType = {
    attempts: number | null
  }

  export type IntegrationEventMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    sourceModule: $Enums.SuiteModule | null
    targetModule: $Enums.SuiteModule | null
    type: string | null
    status: $Enums.EventStatus | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type IntegrationEventMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    sourceModule: $Enums.SuiteModule | null
    targetModule: $Enums.SuiteModule | null
    type: string | null
    status: $Enums.EventStatus | null
    attempts: number | null
    lastError: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type IntegrationEventCountAggregateOutputType = {
    id: number
    tenantId: number
    sourceModule: number
    targetModule: number
    type: number
    payload: number
    status: number
    attempts: number
    lastError: number
    createdAt: number
    processedAt: number
    _all: number
  }


  export type IntegrationEventAvgAggregateInputType = {
    attempts?: true
  }

  export type IntegrationEventSumAggregateInputType = {
    attempts?: true
  }

  export type IntegrationEventMinAggregateInputType = {
    id?: true
    tenantId?: true
    sourceModule?: true
    targetModule?: true
    type?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type IntegrationEventMaxAggregateInputType = {
    id?: true
    tenantId?: true
    sourceModule?: true
    targetModule?: true
    type?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
  }

  export type IntegrationEventCountAggregateInputType = {
    id?: true
    tenantId?: true
    sourceModule?: true
    targetModule?: true
    type?: true
    payload?: true
    status?: true
    attempts?: true
    lastError?: true
    createdAt?: true
    processedAt?: true
    _all?: true
  }

  export type IntegrationEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationEvent to aggregate.
     */
    where?: IntegrationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationEvents to fetch.
     */
    orderBy?: IntegrationEventOrderByWithRelationInput | IntegrationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationEvents
    **/
    _count?: true | IntegrationEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntegrationEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntegrationEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationEventMaxAggregateInputType
  }

  export type GetIntegrationEventAggregateType<T extends IntegrationEventAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationEvent[P]>
      : GetScalarType<T[P], AggregateIntegrationEvent[P]>
  }




  export type IntegrationEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationEventWhereInput
    orderBy?: IntegrationEventOrderByWithAggregationInput | IntegrationEventOrderByWithAggregationInput[]
    by: IntegrationEventScalarFieldEnum[] | IntegrationEventScalarFieldEnum
    having?: IntegrationEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationEventCountAggregateInputType | true
    _avg?: IntegrationEventAvgAggregateInputType
    _sum?: IntegrationEventSumAggregateInputType
    _min?: IntegrationEventMinAggregateInputType
    _max?: IntegrationEventMaxAggregateInputType
  }

  export type IntegrationEventGroupByOutputType = {
    id: string
    tenantId: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonValue
    status: $Enums.EventStatus
    attempts: number
    lastError: string | null
    createdAt: Date
    processedAt: Date | null
    _count: IntegrationEventCountAggregateOutputType | null
    _avg: IntegrationEventAvgAggregateOutputType | null
    _sum: IntegrationEventSumAggregateOutputType | null
    _min: IntegrationEventMinAggregateOutputType | null
    _max: IntegrationEventMaxAggregateOutputType | null
  }

  type GetIntegrationEventGroupByPayload<T extends IntegrationEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationEventGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationEventGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    sourceModule?: boolean
    targetModule?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationEvent"]>

  export type IntegrationEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    sourceModule?: boolean
    targetModule?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationEvent"]>

  export type IntegrationEventSelectScalar = {
    id?: boolean
    tenantId?: boolean
    sourceModule?: boolean
    targetModule?: boolean
    type?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }

  export type IntegrationEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type IntegrationEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $IntegrationEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationEvent"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      sourceModule: $Enums.SuiteModule
      targetModule: $Enums.SuiteModule
      type: string
      payload: Prisma.JsonValue
      status: $Enums.EventStatus
      attempts: number
      lastError: string | null
      createdAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["integrationEvent"]>
    composites: {}
  }

  type IntegrationEventGetPayload<S extends boolean | null | undefined | IntegrationEventDefaultArgs> = $Result.GetResult<Prisma.$IntegrationEventPayload, S>

  type IntegrationEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IntegrationEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IntegrationEventCountAggregateInputType | true
    }

  export interface IntegrationEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationEvent'], meta: { name: 'IntegrationEvent' } }
    /**
     * Find zero or one IntegrationEvent that matches the filter.
     * @param {IntegrationEventFindUniqueArgs} args - Arguments to find a IntegrationEvent
     * @example
     * // Get one IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationEventFindUniqueArgs>(args: SelectSubset<T, IntegrationEventFindUniqueArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IntegrationEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IntegrationEventFindUniqueOrThrowArgs} args - Arguments to find a IntegrationEvent
     * @example
     * // Get one IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationEventFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IntegrationEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventFindFirstArgs} args - Arguments to find a IntegrationEvent
     * @example
     * // Get one IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationEventFindFirstArgs>(args?: SelectSubset<T, IntegrationEventFindFirstArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IntegrationEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventFindFirstOrThrowArgs} args - Arguments to find a IntegrationEvent
     * @example
     * // Get one IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationEventFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IntegrationEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationEvents
     * const integrationEvents = await prisma.integrationEvent.findMany()
     * 
     * // Get first 10 IntegrationEvents
     * const integrationEvents = await prisma.integrationEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationEventWithIdOnly = await prisma.integrationEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationEventFindManyArgs>(args?: SelectSubset<T, IntegrationEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IntegrationEvent.
     * @param {IntegrationEventCreateArgs} args - Arguments to create a IntegrationEvent.
     * @example
     * // Create one IntegrationEvent
     * const IntegrationEvent = await prisma.integrationEvent.create({
     *   data: {
     *     // ... data to create a IntegrationEvent
     *   }
     * })
     * 
     */
    create<T extends IntegrationEventCreateArgs>(args: SelectSubset<T, IntegrationEventCreateArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IntegrationEvents.
     * @param {IntegrationEventCreateManyArgs} args - Arguments to create many IntegrationEvents.
     * @example
     * // Create many IntegrationEvents
     * const integrationEvent = await prisma.integrationEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationEventCreateManyArgs>(args?: SelectSubset<T, IntegrationEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationEvents and returns the data saved in the database.
     * @param {IntegrationEventCreateManyAndReturnArgs} args - Arguments to create many IntegrationEvents.
     * @example
     * // Create many IntegrationEvents
     * const integrationEvent = await prisma.integrationEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationEvents and only return the `id`
     * const integrationEventWithIdOnly = await prisma.integrationEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationEventCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IntegrationEvent.
     * @param {IntegrationEventDeleteArgs} args - Arguments to delete one IntegrationEvent.
     * @example
     * // Delete one IntegrationEvent
     * const IntegrationEvent = await prisma.integrationEvent.delete({
     *   where: {
     *     // ... filter to delete one IntegrationEvent
     *   }
     * })
     * 
     */
    delete<T extends IntegrationEventDeleteArgs>(args: SelectSubset<T, IntegrationEventDeleteArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IntegrationEvent.
     * @param {IntegrationEventUpdateArgs} args - Arguments to update one IntegrationEvent.
     * @example
     * // Update one IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationEventUpdateArgs>(args: SelectSubset<T, IntegrationEventUpdateArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IntegrationEvents.
     * @param {IntegrationEventDeleteManyArgs} args - Arguments to filter IntegrationEvents to delete.
     * @example
     * // Delete a few IntegrationEvents
     * const { count } = await prisma.integrationEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationEventDeleteManyArgs>(args?: SelectSubset<T, IntegrationEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationEvents
     * const integrationEvent = await prisma.integrationEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationEventUpdateManyArgs>(args: SelectSubset<T, IntegrationEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IntegrationEvent.
     * @param {IntegrationEventUpsertArgs} args - Arguments to update or create a IntegrationEvent.
     * @example
     * // Update or create a IntegrationEvent
     * const integrationEvent = await prisma.integrationEvent.upsert({
     *   create: {
     *     // ... data to create a IntegrationEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationEvent we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationEventUpsertArgs>(args: SelectSubset<T, IntegrationEventUpsertArgs<ExtArgs>>): Prisma__IntegrationEventClient<$Result.GetResult<Prisma.$IntegrationEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IntegrationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventCountArgs} args - Arguments to filter IntegrationEvents to count.
     * @example
     * // Count the number of IntegrationEvents
     * const count = await prisma.integrationEvent.count({
     *   where: {
     *     // ... the filter for the IntegrationEvents we want to count
     *   }
     * })
    **/
    count<T extends IntegrationEventCountArgs>(
      args?: Subset<T, IntegrationEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationEventAggregateArgs>(args: Subset<T, IntegrationEventAggregateArgs>): Prisma.PrismaPromise<GetIntegrationEventAggregateType<T>>

    /**
     * Group by IntegrationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationEventGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationEvent model
   */
  readonly fields: IntegrationEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntegrationEvent model
   */ 
  interface IntegrationEventFieldRefs {
    readonly id: FieldRef<"IntegrationEvent", 'String'>
    readonly tenantId: FieldRef<"IntegrationEvent", 'String'>
    readonly sourceModule: FieldRef<"IntegrationEvent", 'SuiteModule'>
    readonly targetModule: FieldRef<"IntegrationEvent", 'SuiteModule'>
    readonly type: FieldRef<"IntegrationEvent", 'String'>
    readonly payload: FieldRef<"IntegrationEvent", 'Json'>
    readonly status: FieldRef<"IntegrationEvent", 'EventStatus'>
    readonly attempts: FieldRef<"IntegrationEvent", 'Int'>
    readonly lastError: FieldRef<"IntegrationEvent", 'String'>
    readonly createdAt: FieldRef<"IntegrationEvent", 'DateTime'>
    readonly processedAt: FieldRef<"IntegrationEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationEvent findUnique
   */
  export type IntegrationEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationEvent to fetch.
     */
    where: IntegrationEventWhereUniqueInput
  }

  /**
   * IntegrationEvent findUniqueOrThrow
   */
  export type IntegrationEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationEvent to fetch.
     */
    where: IntegrationEventWhereUniqueInput
  }

  /**
   * IntegrationEvent findFirst
   */
  export type IntegrationEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationEvent to fetch.
     */
    where?: IntegrationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationEvents to fetch.
     */
    orderBy?: IntegrationEventOrderByWithRelationInput | IntegrationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationEvents.
     */
    cursor?: IntegrationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationEvents.
     */
    distinct?: IntegrationEventScalarFieldEnum | IntegrationEventScalarFieldEnum[]
  }

  /**
   * IntegrationEvent findFirstOrThrow
   */
  export type IntegrationEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationEvent to fetch.
     */
    where?: IntegrationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationEvents to fetch.
     */
    orderBy?: IntegrationEventOrderByWithRelationInput | IntegrationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationEvents.
     */
    cursor?: IntegrationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationEvents.
     */
    distinct?: IntegrationEventScalarFieldEnum | IntegrationEventScalarFieldEnum[]
  }

  /**
   * IntegrationEvent findMany
   */
  export type IntegrationEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationEvents to fetch.
     */
    where?: IntegrationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationEvents to fetch.
     */
    orderBy?: IntegrationEventOrderByWithRelationInput | IntegrationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationEvents.
     */
    cursor?: IntegrationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationEvents.
     */
    skip?: number
    distinct?: IntegrationEventScalarFieldEnum | IntegrationEventScalarFieldEnum[]
  }

  /**
   * IntegrationEvent create
   */
  export type IntegrationEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegrationEvent.
     */
    data: XOR<IntegrationEventCreateInput, IntegrationEventUncheckedCreateInput>
  }

  /**
   * IntegrationEvent createMany
   */
  export type IntegrationEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationEvents.
     */
    data: IntegrationEventCreateManyInput | IntegrationEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationEvent createManyAndReturn
   */
  export type IntegrationEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IntegrationEvents.
     */
    data: IntegrationEventCreateManyInput | IntegrationEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegrationEvent update
   */
  export type IntegrationEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegrationEvent.
     */
    data: XOR<IntegrationEventUpdateInput, IntegrationEventUncheckedUpdateInput>
    /**
     * Choose, which IntegrationEvent to update.
     */
    where: IntegrationEventWhereUniqueInput
  }

  /**
   * IntegrationEvent updateMany
   */
  export type IntegrationEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationEvents.
     */
    data: XOR<IntegrationEventUpdateManyMutationInput, IntegrationEventUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationEvents to update
     */
    where?: IntegrationEventWhereInput
  }

  /**
   * IntegrationEvent upsert
   */
  export type IntegrationEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegrationEvent to update in case it exists.
     */
    where: IntegrationEventWhereUniqueInput
    /**
     * In case the IntegrationEvent found by the `where` argument doesn't exist, create a new IntegrationEvent with this data.
     */
    create: XOR<IntegrationEventCreateInput, IntegrationEventUncheckedCreateInput>
    /**
     * In case the IntegrationEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationEventUpdateInput, IntegrationEventUncheckedUpdateInput>
  }

  /**
   * IntegrationEvent delete
   */
  export type IntegrationEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
    /**
     * Filter which IntegrationEvent to delete.
     */
    where: IntegrationEventWhereUniqueInput
  }

  /**
   * IntegrationEvent deleteMany
   */
  export type IntegrationEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationEvents to delete
     */
    where?: IntegrationEventWhereInput
  }

  /**
   * IntegrationEvent without action
   */
  export type IntegrationEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationEvent
     */
    select?: IntegrationEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationEventInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    nome: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.GlobalRole | null
    telegramChatId: string | null
    whatsapp: string | null
    foto: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    nome: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.GlobalRole | null
    telegramChatId: string | null
    whatsapp: string | null
    foto: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    nome: number
    email: number
    passwordHash: number
    role: number
    telegramChatId: number
    whatsapp: number
    foto: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    passwordHash?: true
    role?: true
    telegramChatId?: true
    whatsapp?: true
    foto?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    passwordHash?: true
    role?: true
    telegramChatId?: true
    whatsapp?: true
    foto?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    passwordHash?: true
    role?: true
    telegramChatId?: true
    whatsapp?: true
    foto?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tenantId: string
    nome: string
    email: string
    passwordHash: string | null
    role: $Enums.GlobalRole
    telegramChatId: string | null
    whatsapp: string | null
    foto: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    nome?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    telegramChatId?: boolean
    whatsapp?: boolean
    foto?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    moduleAccess?: boolean | User$moduleAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    nome?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    telegramChatId?: boolean
    whatsapp?: boolean
    foto?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    nome?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    telegramChatId?: boolean
    whatsapp?: boolean
    foto?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    moduleAccess?: boolean | User$moduleAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      moduleAccess: Prisma.$UserModuleAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      nome: string
      email: string
      passwordHash: string | null
      role: $Enums.GlobalRole
      telegramChatId: string | null
      whatsapp: string | null
      foto: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    moduleAccess<T extends User$moduleAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'GlobalRole'>
    readonly telegramChatId: FieldRef<"User", 'String'>
    readonly whatsapp: FieldRef<"User", 'String'>
    readonly foto: FieldRef<"User", 'String'>
    readonly ativo: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.moduleAccess
   */
  export type User$moduleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    where?: UserModuleAccessWhereInput
    orderBy?: UserModuleAccessOrderByWithRelationInput | UserModuleAccessOrderByWithRelationInput[]
    cursor?: UserModuleAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleAccessScalarFieldEnum | UserModuleAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserModuleAccess
   */

  export type AggregateUserModuleAccess = {
    _count: UserModuleAccessCountAggregateOutputType | null
    _min: UserModuleAccessMinAggregateOutputType | null
    _max: UserModuleAccessMaxAggregateOutputType | null
  }

  export type UserModuleAccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    module: $Enums.SuiteModule | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModuleAccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    module: $Enums.SuiteModule | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModuleAccessCountAggregateOutputType = {
    id: number
    userId: number
    module: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserModuleAccessMinAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModuleAccessMaxAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModuleAccessCountAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserModuleAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleAccess to aggregate.
     */
    where?: UserModuleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleAccesses to fetch.
     */
    orderBy?: UserModuleAccessOrderByWithRelationInput | UserModuleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModuleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModuleAccesses
    **/
    _count?: true | UserModuleAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModuleAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModuleAccessMaxAggregateInputType
  }

  export type GetUserModuleAccessAggregateType<T extends UserModuleAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModuleAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModuleAccess[P]>
      : GetScalarType<T[P], AggregateUserModuleAccess[P]>
  }




  export type UserModuleAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleAccessWhereInput
    orderBy?: UserModuleAccessOrderByWithAggregationInput | UserModuleAccessOrderByWithAggregationInput[]
    by: UserModuleAccessScalarFieldEnum[] | UserModuleAccessScalarFieldEnum
    having?: UserModuleAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModuleAccessCountAggregateInputType | true
    _min?: UserModuleAccessMinAggregateInputType
    _max?: UserModuleAccessMaxAggregateInputType
  }

  export type UserModuleAccessGroupByOutputType = {
    id: string
    userId: string
    module: $Enums.SuiteModule
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserModuleAccessCountAggregateOutputType | null
    _min: UserModuleAccessMinAggregateOutputType | null
    _max: UserModuleAccessMaxAggregateOutputType | null
  }

  type GetUserModuleAccessGroupByPayload<T extends UserModuleAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModuleAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModuleAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModuleAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserModuleAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserModuleAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    module?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleAccess"]>

  export type UserModuleAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    module?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleAccess"]>

  export type UserModuleAccessSelectScalar = {
    id?: boolean
    userId?: boolean
    module?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserModuleAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserModuleAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserModuleAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModuleAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      module: $Enums.SuiteModule
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userModuleAccess"]>
    composites: {}
  }

  type UserModuleAccessGetPayload<S extends boolean | null | undefined | UserModuleAccessDefaultArgs> = $Result.GetResult<Prisma.$UserModuleAccessPayload, S>

  type UserModuleAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserModuleAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserModuleAccessCountAggregateInputType | true
    }

  export interface UserModuleAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModuleAccess'], meta: { name: 'UserModuleAccess' } }
    /**
     * Find zero or one UserModuleAccess that matches the filter.
     * @param {UserModuleAccessFindUniqueArgs} args - Arguments to find a UserModuleAccess
     * @example
     * // Get one UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModuleAccessFindUniqueArgs>(args: SelectSubset<T, UserModuleAccessFindUniqueArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserModuleAccess that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserModuleAccessFindUniqueOrThrowArgs} args - Arguments to find a UserModuleAccess
     * @example
     * // Get one UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModuleAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModuleAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserModuleAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessFindFirstArgs} args - Arguments to find a UserModuleAccess
     * @example
     * // Get one UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModuleAccessFindFirstArgs>(args?: SelectSubset<T, UserModuleAccessFindFirstArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserModuleAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessFindFirstOrThrowArgs} args - Arguments to find a UserModuleAccess
     * @example
     * // Get one UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModuleAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModuleAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserModuleAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModuleAccesses
     * const userModuleAccesses = await prisma.userModuleAccess.findMany()
     * 
     * // Get first 10 UserModuleAccesses
     * const userModuleAccesses = await prisma.userModuleAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModuleAccessWithIdOnly = await prisma.userModuleAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModuleAccessFindManyArgs>(args?: SelectSubset<T, UserModuleAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserModuleAccess.
     * @param {UserModuleAccessCreateArgs} args - Arguments to create a UserModuleAccess.
     * @example
     * // Create one UserModuleAccess
     * const UserModuleAccess = await prisma.userModuleAccess.create({
     *   data: {
     *     // ... data to create a UserModuleAccess
     *   }
     * })
     * 
     */
    create<T extends UserModuleAccessCreateArgs>(args: SelectSubset<T, UserModuleAccessCreateArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserModuleAccesses.
     * @param {UserModuleAccessCreateManyArgs} args - Arguments to create many UserModuleAccesses.
     * @example
     * // Create many UserModuleAccesses
     * const userModuleAccess = await prisma.userModuleAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModuleAccessCreateManyArgs>(args?: SelectSubset<T, UserModuleAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModuleAccesses and returns the data saved in the database.
     * @param {UserModuleAccessCreateManyAndReturnArgs} args - Arguments to create many UserModuleAccesses.
     * @example
     * // Create many UserModuleAccesses
     * const userModuleAccess = await prisma.userModuleAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModuleAccesses and only return the `id`
     * const userModuleAccessWithIdOnly = await prisma.userModuleAccess.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModuleAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModuleAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserModuleAccess.
     * @param {UserModuleAccessDeleteArgs} args - Arguments to delete one UserModuleAccess.
     * @example
     * // Delete one UserModuleAccess
     * const UserModuleAccess = await prisma.userModuleAccess.delete({
     *   where: {
     *     // ... filter to delete one UserModuleAccess
     *   }
     * })
     * 
     */
    delete<T extends UserModuleAccessDeleteArgs>(args: SelectSubset<T, UserModuleAccessDeleteArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserModuleAccess.
     * @param {UserModuleAccessUpdateArgs} args - Arguments to update one UserModuleAccess.
     * @example
     * // Update one UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModuleAccessUpdateArgs>(args: SelectSubset<T, UserModuleAccessUpdateArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserModuleAccesses.
     * @param {UserModuleAccessDeleteManyArgs} args - Arguments to filter UserModuleAccesses to delete.
     * @example
     * // Delete a few UserModuleAccesses
     * const { count } = await prisma.userModuleAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModuleAccessDeleteManyArgs>(args?: SelectSubset<T, UserModuleAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModuleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModuleAccesses
     * const userModuleAccess = await prisma.userModuleAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModuleAccessUpdateManyArgs>(args: SelectSubset<T, UserModuleAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModuleAccess.
     * @param {UserModuleAccessUpsertArgs} args - Arguments to update or create a UserModuleAccess.
     * @example
     * // Update or create a UserModuleAccess
     * const userModuleAccess = await prisma.userModuleAccess.upsert({
     *   create: {
     *     // ... data to create a UserModuleAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModuleAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserModuleAccessUpsertArgs>(args: SelectSubset<T, UserModuleAccessUpsertArgs<ExtArgs>>): Prisma__UserModuleAccessClient<$Result.GetResult<Prisma.$UserModuleAccessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserModuleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessCountArgs} args - Arguments to filter UserModuleAccesses to count.
     * @example
     * // Count the number of UserModuleAccesses
     * const count = await prisma.userModuleAccess.count({
     *   where: {
     *     // ... the filter for the UserModuleAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserModuleAccessCountArgs>(
      args?: Subset<T, UserModuleAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModuleAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModuleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserModuleAccessAggregateArgs>(args: Subset<T, UserModuleAccessAggregateArgs>): Prisma.PrismaPromise<GetUserModuleAccessAggregateType<T>>

    /**
     * Group by UserModuleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserModuleAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModuleAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserModuleAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserModuleAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModuleAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModuleAccess model
   */
  readonly fields: UserModuleAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModuleAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModuleAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserModuleAccess model
   */ 
  interface UserModuleAccessFieldRefs {
    readonly id: FieldRef<"UserModuleAccess", 'String'>
    readonly userId: FieldRef<"UserModuleAccess", 'String'>
    readonly module: FieldRef<"UserModuleAccess", 'SuiteModule'>
    readonly enabled: FieldRef<"UserModuleAccess", 'Boolean'>
    readonly createdAt: FieldRef<"UserModuleAccess", 'DateTime'>
    readonly updatedAt: FieldRef<"UserModuleAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModuleAccess findUnique
   */
  export type UserModuleAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleAccess to fetch.
     */
    where: UserModuleAccessWhereUniqueInput
  }

  /**
   * UserModuleAccess findUniqueOrThrow
   */
  export type UserModuleAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleAccess to fetch.
     */
    where: UserModuleAccessWhereUniqueInput
  }

  /**
   * UserModuleAccess findFirst
   */
  export type UserModuleAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleAccess to fetch.
     */
    where?: UserModuleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleAccesses to fetch.
     */
    orderBy?: UserModuleAccessOrderByWithRelationInput | UserModuleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleAccesses.
     */
    cursor?: UserModuleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleAccesses.
     */
    distinct?: UserModuleAccessScalarFieldEnum | UserModuleAccessScalarFieldEnum[]
  }

  /**
   * UserModuleAccess findFirstOrThrow
   */
  export type UserModuleAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleAccess to fetch.
     */
    where?: UserModuleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleAccesses to fetch.
     */
    orderBy?: UserModuleAccessOrderByWithRelationInput | UserModuleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleAccesses.
     */
    cursor?: UserModuleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleAccesses.
     */
    distinct?: UserModuleAccessScalarFieldEnum | UserModuleAccessScalarFieldEnum[]
  }

  /**
   * UserModuleAccess findMany
   */
  export type UserModuleAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleAccesses to fetch.
     */
    where?: UserModuleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleAccesses to fetch.
     */
    orderBy?: UserModuleAccessOrderByWithRelationInput | UserModuleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModuleAccesses.
     */
    cursor?: UserModuleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleAccesses.
     */
    skip?: number
    distinct?: UserModuleAccessScalarFieldEnum | UserModuleAccessScalarFieldEnum[]
  }

  /**
   * UserModuleAccess create
   */
  export type UserModuleAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModuleAccess.
     */
    data: XOR<UserModuleAccessCreateInput, UserModuleAccessUncheckedCreateInput>
  }

  /**
   * UserModuleAccess createMany
   */
  export type UserModuleAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModuleAccesses.
     */
    data: UserModuleAccessCreateManyInput | UserModuleAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModuleAccess createManyAndReturn
   */
  export type UserModuleAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserModuleAccesses.
     */
    data: UserModuleAccessCreateManyInput | UserModuleAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModuleAccess update
   */
  export type UserModuleAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModuleAccess.
     */
    data: XOR<UserModuleAccessUpdateInput, UserModuleAccessUncheckedUpdateInput>
    /**
     * Choose, which UserModuleAccess to update.
     */
    where: UserModuleAccessWhereUniqueInput
  }

  /**
   * UserModuleAccess updateMany
   */
  export type UserModuleAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModuleAccesses.
     */
    data: XOR<UserModuleAccessUpdateManyMutationInput, UserModuleAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserModuleAccesses to update
     */
    where?: UserModuleAccessWhereInput
  }

  /**
   * UserModuleAccess upsert
   */
  export type UserModuleAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModuleAccess to update in case it exists.
     */
    where: UserModuleAccessWhereUniqueInput
    /**
     * In case the UserModuleAccess found by the `where` argument doesn't exist, create a new UserModuleAccess with this data.
     */
    create: XOR<UserModuleAccessCreateInput, UserModuleAccessUncheckedCreateInput>
    /**
     * In case the UserModuleAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModuleAccessUpdateInput, UserModuleAccessUncheckedUpdateInput>
  }

  /**
   * UserModuleAccess delete
   */
  export type UserModuleAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
    /**
     * Filter which UserModuleAccess to delete.
     */
    where: UserModuleAccessWhereUniqueInput
  }

  /**
   * UserModuleAccess deleteMany
   */
  export type UserModuleAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleAccesses to delete
     */
    where?: UserModuleAccessWhereInput
  }

  /**
   * UserModuleAccess without action
   */
  export type UserModuleAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleAccess
     */
    select?: UserModuleAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleAccessInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const TenantModuleScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    module: 'module',
    enabled: 'enabled',
    apiBaseUrl: 'apiBaseUrl',
    apiKeyHash: 'apiKeyHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantModuleScalarFieldEnum = (typeof TenantModuleScalarFieldEnum)[keyof typeof TenantModuleScalarFieldEnum]


  export const IntegrationEventScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    sourceModule: 'sourceModule',
    targetModule: 'targetModule',
    type: 'type',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    lastError: 'lastError',
    createdAt: 'createdAt',
    processedAt: 'processedAt'
  };

  export type IntegrationEventScalarFieldEnum = (typeof IntegrationEventScalarFieldEnum)[keyof typeof IntegrationEventScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    nome: 'nome',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    telegramChatId: 'telegramChatId',
    whatsapp: 'whatsapp',
    foto: 'foto',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserModuleAccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    module: 'module',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserModuleAccessScalarFieldEnum = (typeof UserModuleAccessScalarFieldEnum)[keyof typeof UserModuleAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SuiteModule'
   */
  export type EnumSuiteModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuiteModule'>
    


  /**
   * Reference to a field of type 'SuiteModule[]'
   */
  export type ListEnumSuiteModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuiteModule[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GlobalRole'
   */
  export type EnumGlobalRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalRole'>
    


  /**
   * Reference to a field of type 'GlobalRole[]'
   */
  export type ListEnumGlobalRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    modules?: TenantModuleListRelationFilter
    events?: IntegrationEventListRelationFilter
    users?: UserListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modules?: TenantModuleOrderByRelationAggregateInput
    events?: IntegrationEventOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    modules?: TenantModuleListRelationFilter
    events?: IntegrationEventListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type TenantModuleWhereInput = {
    AND?: TenantModuleWhereInput | TenantModuleWhereInput[]
    OR?: TenantModuleWhereInput[]
    NOT?: TenantModuleWhereInput | TenantModuleWhereInput[]
    id?: StringFilter<"TenantModule"> | string
    tenantId?: StringFilter<"TenantModule"> | string
    module?: EnumSuiteModuleFilter<"TenantModule"> | $Enums.SuiteModule
    enabled?: BoolFilter<"TenantModule"> | boolean
    apiBaseUrl?: StringNullableFilter<"TenantModule"> | string | null
    apiKeyHash?: StringNullableFilter<"TenantModule"> | string | null
    createdAt?: DateTimeFilter<"TenantModule"> | Date | string
    updatedAt?: DateTimeFilter<"TenantModule"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type TenantModuleOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    apiBaseUrl?: SortOrderInput | SortOrder
    apiKeyHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TenantModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_module?: TenantModuleTenantIdModuleCompoundUniqueInput
    AND?: TenantModuleWhereInput | TenantModuleWhereInput[]
    OR?: TenantModuleWhereInput[]
    NOT?: TenantModuleWhereInput | TenantModuleWhereInput[]
    tenantId?: StringFilter<"TenantModule"> | string
    module?: EnumSuiteModuleFilter<"TenantModule"> | $Enums.SuiteModule
    enabled?: BoolFilter<"TenantModule"> | boolean
    apiBaseUrl?: StringNullableFilter<"TenantModule"> | string | null
    apiKeyHash?: StringNullableFilter<"TenantModule"> | string | null
    createdAt?: DateTimeFilter<"TenantModule"> | Date | string
    updatedAt?: DateTimeFilter<"TenantModule"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenantId_module">

  export type TenantModuleOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    apiBaseUrl?: SortOrderInput | SortOrder
    apiKeyHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantModuleCountOrderByAggregateInput
    _max?: TenantModuleMaxOrderByAggregateInput
    _min?: TenantModuleMinOrderByAggregateInput
  }

  export type TenantModuleScalarWhereWithAggregatesInput = {
    AND?: TenantModuleScalarWhereWithAggregatesInput | TenantModuleScalarWhereWithAggregatesInput[]
    OR?: TenantModuleScalarWhereWithAggregatesInput[]
    NOT?: TenantModuleScalarWhereWithAggregatesInput | TenantModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantModule"> | string
    tenantId?: StringWithAggregatesFilter<"TenantModule"> | string
    module?: EnumSuiteModuleWithAggregatesFilter<"TenantModule"> | $Enums.SuiteModule
    enabled?: BoolWithAggregatesFilter<"TenantModule"> | boolean
    apiBaseUrl?: StringNullableWithAggregatesFilter<"TenantModule"> | string | null
    apiKeyHash?: StringNullableWithAggregatesFilter<"TenantModule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TenantModule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantModule"> | Date | string
  }

  export type IntegrationEventWhereInput = {
    AND?: IntegrationEventWhereInput | IntegrationEventWhereInput[]
    OR?: IntegrationEventWhereInput[]
    NOT?: IntegrationEventWhereInput | IntegrationEventWhereInput[]
    id?: StringFilter<"IntegrationEvent"> | string
    tenantId?: StringFilter<"IntegrationEvent"> | string
    sourceModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    type?: StringFilter<"IntegrationEvent"> | string
    payload?: JsonFilter<"IntegrationEvent">
    status?: EnumEventStatusFilter<"IntegrationEvent"> | $Enums.EventStatus
    attempts?: IntFilter<"IntegrationEvent"> | number
    lastError?: StringNullableFilter<"IntegrationEvent"> | string | null
    createdAt?: DateTimeFilter<"IntegrationEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"IntegrationEvent"> | Date | string | null
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type IntegrationEventOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    sourceModule?: SortOrder
    targetModule?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type IntegrationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationEventWhereInput | IntegrationEventWhereInput[]
    OR?: IntegrationEventWhereInput[]
    NOT?: IntegrationEventWhereInput | IntegrationEventWhereInput[]
    tenantId?: StringFilter<"IntegrationEvent"> | string
    sourceModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    type?: StringFilter<"IntegrationEvent"> | string
    payload?: JsonFilter<"IntegrationEvent">
    status?: EnumEventStatusFilter<"IntegrationEvent"> | $Enums.EventStatus
    attempts?: IntFilter<"IntegrationEvent"> | number
    lastError?: StringNullableFilter<"IntegrationEvent"> | string | null
    createdAt?: DateTimeFilter<"IntegrationEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"IntegrationEvent"> | Date | string | null
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type IntegrationEventOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    sourceModule?: SortOrder
    targetModule?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: IntegrationEventCountOrderByAggregateInput
    _avg?: IntegrationEventAvgOrderByAggregateInput
    _max?: IntegrationEventMaxOrderByAggregateInput
    _min?: IntegrationEventMinOrderByAggregateInput
    _sum?: IntegrationEventSumOrderByAggregateInput
  }

  export type IntegrationEventScalarWhereWithAggregatesInput = {
    AND?: IntegrationEventScalarWhereWithAggregatesInput | IntegrationEventScalarWhereWithAggregatesInput[]
    OR?: IntegrationEventScalarWhereWithAggregatesInput[]
    NOT?: IntegrationEventScalarWhereWithAggregatesInput | IntegrationEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegrationEvent"> | string
    tenantId?: StringWithAggregatesFilter<"IntegrationEvent"> | string
    sourceModule?: EnumSuiteModuleWithAggregatesFilter<"IntegrationEvent"> | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleWithAggregatesFilter<"IntegrationEvent"> | $Enums.SuiteModule
    type?: StringWithAggregatesFilter<"IntegrationEvent"> | string
    payload?: JsonWithAggregatesFilter<"IntegrationEvent">
    status?: EnumEventStatusWithAggregatesFilter<"IntegrationEvent"> | $Enums.EventStatus
    attempts?: IntWithAggregatesFilter<"IntegrationEvent"> | number
    lastError?: StringNullableWithAggregatesFilter<"IntegrationEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationEvent"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"IntegrationEvent"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumGlobalRoleFilter<"User"> | $Enums.GlobalRole
    telegramChatId?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    foto?: StringNullableFilter<"User"> | string | null
    ativo?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    moduleAccess?: UserModuleAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    moduleAccess?: UserModuleAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: UserTenantIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumGlobalRoleFilter<"User"> | $Enums.GlobalRole
    telegramChatId?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    foto?: StringNullableFilter<"User"> | string | null
    ativo?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    moduleAccess?: UserModuleAccessListRelationFilter
  }, "id" | "tenantId_email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumGlobalRoleWithAggregatesFilter<"User"> | $Enums.GlobalRole
    telegramChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"User"> | string | null
    foto?: StringNullableWithAggregatesFilter<"User"> | string | null
    ativo?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserModuleAccessWhereInput = {
    AND?: UserModuleAccessWhereInput | UserModuleAccessWhereInput[]
    OR?: UserModuleAccessWhereInput[]
    NOT?: UserModuleAccessWhereInput | UserModuleAccessWhereInput[]
    id?: StringFilter<"UserModuleAccess"> | string
    userId?: StringFilter<"UserModuleAccess"> | string
    module?: EnumSuiteModuleFilter<"UserModuleAccess"> | $Enums.SuiteModule
    enabled?: BoolFilter<"UserModuleAccess"> | boolean
    createdAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserModuleAccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserModuleAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_module?: UserModuleAccessUserIdModuleCompoundUniqueInput
    AND?: UserModuleAccessWhereInput | UserModuleAccessWhereInput[]
    OR?: UserModuleAccessWhereInput[]
    NOT?: UserModuleAccessWhereInput | UserModuleAccessWhereInput[]
    userId?: StringFilter<"UserModuleAccess"> | string
    module?: EnumSuiteModuleFilter<"UserModuleAccess"> | $Enums.SuiteModule
    enabled?: BoolFilter<"UserModuleAccess"> | boolean
    createdAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_module">

  export type UserModuleAccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserModuleAccessCountOrderByAggregateInput
    _max?: UserModuleAccessMaxOrderByAggregateInput
    _min?: UserModuleAccessMinOrderByAggregateInput
  }

  export type UserModuleAccessScalarWhereWithAggregatesInput = {
    AND?: UserModuleAccessScalarWhereWithAggregatesInput | UserModuleAccessScalarWhereWithAggregatesInput[]
    OR?: UserModuleAccessScalarWhereWithAggregatesInput[]
    NOT?: UserModuleAccessScalarWhereWithAggregatesInput | UserModuleAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModuleAccess"> | string
    userId?: StringWithAggregatesFilter<"UserModuleAccess"> | string
    module?: EnumSuiteModuleWithAggregatesFilter<"UserModuleAccess"> | $Enums.SuiteModule
    enabled?: BoolWithAggregatesFilter<"UserModuleAccess"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserModuleAccess"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserModuleAccess"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleCreateNestedManyWithoutTenantInput
    events?: IntegrationEventCreateNestedManyWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleUncheckedCreateNestedManyWithoutTenantInput
    events?: IntegrationEventUncheckedCreateNestedManyWithoutTenantInput
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUpdateManyWithoutTenantNestedInput
    events?: IntegrationEventUpdateManyWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUncheckedUpdateManyWithoutTenantNestedInput
    events?: IntegrationEventUncheckedUpdateManyWithoutTenantNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleCreateInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutModulesInput
  }

  export type TenantModuleUncheckedCreateInput = {
    id?: string
    tenantId: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutModulesNestedInput
  }

  export type TenantModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleCreateManyInput = {
    id?: string
    tenantId: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationEventCreateInput = {
    id?: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutEventsInput
  }

  export type IntegrationEventUncheckedCreateInput = {
    id?: string
    tenantId: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IntegrationEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutEventsNestedInput
  }

  export type IntegrationEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationEventCreateManyInput = {
    id?: string
    tenantId: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IntegrationEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    moduleAccess?: UserModuleAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenantId: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleAccess?: UserModuleAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    moduleAccess?: UserModuleAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleAccess?: UserModuleAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tenantId: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessCreateInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModuleAccessInput
  }

  export type UserModuleAccessUncheckedCreateInput = {
    id?: string
    userId: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleAccessNestedInput
  }

  export type UserModuleAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessCreateManyInput = {
    id?: string
    userId: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantModuleListRelationFilter = {
    every?: TenantModuleWhereInput
    some?: TenantModuleWhereInput
    none?: TenantModuleWhereInput
  }

  export type IntegrationEventListRelationFilter = {
    every?: IntegrationEventWhereInput
    some?: IntegrationEventWhereInput
    none?: IntegrationEventWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TenantModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSuiteModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.SuiteModule | EnumSuiteModuleFieldRefInput<$PrismaModel>
    in?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumSuiteModuleFilter<$PrismaModel> | $Enums.SuiteModule
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenantModuleTenantIdModuleCompoundUniqueInput = {
    tenantId: string
    module: $Enums.SuiteModule
  }

  export type TenantModuleCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    apiBaseUrl?: SortOrder
    apiKeyHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    apiBaseUrl?: SortOrder
    apiKeyHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantModuleMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    apiBaseUrl?: SortOrder
    apiKeyHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSuiteModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuiteModule | EnumSuiteModuleFieldRefInput<$PrismaModel>
    in?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumSuiteModuleWithAggregatesFilter<$PrismaModel> | $Enums.SuiteModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuiteModuleFilter<$PrismaModel>
    _max?: NestedEnumSuiteModuleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntegrationEventCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    sourceModule?: SortOrder
    targetModule?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type IntegrationEventAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntegrationEventMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    sourceModule?: SortOrder
    targetModule?: SortOrder
    type?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type IntegrationEventMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    sourceModule?: SortOrder
    targetModule?: SortOrder
    type?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type IntegrationEventSumOrderByAggregateInput = {
    attempts?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole
  }

  export type UserModuleAccessListRelationFilter = {
    every?: UserModuleAccessWhereInput
    some?: UserModuleAccessWhereInput
    none?: UserModuleAccessWhereInput
  }

  export type UserModuleAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telegramChatId?: SortOrder
    whatsapp?: SortOrder
    foto?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telegramChatId?: SortOrder
    whatsapp?: SortOrder
    foto?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telegramChatId?: SortOrder
    whatsapp?: SortOrder
    foto?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserModuleAccessUserIdModuleCompoundUniqueInput = {
    userId: string
    module: $Enums.SuiteModule
  }

  export type UserModuleAccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModuleAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModuleAccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantModuleCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput> | TenantModuleCreateWithoutTenantInput[] | TenantModuleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantModuleCreateOrConnectWithoutTenantInput | TenantModuleCreateOrConnectWithoutTenantInput[]
    createMany?: TenantModuleCreateManyTenantInputEnvelope
    connect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
  }

  export type IntegrationEventCreateNestedManyWithoutTenantInput = {
    create?: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput> | IntegrationEventCreateWithoutTenantInput[] | IntegrationEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationEventCreateOrConnectWithoutTenantInput | IntegrationEventCreateOrConnectWithoutTenantInput[]
    createMany?: IntegrationEventCreateManyTenantInputEnvelope
    connect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TenantModuleUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput> | TenantModuleCreateWithoutTenantInput[] | TenantModuleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantModuleCreateOrConnectWithoutTenantInput | TenantModuleCreateOrConnectWithoutTenantInput[]
    createMany?: TenantModuleCreateManyTenantInputEnvelope
    connect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
  }

  export type IntegrationEventUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput> | IntegrationEventCreateWithoutTenantInput[] | IntegrationEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationEventCreateOrConnectWithoutTenantInput | IntegrationEventCreateOrConnectWithoutTenantInput[]
    createMany?: IntegrationEventCreateManyTenantInputEnvelope
    connect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenantModuleUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput> | TenantModuleCreateWithoutTenantInput[] | TenantModuleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantModuleCreateOrConnectWithoutTenantInput | TenantModuleCreateOrConnectWithoutTenantInput[]
    upsert?: TenantModuleUpsertWithWhereUniqueWithoutTenantInput | TenantModuleUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantModuleCreateManyTenantInputEnvelope
    set?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    disconnect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    delete?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    connect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    update?: TenantModuleUpdateWithWhereUniqueWithoutTenantInput | TenantModuleUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantModuleUpdateManyWithWhereWithoutTenantInput | TenantModuleUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantModuleScalarWhereInput | TenantModuleScalarWhereInput[]
  }

  export type IntegrationEventUpdateManyWithoutTenantNestedInput = {
    create?: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput> | IntegrationEventCreateWithoutTenantInput[] | IntegrationEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationEventCreateOrConnectWithoutTenantInput | IntegrationEventCreateOrConnectWithoutTenantInput[]
    upsert?: IntegrationEventUpsertWithWhereUniqueWithoutTenantInput | IntegrationEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: IntegrationEventCreateManyTenantInputEnvelope
    set?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    disconnect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    delete?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    connect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    update?: IntegrationEventUpdateWithWhereUniqueWithoutTenantInput | IntegrationEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: IntegrationEventUpdateManyWithWhereWithoutTenantInput | IntegrationEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: IntegrationEventScalarWhereInput | IntegrationEventScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantModuleUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput> | TenantModuleCreateWithoutTenantInput[] | TenantModuleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantModuleCreateOrConnectWithoutTenantInput | TenantModuleCreateOrConnectWithoutTenantInput[]
    upsert?: TenantModuleUpsertWithWhereUniqueWithoutTenantInput | TenantModuleUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantModuleCreateManyTenantInputEnvelope
    set?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    disconnect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    delete?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    connect?: TenantModuleWhereUniqueInput | TenantModuleWhereUniqueInput[]
    update?: TenantModuleUpdateWithWhereUniqueWithoutTenantInput | TenantModuleUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantModuleUpdateManyWithWhereWithoutTenantInput | TenantModuleUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantModuleScalarWhereInput | TenantModuleScalarWhereInput[]
  }

  export type IntegrationEventUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput> | IntegrationEventCreateWithoutTenantInput[] | IntegrationEventUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationEventCreateOrConnectWithoutTenantInput | IntegrationEventCreateOrConnectWithoutTenantInput[]
    upsert?: IntegrationEventUpsertWithWhereUniqueWithoutTenantInput | IntegrationEventUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: IntegrationEventCreateManyTenantInputEnvelope
    set?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    disconnect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    delete?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    connect?: IntegrationEventWhereUniqueInput | IntegrationEventWhereUniqueInput[]
    update?: IntegrationEventUpdateWithWhereUniqueWithoutTenantInput | IntegrationEventUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: IntegrationEventUpdateManyWithWhereWithoutTenantInput | IntegrationEventUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: IntegrationEventScalarWhereInput | IntegrationEventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutModulesInput = {
    create?: XOR<TenantCreateWithoutModulesInput, TenantUncheckedCreateWithoutModulesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutModulesInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumSuiteModuleFieldUpdateOperationsInput = {
    set?: $Enums.SuiteModule
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TenantUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<TenantCreateWithoutModulesInput, TenantUncheckedCreateWithoutModulesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutModulesInput
    upsert?: TenantUpsertWithoutModulesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutModulesInput, TenantUpdateWithoutModulesInput>, TenantUncheckedUpdateWithoutModulesInput>
  }

  export type TenantCreateNestedOneWithoutEventsInput = {
    create?: XOR<TenantCreateWithoutEventsInput, TenantUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutEventsInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TenantCreateWithoutEventsInput, TenantUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutEventsInput
    upsert?: TenantUpsertWithoutEventsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutEventsInput, TenantUpdateWithoutEventsInput>, TenantUncheckedUpdateWithoutEventsInput>
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type UserModuleAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput> | UserModuleAccessCreateWithoutUserInput[] | UserModuleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleAccessCreateOrConnectWithoutUserInput | UserModuleAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleAccessCreateManyUserInputEnvelope
    connect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
  }

  export type UserModuleAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput> | UserModuleAccessCreateWithoutUserInput[] | UserModuleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleAccessCreateOrConnectWithoutUserInput | UserModuleAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleAccessCreateManyUserInputEnvelope
    connect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
  }

  export type EnumGlobalRoleFieldUpdateOperationsInput = {
    set?: $Enums.GlobalRole
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type UserModuleAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput> | UserModuleAccessCreateWithoutUserInput[] | UserModuleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleAccessCreateOrConnectWithoutUserInput | UserModuleAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleAccessUpsertWithWhereUniqueWithoutUserInput | UserModuleAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleAccessCreateManyUserInputEnvelope
    set?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    disconnect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    delete?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    connect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    update?: UserModuleAccessUpdateWithWhereUniqueWithoutUserInput | UserModuleAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleAccessUpdateManyWithWhereWithoutUserInput | UserModuleAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleAccessScalarWhereInput | UserModuleAccessScalarWhereInput[]
  }

  export type UserModuleAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput> | UserModuleAccessCreateWithoutUserInput[] | UserModuleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleAccessCreateOrConnectWithoutUserInput | UserModuleAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleAccessUpsertWithWhereUniqueWithoutUserInput | UserModuleAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleAccessCreateManyUserInputEnvelope
    set?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    disconnect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    delete?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    connect?: UserModuleAccessWhereUniqueInput | UserModuleAccessWhereUniqueInput[]
    update?: UserModuleAccessUpdateWithWhereUniqueWithoutUserInput | UserModuleAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleAccessUpdateManyWithWhereWithoutUserInput | UserModuleAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleAccessScalarWhereInput | UserModuleAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModuleAccessInput = {
    create?: XOR<UserCreateWithoutModuleAccessInput, UserUncheckedCreateWithoutModuleAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleAccessInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModuleAccessNestedInput = {
    create?: XOR<UserCreateWithoutModuleAccessInput, UserUncheckedCreateWithoutModuleAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleAccessInput
    upsert?: UserUpsertWithoutModuleAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleAccessInput, UserUpdateWithoutModuleAccessInput>, UserUncheckedUpdateWithoutModuleAccessInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSuiteModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.SuiteModule | EnumSuiteModuleFieldRefInput<$PrismaModel>
    in?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumSuiteModuleFilter<$PrismaModel> | $Enums.SuiteModule
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSuiteModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuiteModule | EnumSuiteModuleFieldRefInput<$PrismaModel>
    in?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuiteModule[] | ListEnumSuiteModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumSuiteModuleWithAggregatesFilter<$PrismaModel> | $Enums.SuiteModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuiteModuleFilter<$PrismaModel>
    _max?: NestedEnumSuiteModuleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole
  }

  export type NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlobalRole[] | ListEnumGlobalRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>
  }

  export type TenantModuleCreateWithoutTenantInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantModuleUncheckedCreateWithoutTenantInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantModuleCreateOrConnectWithoutTenantInput = {
    where: TenantModuleWhereUniqueInput
    create: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput>
  }

  export type TenantModuleCreateManyTenantInputEnvelope = {
    data: TenantModuleCreateManyTenantInput | TenantModuleCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationEventCreateWithoutTenantInput = {
    id?: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IntegrationEventUncheckedCreateWithoutTenantInput = {
    id?: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IntegrationEventCreateOrConnectWithoutTenantInput = {
    where: IntegrationEventWhereUniqueInput
    create: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput>
  }

  export type IntegrationEventCreateManyTenantInputEnvelope = {
    data: IntegrationEventCreateManyTenantInput | IntegrationEventCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleAccess?: UserModuleAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    moduleAccess?: UserModuleAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantModuleUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenantModuleWhereUniqueInput
    update: XOR<TenantModuleUpdateWithoutTenantInput, TenantModuleUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantModuleCreateWithoutTenantInput, TenantModuleUncheckedCreateWithoutTenantInput>
  }

  export type TenantModuleUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenantModuleWhereUniqueInput
    data: XOR<TenantModuleUpdateWithoutTenantInput, TenantModuleUncheckedUpdateWithoutTenantInput>
  }

  export type TenantModuleUpdateManyWithWhereWithoutTenantInput = {
    where: TenantModuleScalarWhereInput
    data: XOR<TenantModuleUpdateManyMutationInput, TenantModuleUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantModuleScalarWhereInput = {
    AND?: TenantModuleScalarWhereInput | TenantModuleScalarWhereInput[]
    OR?: TenantModuleScalarWhereInput[]
    NOT?: TenantModuleScalarWhereInput | TenantModuleScalarWhereInput[]
    id?: StringFilter<"TenantModule"> | string
    tenantId?: StringFilter<"TenantModule"> | string
    module?: EnumSuiteModuleFilter<"TenantModule"> | $Enums.SuiteModule
    enabled?: BoolFilter<"TenantModule"> | boolean
    apiBaseUrl?: StringNullableFilter<"TenantModule"> | string | null
    apiKeyHash?: StringNullableFilter<"TenantModule"> | string | null
    createdAt?: DateTimeFilter<"TenantModule"> | Date | string
    updatedAt?: DateTimeFilter<"TenantModule"> | Date | string
  }

  export type IntegrationEventUpsertWithWhereUniqueWithoutTenantInput = {
    where: IntegrationEventWhereUniqueInput
    update: XOR<IntegrationEventUpdateWithoutTenantInput, IntegrationEventUncheckedUpdateWithoutTenantInput>
    create: XOR<IntegrationEventCreateWithoutTenantInput, IntegrationEventUncheckedCreateWithoutTenantInput>
  }

  export type IntegrationEventUpdateWithWhereUniqueWithoutTenantInput = {
    where: IntegrationEventWhereUniqueInput
    data: XOR<IntegrationEventUpdateWithoutTenantInput, IntegrationEventUncheckedUpdateWithoutTenantInput>
  }

  export type IntegrationEventUpdateManyWithWhereWithoutTenantInput = {
    where: IntegrationEventScalarWhereInput
    data: XOR<IntegrationEventUpdateManyMutationInput, IntegrationEventUncheckedUpdateManyWithoutTenantInput>
  }

  export type IntegrationEventScalarWhereInput = {
    AND?: IntegrationEventScalarWhereInput | IntegrationEventScalarWhereInput[]
    OR?: IntegrationEventScalarWhereInput[]
    NOT?: IntegrationEventScalarWhereInput | IntegrationEventScalarWhereInput[]
    id?: StringFilter<"IntegrationEvent"> | string
    tenantId?: StringFilter<"IntegrationEvent"> | string
    sourceModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFilter<"IntegrationEvent"> | $Enums.SuiteModule
    type?: StringFilter<"IntegrationEvent"> | string
    payload?: JsonFilter<"IntegrationEvent">
    status?: EnumEventStatusFilter<"IntegrationEvent"> | $Enums.EventStatus
    attempts?: IntFilter<"IntegrationEvent"> | number
    lastError?: StringNullableFilter<"IntegrationEvent"> | string | null
    createdAt?: DateTimeFilter<"IntegrationEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"IntegrationEvent"> | Date | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumGlobalRoleFilter<"User"> | $Enums.GlobalRole
    telegramChatId?: StringNullableFilter<"User"> | string | null
    whatsapp?: StringNullableFilter<"User"> | string | null
    foto?: StringNullableFilter<"User"> | string | null
    ativo?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TenantCreateWithoutModulesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IntegrationEventCreateNestedManyWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutModulesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IntegrationEventUncheckedCreateNestedManyWithoutTenantInput
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutModulesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutModulesInput, TenantUncheckedCreateWithoutModulesInput>
  }

  export type TenantUpsertWithoutModulesInput = {
    update: XOR<TenantUpdateWithoutModulesInput, TenantUncheckedUpdateWithoutModulesInput>
    create: XOR<TenantCreateWithoutModulesInput, TenantUncheckedCreateWithoutModulesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutModulesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutModulesInput, TenantUncheckedUpdateWithoutModulesInput>
  }

  export type TenantUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IntegrationEventUpdateManyWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IntegrationEventUncheckedUpdateManyWithoutTenantNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleCreateNestedManyWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleUncheckedCreateNestedManyWithoutTenantInput
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutEventsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutEventsInput, TenantUncheckedCreateWithoutEventsInput>
  }

  export type TenantUpsertWithoutEventsInput = {
    update: XOR<TenantUpdateWithoutEventsInput, TenantUncheckedUpdateWithoutEventsInput>
    create: XOR<TenantCreateWithoutEventsInput, TenantUncheckedCreateWithoutEventsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutEventsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutEventsInput, TenantUncheckedUpdateWithoutEventsInput>
  }

  export type TenantUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUpdateManyWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUncheckedUpdateManyWithoutTenantNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleCreateNestedManyWithoutTenantInput
    events?: IntegrationEventCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: TenantModuleUncheckedCreateNestedManyWithoutTenantInput
    events?: IntegrationEventUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type UserModuleAccessCreateWithoutUserInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleAccessUncheckedCreateWithoutUserInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleAccessCreateOrConnectWithoutUserInput = {
    where: UserModuleAccessWhereUniqueInput
    create: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput>
  }

  export type UserModuleAccessCreateManyUserInputEnvelope = {
    data: UserModuleAccessCreateManyUserInput | UserModuleAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUpdateManyWithoutTenantNestedInput
    events?: IntegrationEventUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: TenantModuleUncheckedUpdateManyWithoutTenantNestedInput
    events?: IntegrationEventUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserModuleAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModuleAccessWhereUniqueInput
    update: XOR<UserModuleAccessUpdateWithoutUserInput, UserModuleAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserModuleAccessCreateWithoutUserInput, UserModuleAccessUncheckedCreateWithoutUserInput>
  }

  export type UserModuleAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModuleAccessWhereUniqueInput
    data: XOR<UserModuleAccessUpdateWithoutUserInput, UserModuleAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserModuleAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserModuleAccessScalarWhereInput
    data: XOR<UserModuleAccessUpdateManyMutationInput, UserModuleAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModuleAccessScalarWhereInput = {
    AND?: UserModuleAccessScalarWhereInput | UserModuleAccessScalarWhereInput[]
    OR?: UserModuleAccessScalarWhereInput[]
    NOT?: UserModuleAccessScalarWhereInput | UserModuleAccessScalarWhereInput[]
    id?: StringFilter<"UserModuleAccess"> | string
    userId?: StringFilter<"UserModuleAccess"> | string
    module?: EnumSuiteModuleFilter<"UserModuleAccess"> | $Enums.SuiteModule
    enabled?: BoolFilter<"UserModuleAccess"> | boolean
    createdAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
    updatedAt?: DateTimeFilter<"UserModuleAccess"> | Date | string
  }

  export type UserCreateWithoutModuleAccessInput = {
    id?: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutModuleAccessInput = {
    id?: string
    tenantId: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutModuleAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleAccessInput, UserUncheckedCreateWithoutModuleAccessInput>
  }

  export type UserUpsertWithoutModuleAccessInput = {
    update: XOR<UserUpdateWithoutModuleAccessInput, UserUncheckedUpdateWithoutModuleAccessInput>
    create: XOR<UserCreateWithoutModuleAccessInput, UserUncheckedCreateWithoutModuleAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleAccessInput, UserUncheckedUpdateWithoutModuleAccessInput>
  }

  export type UserUpdateWithoutModuleAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleCreateManyTenantInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    apiBaseUrl?: string | null
    apiKeyHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationEventCreateManyTenantInput = {
    id?: string
    sourceModule: $Enums.SuiteModule
    targetModule: $Enums.SuiteModule
    type: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EventStatus
    attempts?: number
    lastError?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type UserCreateManyTenantInput = {
    id?: string
    nome: string
    email: string
    passwordHash?: string | null
    role: $Enums.GlobalRole
    telegramChatId?: string | null
    whatsapp?: string | null
    foto?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantModuleUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantModuleUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationEventUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationEventUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationEventUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    targetModule?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleAccess?: UserModuleAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleAccess?: UserModuleAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessCreateManyUserInput = {
    id?: string
    module: $Enums.SuiteModule
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumSuiteModuleFieldUpdateOperationsInput | $Enums.SuiteModule
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantModuleDefaultArgs instead
     */
    export type TenantModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantModuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntegrationEventDefaultArgs instead
     */
    export type IntegrationEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntegrationEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserModuleAccessDefaultArgs instead
     */
    export type UserModuleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserModuleAccessDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}