#jquery.i18n.properties 国际化语言处理

##介绍
jquery.i18n.properties是一款轻量级的国际化插件，采用.properties文件来对javascript文件进行国际化，即根据用户指定的语言和国家编码来解析对应的以".properties"为后缀的文件。


```$xslt
i18n.properties
i18n_zh.properties
i18n_en.properties
```

##API
jQuery.i18n.properties相对于其他的插件，只有少量的API，即 . i 18 n . p r o p e r t i e s ( ) 、 .i18n.properties()、 .i18n.properties()、.i18n.prop()、$.i18n.normaliseLanguageCode()等:

###jQuery.i18n.properties
<div class="table-box"><table><thead><tr><th align="left">选项</th><th align="left">描述</th><th align="left">类型</th><th align="left">可选</th></tr></thead><tbody><tr><td align="left">name</td><td align="left">资源文件的名称</td><td align="left">string | [string]</td><td align="left">否</td></tr><tr><td align="left">language</td><td align="left">指定语言编码： （en： 英文， zh： 中文），或者同时指定语言编码和国家编码(例如： zh_CN, en_US)等</td><td align="left">string</td><td align="left">是</td></tr><tr><td align="left">path</td><td align="left">资源文件所在的路径</td><td align="left">string</td><td align="left">否</td></tr><tr><td align="left">mode</td><td align="left">加载模式： “vars”表示以javascript变量和函数的形式使用文件中的key，“map”表示以Map的方式使用文件中的key，“both”表示可以同时使用两种方式。如果资源文件中的key包含javascript中的关键字，只能使用map。默认值是vars。</td><td align="left">string</td><td align="left">是</td></tr><tr><td align="left">cache</td><td align="left">指定浏览器是否缓存资源文件，默认false</td><td align="left">boolean</td><td align="left">是</td></tr><tr><td align="left">encoding</td><td align="left">指定加载资源文件时的编码格式，默认utf-8</td><td align="left">string</td><td align="left">是</td></tr><tr><td align="left">debug</td><td align="left">控制台是否记录记录log</td><td align="left">boolean</td><td align="left">是</td></tr><tr><td align="left">async</td><td align="left">指定调用callback（回调）函数的方式，false: 所有的资源文件加载请求发送完毕后就调用回调函数， true：所有的资源加载并解析完成后才调用回调函数。默认false</td><td align="left">boolean</td><td align="left">是</td></tr><tr><td align="left">namespace</td><td align="left">指定资源文件的keys被存放在namespace下，即$.i18n.properties[namespace][key], 使用namespace可以最大限度的减少冲突和重写的概率; 默认为null不使用namespace</td><td align="left">string</td><td align="left">是</td></tr><tr><td align="left">callback</td><td align="left">方法执行完的回调函数</td><td align="left">function</td><td align="left">是</td></tr></tbody></table></div>

```$xslt
 $.i18n.properties({
      name: 'i18n',//资源文件名称
      language: lang,//语言代码
      path: 'i18n/',//文件的目录路径
      mode: 'map',//用Map的方式使用资源文件中的值 “vars”（默认）、“map”或“both”
      debug: true,//打开控制台调试语句
      cache: false,//捆绑包是否应该由浏览器缓存
      encoding: 'UTF-8',//请求捆绑包的编码
      namespace: 'HOME', // 使用命名空间
      callback: function () {//加载成功后设置显示内容
        $('[data-i18n]').each(function () {
          const keys = $(this).attr('data-i18n').toUpperCase()
          $(this).text($.i18n.prop(keys))
        })
      }
    })

```

###$.i18n.prop(key)
通过key以Map的形式获取资源文件中对应的值
```$xslt
$('#content).html($.i18n.prop('msg_hello'));
```

###$.i18n.normaliseLanguageCode(settings)
1.    当settings没有language属性或language属性值不符合规范时，获取浏览器的语言编码，格式化并返回语言编码。
2.当settings中language满足要求时，格式化并返回语言编码。

