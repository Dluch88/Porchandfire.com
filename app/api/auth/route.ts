import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,user`
    )
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await response.json()
  const token = data.access_token

  const html = `<!DOCTYPE html><html><body><script>
    (function() {
      var attempt = 0;
      function sendToken() {
        attempt++;
        if (window.opener) {
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify({token: "${token}", provider: "github"}),
            '*'
          );
          setTimeout(function() { window.close(); }, 1000);
        } else if (attempt < 10) {
          setTimeout(sendToken, 500);
        }
      }
      sendToken();
    })()
  </script></body></html>`

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  })
}