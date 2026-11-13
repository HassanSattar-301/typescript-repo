<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApimaticCalculatorTestClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 1 operation · Request types: namespace `ApimaticCalculatorTestClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ApimaticCalculatorTestClient.CalculateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hassan-301-skill-verification-js-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### calculate

- **Signature**: `calculate(request: ApimaticCalculatorTestClient.CalculateRequest, options?: RequestOptions): ApiPromise<number, ApiError>`
- **Wire**: `GET /{operation}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `ApimaticCalculatorTestError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApimaticCalculatorTestClient.CalculateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operation` | `path` | `OperationType` | yes |
| `x` | `query` | `number` | yes |
| `y` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OperationType` | `operationTypeSchema` | `src/models/operation-type.ts` |

