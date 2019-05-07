import { Component, OnInit } from '@angular/core';
/* 
*  selector:用来指出该组件将使用哪个DOM元素,如果模板中有<app-hello-world></app-hello-world>标签,就用该Component类以及组件定义信息对其进行编译
*  templateUrl:添加模板,当然也可以使用template添加模板
*  styleUrls:添加css样式,在下面的代码中,表达的意思是:使用hello-world.component.css文件中的css作为该组件的样式,Angular使用一项叫做样式封装的技术,它意味着在特定组件中指定的样式只会应用于该组件本身
*  该属性与template有个不同点,它接收一个数组型的参数,这是因为我们可以为同一个组件加载多个样式表
*
*/
@Component({
  selector: 'app-hello-world',  
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
