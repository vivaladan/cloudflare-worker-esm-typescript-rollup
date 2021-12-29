export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return new Response(`Hello worker!! ${env.TEST_VALUE}`, {
      headers: { 'content-type': 'text/plain' },
    })
  }
}

interface Env {
  TEST_VALUE: string
}