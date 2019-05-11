import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';  // 导入新编的组件

@NgModule({
  declarations: [ // 把ArticleComponent添加到declartion列表中
    AppComponent,
    ArticleComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* 
*  如果用AngularJS,可能会惊讶于本应用不知道这个新的app-article组件,这回因为在Angularjs中,指令的匹配是全局的,而Angular中,你需要明确指定要使用哪个组件(即哪个选择器)
*  为了把这个新的ArticleComponent组件引荐给AppComponent,我们需要把Article-Component添加到NgModule的declarations列表中
*
* 之所以要把ArticleComponent添加到declarations中,是因为Article-Component是该模块(RedditAppModule)的一部分,然而,如果Article-Component是其他模块的一部分,可能就得通过imports来导入它了
* 后面还会更深入的讨论NgModule,现在你只需要知道,当创建新组件时,必须同时把它放进NgModule的declarations中
*
*
*
 */


