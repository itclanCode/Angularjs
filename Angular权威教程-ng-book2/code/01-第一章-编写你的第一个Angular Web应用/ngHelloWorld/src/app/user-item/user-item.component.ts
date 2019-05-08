import { Component, 
         OnInit,
         Input      // added this 
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
/* 
* 修改了name属性,使其具有一个@input注解
* 该语法能让我们从父模板中传进来一个值
* 为了使用Input,我们还得把它添加到import的列表中去
* 最后,我们不希望为name设置默认值,因此从构造函数中移除它
* 现在我们有了一个名叫name和inut,那么该如何使用它?
*
*
*/
export class UserItemComponent implements OnInit {
  @Input() name: string; // add input annotation

  constructor() { 
    // this.name =  'itclanCoder';
    // removed setting name
  }

  ngOnInit() {
  }

}
