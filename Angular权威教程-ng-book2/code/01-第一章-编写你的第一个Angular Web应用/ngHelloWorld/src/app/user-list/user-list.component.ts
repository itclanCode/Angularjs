import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // 存储一个字符串数组,数组的语法就是在类型的后面紧跟一对方括号[]

  constructor() { 
    this.names = ['Ari', 'Carlos', 'Feile', 'Nate'];
  }

  ngOnInit() {
  }

}
