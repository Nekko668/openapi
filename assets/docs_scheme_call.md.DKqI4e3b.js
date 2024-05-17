import{_ as a,c as l,o as e,a6 as i}from"./chunks/framework.CrBHAFc5.js";const m=JSON.parse('{"title":"视频呼叫","description":"","frontmatter":{},"headers":[],"relativePath":"docs/scheme/call.md","filePath":"docs/scheme/call.md","lastUpdated":1715939901000}'),r={name:"docs/scheme/call.md"},t=i('<h1 id="视频呼叫" tabindex="-1">视频呼叫 <a class="header-anchor" href="#视频呼叫" aria-label="Permalink to &quot;视频呼叫&quot;">​</a></h1><h2 id="功能描述" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述" aria-label="Permalink to &quot;功能描述&quot;">​</a></h2><p>视频呼叫功能是指通过视频通话的方式进行通讯。</p><h2 id="系统架构" tabindex="-1">系统架构 <a class="header-anchor" href="#系统架构" aria-label="Permalink to &quot;系统架构&quot;">​</a></h2><p>视频呼叫系统架构如下图所示：</p><p><img src="https://main.qcloudimg.com/raw/d1f0d1d5d9d5d5.png" alt="视频呼叫系统架构"></p><p>视频呼叫系统由以下几个部分组成：</p><ol><li>呼叫管理器（Call Manager）：负责管理呼叫流程，包括呼叫请求、呼叫接听、呼叫转移、呼叫中、呼叫结束等。</li><li>呼叫控制器（Call Controller）：负责控制呼叫流程，包括呼叫建立、呼叫接通、呼叫拒绝、呼叫挂断等。</li><li>呼叫管理器适配器（Call Manager Adapter）：负责适配不同呼叫管理器的接口，包括呼叫请求、呼叫接听、呼叫转移、呼叫中、呼叫结束等。</li><li>呼叫控制器适配器（Call Controller Adapter）：负责适配不同呼叫控制器的接口，包括呼叫建立、呼叫接通、呼叫拒绝、呼叫挂断等。</li><li>媒体控制器（Media Controller）：负责管理呼叫中的媒体流，包括音频、视频、屏幕共享等。</li><li>媒体控制器适配器（Media Controller Adapter）：负责适配不同媒体控制器的接口，包括音频、视频、屏幕共享等。</li><li>媒体服务器（Media Server）：负责提供媒体流服务，包括音频、视频、屏幕共享等。</li><li>媒体服务器适配器（Media Server Adapter）：负责适配不同媒体服务器的接口，包括音频、视频、屏幕共享等。</li><li>媒体控制器和媒体服务器之间通过媒体控制器适配器和媒体服务器适配器进行通信。</li><li>呼叫管理器和呼叫控制器之间通过呼叫管理器适配器和呼叫控制器适配器进行通信。</li></ol><h2 id="接口定义" tabindex="-1">接口定义 <a class="header-anchor" href="#接口定义" aria-label="Permalink to &quot;接口定义&quot;">​</a></h2><p>视频呼叫系统的接口定义如下：</p><h3 id="呼叫管理器接口" tabindex="-1">呼叫管理器接口 <a class="header-anchor" href="#呼叫管理器接口" aria-label="Permalink to &quot;呼叫管理器接口&quot;">​</a></h3><ul><li>呼叫请求：呼叫请求接口，由呼叫管理器适配器调用，向呼叫控制器发送呼叫请求。</li><li>呼叫接听：呼叫接听接口，由呼叫控制器适配器调用，向呼叫管理器发送呼叫接听。</li><li>呼叫转移：呼叫转移接口，由呼叫管理器适配器调用，向呼叫控制器发送呼叫转移。</li><li>呼叫中：呼叫中接口，由呼叫控制器适配器调用，向呼叫管理器发送呼叫中。</li><li>呼叫结束：呼叫结束接口，由呼叫管理器适配器调用，向呼叫控制器发送呼叫结束。</li></ul><h3 id="呼叫控制器接口" tabindex="-1">呼叫控制器接口 <a class="header-anchor" href="#呼叫控制器接口" aria-label="Permalink to &quot;呼叫控制器接口&quot;">​</a></h3><ul><li>呼叫建立：呼叫建立接口，由呼叫控制器适配器调用，向呼叫管理器发送呼叫建立。</li><li>呼叫接通：呼叫接通接口，由呼叫管理器适配器调用，向呼叫控制器发送呼叫接通。</li><li>呼叫拒绝：呼叫拒绝接口，由呼叫控制器适配器调用，向呼叫管理器发送呼叫拒绝。</li><li>呼叫挂断：呼叫挂断接口，由呼叫控制器适配器调用，向呼叫管理器发送呼叫挂断。</li></ul><h3 id="媒体控制器接口" tabindex="-1">媒体控制器接口 <a class="header-anchor" href="#媒体控制器接口" aria-label="Permalink to &quot;媒体控制器接口&quot;">​</a></h3><ul><li>音频流：音频流接口，由媒体控制器适配器调用，向媒体服务器发送音频流。</li><li>视频流：视频流接口，由媒体控制器适配器调用，向媒体服务器发送视频流。</li><li>屏幕共享：屏幕共享接口，由媒体控制器适配器调用，向媒体服务器发送屏幕共享流。</li></ul>',16),o=[t];function d(n,c,h,s,p,_){return e(),l("div",null,o)}const f=a(r,[["render",d]]);export{m as __pageData,f as default};
