import{_ as a,c as s,o as i,a6 as n}from"./chunks/framework.CrBHAFc5.js";const e="/assets/%E5%9B%BE%E7%89%871.QG2MSfIF.png",t="/assets/%E5%9B%BE%E7%89%872.q5UDvjk5.png",_=JSON.parse('{"title":"Android","description":"","frontmatter":{},"headers":[],"relativePath":"docs/sdk/Android.md","filePath":"docs/sdk/Android.md","lastUpdated":1715762509000}'),p={name:"docs/sdk/Android.md"},d=n(`<h1 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>视频会议Android客户端是北京网动网络科技股份有限公司采用先进的音、视频处理技术，开发的一款高清视频会议软件，它简单方便，具备丰富的会议功能，支持多方合屏、支持手机/平板/电脑/H323终端融合开会，是迄今为止市场上最具性价比的高清视频会议系统。</p><p>我们已将Android客户端的核心模块文件都已制作好，现提供各项调用的接口说明，方便程序开发人员在此基础上进行定制版的修改与开发。</p><p>新手根据我们提供的资源文件定制视频会议Android客户端仅需要以下几步即可完成。</p><h2 id="代码引入" tabindex="-1"><strong>代码引入</strong> <a class="header-anchor" href="#代码引入" aria-label="Permalink to &quot;**代码引入**&quot;">​</a></h2><p>只需要将<code>imm_sdk_phone.aar</code>放在您的<code>libs</code>目录下。并引入您的项目。</p><h2 id="引用声明代码" tabindex="-1"><strong>引用声明代码</strong> <a class="header-anchor" href="#引用声明代码" aria-label="Permalink to &quot;**引用声明代码**&quot;">​</a></h2><p>在自己的<code>Androidmanifest.xml</code>文件中添加代码</p><p><code>imm_phone_sdk\\Androidmanifest.xml</code>里面复制以下两个声明的代码，并已作了备注（需要手动复制到自己的文件<code>Androidmanifest.xml</code>中），分别是权限和服务声明，大家直接使用即可。 <code>build.gradle</code>文件参考demo配置ndk的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ndk {</span></span>
<span class="line"><span>    abiFilters &quot;arm64-v8a&quot;,&quot;armeabi-v7a&quot;, &quot;armeabi&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="添加权限声明" tabindex="-1"><strong>添加权限声明</strong> <a class="header-anchor" href="#添加权限声明" aria-label="Permalink to &quot;**添加权限声明**&quot;">​</a></h3><p>在<code>Application</code>标签外加入SDK运行时需要的权限</p><h3 id="添加服务声明" tabindex="-1"><strong>添加服务声明</strong> <a class="header-anchor" href="#添加服务声明" aria-label="Permalink to &quot;**添加服务声明**&quot;">​</a></h3><p>在<code>Application</code>标签内加入如下服务声明<br> 直接复制 <code>demo\\Androidmanifest.xml</code> 中的 <code>activity</code></p><h2 id="启动sdk" tabindex="-1"><strong>启动SDK</strong> <a class="header-anchor" href="#启动sdk" aria-label="Permalink to &quot;**启动SDK**&quot;">​</a></h2><p>具体可以参照Demo项目</p><p>外面给摄像头和语音发言权限</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 申请摄像头和语音发言权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] REQUIRED_PERMISSION_LIST </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Manifest.permission.ECORD_AUDIO,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Manifest.permission.CAMERA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>传入对应的入会的mcu地址，用户名，用户密码，会议id和会议密码就可以入会</p><p><img src="`+e+`" alt=""></p><p>如果是私有云测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mcu测试地址: master.iactive.com.cn</span></span>
<span class="line"><span>测试用户：cpbt5</span></span>
<span class="line"><span>测试密码：qwe123!@#</span></span>
<span class="line"><span>会议id：301</span></span></code></pre></div><p>针对您的项目。应该是需要传会议室id的。</p><p><img src="`+t+'" alt=""></p>',25),o=[d];function l(r,c,h,k,m,g){return i(),s("div",null,o)}const b=a(p,[["render",l]]);export{_ as __pageData,b as default};
