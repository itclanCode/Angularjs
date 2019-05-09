import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

/* 
* @NgModule是注解,像所有注解一样,这段@NgModule()代码为紧随其后的AppModule类添加了元数据
* @NgModule注解有三个属性:declarations，imports和boostrap
  declarations指定了在该模块中定义的组件,你可能注意到了,当我们使用ng generate时,它会自动把生成的组件添加到这个列表里,这里涉及到一个重要的思想
  imports描述了该模块有哪些依赖,我们正在建立一个浏览器应用,因此要导入BrowserModule
  bootstrap告诉Angular,当使用该模块引导应用时,我们要把AppComponent加载为顶层组件
* 
*/
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserListComponent,
    UserItemComponent
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
