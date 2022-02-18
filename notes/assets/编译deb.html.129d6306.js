import{e as n}from"./app.ae0e5040.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h2 id="\u7F16\u8BD1\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u89C4\u8303" aria-hidden="true">#</a> \u7F16\u8BD1\u89C4\u8303</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0 -  Maintainer: [ Deepin Linux ]
1 -  Summary: [ \u9002\u4E8EDeepin Linux\u7684PHP7.4.25 ]
2 -  Name:    [ php.deepin ]
3 -  Version: [ 7.4.25 ]
4 -  Release: [ 1 ]
5 -  License: [ GPL ]
6 -  Group:   [ php.net &amp; checkinstall &amp; charmgo ]
7 -  Architecture: [ amd64 ]
8 -  Source location: [ php7425 ]
9 -  Alternate source location: [  ]
10 - Requires: [  ]
11 - Provides: [ charm-pc ]
12 - Conflicts: [  ]
13 - Replaces: [  ]

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="php\u7BC7" tabindex="-1"><a class="header-anchor" href="#php\u7BC7" aria-hidden="true">#</a> php\u7BC7</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>autoconf automake libtool re2c build-essential libxml2 libxml2-dev

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p><code>--prefix=$HOME/Applib</code>\u5B89\u88C5\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--enable-fpm --enable-litespeed --enable-phpdbg --enable-phpdbg-webhelper --enable-phpdbg-debug --enable-phpdbg-readline --with-valgrind --enable-debug --enable-sigchild --enable-dmalloc --enable-dtrace --enable-fd-setsize --enable-werror --without-libxml --with-openssl --with-kerberos --with-system-ciphers --with-external-pcre --with-pcre-jit --without-sqlite3 --with-zlib --enable-bcmath --enable-calendar --disable-ctype --with-curl --enable-exif --with-ffi --enable-ftp --enable-gd  --with-external-gd --with-webp --with-jpeg --with-xpm --with-freetype --enable-gd-jis-conv --with-gettext --with-gmp --with-mhash --without-iconv --with-imap --with-kerberos --with-imap-ssl --enable-intl --with-ldap  --with-ldap-sasl --enable-mbstring --with-mysqli --with-oci8 --with-odbcver --with-adabas --with-sapdb --with-solid --with-ibm-db2 --with-empress --with-empress-bcs --with-custom-odbc --with-pdo-dblib --with-pdo-firebird --with-pdo-mysql --with-pdo-oci --with-pdo-odbc --without-pdo-sqlite --with-libedit --with-readline --disable-session --enable-shmop --with-xsl --with-zip --enable-mysqlnd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>auto-apt run ./configure --enable-bcmath --with-bz2 --enable-calendar --with-curl --enable-exif --with-ffi --enable-ftp --enable-gd --with-external-gd --with-webp --with-jpeg --with-xpm --with-freetype --enable-gd-jis-conv --with-gettext --with-gmp --with-iconv --enable-intl --with-libxml --with-mysqli --with-pdo-mysql --with-pdo-sqlite --enable-sockets --with-expat --with-xmlrpc --with-xsl --with-zip --with-zlib --with-openssl --enable-fpm --without-sqlite3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Installing shared extensions:     /usr/local/lib/php/extensions/no-debug-non-zts-20190902/
Installing PHP CLI binary:        /usr/local/bin/
Installing PHP CLI man page:      /usr/local/php/man/man1/
Installing PHP FPM binary:        /usr/local/sbin/
Installing PHP FPM defconfig:     /usr/local/etc/
Installing PHP FPM man page:      /usr/local/php/man/man8/
Installing PHP FPM status page:   /usr/local/php/php/fpm/
Installing phpdbg binary:         /usr/local/bin/
Installing phpdbg man page:       /usr/local/php/man/man1/
Installing PHP CGI binary:        /usr/local/bin/
Installing PHP CGI man page:      /usr/local/php/man/man1/
Installing build environment:     /usr/local/lib/php/build/
Installing header files:          /usr/local/include/php/
Installing helper programs:       /usr/local/bin/
 program: phpize
 program: php-config
Installing man pages:             /usr/local/php/man/man1/
 page: phpize.1
 page: php-config.1
/mnt/c/Users/charm/Desktop/php7425/build/shtool install -c ext/phar/phar.phar /usr/local/bin/phar.phar
ln -s -f phar.phar /usr/local/bin/phar
Installing PDO headers:           /usr/local/include/php/ext/pdo/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,10);function l(i,p){return s}var b=e(a,[["render",l]]);export{b as default};
