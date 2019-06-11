### 2.1 Angular是用TypeScript构建的

TypeScript并不是一门全新的语言,而是Es6的超集,所有的Es6代码都是完全有效且可编译的TypeScript代码

安装TypeScript的坏境:npm intall -g typescript

TypeScript并不是开发Angular应用的必选语言,我们同样可以使用Es5代码(普通的javascript)来开发Angular应用. Angular也为全部功能提供了Es5 API,那为什么我们还要使用TypeScript呢?这是因为TypeScript有不少强大的功能,能极大的简化开发

### 2.2 TypeScript提供了哪些特性

* 类型
* 类
* 注解
* 模块导入
* 语言工具包(比如：解构)

### 2.3 类型

缺乏类型检查正是javascript这些弱类型语言的优点,类型检查的好处有

* 有助于代码的编写,因为它可以在编译期预防bug
* 有助于代码的阅读,因为它能清晰的表明你的意图

另外值得一提的是,TypeScript的类型是可选的,如果希望写一些快速代码或功能原型,可以首先省略类型,然后在随着代码日趋成熟逐渐加上类型

TypeScript的基本类型与我们平时所写的javascript代码中用的隐式类型一样,包括字符串,数字,布尔值等

TypeScript的新语法hi从Es5自然演化来的,仍然用var来定义变量,但现在可以同时为变量名提供可选的变量类型了

```
var name = string;
```
在声明函数时,也可以为函数参数和返回值指定类型
```
function greetText(name:string): string {
    return "Hello"+name;
}
```

定义了一个名为greetText的新函数,它接收一个名为name的参数,name:string语法表示函数想要的name参数是string类型,如果给该函数传一个string以外的参数,代码将无法编译通过,否则的话,这段代码将会引入bug

greetText函数在括号后面还有一个新语法:string {}冒号之后指定的是该函数的返回值类型,在本例中为string,这很有用,原因有二,如果不小心让函数返回了一个非string型的返回值,编译器就会告诉我们这里有错误,使用该函数的开发人员也能很清晰地知道将会拿到什么类型的数据

我们来看看如果写了不符合类型声明的代码会怎么样

```
function hello(name:string): string {
    return 12;
}
```

当尝试编译代码时,将会得到下面的错误

### 内置类型

### 2.4.1 字符串

字符串包含文本,声明为string类型:

```
var sName: string = 'itclanCoder';
```

### 2.4.2 数字

无论整数还是浮点,任何类型的数字都属于number类型,在TypeScript,所有的数字用浮点书表示的,这些数字的类型就是number

### 2.4.3 布尔类型

布尔类型(boolean)以true(真)和false(假)为值

### 2.4.4 数组

数组用Array类型表示,然而,因为数组是一组相同数据类型的集合,所以我们还需要为数组中的条目指定一个类型

我们可以用Array<type>或者type[]语法来为数组条目指定元素类型
```
var jobs: Array<string> = ['IBM','Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];
```
数字型数组的声明与之类似
```
var jobs: Array<number> = [1,2,3];
var jobs: number[] =  [4,5,6];
```

### 2.4.5 枚举

枚举是一组可命名数值的集合,比如:我们想拿到某人的一系列角色,可以这么写:
```
enum Role {Employ,Manager,Admin};
var role: Role = Role.Employee;
```
默认情况下，枚举类型的初始值是0,我们也可以调整初始化值的范围:
```
enum Role {Employee = 3, Manager, Admin};
var role: Role = Role.Employee;
```

在上面的代码中,Employee的初始值被设置为3而不是0，枚举中其他项的值是依次递增的,意味着Manager的值为4,Admin的值为5，同样,我们也可以单独为枚举中的每一项指定值:
```
enum Role {Employee = 3, Manager= 5, Admin = 7};
var  role:Role = Role.Employee;
```
还可以从枚举的值来反查它的名称
```
enum Role {Employee, Manager, Admin};
console.log('Role', Role[0], '', Role[1], 'and', Role[2]);
```

尝试使用REPL

为了运行本章的例子,可以安装一个小工具,名为TSUN(TypeScript Upgraded Node),支持TypeScript升级版Node
* npm install -g tsun 

### 2.4.6 任意类型

如果我们没有为变量指定类型,那它的默认类型就是any, 在TypeScript中,any类型的变量能够接收任意类型的数据

```
var something: any = 'as string';

something = 1;
something =  [1, 2, 3];
```

### 无类型

void以为这我们不期望那里有类型,它通常用作函数的返回值,表示没有任何返回值
```
function setName(name: string): void {
   this.name = name;
}
```

### 2.5 类

javascript Es5采用的是基于原型的面向对象设计，这种设计模型不使用类,而是依赖于原型

不过在Es6中,终于有内置的类了

用class关键字来定义一个类,紧随其后后的是类名和类的代码块

```
class Venicle {

}
```

类可以包含属性,方法以及构造函数

### 2.5.1 属性

属性定义了类实例对象的数据,比如名叫Person的类可能有first_name,last_name和age属性

类中的每个属性都可以包含一个可选的类型,比如:我们可以把first_name和last_name声明为字符串类型string,把age声明为数字类型(number)

Person类的声明是这样的
```
class Person {
  first_name: string;
  last_name: string;
  age: number
}
```

### 2.5.2 方法

方法是运行在类对象实例上下文中的函数,在调用对象的方法之前,必须要有这个对象的实例

要实例化一个类,我们使用New关键字,比如new Person()会创建一个Person类的实例对象

如果我们希望问候某个Person,就可以这样写
```
class Person {
  first_name: string;
  last_name: string;
  age: number;

  greet() {
     console.log("Hello", this.first_name);
  }

}

```

注意借助this关键字,我们能用this.first_name表达式来访问Person类的first_name属性

如果没有显示声明过方法的返回类型和返回值,就会假定它可能返回任何东西(即any类型）然而,因为这里没有任何显示的return语句,所以实际返回的类型是void

注意:void类型也是一种合法的any类型

调用greet方法之前,我们要有一个Person类的实例对象,代码如下

```
var p: person;// 声明一个变量,类型为person

p = new Person(); // 实例化一个构造函数

p.first_name = "Fielipe";

p.greet();

我们还可以将对象的声明和实例化缩写为一行代码
var p: Person = new Person()
```
假设我们希望Person类有一个带返回值的方法,比如:要获取某个Person在数年后的年龄,我们可以这样写
```
class Person {
  first_name: string;
  last_name: string;
  age: number;

  greet() {
    console.log("Hello", this.first_name);
  }

  ageInYears() {
      return this.age + years;
   }

   // instantiate a new Person instance
   var p: Person = new Person();

   // set initial age
   p.age = 6;

   // how old will he be in 12 years
   p.ageInyears(12);
 }
```

### 构造函数

构造函数是当类进行实例化时执行的特殊函数,通常会在构造函数中对新对象进行初始化工作

构造函数必须命名为constructor，因为构造函数是在类被实例化时调用的,所以它们可以有输入参数,但不能有任何返回值

我们要通过调用New className()来执行构造函数,以完成类的实例化

当类没有显示的定义构造函数时,将自动创建一个无参数构造函数

```
class Vehicle {

}

var v = new Vehicle();
它等价于
class Venicle {
  constructor(){
  
  }
}

var v = new Vehicle();

在TypeScript中,每个类只能有一个构造函数,这是违背Es6的标准的,一个类可以拥有不同参数数量的多个构造函数重载实现
```

我们可以使用带擦书的构造函数来将对象的创建工作参数化

比如:我们可以对Person类使用构造函数来初始化它的数据

```
class Person {
  first_name: string;
  last_name: string;
  age: number;

  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  greet() {
    console.log("Hello", this.first_name);
  }

  ageInYears(years:number):number {
     return this.age + years;
  }
}
```

用下面的这种方法重写前面的例子要容易些:
```
var p: Person = new Person('Felipe', 'Coury', 36);
p.greet();

当创建这个对象的时候,其姓名,年龄都会被初始化
```

### 2.5.4 继承

面向对象的另一个重要的特性就是继承,继承表明子类能够从父类得到它的行为,然后,我们就可以在这个子类中重写,修改及添加行为


