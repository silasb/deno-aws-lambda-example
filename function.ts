
export async function handler1(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      version: Deno.version,
      build: Deno.build,
      event: event,
    })
  };
}

export async function handler2(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world",
    })
  };
}


export async function handler3(event) {
  return "hello world";
}

