import config from '../config.json'

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return new Response(`Hello worker!! ${config.secret}`, {
      headers: { 'content-type': 'text/plain' },
    })
  }
}

interface Env {
  TEST_VALUE: string
}