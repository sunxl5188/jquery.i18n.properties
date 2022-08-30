$(function () {
  function loadLanguage (lang = 'zh') {
    $.i18n.properties({
      name: 'i18n',//资源文件名称
      language: lang,//语言代码
      path: 'i18n/',//文件的目录路径
      mode: 'map',//用Map的方式使用资源文件中的值 “vars”（默认）、“map”或“both”
      debug: true,//打开控制台调试语句
      cache: false,//捆绑包是否应该由浏览器缓存
      encoding: 'UTF-8',//请求捆绑包的编码
      namespace: 'HOME',
      callback: function () {//加载成功后设置显示内容
        $('[data-i18n]').each(function () {
          const keys = $(this).attr('data-i18n').toUpperCase()
          $(this).text($.i18n.prop(keys))
        })
      }
    })
  }
  let lang = 'zh'
  loadLanguage(lang)

  $(document).on('click', '.btn1', function () {
    lang = lang === 'zh' ? 'en' : 'zh'
    loadLanguage(lang)
  })

})
