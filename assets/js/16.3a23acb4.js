(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{406:function(e,v,_){e.exports=_.p+"assets/img/viewModel_14.41cc5962.png"},464:function(e,v,_){e.exports=_.p+"assets/img/viewModel_01.d9ab9aac.png"},465:function(e,v,_){e.exports=_.p+"assets/img/viewModel_02.c15f157c.png"},466:function(e,v,_){e.exports=_.p+"assets/img/viewModel_03.54972283.png"},467:function(e,v,_){e.exports=_.p+"assets/img/viewModel_04.69eb9625.png"},468:function(e,v,_){e.exports=_.p+"assets/img/viewModel_05.8c2c745e.png"},469:function(e,v,_){e.exports=_.p+"assets/img/viewModel_06.e54050df.png"},470:function(e,v,_){e.exports=_.p+"assets/img/viewModel_07.82841cbe.png"},471:function(e,v,_){e.exports=_.p+"assets/img/viewModel_22.c6969825.png"},472:function(e,v,_){e.exports=_.p+"assets/img/viewModel_08.a012c56a.png"},473:function(e,v,_){e.exports=_.p+"assets/img/viewModel_09.9afb4210.png"},474:function(e,v,_){e.exports=_.p+"assets/img/viewModel_15.2127b4e6.png"},475:function(e,v,_){e.exports=_.p+"assets/img/viewModel_16.4dbd8912.png"},476:function(e,v,_){e.exports=_.p+"assets/img/viewModel_17.c54abc56.png"},477:function(e,v,_){e.exports=_.p+"assets/img/viewModel_10.29626a50.png"},478:function(e,v,_){e.exports=_.p+"assets/img/viewModel_11.3f66cfd1.png"},479:function(e,v,_){e.exports=_.p+"assets/img/viewModel_12.ce9332df.png"},480:function(e,v,_){e.exports=_.p+"assets/img/viewModel_13.2f727bc6.png"},481:function(e,v,_){e.exports=_.p+"assets/img/viewModel_18.ea58e96a.png"},482:function(e,v,_){e.exports=_.p+"assets/img/viewModel_19.fb2e439f.png"},483:function(e,v,_){e.exports=_.p+"assets/img/viewModel_20.9f47a79c.png"},484:function(e,v,_){e.exports=_.p+"assets/img/viewModel_21.555e24ae.png"},485:function(e,v,_){e.exports=_.p+"assets/img/viewModel_23.0485ebe3.png"},486:function(e,v,_){e.exports=_.p+"assets/img/viewModel_24.49db6135.png"},487:function(e,v,_){e.exports=_.p+"assets/img/viewModel_25.2be50aeb.png"},488:function(e,v,_){e.exports=_.p+"assets/img/viewModel_26.60198c6d.png"},538:function(e,v,_){"use strict";_.r(v);var t=_(2),o=Object(t.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("blockquote",[v("p",[e._v("本章与「状态保存与SavedState」章有较强联系，建议阅读过后再浏览本章节。")])]),e._v(" "),v("h2",{attrs:{id:"_1、viewmodel的来源-从状态保存谈起"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、viewmodel的来源-从状态保存谈起"}},[e._v("#")]),e._v(" 1、ViewModel的来源——从状态保存谈起")]),e._v(" "),v("h3",{attrs:{id:"_1-1、savedstate并不是viewmodel的特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、savedstate并不是viewmodel的特性"}},[e._v("#")]),e._v(" 1.1、SavedState并不是ViewModel的特性")]),e._v(" "),v("p",[e._v("在「状态保存与SavedStated」一章中，提到了"),v("code",[e._v("ViewModel")]),e._v("与"),v("code",[e._v("SavedState")]),e._v("的关系，其中提到了"),v("code",[e._v("SavedStateHandle")]),e._v("的意义是用来解决"),v("code",[e._v("ViewModel")]),e._v("难以「访问组件入参」以及「保存状态」的两个难题。")]),e._v(" "),v("p",[e._v("但是我们回头看"),v("code",[e._v("SavedStateHandle")]),e._v("是如何被引入"),v("code",[e._v("ViewModel")]),e._v("的：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(464),alt:"viewModel_01"}})]),e._v(" "),v("p",[e._v("可以看见，"),v("code",[e._v("SavedStateHandle")]),e._v("通过构造函数传入"),v("code",[e._v("ViewModel")]),e._v("，也就是说"),v("code",[e._v("ViewModel")]),e._v("在默认情况下，是没有「访问组件入参」以及「保存状态」2个功能的，那么"),v("code",[e._v("ViewModel")]),e._v("的对于状态保存的意义在哪里呢?")]),e._v(" "),v("p",[e._v("答案是："),v("code",[e._v("ViewModel")]),e._v("可以在「配置更改导致的"),v("code",[e._v("Activity")]),e._v("重建」后仍然保存自身的实例。")]),e._v(" "),v("p",[e._v("换句话说，开发者使用"),v("code",[e._v("ViewModel")]),e._v("之后，无需担心再花费精力去处理配置更新导致的组件销毁问题，因为"),v("code",[e._v("ViewModel")]),e._v("并不会受到影响。")]),e._v(" "),v("p",[e._v("那么这个「配置更改导致的"),v("code",[e._v("Activity")]),e._v("重建」后仍可以保存实例的机制又是如何实现的呢？")]),e._v(" "),v("h3",{attrs:{id:"_1-2、无人问津的onretainnonconfigurationinstance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、无人问津的onretainnonconfigurationinstance"}},[e._v("#")]),e._v(" 1.2、无人问津的"),v("code",[e._v("onRetainNonConfigurationInstance()")])]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("Activity")]),e._v("的源码中，存在着一个几乎没什么人用的Api——"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("。")]),e._v(" "),v("p",[e._v("这个Api并没有在「状态保存与SavedStated」一章中被介绍的原因也是几乎没人使用它。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(465),alt:"viewModel_02"}})]),e._v(" "),v("p",[e._v("从名字可以看出，这个方法的用途是保存一些与配置无关的实例，读过「状态保存与SavedStated」的读者肯定会联想到"),v("code",[e._v("Activity")]),e._v("中保存实例的方法："),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("，两者的区别如下：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th"),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[v("code",[e._v("onSaveInstanceState(Bundle)")])]),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[v("code",[e._v("onRetainNonConfigurationInstance()")])])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("调用时机")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("组件onStop()前/后被调用")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("配置发生改变时被调用")])]),e._v(" "),v("tr",[v("td",[e._v("支持类型")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("只支持基础类型和Parcelable/Serializable类型")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("支持任意类型")])]),e._v(" "),v("tr",[v("td",[e._v("大小限制")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("受Binder限制，数据不能超过1MB")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("大小不受限制")])]),e._v(" "),v("tr",[v("td",[e._v("实现原理")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("先通过Binder反序列化，再存储于内存中")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("直接存于内存中")])])])]),e._v(" "),v("p",[e._v("回到本节的标题，为什么"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("无论是支持的类型还是大小都遥遥领先于"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("，但它却几乎不受程序员的待见呢？")]),e._v(" "),v("p",[e._v("答案就是它的调用时机过于局限了，这也和这个API的设计初衷有关系，因为它只能用于处理「配置更新导致的Activity销毁」的这种场景，因此它并不是每次都进入"),v("code",[e._v("onStop()")]),e._v("（高版本在之前，低版本在之后）都被调用。")]),e._v(" "),v("p",[e._v("对于配置发生改变时要保存的状态，"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("也能做，即使有类型和大小的限制，程序员们也习惯于统一往"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("中实现所有的状态保存逻辑，因为这能降低维护的复杂性。")]),e._v(" "),v("p",[e._v("以上造就了"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("几乎无人使用的窘境。")]),e._v(" "),v("h3",{attrs:{id:"_1-3、丢掉or进一步扩展-这是一个问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、丢掉or进一步扩展-这是一个问题"}},[e._v("#")]),e._v(" 1.3、丢掉or进一步扩展，这是一个问题")]),e._v(" "),v("p",[e._v("上一节提到，"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("遭遇了程序员的冷落，但是这能证明这个Api是无用的吗？")]),e._v(" "),v("p",[e._v("如果你对Binder的机制有一点了解的话，可以知道的是，为了实现跨进程，所有通过Binder传输的对象都要反复的序列化和反序列化，这就导致了性能上的劣势，当然还存在大小的限制。")]),e._v(" "),v("p",[e._v("如果配置更新导致了组件的销毁，页面中其实存在着有许多不需要跟随配置更改而改变的字段，例如已经加载好的bitmap。对于这类内存巨大的字段用Binder存起来也不合适，这就给"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("这个Api生存的空间，开发者可以通过这个Api缓存一些较大的对象来避免因配置更改后反复加载的缺点。")]),e._v(" "),v("p",[e._v("但是又回到了上一节的问题，这个Api实在不好用，我们应该直接抛弃它吗？答案是否定的。")]),e._v(" "),v("p",[e._v("在1.1节中笔者提到的"),v("code",[e._v("ViewModel")]),e._v("了一个重要特性：「配置更新后不会销毁」，读者是否觉得它与"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("这个Api的特性非常相近呢？对的你没猜错，"),v("code",[e._v("ViewModel")]),e._v("就是基于这个Api来实现其跨越配置更改的特性的。")]),e._v(" "),v("p",[e._v("总结："),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("并不是没用了，而是谷歌基于这个Api实现了"),v("code",[e._v("ViewModel")]),e._v("，开发者只需要使用"),v("code",[e._v("ViewModel")]),e._v("便享受到了这个Api的便利。相对于难以使用的原生Api，"),v("code",[e._v("ViewModel")]),e._v("确实好用特别多。")]),e._v(" "),v("blockquote",[v("p",[e._v("注意一点的是：「不会因配置更新而销毁」并不是"),v("code",[e._v("ViewModel")]),e._v("的全部意义，这个只是它的一个非常重要的特性，"),v("code",[e._v("ViewModel")]),e._v("还有许多优秀的特性这点下面会聊到。")])]),e._v(" "),v("h3",{attrs:{id:"_1-4、viewmodel如何跨越配置更新的鸿沟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、viewmodel如何跨越配置更新的鸿沟"}},[e._v("#")]),e._v(" 1.4、ViewModel如何跨越配置更新的鸿沟")]),e._v(" "),v("p",[e._v("经过前三节的铺垫，笔者想必已经明白了"),v("code",[e._v("ViewModel")]),e._v("是使用"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("来实现避免配置更新导致自身销毁的机制的，具体如何实现本节展开讲讲：")]),e._v(" "),v("blockquote",[v("p",[e._v("关于"),v("code",[e._v("ComponentActivity")]),e._v("，这个"),v("code",[e._v("Activity")]),e._v("的子类在「Lifecycle」与「状态保存」的章节中都频繁出现过，其基本是Jetpac核心功能的基础实现，因此下面的源码也是基于这个子类来讲解。")])]),e._v(" "),v("p",[e._v("我们从"),v("code",[e._v("ComponentActivity")]),e._v("的源码出发，看看核心的代码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(466),alt:"viewModel_03"}})]),e._v(" "),v("p",[e._v("核心代码就一个方法，就是上文提到的"),v("code",[e._v("onReainNonConfigurationInstance()")]),e._v("，而且谷歌还让其标记为final，即不可继承重写，这个方法只会强制返回一个类："),v("code",[e._v("NonConfigurationInstances")]),e._v("，其中包括了一个"),v("code",[e._v("Object")]),e._v("类型的custom，一个"),v("code",[e._v("ViewModelStore")]),e._v("。")]),e._v(" "),v("p",[e._v("标记为final并不意味着开发者不能实现该方法原本非常灵活的任意类型的返回值，而是谷歌将其放在了"),v("code",[e._v("NonConfigurationInstances")]),e._v("这个类的custom中，重写"),v("code",[e._v("onRetainCustomNonConfigutaionInstance()")]),e._v("即可，不过这并不是重点（因为这只是一种兼容老开发模式的手段），该类另外一个成员变量"),v("code",[e._v("ViewModelStore")]),e._v("才是本篇文章的核心。")]),e._v(" "),v("p",[e._v("上文提到，"),v("code",[e._v("NonConfigurationInstances")]),e._v("的核心是"),v("code",[e._v("ViewModelStore")]),e._v("，因此我们可以去掉custom之后单独围绕它来看，那么这个Api就会被简化成下面这样：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(467),alt:"viewModel_04"}})]),e._v(" "),v("p",[e._v("简化后的代码非常清晰，其实就是在保存"),v("code",[e._v("ViewModelStore")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("也许你并不清楚什么"),v("code",[e._v("ViewModelStore")]),e._v("和"),v("code",[e._v("ViewModel")]),e._v("的关系，这里你只需要明白一点即可："),v("code",[e._v("ViewModelStore")]),e._v("是一个缓存"),v("code",[e._v("ViewModel")]),e._v("的容器，通过它就可以拿到"),v("code",[e._v("ViewModel")])])]),e._v(" "),v("p",[e._v("在配置更新时保存"),v("code",[e._v("ViewModelStore")]),e._v("，并在组件重建之后重新拿到"),v("code",[e._v("ViewModelStore")]),e._v("，那么自然而然的就拿到了对应的"),v("code",[e._v("ViewModel")]),e._v("。")]),e._v(" "),v("p",[e._v("我们看看"),v("code",[e._v("ComponentActivity")]),e._v("是如何拿到"),v("code",[e._v("ViewModelStore")]),e._v("的：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(468),alt:"viewModel_05"}})]),e._v(" "),v("p",[e._v("每次"),v("code",[e._v("ComponentActivity")]),e._v("要访问"),v("code",[e._v("ViewModelStore")]),e._v("的时候，都会主动调用"),v("code",[e._v("ensureViewModelStore()")]),e._v("这个方法，看看有没有往非配置实例中写入"),v("code",[e._v("ViewModelStore")]),e._v("，如果有则读出来，如果没有就新建一个。")]),e._v(" "),v("p",[e._v("以上就是：「"),v("code",[e._v("ViewModel")]),e._v("可以在配置更新后不会销毁」的秘密。")]),e._v(" "),v("h2",{attrs:{id:"_2、viewmodel是谁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、viewmodel是谁"}},[e._v("#")]),e._v(" 2、ViewModel是谁？")]),e._v(" "),v("p",[e._v("把"),v("code",[e._v("ViewModel")]),e._v("的定义放在第二节是笔者有意为之，在第一节中，笔者为读者展示了"),v("code",[e._v("ViewModel")]),e._v("如何解决了开发者一个巨大的痛点，即「处理因配置更新导致的组件销毁从而导致的状态丢失」的问题，读者相比已经对"),v("code",[e._v("ViewModel")]),e._v("有了一个基础的认知，但如同上面提到过得一样，跨越配置更新的鸿沟并不是"),v("code",[e._v("ViewModel")]),e._v("的全部优点和特性，下面为你逐步掀开ViewModel的"),v("s",[e._v("头盖骨")]),e._v("面纱。")]),e._v(" "),v("h3",{attrs:{id:"_2-1、定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、定义"}},[e._v("#")]),e._v(" 2.1、定义")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("ViewModel")]),e._v(" 类是一种业务逻辑或屏幕级状态容器。它用于将状态公开给界面，以及封装相关的业务逻辑。它的主要优点是，它可以缓存状态，并可在配置更改后持久保留相应状态。这意味着在 activity 之间导航时或进行配置更改后（例如旋转屏幕时），界面将无需重新提取数据。")])]),e._v(" "),v("p",[e._v("上文中重点讲了"),v("code",[e._v("ViewModel")]),e._v("可以让在配置更改后保存自身的存在，从定义中我们可以看出，其实"),v("code",[e._v("ViewModel")]),e._v("更重要的一个身份是「状态容器」，换句话说"),v("code",[e._v("ViewModel")]),e._v("负责广播状态，而组件（"),v("code",[e._v("Activity")]),e._v("、"),v("code",[e._v("Fragment")]),e._v("）则回归纯粹UI的本质，引入"),v("code",[e._v("ViewModel")]),e._v("之后的不仅是多了一个组件的区别，更多的改变则在于开发范式的转变（关于这个话题下文会讲）。")]),e._v(" "),v("h3",{attrs:{id:"_2-2、viewmodel简单使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、viewmodel简单使用"}},[e._v("#")]),e._v(" 2.2、ViewModel简单使用")]),e._v(" "),v("p",[e._v("简单看一下引入"),v("code",[e._v("ViewModel")]),e._v("之后的"),v("code",[e._v("Activity")]),e._v("的变化（Fragment代码基本类似，不重复展示）：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(469),alt:"viewModel_06"}})]),e._v(" "),v("p",[e._v("还记得"),v("code",[e._v("ViewModel")]),e._v("的两个特性吗，这里重温下：")]),e._v(" "),v("ul",[v("li",[e._v("状态容器")]),e._v(" "),v("li",[e._v("规避配置更新导致的丢失")])]),e._v(" "),v("p",[e._v("图中一个显著的特征是原本应该位于"),v("code",[e._v("Activity")]),e._v("中的成员变量被移动到了"),v("code",[e._v("ViewModel")]),e._v("的内部，这体现了"),v("code",[e._v("ViewModel")]),e._v("作为状态容器的特性，这样做的好处就是让逻辑收拢在了"),v("code",[e._v("ViewModel")]),e._v("的内部，这让UI更加容易迁移和调试（因为降低了耦合度）。")]),e._v(" "),v("p",[e._v("「规避配置更新导致的丢失」这个特性在图中不好展示，但是读者可以参考上述的代码自己实现一个小demo，然后旋转屏幕，观察重建的"),v("code",[e._v("Activity")]),e._v("中的数据有没有发生丢失现象。")]),e._v(" "),v("p",[e._v("上文提到的「开发范式的转变」指的是开发模式逐渐过渡到MVVM或者其他开发思想中来，一种常见的特征就是状态均以LiveData或者StateFlow的形式出现。")]),e._v(" "),v("h3",{attrs:{id:"_2-3、savedstate的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、savedstate的使用"}},[e._v("#")]),e._v(" 2.3、SavedState的使用")]),e._v(" "),v("blockquote",[v("p",[e._v("关于SavedState的使用在「状态保存与SavedState」一章中有详细讲解如何使用，本章不再继续展开")])]),e._v(" "),v("h2",{attrs:{id:"_3、viewmodel剖析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、viewmodel剖析"}},[e._v("#")]),e._v(" 3、ViewModel剖析")]),e._v(" "),v("p",[e._v("为了让读者对"),v("code",[e._v("ViewModel")]),e._v("的整个体系有大致的理解，这里先把"),v("code",[e._v("ViewModel")]),e._v("的几个关键组件列举出来，只需要留个印象即可，后续会串联起来。")]),e._v(" "),v("h3",{attrs:{id:"_3-1、核心组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、核心组件"}},[e._v("#")]),e._v(" 3.1、核心组件")]),e._v(" "),v("h4",{attrs:{id:"_3-1-1、viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1、viewmodel"}},[e._v("#")]),e._v(" 3.1.1、ViewModel")]),e._v(" "),v("p",[v("code",[e._v("ViewModel")]),e._v("无疑是该库中最核心的组件，但是其内部却极其简单，只有两个容器，主要的作用就是存放Tag和Closeable，这两者会在"),v("code",[e._v("ViewModel")]),e._v("被关闭的时候被清空。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(470),alt:"viewModel_07"}})]),e._v(" "),v("p",[e._v("那么"),v("code",[e._v("ViewModel")]),e._v("何时被关闭呢？答案是组件遇到「非配置更新导致的销毁」的时候。")]),e._v(" "),v("p",[e._v("简单看看"),v("code",[e._v("ComponentActivity")]),e._v("的源码可以看见，只有非配置更新导致的销毁，才会让"),v("code",[e._v("ViewModelStore")]),e._v("销毁。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(471),alt:"viewModel_22"}})]),e._v(" "),v("p",[e._v("综合来说，"),v("code",[e._v("ViewModel")]),e._v("的基类只提供一个销毁时的监听的功能，其创建、销毁由库中的其他组件实现，其业务实现则全部交给开发者。")]),e._v(" "),v("h4",{attrs:{id:"_3-1-2、viewmodelstore、viewmodelstoreowner"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2、viewmodelstore、viewmodelstoreowner"}},[e._v("#")]),e._v(" 3.1.2、ViewModelStore、ViewModelStoreOwner")]),e._v(" "),v("p",[v("code",[e._v("ViewModelStore")]),e._v("是存放"),v("code",[e._v("ViewModel")]),e._v("的仓库类，通过Key来区分不同的"),v("code",[e._v("ViewModel")]),e._v("实例。")]),e._v(" "),v("p",[v("code",[e._v("ViewModelStoreOwner")]),e._v("和生命周期篇讲过的"),v("code",[e._v("LifecycleOwner")]),e._v("基本类似的设计模式，本质只是一个提供实例的接口。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(472),alt:"viewModel_08"}})]),e._v(" "),v("p",[v("code",[e._v("ViewModelStore")]),e._v("遵循以下原则：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ViewModelStore")]),e._v("需要配置更改后仍然得到保留，如果没法保留而被销毁了，那么保存的"),v("code",[e._v("ViewModel")]),e._v("实例也要一样，这里简单来说就是map内部的成员实例都不能丢。")]),e._v(" "),v("li",[e._v("如果"),v("code",[e._v("ViewModelStore")]),e._v("的持有者不再需要它而且也不会重新创建它，则其所有者需要调用"),v("code",[e._v("ViewModelStore")]),e._v("的clear()方法通知它不再使用。")])]),e._v(" "),v("blockquote",[v("p",[e._v("以上两条原则虽然对于绝大多数开发者来说并不会使用，因为大部分开发者都不会亲自开发"),v("code",[e._v("ViewModelStore")]),e._v("，但是谷歌亲自开发的Jetpack库中，均遵循这两条准则，因此开发者将其理解为"),v("code",[e._v("ViewModelStore")]),e._v("的「特性」即可。")])]),e._v(" "),v("h4",{attrs:{id:"_3-1-3、viewmodelprovider、factory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3、viewmodelprovider、factory"}},[e._v("#")]),e._v(" 3.1.3、ViewModelProvider、Factory")]),e._v(" "),v("p",[e._v("上文提到"),v("code",[e._v("ViewModelStore")]),e._v("只是一个存储"),v("code",[e._v("ViewModel")]),e._v("的容器，它并没有创建"),v("code",[e._v("ViewModel")]),e._v("的功能，而"),v("code",[e._v("ViewModelProvider")]),e._v("正好弥补了这个功能。")]),e._v(" "),v("p",[e._v("从下图中可以看出两点：")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("ViewModelProvider")]),e._v("通过工厂类创建"),v("code",[e._v("ViewModel")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("ViewModelProvider")]),e._v("的核心代码是get()，其原理就是简单的有就取缓存，没有就用工厂类创建一个"),v("code",[e._v("ViewModel")]),e._v("并放置在"),v("code",[e._v("ViewModel")]),e._v("与缓存中")])])]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(473),alt:"viewModel_09"}})]),e._v(" "),v("h4",{attrs:{id:"_3-1-4、factory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4、factory"}},[e._v("#")]),e._v(" 3.1.4、Factory")]),e._v(" "),v("blockquote",[v("p",[e._v("本小节由"),v("a",{attrs:{href:"https://juejin.cn/post/7072541180667363358?searchId=20231128121208B328021859E9704316AD",target:"_blank",rel:"noopener noreferrer"}},[e._v("CreationExtras 来了，创建 ViewModel 的新方式 - 掘金 (juejin.cn)"),v("OutboundLink")],1),e._v("中精炼总结得来，可以读原文获取更加详细的信息。")])]),e._v(" "),v("p",[e._v("上文提到 "),v("code",[e._v("ViewModel")]),e._v(" 是使用工厂类来实例化的，因为"),v("code",[e._v("ViewModel")]),e._v("和"),v("code",[e._v("Fragment")]),e._v("需要在非开发者干预的情况下由系统创建，而工厂类就是定义了不同构造函数的创建方式。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(406),alt:"viewModel_14"}})]),e._v(" "),v("p",[e._v("可以看出存在着两套创建方式，一套是带 CreationExtras一套是不带的，导致这种原因是"),v("code",[e._v("ViewModel")]),e._v("在2.5.0 版本中新增了一种带 "),v("code",[e._v("CreationExtras")]),e._v(" 的构建方式。")]),e._v(" "),v("p",[e._v("要讲清楚这一套新增的方式做了什么，我们首先把目光放回以前，看看以前的方式：")]),e._v(" "),v("h5",{attrs:{id:"_3-1-4-1、传统的factory与其缺陷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-1、传统的factory与其缺陷"}},[e._v("#")]),e._v(" 3.1.4.1、传统的Factory与其缺陷")]),e._v(" "),v("p",[e._v("假设开发者需要在"),v("code",[e._v("ViewModel")]),e._v("中增加非空构造函数，则需要实现对应的工厂类，假设有一个"),v("code",[e._v("ViewModel")]),e._v("的构造函数需要Application和一个仓储类作为入参，则需要实现一个这样的工厂类：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(474),alt:"viewModel_15"}})]),e._v(" "),v("p",[e._v("可以看出，该"),v("code",[e._v("ViewModel")]),e._v("的工厂类和其需要的参数基本要保持一致，这样才可以保证工厂类创建"),v("code",[e._v("ViewModel")]),e._v("时拥有所有的参数。")]),e._v(" "),v("p",[e._v("但是我们回顾这种方式有什么缺陷呢？其实缺陷还是挺大的，如下：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ViewModel")]),e._v("需要的参数可能较多，而且不同的"),v("code",[e._v("ViewModel")]),e._v("也大相径庭，让工厂类丢失了工厂的作用，开发者几乎要为不同的"),v("code",[e._v("ViewModel")]),e._v("都创建一个工厂类。")]),e._v(" "),v("li",[e._v("工厂类持有状态，不利于复用。")])]),e._v(" "),v("p",[e._v("正因为上述的问题，谷歌提出了一种新的类似于"),v("code",[e._v("Bundle")]),e._v("的解决方式，就是上文提到的 "),v("code",[e._v("CreationExtras")]),e._v(" 。")]),e._v(" "),v("h5",{attrs:{id:"_3-1-4-2、引入creationextras的巨变"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-2、引入creationextras的巨变"}},[e._v("#")]),e._v(" 3.1.4.2、引入CreationExtras的巨变")]),e._v(" "),v("p",[e._v("我们重新看工厂类的另外一种方法，传入了一个"),v("code",[e._v("CreationExtras")]),e._v("的参数，这为新的构建方式提供了基础。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(406),alt:"viewModel_14"}})]),e._v(" "),v("p",[v("code",[e._v("CreationExtras")]),e._v("就像"),v("code",[e._v("Activity")]),e._v("跳跃时的Intent传参一样，是通过key-value的方式传递的，因此比较灵活，看看使用了新版之后该如何构建"),v("code",[e._v("ViewModel")]),e._v("：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(475),alt:"viewModel_16"}})]),e._v(" "),v("p",[e._v("这个时候，Factory不再需要构造函数和任何成员变量了，变成了彻底的「无状态」，更利于复用。")]),e._v(" "),v("p",[e._v("可以看到的是，图中定义了一个key，是传输开发者定义的仓储类的，但是Application使用了一个预定义的Key，这个是谷歌开发者提前定义好的，其他还有几个预定义的key，如下图：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("CreationExtras.Key")]),e._v(" "),v("th",[e._v("Descriptions")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("ViewModelProvider.NewInstanceFactory.VIEW_MODEL_KEY")]),e._v(" "),v("td",[e._v("ViewModelProvider 可以基于 key 区分多个 VM 实例，VIEW_MODEL_KEY 用来提供当前 VM 的这个 key")])]),e._v(" "),v("tr",[v("td",[e._v("ViewModelProvider.AndroidViewModelFactory.APPLICATION_KEY")]),e._v(" "),v("td",[e._v("提供当前 Application context")])]),e._v(" "),v("tr",[v("td",[e._v("SavedStateHandleSupport.SAVED_STATE_REGISTRY_OWNER_KEY")]),e._v(" "),v("td",[e._v("提供创建 createSavedStateHandle 所需的 SavedStateRegistryOwner")])]),e._v(" "),v("tr",[v("td",[e._v("SavedStateHandleSupport.VIEW_MODEL_STORE_OWNER_KEY")]),e._v(" "),v("td",[e._v("createSavedStateHandle 所需的 ViewModelStoreOwner")])]),e._v(" "),v("tr",[v("td",[e._v("SavedStateHandleSupport.DEFAULT_ARGS_KEY")]),e._v(" "),v("td",[e._v("createSavedStateHandle 所需的 Bundle")])])])]),e._v(" "),v("p",[e._v("上图展示的是工厂类如何使用该变量，但是变量是哪里传入的呢，读者还记得工厂类是哪里被使用吗？它是被"),v("code",[e._v("ViewModelProvider")]),e._v("使用的，那么"),v("code",[e._v("CreateExtras")]),e._v("自然是"),v("code",[e._v("ViewModelProvider")]),e._v("所提供的，我们重新看看下图：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(476),alt:"viewModel_17"}})]),e._v(" "),v("p",[e._v("可以看到，"),v("code",[e._v("ViewModelProvider")]),e._v("在构建"),v("code",[e._v("ViewModel")]),e._v("的时候，会将默认参数传给工厂类，这样工厂类就可以在构建"),v("code",[e._v("ViewModel")]),e._v("的时候，通过对应的key拿到对应的value，这样就可以满足不同"),v("code",[e._v("ViewModel")]),e._v("的构建需要了。")]),e._v(" "),v("h4",{attrs:{id:"_3-1-5、小总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5、小总结"}},[e._v("#")]),e._v(" 3.1.5、小总结")]),e._v(" "),v("p",[e._v("下面以一张图总结各个组件之间的关系：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(477),alt:"viewModel_10"}})]),e._v(" "),v("h3",{attrs:{id:"_3-2、viewmodel回首掏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、viewmodel回首掏"}},[e._v("#")]),e._v(" 3.2、ViewModel回首掏")]),e._v(" "),v("h4",{attrs:{id:"_3-2-1、从使用流程回首viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1、从使用流程回首viewmodel"}},[e._v("#")]),e._v(" 3.2.1、从使用流程回首ViewModel")]),e._v(" "),v("p",[e._v("上文简单讲解了"),v("code",[e._v("ViewModel")]),e._v("几个核心组件的功能，下文将从"),v("code",[e._v("ViewModel")]),e._v("的使用流程去将几个组件所处的位置理清楚。")]),e._v(" "),v("blockquote",[v("p",[e._v("需要注意的是，由于需要讲解组件的使用，因此不会使用委托的方式创建ViewModel，同时以Activity为讲解组件。")])]),e._v(" "),v("p",[e._v("下面看看"),v("code",[e._v("ComponentActivity")]),e._v("中使用"),v("code",[e._v("ViewModel")]),e._v("的典型案例：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(478),alt:"viewModel_11"}})]),e._v(" "),v("p",[e._v("当生命周期进入onCreate()的时候，通过"),v("code",[e._v("ViewModelProvider")]),e._v("来新建一个"),v("code",[e._v("MyViewModel")]),e._v("，留意到工厂类传的值是"),v("code",[e._v("defaultViewModelProviderFactory")]),e._v("。")]),e._v(" "),v("p",[e._v("这个参数来自于一个接口："),v("code",[e._v("HasDefaultViewModelProviderFactory")]),e._v("：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(479),alt:"viewModel_12"}})]),e._v(" "),v("p",[e._v("这个接口是什么意思呢，这个接口是给"),v("code",[e._v("ViewModelStoreOwner")]),e._v("实现的，相当于某个"),v("code",[e._v("StoreOwner")]),e._v("存在着默认的创建"),v("code",[e._v("ViewModel")]),e._v("的工厂类。")]),e._v(" "),v("p",[e._v("上文中提到，"),v("code",[e._v("ViewModelProvider")]),e._v("需要从Owner手里获取工厂类来了解如何构建"),v("code",[e._v("ViewModel")]),e._v("，对于单个Owner来说，绝大多数情况创建ViewModel的方式都是相同的（大多数情况都是无参或者带"),v("code",[e._v("SavedStateHandle")]),e._v("），因此拥有一个「默认工厂」是极大的便利。")]),e._v(" "),v("p",[e._v("开发者可以在"),v("code",[e._v("ComponentActivity")]),e._v("中使用"),v("code",[e._v("defaultViewModelProviderFactory")]),e._v("的原因恰恰是它也实现了该接口：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(480),alt:"viewModel_13"}})]),e._v(" "),v("p",[e._v("可以看出，这是一个创建「参数带有SavedState」的"),v("code",[e._v("ViewModel")]),e._v("的工厂类，同时"),v("code",[e._v("SavedState")]),e._v("默认带有"),v("code",[e._v("Activity")]),e._v("的getIntent().getExtras()，而在"),v("code",[e._v("Fragment")]),e._v("中则是getArugments()（图中没体现，读者可以去Fragment的源码中查看）。")]),e._v(" "),v("p",[e._v("因此开发者在"),v("code",[e._v("ComponentActivity")]),e._v("中创建"),v("code",[e._v("ViewModelProvider")]),e._v("的时候使用的默认工厂其实就是"),v("code",[e._v("SavedStateViewModelFactory")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("如果你从来没有手动传过这个默认工厂也没关系，"),v("code",[e._v("ViweModelProvider")]),e._v(" 会自动从"),v("code",[e._v("ViewModelStoreOwner")]),e._v("中拿，哪怕 "),v("code",[e._v("ViewModelStoreOwner")]),e._v("没有默认工厂也会使用一个最简单的实例化工厂，但这个工厂只能用于简单的无参实例化， 不过鉴于开发者普遍使用 "),v("code",[e._v("ComponentActivity")]),e._v("这个问题应该不存在。")])]),e._v(" "),v("h4",{attrs:{id:"_3-2-1、重谈viewmodel的by委托"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1、重谈viewmodel的by委托"}},[e._v("#")]),e._v(" 3.2.1、重谈ViewModel的by委托")]),e._v(" "),v("p",[e._v("开发者目前比较喜欢的创建方式是使用by委托来创建"),v("code",[e._v("ViewModel")]),e._v("，如下：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(481),alt:"viewModel_18"}})]),e._v(" "),v("p",[e._v("这种方式背后做了什么呢？我们看看"),v("code",[e._v("viewModels")]),e._v("的定义：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(482),alt:"viewModel_19"}})]),e._v(" "),v("p",[e._v("可以看出，这个委托还有2个参数，分别是传入"),v("code",[e._v("CreationExtras")]),e._v("和"),v("code",[e._v("Factory")]),e._v("，读者还记得它们是做什么的吗？如果你忘了建议回去看看第三节。")]),e._v(" "),v("p",[e._v("继续从代码中可以读出，如果开发者不传"),v("code",[e._v("Factory")]),e._v("，那么就用使用"),v("code",[e._v("ComponentActivity")]),e._v("的默认工厂类，这个上面也提到了，实际上就是"),v("code",[e._v("SavedStateViewModelFactory")]),e._v("。")]),e._v(" "),v("p",[e._v("相同的是，如果开发者不传"),v("code",[e._v("CreationExtras")]),e._v("，那么就会使用使用"),v("code",[e._v("defaultViewModelCreationExtras")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("ViewModelLazy")]),e._v("就不进一步研究了，代码非常简单，读者自行研究即可，本质上就是套了一层kotlin的lazy委托来实现懒加载。")])]),e._v(" "),v("p",[e._v("终上所述，在"),v("code",[e._v("ComponentActivity")]),e._v("中使用"),v("code",[e._v("by viewModels")]),e._v("创建"),v("code",[e._v("ViewModel")]),e._v("基本等价于下面的代码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(483),alt:"viewModel_20"}})]),e._v(" "),v("p",[e._v("当然，使用by委托还可以享受懒加载的优势，这样就不用监听生命周期，建议一律使用谷歌官方封装的委托。")]),e._v(" "),v("h2",{attrs:{id:"_4、项目实践中看viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、项目实践中看viewmodel"}},[e._v("#")]),e._v(" 4、项目实践中看ViewModel")]),e._v(" "),v("h3",{attrs:{id:"_4-1、构建viewmodel的几种情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、构建viewmodel的几种情况"}},[e._v("#")]),e._v(" 4.1、构建ViewModel的几种情况")]),e._v(" "),v("h4",{attrs:{id:"_4-1-1、构造函数为空的viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1、构造函数为空的viewmodel"}},[e._v("#")]),e._v(" 4.1.1、构造函数为空的ViewModel")]),e._v(" "),v("p",[e._v("对于这种"),v("code",[e._v("ViewModel")]),e._v("使用来说最为简单，直接使用委托即可")]),e._v(" "),v("h4",{attrs:{id:"_4-1-2、需要访问savedstatehandle的viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2、需要访问savedstatehandle的viewmodel"}},[e._v("#")]),e._v(" 4.1.2、需要访问SavedStateHandle的ViewModel")]),e._v(" "),v("p",[e._v("对于这种"),v("code",[e._v("ViewModel")]),e._v("使用也非常简单，直接使用委托即可，因为"),v("code",[e._v("ComponentActivity")]),e._v("、"),v("code",[e._v("Fragment")]),e._v("等常见场景都已经适配了"),v("code",[e._v("SavedStateHandle")]),e._v("。")]),e._v(" "),v("h4",{attrs:{id:"_4-1-3、需要更多参数的viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3、需要更多参数的viewmodel"}},[e._v("#")]),e._v(" 4.1.3、需要更多参数的ViewModel")]),e._v(" "),v("h5",{attrs:{id:"_4-1-3-1、自定义工厂类-自定义creationextras"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-1、自定义工厂类-自定义creationextras"}},[e._v("#")]),e._v(" 4.1.3.1、自定义工厂类+自定义CreationExtras")]),e._v(" "),v("p",[e._v("对于这种场景，开发者需要在委托中传入自定义的工厂类，例如某个"),v("code",[e._v("ViewModel")]),e._v("需要一个"),v("code",[e._v("SavedStateHandle")]),e._v("和一个仓储类作为入参，开发者可以实现如下代码：")]),e._v(" "),v("p",[e._v("代码虽然多了很多，但是实际上只多做了几件事：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("自定义了一个key，在构建"),v("code",[e._v("CreationExtra")]),e._v("的时候，使用了该key传入用户自定义的仓储类。需要注意的是，由于"),v("code",[e._v("CreationExtras")]),e._v("不可变的设计，开发者需要用"),v("code",[e._v("MutableCreationExtras")]),e._v("套住原来的Extras来传递新值。")])]),e._v(" "),v("li",[v("p",[e._v("构建工厂类的时候，通过用户自定义的key获取到了仓储类。需要注意的是获取"),v("code",[e._v("SavedStateHandle")]),e._v("并不是简单的使用key来获取，而是使用了谷歌官方封装的扩展方法，因为"),v("code",[e._v("SavedStateHandle")]),e._v("的构建相对麻烦，还需要访问"),v("code",[e._v("SavedStateRegistry")]),e._v("（状态保存一章有提到）。")])])]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(484),alt:"viewModel_21"}})]),e._v(" "),v("h5",{attrs:{id:"_4-1-3-2、使用hilt依赖注入框架实现参数注入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-2、使用hilt依赖注入框架实现参数注入"}},[e._v("#")]),e._v(" 4.1.3.2、使用Hilt依赖注入框架实现参数注入")]),e._v(" "),v("p",[e._v("上述提到的工厂类仍然非常麻烦，虽然开发者只需要设计一个工厂类，但是对于不同的"),v("code",[e._v("ViewModel")]),e._v("仍需要实现不同的"),v("code",[e._v("CreateExtras")]),e._v("取值方式，有没有一种更解耦的方式呢，答案是有的，就是依赖注入。这里推荐使用Jetpack的Hilt。")]),e._v(" "),v("p",[e._v("关于Hilt的具体使用读者可以去安卓开发者文档参考具体使用说明，文章链接如下：")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://developer.android.google.cn/training/dependency-injection/hilt-android?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Hilt 实现依赖项注入"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://developer.android.google.cn/training/dependency-injection/hilt-jetpack?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("将 Hilt 和其他 Jetpack 库一起使用)"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"_4-2、跨组件通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、跨组件通信"}},[e._v("#")]),e._v(" 4.2、跨组件通信")]),e._v(" "),v("p",[e._v("在安卓中跨组件通信，特别是"),v("code",[e._v("Activity")]),e._v("与它治下的"),v("code",[e._v("Fragment")]),e._v("之间的消息通信以及这些"),v("code",[e._v("Fragment")]),e._v("之间相互通信一直是一个老大难的问题，因为这涉及了组件引用、生命周期等需要注意的因素：")]),e._v(" "),v("ul",[v("li",[e._v("如果某个"),v("code",[e._v("Fragment")]),e._v("需要父组件通信，直接获取父组件引用会提高耦合度。")]),e._v(" "),v("li",[e._v("如果多个"),v("code",[e._v("Fragment")]),e._v("需要共享同一个变量，变量应该缓存在哪里呢？如果放在父组件中依然会存在耦合度过高的问题（因为依然要访问父组件的真实引用）。")])]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(485),alt:"viewModel_23"}})]),e._v(" "),v("p",[e._v("引入了"),v("code",[e._v("ViewModel")]),e._v("的开发阶段之后，组件的实际逻辑已经迁移到"),v("code",[e._v("ViewModel")]),e._v("之中，因此直接让组件通过成员变量去沟通信息也不合适（这样也有配置更新导致的状态丢失问题）。")]),e._v(" "),v("p",[e._v("那获取其他组件的"),v("code",[e._v("ViewModel")]),e._v("不就行了吗？")]),e._v(" "),v("p",[e._v("答案是对的，既然逻辑已经迁移到"),v("code",[e._v("ViewModel")]),e._v("中了，同时"),v("code",[e._v("ViewModel")]),e._v("也有降低耦合性（避免直接拿组件的实例）、避免配置更新导致销毁等好处，那直接获取组件的"),v("code",[e._v("ViewModel")]),e._v("来实现信息的沟通是非常方便的。")]),e._v(" "),v("p",[e._v("那么问题就来到了「如何拿到对应组件的"),v("code",[e._v("ViewModel")]),e._v("」？")]),e._v(" "),v("p",[e._v("还记得开发者是如何在"),v("code",[e._v("Activity")]),e._v("或者"),v("code",[e._v("Fragment")]),e._v("中拿到"),v("code",[e._v("ViewModel")]),e._v("的吗，如果你已经忘记了可以重新阅读一下上文，开发者是通过"),v("code",[e._v("ViewModelStore")]),e._v("来获取"),v("code",[e._v("ViewModel")]),e._v("的，换句话说，「只要拿到"),v("code",[e._v("ViewModelStore")]),e._v("，就可以通过"),v("code",[e._v("ViewModel")]),e._v("的类来找到对应的"),v("code",[e._v("ViewModel")]),e._v("」。")]),e._v(" "),v("p",[e._v("因此开发者可以通过一下开发模式来实现"),v("code",[e._v("Fragment")]),e._v("之前的信息沟通：")]),e._v(" "),v("ol",[v("li",[e._v("把需要共享的信息以LiveData、StateFlow等不同形式（根据需要）声明在父组件的"),v("code",[e._v("ViewModel")]),e._v("中。")]),e._v(" "),v("li",[v("code",[e._v("Fragment")]),e._v("在构建的时候通过父组件的"),v("code",[e._v("ViewModelStore")]),e._v("拿到父组件的ViewModel。")]),e._v(" "),v("li",[v("code",[e._v("Fragment")]),e._v("通过修改父组件的"),v("code",[e._v("ViewModel")]),e._v("中的数据，通知订阅了该数据的其他"),v("code",[e._v("Fragment")]),e._v("，以达到"),v("code",[e._v("Fragment")]),e._v("之间通信的目的。")])]),e._v(" "),v("p",[e._v("如下图所示：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(486),alt:"viewModel_24"}})]),e._v(" "),v("p",[e._v("这样避免了以下缺点：")]),e._v(" "),v("ul",[v("li",[e._v("避免子组件直接获取父组件引用（引用的是ViewModel）导致耦合度过高。")]),e._v(" "),v("li",[e._v("避免子组件相互引用（通过父组件ViewModel间接通讯）。")])]),e._v(" "),v("p",[e._v("那么开发者如何使用代码来落实「"),v("code",[e._v("Fragment")]),e._v("获取"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("ViewModel")]),e._v("」呢？谷歌已经封装好了一个委托方法，叫"),v("code",[e._v("activityViewModels()")]),e._v("，和"),v("code",[e._v("viewModels()")]),e._v("委托基本没什么区别：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(487),alt:"viewModel_25"}})]),e._v(" "),v("p",[e._v("读者可以看"),v("code",[e._v("activityViewModels()")]),e._v("的定义，其实并没有什么特别的，就是利用父"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("ViewModelStore")]),e._v("来获取/创建一个的"),v("code",[e._v("ViewModel")]),e._v("，如果你理解了上文的内容，那么这个方法对你来说应该没有什么别的困难的。")]),e._v(" "),v("p",[e._v("通过这种方式，"),v("code",[e._v("Activity")]),e._v("下面的所有"),v("code",[e._v("Fragment")]),e._v("都可以拿到同一个"),v("code",[e._v("ViewModelStore")]),e._v("，因此也可以拿到同一个"),v("code",[e._v("ViewModel")]),e._v("。")]),e._v(" "),v("p",[e._v("假如开发者想获取"),v("code",[e._v("Fragment")]),e._v("的父"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("ViewModel")]),e._v("呢？")]),e._v(" "),v("p",[e._v("虽然谷歌没有提供直接的扩展方法（可能是觉得没什么用），但是可以模仿获取"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("ViewModel")]),e._v("的方式，写一个获取父"),v("code",[e._v("Fragment")]),e._v("的版本：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(488),alt:"viewModel_26"}})]),e._v(" "),v("p",[e._v("思路是一样的，围绕着"),v("code",[e._v("ViewModelStore")]),e._v("理解即可，这是"),v("code",[e._v("ViewModel")]),e._v("的根源。")]),e._v(" "),v("h2",{attrs:{id:"_5、总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、总结"}},[e._v("#")]),e._v(" 5、总结")]),e._v(" "),v("p",[v("code",[e._v("ViewModel")]),e._v("是安卓开发进入MVVM时代的产物，后MVVM时代不仅是开发模式与开发思想都发生了剧烈的变化，作为漩涡中心的"),v("code",[e._v("ViewModel")]),e._v("的位置的重要性不可小视，然而"),v("code",[e._v("ViewModel")]),e._v("的却是许多开发中眼中的「最熟悉的陌生人」，多数开发者只会使用或者做少许的定制，对"),v("code",[e._v("ViewModel")]),e._v("的实现机制并不了解，这限制了开发者的能力上限甚至写出了有问题的"),v("code",[e._v("ViewModel")]),e._v("代码。")]),e._v(" "),v("p",[e._v("本文从"),v("code",[e._v("ViewModel")]),e._v("能够跨越配置更新出发，讲解了ViewModel的核心组件的原理与关系，并提供了一些基础的定制化方案，但仍有许多细节和定制化内容有待读者挖掘。")])],1)}),[],!1,null,null,null);v.default=o.exports}}]);