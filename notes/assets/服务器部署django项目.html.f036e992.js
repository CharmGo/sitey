import{e as n}from"./app.ae0e5040.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var e="/notes/assets/47c41deec22ae555e4437cb08b284716.f83da0b6.png";const a={},r=n(`<h2 id="\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u8F6F\u4EF6</h2><p>pip3 install django pip3 install uwsgi apt install uwsgi apt install nginx</p><hr><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

def application(env, start_response):
    start_response(&#39;200 OK&#39;, [(&#39;Content-Type&#39;,&#39;text/html&#39;)])
    return [b&#39;Hello World&#39;]

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --http :8000 --wsgi-file test.py

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="\u914D\u7F6Euwsgi" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Euwsgi" aria-hidden="true">#</a> \u914D\u7F6Euwsgi</h2><p>\u5728\u9879\u76EE\u9876\u7EA7\u6587\u4EF6\u5939\u4E0B\u914D\u7F6Euwsgi.ini\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[uwsgi]

socket = :8888
chdir           = /home/setup/myweb
module          = myweb.wsgi
master          = true
processes       = 4
vacuum          = true

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="`+e+`" alt="47c41deec22ae555e4437cb08b284716.png"></p><p>\u4F7F\u7528\u547D\u4EE4\u542F\u52A8\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --ini uwsgi.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F00\u673A\u81EA\u542F\u52A8<code>sudo vi /etc/rc.local</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --ini /home/setup/myweb/uwsgi.ini &amp;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>$\\color{red}{\u6CE8\u610F}$:\u8981\u6DFB\u52A0\u5230 exit 0 \u4E4B\u524D\uFF0C&amp; \u8868\u793A\u8BE5\u670D\u52A1\u662F\u5728\u540E\u53F0\u6267\u884C\u3002</p><h2 id="\u914D\u7F6Enginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Enginx" aria-hidden="true">#</a> \u914D\u7F6Enginx</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Django 2.0 \u9879\u76EE\u90E8\u7F72
server {

    listen          80; 
    server_name     data.labideas.cn 
    charset         UTF-8;
    access_log      /var/log/nginx/myweb_access.log;
    error_log       /var/log/nginx/myweb_error.log;

    client_max_body_size 75M;

    location / { 

        include uwsgi_params;
        uwsgi_pass 127.0.0.1:8888;
        uwsgi_read_timeout 2;
    }   

    location /static {

        expires 30d;
        autoindex on; 
        add_header Cache-Control private;
        alias /home/setup/myweb/static/;
    }   
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>django\u7BA1\u7406\u5458\u9875\u9762\u627E\u4E0D\u5230\u9759\u6001\u6587\u4EF6 \u8BBE\u7F6E\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>STATIC_URL = &#39;/static/&#39;
STATIC_ROOT = os.path.join(BASE_DIR, &#39;static&#39;)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8DEF\u7531urls.py</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>urlpatterns = [
    path(&#39;admin/&#39;, admin.site.urls),
    path(&#39;api/&#39;,views.api)
] + static(settings.STATIC_URL,document_root = settings.STATIC_ROOT)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6267\u884C <code>python manage.py collectstatic</code></p>`,23);function l(i,p){return r}var b=s(a,[["render",l]]);export{b as default};
