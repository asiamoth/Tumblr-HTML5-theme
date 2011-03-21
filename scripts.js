// Rakuten Widget Setting
rakuten_design="slide";rakuten_affiliateId="00428c50.b553f708.044c5338.caf05aa7";rakuten_items="ranking";rakuten_genreId="0";rakuten_size="468x160";rakuten_target="_blank";rakuten_theme="natural";rakuten_border="off";rakuten_auto_mode="off";rakuten_genre_title="off";rakuten_recommend="on";rakuten_ver="20100708";

var MY = {};

// http://la.ma.la/misc/js/lazy_writer/
MY.lazy_writer = (function(){
  function lazy_writer(url, callback, option){
    var session = {
    script_count  : 0,
    call_count    : 0,
    context       : [],
    stash         : {},
    timer         : null,
    delay         : 0,
    current_script: null
  };
    if(option){
      for(var key in option){
        session[key] = option[key];
      }
    }
    var f = function(script, str){
      session.call_count++;
      if(session.timer){
        clearTimeout(session.timer)
      }
      // run other script -> force write old script
      if(session.current_script && session.current_script != script){
        callback.call(session, session.context.join(""));
        session.context = [];
        session.current_script = script;
        session.script_count++;
      } else if(session.current_script != script){
        session.current_script = script;
        session.script_count++;
      }
      session.context.push(str);
      session.timer = setTimeout(function(){
        callback.call(session, session.context.join(""));
        session.context = [];
      }, session.delay);
    };
    lazy_writer.register(url, f);
  }
  lazy_writer.writers = {};
  lazy_writer.patterns = [];
  lazy_writer.register = function(expr, callback){
    var pair;
    if(typeof expr == 'string'){
      lazy_writer.writers[expr] = callback;
      pair = [function(url){return url.indexOf(expr) != -1}, callback];
    }
    if(typeof expr == 'function'){
      pair = [expr, callback];
    }
    if(expr.constructor == RegExp){
      pair = [function(url){return expr.test(url)}, callback];
    }
    pair && lazy_writer.patterns.push(pair);
  };
  lazy_writer.exists = function(url){
    return lazy_writer.fetch(url) ? true : false;
  };
  lazy_writer.fetch = function(url){
    if(lazy_writer.writers.hasOwnProperty(url)){
      return lazy_writer.writers[url]
    }
    for(var i=0,pair;pair=lazy_writer.patterns[i];i++){
      if(pair[0](url)) return pair[1]
    }
  };
  var original_document_write = document.write;
  document._write = document.write;
  function getCurrentScript(){
    return (function (e) {
      if(e.nodeName.toLowerCase() == 'script') return e;
      return arguments.callee(e.lastChild)
    })(document);
  }
  document.write = function(){
    var current = getCurrentScript();
    var writer;
    if(writer = lazy_writer.fetch(current.src)){
      var args = Array.prototype.slice.call(arguments);
      writer(current, args.join(""));
    } else {
      try{
        // doesn't work in IE and Safari
        original_document_write.apply(document, arguments);
      } catch(e){
        var args = Array.prototype.slice.call(arguments);
        try {
          original_document_write(args.join("")); // for IE
        } catch(e){
          document._write(args.join("")); // for Safari
        }
      }
    }
  };
  return lazy_writer;
})();

MY.rakutenWidget_url = 'http://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js';
MY.lazy_writer(MY.rakutenWidget_url, function(str){
  document.getElementById('rakutenWidget').innerHTML = str;
});
