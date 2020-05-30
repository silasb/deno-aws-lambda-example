# Deno AWS Lambda

Just some experiements with Deno.

```
LAMBDA_TASK_ROOT=$PWD _HANDLER="function.handler1" AWS_LAMBDA_RUNTIME_API=127.0.0.1:8081 ./bootstrap
zip function.zip function.ts bootstrap tsconfig.json
```

## Should you use this?

No use https://github.com/hayd/deno-lambda instead
