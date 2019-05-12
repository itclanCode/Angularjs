export class Article {  // 定义了一个新的类
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
/* 
// 而Article模型上的voteUp()定义了模型上的变化,也就是说,当投票时,Article类可以对模型行的相应的功能进行封装
   在真实的应用中,Article模型的内部可能更加的复杂,比如向web服务器发起一个API调用,而你显然不希望这些本属于模型的代码出现在组建的控制器中
   同样,在ArticleComponent中,我们return false;从而阻止事件冒泡,这是属于视图的逻辑片段,我们不希望Article模型上的voteUp()函数懂得这些与视图有关的API
   也就是说,Article模型应该让投票逻辑从特定的视图中分离出来

 */
  voteUp(): void { 
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}

/* 
*  创建Article类
*  写Angular代码的最佳实践之一就是尝试从组件代码中把你正在使用的数据结构隔离出来,要做到这一点,就要创建一个数据结构,用以表示单个文章,下面就创建一个新的article.model.ts来定义所需的Aticle类吧
*  创建了一个新的类,用来表示Article,注意,这是一个普通类而不是Angular组件,在MVC模式中,它被称为模型(model))
*  每篇文章都有一个标题title,一个链接link和一个投票总数votes,当创建文章时,我们需要title和link,votes参数是可选的(用末尾的?标出来),并且默认为0
*  
*  现在,我们来修改ArticleComponent的代码,让它使用新的Article类,以前是直接把这些属性存到ArticleComponent组件上,现在则吧它改为存到Article类的一个实例上
*   
*  迪米特法则是:一个对象对其他对象的结构或属性所作的假设应该越少越好
*  
*  为什么模型中和组件中都有一个voteUp函数?
*  原因在于,这两个函数所做的事情略有不同,ArticleComponent上的voteUp()函数是与组件的视图有关的,而Article模型上的voteUp()定义了模型上的变化
*  也就是说,当投票时,Article类可以对模型上的相应的功能进行封装,在真实的应用中,而你显然不希望这些本属于模型的代码出现在组件的控制器中
*  同样,在ArticleComponet中,我们return false;从而阻止事件冒泡,这是属于视图的逻辑片段,我们不希望Article模型上的voteUp()函数懂得这些与视图有关的API
*  也就是说,Article模型应该投票逻辑从特定的视图中分离出来
*  MVC的思想是:我们要把大部分领域逻辑移到模型中,以便让组件只做尽可能少的工作
*
 */