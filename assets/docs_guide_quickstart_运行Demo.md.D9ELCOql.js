import{_ as a,c as s,o as e,a6 as t}from"./chunks/framework.Dgb-pK-G.js";const g=JSON.parse('{"title":"运行DEMO","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/quickstart/运行Demo.md","filePath":"docs/guide/quickstart/运行Demo.md","lastUpdated":1715245369000}'),i={name:"docs/guide/quickstart/运行Demo.md"},p=t(`<h1 id="运行demo" tabindex="-1">运行DEMO <a class="header-anchor" href="#运行demo" aria-label="Permalink to &quot;运行DEMO&quot;">​</a></h1><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Hello, world!</span></span></code></pre></div><p>这是一个简单的Java程序，输出了&quot;Hello, world!&quot;。</p><p>你可以在IDE中运行这个程序，或者在命令行中使用javac和java命令运行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>javac demo.java</span></span>
<span class="line"><span>java demo</span></span></code></pre></div><p>这将编译并运行demo.java程序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>java demo</span></span></code></pre></div><p>这将只运行demo.java程序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>javac -d . demo.java</span></span>
<span class="line"><span>java -cp . demo</span></span></code></pre></div><p>这将编译并运行demo.java程序，并将生成的class文件和依赖的jar文件放在当前目录下。</p>`,12),n=[p];function o(l,d,c,h,r,u){return e(),s("div",null,n)}const k=a(i,[["render",o]]);export{g as __pageData,k as default};
