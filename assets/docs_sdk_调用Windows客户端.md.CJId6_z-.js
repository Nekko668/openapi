import{_ as s,c as a,o as n,a6 as i}from"./chunks/framework.CrBHAFc5.js";const o=JSON.parse('{"title":"调用Windows客户端","description":"","frontmatter":{},"headers":[],"relativePath":"docs/sdk/调用Windows客户端.md","filePath":"docs/sdk/调用Windows客户端.md","lastUpdated":1715742262000}'),p={name:"docs/sdk/调用Windows客户端.md"},l=i(`<h1 id="调用windows客户端" tabindex="-1">调用Windows客户端 <a class="header-anchor" href="#调用windows客户端" aria-label="Permalink to &quot;调用Windows客户端&quot;">​</a></h1><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ul><li>下载并安装Windows客户端：<a href="https://github.com/aliyun/openapi-sdk-php-client/releases" target="_blank" rel="noreferrer">https://github.com/aliyun/openapi-sdk-php-client/releases</a></li><li>注册阿里云账号：<a href="https://account.aliyun.com/login/login.htm" target="_blank" rel="noreferrer">https://account.aliyun.com/login/login.htm</a></li><li>创建AccessKey：<a href="https://usercenter.console.aliyun.com/#/manage/ak" target="_blank" rel="noreferrer">https://usercenter.console.aliyun.com/#/manage/ak</a></li><li>安装并配置PHP环境：<a href="https://www.php.net/manual/zh/install.php" target="_blank" rel="noreferrer">https://www.php.net/manual/zh/install.php</a></li></ul><h2 id="调用api" tabindex="-1">调用API <a class="header-anchor" href="#调用api" aria-label="Permalink to &quot;调用API&quot;">​</a></h2><h3 id="步骤1-安装依赖" tabindex="-1">步骤1：安装依赖 <a class="header-anchor" href="#步骤1-安装依赖" aria-label="Permalink to &quot;步骤1：安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>composer require alibabacloud/client</span></span></code></pre></div><h3 id="步骤2-创建配置文件" tabindex="-1">步骤2：创建配置文件 <a class="header-anchor" href="#步骤2-创建配置文件" aria-label="Permalink to &quot;步骤2：创建配置文件&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AlibabaCloud\\Client\\AlibabaCloud</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AlibabaCloud\\Client\\Exception\\ClientException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AlibabaCloud\\Client\\Exception\\ServerException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 设置AccessKeyId、AccessKeySecret、RegionId</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AlibabaCloud</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">accessKeyClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;accessKeyId&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;accessKeySecret&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">regionId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;regionId&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asDefaultClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 设置超时时间</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AlibabaCloud</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 设置连接超时时间</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AlibabaCloud</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connectTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="步骤3-调用api" tabindex="-1">步骤3：调用API <a class="header-anchor" href="#步骤3-调用api" aria-label="Permalink to &quot;步骤3：调用API&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AlibabaCloud</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rpc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Ecs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2014-05-26&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DescribeRegions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ecs-cn-hangzhou.aliyuncs.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                          -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print_r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ClientException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getErrorMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PHP_EOL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ServerException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $e) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getErrorMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PHP_EOL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="步骤4-查看结果" tabindex="-1">步骤4：查看结果 <a class="header-anchor" href="#步骤4-查看结果" aria-label="Permalink to &quot;步骤4：查看结果&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Array</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    [RequestId] =&gt; 5C07D7D7-D7D7-D7D7D7D7D7D7</span></span>
<span class="line"><span>    [Regions] =&gt; Array</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>            [0] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-qingdao</span></span>
<span class="line"><span>                    [LocalName] =&gt; 青岛</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [1] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-beijing</span></span>
<span class="line"><span>                    [LocalName] =&gt; 北京</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [2] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-zhangjiakou</span></span>
<span class="line"><span>                    [LocalName] =&gt; 张家口</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [3] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-huhehaote</span></span>
<span class="line"><span>                    [LocalName] =&gt; 呼和浩特</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [4] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-shanghai</span></span>
<span class="line"><span>                    [LocalName] =&gt; 上海</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [5] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-hangzhou</span></span>
<span class="line"><span>                    [LocalName] =&gt; 杭州</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [6] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-shenzhen</span></span>
<span class="line"><span>                    [LocalName] =&gt; 深圳</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [7] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-heyuan</span></span>
<span class="line"><span>                    [LocalName] =&gt; 河源</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [8] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-chengdu</span></span>
<span class="line"><span>                    [LocalName] =&gt; 成都</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            [9] =&gt; Array</span></span>
<span class="line"><span>                (</span></span>
<span class="line"><span>                    [RegionId] =&gt; cn-hongkong</span></span>
<span class="line"><span>                    [LocalName] =&gt; 香港</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [TotalCount] =&gt; 10</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li>请确保PHP版本大于等于7.1.3，并安装了openssl扩展。</li><li>请确保系统中已安装curl扩展。</li><li>请确保系统中已安装OpenSSL，并正确配置php.ini文件。</li></ul>`,14),e=[l];function t(h,k,r,c,d,g){return n(),a("div",null,e)}const y=s(p,[["render",t]]);export{o as __pageData,y as default};
