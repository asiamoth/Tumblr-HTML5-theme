# Tumblr HTML5 theme

Tumblr のテーマを HTML5 で組んでみます！

注意: 現在のところ、Google Analytics や Feed などのコードが *asiamoth（自分）専用*になっています。HTML ファイルは、**そのままの状態では使えません**。

## 各ファイルの説明

### HTML

#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/template.html">template.html</a>

Tumblr に設定する テーマの中身。

#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/output.html">output.html</a>

上記のテンプレートにて実際に出力した結果（おもにデバッグ用）。


### (S)CSS

#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/styles.scss">styles.scss</a>

SCSS（<a href="http://sass-lang.com/" title="Sass - Syntactically Awesome Stylesheets">Sass</a>）でスタイルシートを記述した。

（SCSS の参考: <a href="http://hail2u.net/documents/sass-tutorial.html" title="Sass - チュートリアル">Sass - チュートリアル</a>）


#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/styles.css">styles.css</a>

styles.scss を CSS へ出力した結果。


#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/styles-min.css">styles-min.css</a>

`compressed` オプションで styles.scss を出力。


#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/_default.scss">_default.scss</a>

いつも使う設定をまとめた SCSS。


#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/_color-japanese.scss">_color-japanese.scss</a>

参考: <a href="http://color-japanese.rubyforge.org/examples/traditional.html" title="color-japanese: Color::RGB::JP::Traditional">color-japanese: Color::RGB::JP::Traditional</a>

### リセット CSS

#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/_html5-rendering.scss" title="_html5-rendering.scss">_html5-rendering.scss</a>

参考: <a href="http://d.hatena.ne.jp/Syunpei/20100108/1262916962" title="HTML5用のリセットCSS（正式版？） - IT-Walker on hatena">HTML5用のリセットCSS（正式版？） - IT-Walker on hatena</a>


#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/_default.scss">_html5reset-1.6.1.scss</a>

参考: <a href="http://html5doctor.com/html-5-reset-stylesheet/">HTML5 Reset Stylesheet | HTML5 Doctor</a>

#### <a href="https://github.com/asiamoth/Tumblr-HTML5-theme/blob/master/_html5-reset.scss">_html5-reset.scss</a>

上の 2 つを合わせて <a href="http://css.webcreativepark.net/csstidy/" title="CSS Optimizer (CSS最適化ツール)-CSS TIPS">CSS Optimizer (CSS最適化ツール)-CSS TIPS</a> にて圧縮した。


## オリジナルのテーマ

Scott Dowding が作成した "Generic HTML5" テーマを元にしました。

2011/03/03 現在、Tumblr の HTML5 公開テーマは Scott のモノだけという……。

<a href="http://www.tumblr.com/theme/9731" title="Tumblr">Generic HTML5 - Tumblr</a>