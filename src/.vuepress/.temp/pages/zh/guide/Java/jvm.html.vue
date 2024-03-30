<template><div><h2 id="一、内存区域" tabindex="-1"><a class="header-anchor" href="#一、内存区域"><span>一、内存区域</span></a></h2>
<details class="hint-container details"><summary>1.什么是jvm？</summary>
<p>jvm就是Java虚拟机，我们编写的Java源代码被编译器（javac）编译成字节码文件（.class）文件，Java虚拟机就对我们的字节码文件进行解释，运行。jvm就是Java代码一次编写多处运行的基础，不管是什么操作系统上，只要装了jvm就能运行Java程序。</p>
</details>
<details class="hint-container details"><summary>2.jvm运行的过程是什么？</summary>
<ol>
<li>类加载：
<ul>
<li>加载（Loading）：类加载器加载字节码文件，生成对应的class对象。</li>
<li>验证（Verification）：确保字节码复合jvm规范，并且不会对系统造成损害。</li>
<li>准备（Preparation）：为类变量（静态变量）分配内存，并设置初始值。</li>
<li>解析（Resolution）：将符号引用转换为直接引用，比如将类和方法的引用转换为内存地址的引用。</li>
</ul>
</li>
<li>初始化：
<ul>
<li>jvm在这个阶段执行类构造器 <code v-pre>&lt;clinit&gt;()</code>方法，初始化类变量，执行静态代码块，这个阶段是类加载过程的最后一步，确保类变量被正确初始化。</li>
</ul>
</li>
<li>执行字节码：
<ul>
<li>JVM 开始执行程序的主要逻辑，按照字节码指令逐行执行，这是程序的实际运行阶段。</li>
</ul>
</li>
<li>垃圾回收：
<ul>
<li>JVM 负责管理内存，在程序运行过程中，通过垃圾回收器回收不再使用的对象，释放内存空间。</li>
</ul>
</li>
<li>即时编译：
<ul>
<li>jvm通过即时编译器将热点代码（频繁执行的部分）转换为本地机器代码，以提高执行效率。</li>
</ul>
</li>
<li>优化和监控：
<ul>
<li>jvm会监控性能状态，也会根据程序执行的情况进行优化。</li>
</ul>
</li>
<li>卸载：
<ul>
<li>当类不再被引用或者程序结束时，jvm可能会卸载不再需要的类，释放内存。</li>
</ul>
</li>
</ol>
</details>
<details class="hint-container details"><summary>3.jvm后台运行的系统线程主要有哪些？</summary>
<ol>
<li>主线程：Java应用启动时创建的线程，负责执行 <code v-pre>main()</code> 方法，也被称为应用程序的入口点。</li>
<li>垃圾回收线程： JVM 中的垃圾回收器会有多个线程，每个线程负责执行不同类型的垃圾回收操作。</li>
<li>编译器线程 ：当 JVM 使用即时编译器（JIT）将字节码编译成本地机器代码时，会涉及到编译器线程。</li>
<li>信号分发线程：这个线程负责接收操作系统发送的信号，并将其转发给 JVM 的特定处理程序。</li>
<li>周期性任务线程：JVM 中会有一些线程执行周期性的任务，比如执行周期性的垃圾回收或者其他后台任务。</li>
<li>Finalizer线程：这个线程负责执行对象的 <code v-pre>finalize()</code> 方法，用于释放对象占用的资源。</li>
<li>虚拟机退出线程：这个线程用于执行在 JVM 即将关闭时注册的关闭钩子（Shutdown Hooks），可以用来执行一些清理或资源释放操作。</li>
</ol>
</details>
<details class="hint-container details"><summary>4.jvm的内存区域</summary>
<p>jvm的内存区域简单的可以分为：堆和栈，但是按照虚拟机规范可以分为：线程私有区，线程共享区。</p>
<blockquote>
<p>线程私有区：</p>
</blockquote>
<ul>
<li>程序计数器：程序计数器的作用是记录线程执行的地址，方便线程切回之后继续执行。</li>
<li>栈：
<ul>
<li>虚拟机栈：虚拟机栈是Java方法的一个内存模型，里面存放的是栈帧。每当一个方法调用就会创建一个栈帧，栈帧里面存放的是方法的局部变量，操作数栈，动态链接以及方法返回地址。方法调用完毕之后栈帧清楚。</li>
<li>本地方法栈：本地方法栈是为<code v-pre>native</code>修饰的本地方法开辟的一块内存空间</li>
</ul>
</li>
</ul>
<blockquote>
<p>线程共享区：</p>
</blockquote>
<ul>
<li>
<p>Java 堆：</p>
<ul>
<li>Java 堆是jvm中最大的一块内存区域，虚拟机启动时创建，被所有线程共享，也是垃圾回收的主要区域。Java 堆里面存放的是几乎所有的对象实例。</li>
</ul>
</li>
<li>
<p>方法区：方法区与Java堆类似，也是各个线程共享的内存区域，主要存储已经被虚拟机加载的类型信息、常量、静态变量、即使编译器编译后的代码缓存等数据。</p>
<ul>
<li>
<p>方法区是一个逻辑上的实现，1.7之前使用永久代，1.8使用元空间作为方法区的实现。</p>
<p><strong>类常量池：</strong> 类常量池是每个类的一部分，存储了编译时期生成的字面量常量、符号引用等信息。这些信息包括类、方法和接口的名称、字段的名称和描述符、方法的名称和描述符等。<strong>类常量池是在编译时确定的，随着类加载到内存中而被创建</strong>。</p>
<p><strong>运行时常量池：</strong> 运行时常量池是类常量池的一部分，它在类加载到内存时被 JVM 所创建，用于存储类加载后的符号引用解析信息、动态生成的常量等。在运行时，它是方法区的一部分。</p>
<p><strong>字符串常量池：</strong> 字符串常量池是运行时常量池的一部分，专门用来存储字符串字面量。字符串常量池是 String 类的私有静态成员变量，用于存储在编译期间由双引号引起来的字符串常量。Java 中的字符串常量池具有重用相同字符串的特性，即相同内容的字符串在常量池中只有一份拷贝。</p>
</li>
</ul>
</li>
</ul>
</details>
<details class="hint-container details"><summary>5.堆和栈有什么区别？</summary>
<ol>
<li>堆：堆是用来存放对象实例的，每个Java应用都为一对应一个jvm实例，堆是线程共享的。</li>
<li>栈：栈是用来执行方法的，每个方法的调用都是通过栈帧来执行的，而且线程私有。</li>
</ol>
</details>
<details class="hint-container details"><summary>6.jvm中对象创建的过程是怎么样的？</summary>
<ol>
<li>类加载：加载类的字节码文件到内存，并在方法区创建一个对应的Class文件，用于描述类的结构信息。</li>
<li>分配内存：在堆内存中为新创建的对象分配内存空间。</li>
<li>初始化零值：将分配的内存空间初始化为零值，即对象的成员变量在此阶段都为默认值。</li>
<li>设置对象头：虚拟机会根据对象的类型设置对象头信息，包括对象的哈希码、GC分代年龄等。</li>
<li>执行 <code v-pre>&lt;init&gt;</code>方法：在构造器方法<code v-pre>&lt;init&gt;</code>中进行对象的初始化工作，即根据构造器的实际内容为对象的成员变量赋值。</li>
</ol>
</details>
<details class="hint-container details"><summary>7.内存分配的方式有几种？</summary>
<ol>
<li>指针碰撞：假设Java堆中的内存是绝对规整的，使用过的内存被放在一边，未使用的放在另一边，中间放置一个指针作为分界点指示器，那么分配内存就是将指示器指针向空闲内存移动与对象大小相等的距离。</li>
<li>空闲列表：如果Java堆中的内存不是规整的，那么就不能进行指针碰撞了，虚拟机就必须维护一个列表，列表上记录哪些内存是可用的，再分配内存的时候找到一块合适的空间划分给对象实例。</li>
</ol>
</details>
<details class="hint-container details"><summary>8.jvm里new对象时，堆会发生抢占吗？jvm是怎么设计的？</summary>
<ol>
<li>会，假设 JVM 虚拟机上，每一次 new 对象时，指针就会向右移动一个对象 size 的距离，一个线程正在给 A 对象分配内存，指针还没有来的及修改，另一个为 B 对象分配内存的线程，又引用了这个指针来分配内存，这就发生了抢占。</li>
<li>解决：每个线程在Java堆中都预先分配了一小块内存，也即是本地线程分配缓冲，要分配内存的线程，现在本地缓冲区中分配，只有本地缓冲区用完了，分配新的缓存区时才需要同步锁定。采用 CAS 分配重试的方式来保证更新操作的原子性。</li>
</ol>
</details>
<details class="hint-container details"><summary>9.内存溢出和内存泄漏是什么意思？</summary>
<ul>
<li>内存泄露：当某一个对象不再有用的时候，占用的内存却不能被回收，就是申请的内存空间没有被正确释放，导致内存被白白占用。内存泄露可能会导致内存溢出</li>
<li>内存溢出：就是申请的内存超过了可用内存，内存不够了。</li>
</ul>
</details>
<h2 id="二、垃圾回收" tabindex="-1"><a class="header-anchor" href="#二、垃圾回收"><span>二、垃圾回收</span></a></h2>
<details class="hint-container details"><summary>1.如何判断对象是垃圾，对象是否死亡，有什么方法？</summary>
<ul>
<li>引用计数法：每个对象中都维护了一个引用计数器，每当有一个地方引用他计数器就加1，当引用失效时计数器减1。当计数器减为0的对象就是不可能在被使用的对象，就能被回收掉。这种方法无法解决环形引用的问题。</li>
<li>可达性分析法：实质在于将一系列GC Roots作为初始的存活对象合集，从该合集出发，探索所有能够被该集合引用到的对象，并将其加入该集合中，最终未被探索到的对象便是死亡的对象，是可以回收的。</li>
</ul>
</details>
<details class="hint-container details"><summary>2.Java中可以作为GC Roots的对象有哪几种？</summary>
<ol>
<li>虚拟机栈中引用的对象。</li>
<li>方法区中类静态属性引用的对象。</li>
<li>方法区中常量引用的对象。</li>
<li>本地方法栈中JNI引用的对象。</li>
</ol>
</details>
<details class="hint-container details"><summary>3.Java中的对象引用有哪几种？</summary>
<blockquote>
<p><strong>Java 中的引用有四种，分为强引用、软引用、弱引用和虚引用4 种，强度依次逐渐减弱。</strong></p>
</blockquote>
<ul>
<li>强引用：只要强引用的关系还在，垃圾收集器就永远不会回收被引用的对象。不可达才会回收。</li>
<li>软引用：描述一些还有用，但非必须的对象，内存不足才会被回收。</li>
<li>弱引用：指的是非必须的对象，等到下一次垃圾收集发生就会被回收。</li>
<li>虚引用：最弱的一种引用关系，一定会被回收。虚引用不会影响一个对象的生存时间，主要是让这个对象在被收集器回收时收到系统通知。</li>
</ul>
</details>
<details class="hint-container details"><summary>4.finalize()方法了解吗？有什么作用?</summary>
<p><code v-pre>finalize()</code>的作用就是在可达性分析之后确认是否真正需要回收，在一个对象不可达之后会进行一次标记，随后进行一次筛选，确认是此对象是否有条件执行finalize()方法。</p>
<p>如果在finalize()方法中，重新与引用链上任何一个对象建立关联就能复活，如果没有就被回收。</p>
</details>
<details class="hint-container details"><summary>5.Java堆的内存分区？</summary>
<p>Java堆是按照垃圾收集的角度分为：新生代，和老年代两个区域：</p>
<ul>
<li>新生代：eden、from、to，比例是8：1：1
<ul>
<li>Eden空间：对象最初分配的区域。大多数对象都在这里被创建。</li>
<li>Survivor空间：包括两个区域，一般称为from和to。在新生代垃圾收集过程中，存活下来的对象会被移动到这两个Survivor区域之一。</li>
<li>新生代存放存活时间短的对象，而每次回收后存活的少量对象，将会逐步晋升到老年代中存放。</li>
</ul>
</li>
<li>老年代：
<ul>
<li>主要存放存活时间长的对象，因此垃圾回收频率较低</li>
<li>如从新生代晋升过来的对象或是大对象直接分配到老年代。</li>
</ul>
</li>
</ul>
</details>
<details class="hint-container details"><summary>6.Minor GC、Major GC、Mixed GC、Full GC 都是什么意思？</summary>
<ul>
<li>新生代收集（Minor GC）：值目标是新生代的垃圾收集；</li>
<li>老年代收集（Major GC）：指目标是老年代的垃圾收集。目前只有CMS收集器会有单独收集老年代的行为。</li>
<li>混合收集（Mixed GC）：指目标是整个新生代和部分老年代的垃圾收集。只有G1收集器会有这种行为。</li>
<li>整堆收集（Full GC）：收集整个Java堆和方法区的垃圾收集。</li>
</ul>
</details>
<details class="hint-container details"><summary>7.Minor GC和Full GC 什么时候触发？</summary>
<ul>
<li>Minor GC：新创建的对象优先在新生代的Eden区进行分配，如果Eden区没有足够的空间时，就会触发Minor GC来清理新生代</li>
<li>Full FC：Minor GC之前会检查老年代的空间是否满足晋升，老年代可用连续内存空间&lt;新生代历次Minor GC后升入老年代的对象总和的平均大小。不满足就会进行Full GC。</li>
<li>Minor GC后老年代空间不足会触发Full GC。</li>
<li>老年代内存使用率过高，达到一定比例，也会触发Full GC。</li>
<li>方法区空间不足：如果方法区为永久代实现，永久代空间不足会Full GC。</li>
<li>系统命令触发：System.gc()、jmap -dump 等命令会触发 full gc。</li>
</ul>
</details>
<details class="hint-container details"><summary>8.说一下有哪些垃圾收集算法？</summary>
<ol>
<li>标记-清除算法：该算法分为两个阶段
<ul>
<li>标记：标记出需要回收的对象。</li>
<li>清除：回收所有被清除的对象</li>
<li>缺点：会产生大量的不连续的内存碎片，如果有大量需要回收的对象时效率很低。</li>
</ul>
</li>
<li>标记-复制算法：解决了标记-清除算法面对大量可回收对象时执行效率低的问题。
<ul>
<li>将可用的内存分为容量相等的两块，每次只是用其中一块。</li>
<li>需要垃圾回收时，把不需要回收的对象就是标记的对象，复制到另一片空的内存当中去，然后把之前那一片内存全部清除。</li>
</ul>
</li>
<li>标记-整理法：与标记清除法类似。
<ul>
<li>标记过程与标记清除法类似，但是在清除之前先把标记的存活的对象往内存的一端移动，完成之后清除边界之外的算法。</li>
<li>该算法主要用于老年代，移动存活对象是极其负重的操作。</li>
</ul>
</li>
</ol>
</details>
<details class="hint-container details"><summary>9.有哪些垃圾回收器？</summary>
<p><strong>针对的新生代进行young gc的</strong>：</p>
<ul>
<li>serial、ParNew、Parallel Scavenge（GCTimeRatio、UseAdaptSizePolicy可控制吞吐量 = 运行代码时间 / （运行代码时间 + 垃圾回收时间））都是标记复制算法</li>
</ul>
<p><strong>针对的老年代进行old gc的</strong>：</p>
<ul>
<li>serial old标记整理、Parallel Old标记整理、cms标记清除</li>
</ul>
<p><strong>针对新手代和老年代mixed gc的</strong>：G1标记清除、标记整理</p>
</details>
<details class="hint-container details"><summary>10.说一下cms垃圾回收器</summary>
<p><strong>CMS（Concurrent Mark Sweep）收集器是一种主打的就是并发和减少回收停顿时间为目标的收集器。它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作</strong></p>
</details>
<h2 id="三、类加载" tabindex="-1"><a class="header-anchor" href="#三、类加载"><span>三、类加载</span></a></h2>
<details class="hint-container details"><summary>1.类加载的过程和类的生命周期</summary>
<ol>
<li>加载：
<ul>
<li>通过类的全限定名获取该类的二进制流/</li>
<li>将该二进制流中的静态存储结构转化为方法去运行时的数据结构。</li>
<li>在内存中生成该类的Class对象，作为该类的数据访问入口。</li>
</ul>
</li>
<li>验证：确保class文件的字节流符合jvm的规范，并且不会威胁到虚拟机。</li>
<li>准备：为类的静态变量分配内存，并且赋初始值。</li>
<li>解析：将符号引用转换为直接引用。</li>
<li>初始化：执行类中定义的Java程序代码，静态代码块。</li>
</ol>
</details>
<details class="hint-container details"><summary>2.哪些时候会触发类加载？</summary>
<ol>
<li>首次访问一个类时。</li>
<li>类继承关系：当访问子类的时候，父类也会被加载。</li>
<li>类引用：如果代码中通过类名引用了某个静态成员会触发这个类的加载。</li>
<li>显式调用： 可以使用<code v-pre>Class.forName()</code>方法显式地加载一个类。</li>
<li>反射：使用Java的反射机制，如<code v-pre>Class.forName()</code>、<code v-pre>ClassLoader.loadClass()</code>等方法，可以在运行时加载类。</li>
<li>初始化子类：如果一个类的子类被初始化了，父类也会被初始化。</li>
<li>启动类加载器。</li>
</ol>
</details>
<details class="hint-container details"><summary>3.类加载器有哪些？</summary>
<ul>
<li><strong>启动类加载器</strong>(Bootstrap ClassLoader)：用来加载 java 核心类库，无法被 java 程序直接引用。</li>
<li><strong>扩展类加载器</strong>(extensions class loader)：它用来加载 Java 的扩展库。Java 虚拟机的实现会提供一个扩展库目录。该类加载器在此目录里面查找并加载 Java 类。</li>
<li><strong>系统类加载器</strong>（system class loader）：它根据 Java 应用的类路径（CLASSPATH）来加载 Java 类。一般来说，Java 应用的类都是由它来完成加载的。可以通过 ClassLoader.getSystemClassLoader()来获取它。</li>
<li><strong>用户自定义类加载器</strong> (user class loader)，用户通过继承 java.lang.ClassLoader 类的方式自行实现的类加载器。</li>
</ul>
</details>
<details class="hint-container details"><summary>4.创建对象有几种方式？</summary>
<p>new、反射、克隆（深拷贝）、序列化和反序列化。</p>
</details>
<details class="hint-container details"><summary>5.什么是双亲委派机制？</summary>
<ul>
<li>当一个类加载器收到了类加载的请求时，他自己不会去尝试加载这个类，而是把这个类交给自己的父类加载器去加载。因此所有的加载请求最终都到达了Bootstrap ClassLoader。只有当父类加载器反馈自己无法加载这个类时，子加载器才会自己去加载这个类。</li>
<li>使用双亲委派机制：
<ul>
<li>保证应用程序稳定有序的执行。</li>
<li>保证不同的类加载器加载不同的类。</li>
<li>可以有效的复用已加载的类，减少内存占用和性能消耗。</li>
</ul>
</li>
<li>打破双亲委派机制“
<ul>
<li>通过自定义类加载器，继承ClassLoader类并重写loadClass方法，再重写的方法中自定义加载逻辑，而不是一味的向上委托给父加载器。</li>
</ul>
</li>
</ul>
</details>
</div></template>


