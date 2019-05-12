import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Article } from './article.model';
/* 
    定义了这个新组件总共用到了三部分代码
    1. 在模板中定义了ArticleComponent的视图
    2. 通过为类加上@Component注解定义了ArticleComponent组件的元数据
    3. 定义了一个组件定义类(ArticleComponent),其中是组件本身的逻辑
    
    @Component定义了一个新组件,selector表示会用app-article标签将该组件放在页面中

    在Angular中,组件的宿主就是该组件所附着到的元素,你会注意到,我们在@Component中传入了一个选项,host: {class: 'row'}
    它告诉Angular:我们要在宿主元素(app-article)标签上设置class属性,使其具有row类

    这个host选项,它意味着我们可以把app-article的页面脚本封装在组建之内,也就是说,我们不必在使用app-article标签的同时要求父视图中的页面脚本具有class=“row”属性,记住host选项,我们就可以在组建的内部配置宿主元素了
 *
 */
@Component({
  selector: 'app-article',  // 选择器的标签名,当页面被渲染出来时,这些标签仍然会留在视图中
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row' // 希望app-article都独占一行,我们使用的是Semantic UI,它提供了一个用来表示行的css类,叫做row
  }
})
export class ArticleComponent implements OnInit {
 /*  votes: number;  // 一个数字,用来表示所有赞,减去所有‘踩’的数量之和
  title: string;  // 一个字符串,用来存放文章的标题
  link: string;   // 一个字符串,用来存放文章的URL

  constructor() { // 在constructor设置了一些默认属性
    this.title = 'Angular2';
    this.link = 'http://angular.io';
    this.votes =  10;
  } */
  @Input() article: Article;

  voteUp(): boolean {  // 组件上的voteUp()函数是与组件的视图有关的
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}