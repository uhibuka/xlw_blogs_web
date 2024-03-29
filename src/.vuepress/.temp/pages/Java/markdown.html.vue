<template><div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2>
<details class="hint-container details"><summary>1.基本类型和包装类型的区别？</summary>
<p><strong>相同点</strong> ：都可以用作变量，无论是方法传递的参数还是成员变量。</p>
<p><strong>不同点</strong> ：一个是基础数据类型，一个是引用数据类型</p>
<ul>
<li>两者在比较的时候方式不同；</li>
<li>储存方式不同，基本类型一般作为参数和代码块内的局部变量（栈的局部变量表中），如果是成员变量（队），static修饰的（方法区）。引用数据类型（堆），static修饰的（方法区）；</li>
<li>所占空间大小不同；</li>
<li>初始化的默认值也不同；</li>
</ul>
<p>包装类的自动拆装箱：从字节码中，我们发现装箱其实就是调用了包装类的<code v-pre>valueof()</code>方法，拆箱其实就是调用了 <code v-pre>xxxValue()</code>方法。</p>
</details>
<details class="hint-container details"><summary>2.包装类的缓存机制</summary>
<ul>
<li>Integer： -128~127（包括Long，Short，Byte）</li>
<li>Boolean： true/false</li>
<li>Character： 0~127</li>
<li>两种浮点数类型的包装类<code v-pre>Float</code>，<code v-pre>Double</code>并没有实现缓存机制。</li>
</ul>
</details>
<details class="hint-container details"><summary>3.成员变量和局部变量的区别？</summary>
<ul>
<li><strong>位置区别</strong> ：成员变量在类里面与方法同级；局部变量在方法内部</li>
</ul>
<blockquote>
<p>成员变量可以被<code v-pre>public</code>，<code v-pre>private</code>，<code v-pre>static</code>等修饰符修饰，而局部变量不能被访问控制修饰符，以及static等修饰符所修饰，但是成员变量和局部变量都能够被<code v-pre>final</code>修饰</p>
</blockquote>
<ul>
<li><strong>存储方式</strong>：从变量在内存中的存储方式来看，如果成员变量使用<code v-pre>static</code>修饰，那么这个成员变量属于类，位于方法区，如果没有，那么这个变量就是属于实例的，存放在堆内存。局部变量则存在于栈内存的局部变量表。</li>
<li><strong>默认值</strong>：成员变量如果没有被赋初始值，就会以类型的默认值而赋值（被final修饰的的成员变量必须显式的地赋值），而局部变量不会自动赋值。</li>
<li><strong>生存时间</strong>：成员变量是对象地一部分，随着对象地创建而存在，而局部变量是随着方法地调用而自动生成，随着方法调用结束而消亡。</li>
</ul>
</details>
<details class="hint-container details"><summary>Details</summary>
</details>
<details class="hint-container details"><summary>Details</summary>
</details>
<details class="hint-container details"><summary>Details</summary>
</details>
<details class="hint-container details"><summary>Details</summary>
</details>
<details class="hint-container details"><summary>Details</summary>
</details>
</div></template>


