import{_ as s,c as t,o as a,a6 as i}from"./chunks/framework.CrBHAFc5.js";const g=JSON.parse('{"title":"获取TOKEN","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/info/token.md","filePath":"docs/api/info/token.md","lastUpdated":1715939901000}'),n={name:"docs/api/info/token.md"},e=i(`<h1 id="获取token" tabindex="-1"><strong>获取TOKEN</strong> <a class="header-anchor" href="#获取token" aria-label="Permalink to &quot;**获取TOKEN**&quot;">​</a></h1><h2 id="获取access-token" tabindex="-1"><strong>获取ACCESS_TOKEN</strong> <a class="header-anchor" href="#获取access-token" aria-label="Permalink to &quot;**获取ACCESS_TOKEN**&quot;">​</a></h2><p><strong>描述：</strong> <code>获取接口访问的token</code><br><strong>调用方式：</strong> <code>GET</code><br><strong>接口请求：</strong> <code>https://[server:port]/openapi/v1/token</code></p><p><strong>请求参数</strong></p><table><thead><tr><th>参数名</th><th>必选</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>auth_user</td><td>Y</td><td>string</td><td>用户名</td></tr><tr><td>auth_password</td><td>Y</td><td>string</td><td>用户密码 大写MD5格式</td></tr><tr><td>app_id</td><td>Y</td><td>string</td><td>为系统给第三方调用分配的</td></tr></tbody></table><p><strong>返回参数</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>access_token</td><td>string</td><td>访问token</td></tr><tr><td>expires_in</td><td>int</td><td>有效时长</td></tr></tbody></table><p><strong>请求示例</strong></p><p><code>GET: https://[server:port]/openapi/v1/token?auth_use=test&amp;auth_password=qwe123&amp;app_id=afc253</code></p><p><strong>返回示例</strong></p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;error_code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;timestamp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1686110318184</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;access_token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUFDVElWRWU3YjE4NTJjMTFmNjRmMjNlN2U3ZDU0NGQxODhmYzU3YzFjNWEzZTRkOTBkYzFhNjAyNzJiYzc2NTA2NGY4NWU2NmNhOTkxYzdkNjc0ZjRmZWQ1OTFhYzU3YjUxMjYzNTkxNDdmYTU2ZDU4ODUyMmI5NDA4YTZkNDQ4NTMxYjky&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;expires_in&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7200</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),h=[e];function p(d,o,r,k,l,E){return a(),t("div",null,h)}const _=s(n,[["render",p]]);export{g as __pageData,_ as default};