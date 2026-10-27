# Reference

> Source: [ApimaticCalculatorClient](src/client.ts)

<details>
<summary><code>calculate(request: ApimaticCalculatorClient.CalculateRequest, options?: RequestOptions): ApiPromise&lt;number, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculates the expression using the specified operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calculate({ operation: OperationType.Sum, x: 4, y: 5 });
  // TODO: Handle 'response' of type number
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calculate({ operation: OperationType.Sum, x: 4, y: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation</code> | <code>[OperationType](src/models/operation-type.ts)</code> | The operator to apply on the variables |
| <code>x</code> | <code>number</code> | The LHS value |
| <code>y</code> | <code>number</code> | The RHS value |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calculate(request)`

- **OnSuccess**: <code>number</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.calculate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number, ApiError&gt;</code>, with `result.value` of type <code>number</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ApimaticCalculatorError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

