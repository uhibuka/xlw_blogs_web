<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础"><span>一、基础</span></a></h2>
<details class="hint-container details"><summary>1.Java集合框架体系</summary>
<p>集合相关的类和接口都在java.util中，主要和两家接口相关：Collection、Map。而集合可以分为四种：Collection接口下面的基于单值集合的List（列表）接口、Set（集）接口、Queue（队列），另一种就是Map（映射）接口。</p>
</details>
<details class="hint-container details"><summary>2.说说 List, Set, Queue, Map 四者的区别？</summary>
<ul>
<li>List列表（对付顺序的好帮手）：储存的元素是有序的、可重复的。</li>
<li>Set集合（注重独一无二的性质）：存储的元素是不可重复的。</li>
<li>Queue（实现排队功能的叫号机）：按特定的排队规则派确定先后顺序，存储的元素是有序的可重复的。</li>
<li>Map映射（用key来搜索的专家）：使用键值对（key-value），key是无序的、不可重复的，value是无序的、可重复的，每个key只能对应一个value。</li>
</ul>
</details>
<details class="hint-container details"><summary>3.无序性和不可重复性的含义是什么？</summary>
<ul>
<li>无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数组的哈希值决定的，无序性不等于随机性。</li>
<li>不可重复性是指添加元素按照 <code v-pre>equals()</code>判断是，返回false，需要同时重写<code v-pre>equals()</code>方法和<code v-pre>hashCode()</code>方法。</li>
</ul>
</details>
<details class="hint-container details"><summary>4.为啥要使用集合，如何挑选合适的集合？</summary>
<ol>
<li>数组存储对象存在一些不足之处不能动态扩容，Java 集合底层是基于Obejct动态数组实现，还是使用了反向，Java 集合更灵活、更有效的方法来存储多个数据对象</li>
<li>Java 集合封装了一些了对数据操作的常用方法，减少了工作量，其次关于操作过程中的一些问题，如线程安全，也提供对应符合要求的集合</li>
<li>集合种类多样，可以根据业务情况进行挑选</li>
</ol>
</details>
<details class="hint-container details"><summary>5.Comparable 和 Comparator的区别？</summary>
<p>这两个接口都是Java中用于排序的接口，用于实例对象之间比较大小、排序等方面发挥了重要作用：</p>
<ul>
<li>
<p>comparable接口是出自于<code v-pre>java.long</code>包，他有一个<code v-pre>compareTo(Object obj)</code>方法来排序。</p>
<ul>
<li><code v-pre>Comparable</code> 接口定义了对象自身的排序方式，是对象固有的排序方法</li>
<li>比如一个 <code v-pre>song</code> 对象中的歌名和歌手名分别采用一种排序方法的话</li>
</ul>
</li>
<li>
<p><code v-pre>Comparator</code>接口实际上是出自 <code v-pre>java.util</code> 包它有一个<code v-pre>compare(Object obj1, Object obj2)</code>方法用来排序</p>
<ul>
<li><code v-pre>Comparator</code> 接口则是在外部独立定义的排序方式，可以创建多个不同的比较器，并在需要时选择使用。</li>
<li>可以为两个 <code v-pre>Comparator</code> 来实现歌名排序和歌星名排序</li>
</ul>
</li>
</ul>
</details>
<details class="hint-container details"><summary>6.Java里面线程安全的集合</summary>
<ol>
<li><strong>CopyOnWriteArrayList</strong>：是ArrayList的线程安全版本，通过在写操作时复制一份新的数组来实现线程安全，适用于读操作频繁、写操作较少的场景。</li>
<li><strong>ConcurrentHashMap</strong>：是HashMap的线程安全版本，采用分段锁（Segment）来实现高并发的读写操作。</li>
<li><strong>CopyOnWriteArraySet</strong>：是Set接口的线程安全实现，基于CopyOnWriteArrayList实现。\</li>
<li><strong>ConcurrentLinkedQueue</strong>：是一个基于链表实现的线程安全队列，适用于高并发场景下的生产者-消费者模型。</li>
<li><strong>ConcurrentLinkedDeque</strong>：是一个基于链表实现的线程安全双端队列。</li>
<li><strong>ConcurrentSkipListMap</strong>：是一个基于跳表实现的线程安全的有序映射。</li>
<li><strong>ConcurrentSkipListSet</strong>：是一个基于跳表实现的线程安全的有序集合。</li>
</ol>
</details>
<h2 id="二、单值集合" tabindex="-1"><a class="header-anchor" href="#二、单值集合"><span>二、单值集合</span></a></h2>
<details class="hint-container details"><summary>1.说说你对ArrayList的理解</summary>
<p>ArrayList是Java基于数组实现的一种动态数组的数据结构。</p>
<ul>
<li>
<p>底层实现是基于一个Object数组，会根据实际存储的元素动态的扩容或缩容</p>
</li>
<li>
<p>创建时可以自己定义大小，如果是无参构造则默认大小为10，数组容量满了才会扩容，按原先大小的1.5倍扩容，扩容是创建一个新数组，然后指针指向新数组。</p>
</li>
<li>
<p>由于是一种动态数组的数据结构，且被<code v-pre>RandomAccess</code> 接口标记了，表明实现该接口的类支持随机访问，可以通过索引进行访问，查询的时间复杂度是O(1)</p>
</li>
<li>
<p>插入可以头部插入、尾部插入、指定位置插入：时间复杂度是 O(n)、时间复杂度是 O(1)、时间复杂度是 O(n)</p>
</li>
<li>
<p>删除可以头部删除、尾部删除、指定位置删除：时间复杂度是 O(n)、时间复杂度是 O(1)、时间复杂度是 O(n)</p>
</li>
</ul>
</details>
<details class="hint-container details"><summary>2.说说你对LinkedList的理解</summary>
<p>LinkedList是Java基于链表实现的一个双向链表的数据结构。</p>
<ul>
<li>底层基于链表实现，是一个个的Node节点，节点包括pre、next指针和data数据，不可扩容。</li>
<li>由于是链表数据结构，不可用索引进行访问，访问指定节点只能遍历，查询的使劲按复杂度是O(n)。</li>
<li>插入可以头部插入、尾部插入、指定位置插入：时间复杂度是 O(1)、时间复杂度是 O(1)、时间复杂度是 O(1)。</li>
<li>删除可以头部删除、尾部删除、指定位置删除：时间复杂度是 O(1)、时间复杂度是 O(1)、时间复杂度是 O(1)。</li>
</ul>
</details>
<details class="hint-container details"><summary>3.ArrayList和LinkedList的区别是什么？</summary>
<p>底层实现、查询效率、插入和删除效率、扩容方式、遍历方式。</p>
</details>
<details class="hint-container details"><summary>4.ArrayList怎么序列化？</summary>
<p>ArrayList使用的是 <code v-pre>transient</code>修饰存储元素的 <code v-pre>elementData</code>的数组，<code v-pre>transient</code>关键字的作用是让被修饰的成员属性不被序列化。</p>
<p>ArrayList通过两个方法<strong>readObject、writeObject</strong>自定义序列化和反序列化策略，实际直接使用两个流<code v-pre>ObjectOutputStream</code>和<code v-pre>ObjectInputStream</code>来进行序列化和反序列化。</p>
</details>
<details class="hint-container details"><summary>5.ArrayList是线程安全的吗？有哪几种实现ArrayList线程安全的方法？</summary>
<p>ArrayList是线程不安全的，以下方案可以解决ArrayList线程不安全的问题：</p>
<ul>
<li>使用Vector代替，不推荐因为，其底层每个方法都用synchronized修饰，效率很差，而且是一个历史遗留类。</li>
<li>使用 Collections.synchronizedList 包装 ArrayList，然后操作包装后的 list。</li>
<li>使用 CopyOnWriteArrayList 代替 ArrayList。</li>
<li>在使用 ArrayList 时，应用程序通过同步机制去控制 ArrayList 的读写。</li>
</ul>
</details>
<details class="hint-container details"><summary>6.说一下CopyOnWriteArrayList</summary>
<p>CopyOnWriteArrayList 就是线程安全版本的ArrayList ，采用读写分离的并发策略。</p>
<ul>
<li>允许并发读，读操作不加锁，性能很高。</li>
<li>写操作时复制一个副本，在这个副本上执行写操作，与此同时其他线程来访问的话访问原先的List，写操作完毕后，将指针指向副本。</li>
</ul>
</details>
<details class="hint-container details"><summary>7.HashSet实现原理</summary>
<p>HashSet的底层代码就是 <code v-pre>new HashMap&lt;&gt;();</code></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
     * Constructs a new, empty set; the backing <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">HashMap</span></span></span><span class="token punctuation">}</span> instance has
     * default initial capacity (16) and load factor (0.75).
     */</span>
<span class="token keyword">public</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="三、双值集合" tabindex="-1"><a class="header-anchor" href="#三、双值集合"><span>三、双值集合</span></a></h2>
<details class="hint-container details"><summary>1.说说你对HashMap的理解</summary>
<p>HashMap时Map接口下的一个实现类，存储方式是键值对存储，是Java对Hash表的一种实现。</p>
<ul>
<li>
<p>jdk1.7中HashMap底层是基于数组+链表的形式，数组做Hash容器，数组存储每个元素对应一个链表，用于解决哈希冲突。</p>
</li>
<li>
<p>jdk1.8中HashMap底层是基于数组+链表+红黑树的形式，引入红黑树用于提高查询效率，优化HashMap的性能。</p>
<ul>
<li>引入红黑树主要是为了让hashmap集合分布的元素更均匀，如果没有红黑树可能会出现元素集中分布，某一个部位链表特别长，其他部位特别短。</li>
</ul>
</li>
<li>
<p>HashMap中kv都可以为null，但是元素不能重复。</p>
</li>
<li>
<p>初始化HashMap，默认大小是16，也可以自定义参数，如果定义的大小不是2的倍数，HashMap会向上寻找离得近的2的倍数。</p>
<ol>
<li>这样做的原因是方便哈希取余</li>
<li>在扩容时，利用扩容后的大小也是2的倍数，将已经产生hash碰撞的元素完美的转移到新的table中去</li>
</ol>
</li>
<li>
<p>HashMap的扩容是根据负载因子（默认为0.75）而决定的，在元素数量超过负载因子与容量的乘积时，HashMap 将自动进行扩容操作，扩容长度为原来的两倍。</p>
<p>这个过程可能比较耗时，尤其是当元素数量巨大时，需要重新计算所有数量的hash值，并重新分配到新的位置，为了避免频繁扩容，通常在创建时指定合适的初始容量，以及根据情况调整负载因子。</p>
</li>
<li>
<p>数据元素通过hash算法也就是散列函数进行定位，映射到Hash表（桶数组）对应索引的位置，在大多数情况下，已知键，对应查询、删除、修改的效率是O(1)，如果链表非常长，最差情况是O(n)</p>
</li>
</ul>
</details>
<details class="hint-container details"><summary>2.说一说hash算法</summary>
<p>哈希算法（Hash Algorithm）是一种将任意长度的输入数据映射为固定长度的输出数据的算法，也叫散列算法，可以将几个任意长度的二进制数据散列计算成以恶搞定长的二进制数据。常见的hash算法有md5，sha256.也可以自定义一些简单的hash算法，比如Java中有取余、内存地址等。</p>
<p>1、hash表是一种数据结构，通常要结合数组和hash算法来实现，我们利用hash算法可以定位一个元素的位置，并利用数据的随机访问特性快速的元素进行增删查改，他的<strong>最优时间复杂度可以达到O(1)。</strong></p>
<p>2、但是，他也存在一些问题，比如hash碰撞，如果<strong>数组的元素过少，或者hash算法不太优秀或者存入的元素太多</strong>，可能会经常发生hash碰撞，导致时间复杂度进行退化，最差可能是O(n)。</p>
<p>3、通常情况下，我们可以使用线性探测法、链表法等来解决hash碰撞的问题，同时提供一个负载因子，在必要的时候进行扩容，来保持一个相对较稳定的时间复杂度，比如java中的hashmap的实现。</p>
</details>
<details class="hint-container details"><summary>3.解决哈希冲突的方法有哪些？</summary>
<p>其实HashMap中使用链表就是为了处理哈希冲突，叫做链地址法。</p>
<ul>
<li>
<p>链地址法：在冲突的位置拉一个链表，把冲突的元素放进去。</p>
</li>
<li>
<p>开放定址法：从冲突的位置再接着往下找，给冲突元素找个空位</p>
<p>找空闲位置的方法也有很多</p>
<ul>
<li>线性探测法：从冲突位置开始，以此判断下一个是否空闲，直到找到空闲位置。</li>
<li>平方探测法：从冲突位置开始，第一次增加1<sup>2个位置，第二次增加2</sup>2…直到找到空闲位置。</li>
</ul>
</li>
<li>
<p>再哈希法：换一种哈希函数，重新计算冲突元素地址。</p>
</li>
<li>
<p>建立公共溢出区：再建一个数组，把冲突元素放进去。</p>
</li>
</ul>
</details>
<details class="hint-container details"><summary>4.HashMap的哈希/扰动函数是怎么设计的?</summary>
<p>HashMap的哈希函数是先拿到 key 的hashcode，是一个32位的int类型的数值，然后让hashcode的高16位和低16位进行异或操作。</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> h<span class="token punctuation">;</span>
    <span class="token comment">// key的hashCode和key的hashCode右移16位做异或运算</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary>5.HashMap的put()流程</summary>
<ol>
<li>
<p>首先进行哈希值的扰动，获取一个新的哈希值。<code v-pre>(key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);</code></p>
</li>
<li>
<p>判断tab是否位空或者长度为0，如果是则进行扩容操作。</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab <span class="token operator">=</span> table<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    n <span class="token operator">=</span> <span class="token punctuation">(</span>tab <span class="token operator">=</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>根据哈希值计算下标，如果对应小标正好没有存放数据，则直接插入即可否则需要覆盖。<code v-pre>tab[i = (n - 1) &amp; hash])</code></p>
</li>
<li>
<p>判断tab[i]是否为树节点，否则向链表中插入数据，是则向树中插入节点。</p>
</li>
<li>
<p>如果链表中插入节点的时候，链表长度大于等于8，则需要把链表转换为红黑树。<code v-pre>treeifyBin(tab, hash);</code></p>
</li>
<li>
<p>最后所有元素处理完成后，判断是否超过阈值；<code v-pre>threshold</code>，超过则扩容。</p>
</li>
</ol>
</details>
<details class="hint-container details"><summary>6.为什么HashMap链表转红黑树的阈值为8呢?</summary>
<ul>
<li>红黑树节点的大小大概是普通节点大小的两倍，所以转红黑树，牺牲了空间换时间，更多的是一种兜底的策略，保证极端情况下的查找效率。</li>
<li>阈值为什么要选8呢？和统计学有关。理想情况下，使用随机哈希码，链表里的节点符合泊松分布，出现节点个数的概率是递减的，节点个数为8的情况，发生概率仅为<code v-pre>0.00000006</code>。</li>
</ul>
<p>至于红黑树转回链表的阈值为什么是6，而不是8？是因为如果这个阈值也设置成8，假如发生碰撞，节点增减刚好在8附近，会发生链表和红黑树的不断转换，导致资源浪费.</p>
</details>
<details class="hint-container details"><summary>7.你对红黑树了解多少？为什么不用二叉树/平衡树？</summary>
<p>红黑树本质上就是一种二叉查找树，为了保持平衡，它又在二叉查找树的基础上增加了一些规则：</p>
<ol>
<li>每个节点要么是红色要么是黑色；</li>
<li>根节点永远是黑色；</li>
<li>所有的叶子节点都是黑色的；</li>
<li>每一个红色节点的两个子节点一定都是黑色；</li>
<li>从任一节点到期子树中每个叶子节点的路径都包含相同数量的黑色节点。</li>
</ol>
<blockquote>
<p>之所以不用二叉树：</p>
<ul>
<li>二叉树不平衡，可能出现树枝不均匀的情况；</li>
<li>红黑树是一种平衡的二叉树，插入、删除、查找的最坏时间复杂度都是0(log n),避免了二叉树最坏情况下的0(n)时间复杂度。</li>
</ul>
</blockquote>
<blockquote>
<p>之所以不用平衡二叉树：</p>
<ul>
<li>平衡二叉树是比红黑树更严格的平衡树，为了保持保持平衡，需要旋转的次数更多，也就是说平衡二叉树保持平衡的效率更低，所以平衡二叉树插入和删除的效率比红黑树要低。</li>
</ul>
</blockquote>
<details class="hint-container details"><summary>8.红黑树怎么保持平衡知道吗？</summary>
<ul>
<li>旋转和染色。</li>
<li>旋转分为左旋和右旋。</li>
</ul>
</details>
</details>
<details class="hint-container details"><summary>9.HashMap怎么查找元素的呢？</summary>
<ol>
<li><strong>根据key值计算哈希值</strong></li>
<li>**通过哈希值找到对应的值：**内部维护了一个桶数组，用于储存键值对。通过哈希值对桶数组长度取模，得到一个索引值，即可确定该键值对再桶数组的哪个位置。</li>
<li>**在桶中查找元素：**在确定了存放元素的桶中，HashMap会遍历桶中的链表（或红黑树），找到对应的键值对。如果有多个键值对的哈希值相同（即发生哈希碰撞），HashMap会通过key的equals()方法来比较具体的key值，确保找到对应的键值对。</li>
<li><strong>返回对应的值。</strong></li>
</ol>
</details>
<details class="hint-container details"><summary>10.jdk1.8对HashMap最主要做了哪些优化？</summary>
<ol>
<li>数据结构：加入了红黑树
<ul>
<li>原因：发生hash冲突，元素会存入链表，链表过长会转为红黑树，将时间复杂度由0(n)将为0(log n);</li>
</ul>
</li>
<li>链表插入方式：从头插法改成了尾插
<ul>
<li>原因：因为1.7头插法扩容时，会使链表发生反转，多线程环境下会产生环。</li>
</ul>
</li>
<li>扩容rehash：1.7中扩容时会对原数组中的元素重新hash定位。1.8中采用更简单的判断逻辑，不需要重新hash计算位置，新的位置不变或者是索引+新增容量大小。
<ul>
<li>原因：提高扩容效率，提高性能</li>
</ul>
</li>
<li>扩容时机：插入数据时，1.7先判断是否需要扩容，再插入，1.8之后先进行插入，插入完成之后在判断是否需要扩容。</li>
<li>散列函数：1.7进行四次移位和四次异或，1.8只做一次
<ul>
<li>原因：做4次的话，边际效用也不大，改为一次，提升效率。</li>
</ul>
</li>
</ol>
</details>
<details class="hint-container details"><summary>11.HashMap 常见的遍历方式</summary>
<ol>
<li>使用<code v-pre>entrySet()</code>遍历；</li>
<li>使用<code v-pre>keySet()</code>遍历</li>
<li>通过 <code v-pre>entrySet()</code> 方法获取键值对的集合，再通过迭代器进行遍历。</li>
</ol>
</details>
<details class="hint-container details"><summary>12.hashmap可以按照key来排序吗？如果不可以，有没有可以的实现？</summary>
<p>hashMap是无序的，根据key的hash值随即插入，不能用key排序。如果想要排序可以使用TreeMap和LinkedHashMap；</p>
<ol>
<li><code v-pre>TreeMap</code>：<code v-pre>TreeMap</code>是基于红黑树实现的，他会对键进行排序</li>
<li><code v-pre>LinkedHashMap</code>：<code v-pre>LinkedHashMap</code>保留了元素插入的顺序，因此按照插入的顺序可以遍历键值对。</li>
</ol>
</details>
<details class="hint-container details"><summary>13.HashMap和HashSet的区别？</summary>
<ol>
<li><strong>HashMap</strong>：
<ul>
<li>HashMap是基于哈希表实现的，使用键值对存储数据，通过键来查找值。</li>
<li>HashMap允许键和值都为null，并且支持键值对的映射关系。</li>
<li>HashMap适用于需要通过键快速查找值的场景，例如通过学生ID查找学生信息。</li>
</ul>
</li>
<li><strong>HashSet</strong>：
<ul>
<li>HashSet是基于HashMap实现的，它只存储集合中的元素（没有键值对的概念），并且保证集合中的元素不重复。</li>
<li>HashSet不允许存储重复元素，当尝试添加重复元素时，新元素会被忽略。</li>
<li>HashSet适用于需要存储一组不重复元素的场景，例如存储唯一的用户名或数字集合。</li>
</ul>
</li>
</ol>
<p>总的来说，HashMap适用于需要键值对映射的场景，而HashSet适用于需要存储不重复元素的场景。在实际开发中，根据需求选择合适的集合类可以提高代码的效率和可读性。</p>
</details>
<details class="hint-container details"><summary>14.HashMap和TreeMap的区别？</summary>
<p><code v-pre>HashMap</code> 和 <code v-pre>TreeMap</code> 是 Java 中的两种不同的 Map 实现，它们之间有以下区别：</p>
<ol>
<li>内部数据结构：
<ul>
<li><code v-pre>HashMap</code>是基于哈希表实现的，使用哈希表存储键值对，通过键的哈希值来快速定位存储位置，具有O(1)的常数时间复杂度进行插入、删除和查找操作。</li>
<li><code v-pre>TreeMap</code>是基于红黑树实现的，他是有序的键值对集合，根据键的自如按顺序或自定义比较器及逆行排序，由于使用红黑树，时间复杂度为O(log n);</li>
</ul>
</li>
<li>存储顺序：
<ul>
<li><code v-pre>HashMap</code> 不保证元素的顺序，它是无序的。</li>
<li><code v-pre>TreeMap</code> 会根据键的顺序进行排序存储，因此它是有序的。</li>
</ul>
</li>
<li>性能和用途：
<ul>
<li><code v-pre>HashMap</code>适用于快速查找、插入和删除键值对，且不需要保持顺序的情况，大多数情况下保持更好的性能。</li>
<li><code v-pre>TreeMap</code>适用于需要按键排序的情况，虽然性能较慢，但是提供了有序性和额外的方法来处理有序映射。</li>
</ul>
</li>
<li>null键和排序：
<ul>
<li><code v-pre>HashMap</code>允许一个null键和多个null值；</li>
<li><code v-pre>TreeMap</code>不允许null键，但是允许null值</li>
</ul>
</li>
</ol>
</details>
<details class="hint-container details"><summary>15.HashMap和HashTable的区别？</summary>
<ol>
<li>底层数据结构：
<ul>
<li><code v-pre>HashMap</code>的底层使用数组+链表+红黑树实现，解决哈希冲突时使用链表+红黑树。</li>
<li><code v-pre>HashTable</code>的底层使用数组+链表实现，解决哈希冲突时使用链表。</li>
</ul>
</li>
<li>初始容量和扩容策略不同：
<ol>
<li>创建时如果不指定容量的话，<code v-pre>HashMap</code>的默认大小为16，扩容为原来的2倍。<code v-pre>HashTable</code>的默认大小为11，扩容时变为原来的2n+1倍。</li>
<li>创建时如果指定了容量初始值的话，<code v-pre>HashTable</code>就是指定的大小，而 <code v-pre>HashMap</code>会将其扩容为2的幂次方大小（如果不是2的倍数的情况下）。</li>
</ol>
</li>
<li>存储数据null 键值：
<ul>
<li><code v-pre>HashMap</code> 允许有一个 <code v-pre>null</code> 键和多个 <code v-pre>null</code> 值，即键和值都可以为 <code v-pre>null</code>。</li>
<li><code v-pre>Hashtable</code> 不允许键或值为 <code v-pre>null</code>，如果尝试将 <code v-pre>null</code> 作为键或值放入 <code v-pre>Hashtable</code>，会抛出 <code v-pre>NullPointerException</code>。</li>
</ul>
</li>
<li>线程安全性：
<ul>
<li><code v-pre>HashMap</code>线程不安全。</li>
<li><code v-pre>HashTable</code>的每个方法都用<code v-pre>synchronized</code>修饰因此线程安全，但是性能较低。</li>
</ul>
</li>
<li>继承关系：
<ul>
<li><code v-pre>HashMap</code>继承自<code v-pre>AbstractMap</code>类，实现了<code v-pre>Map</code>接口</li>
<li><code v-pre>HashTable</code>继承自<code v-pre>Dictionary</code>类，（已经被淘汰不推荐用），实现了<code v-pre>Map</code>接口和<code v-pre>HashTable</code>接口。</li>
</ul>
</li>
</ol>
</details>
<details class="hint-container details"><summary>16HashMap为什么线程不安全？</summary>
<p>在多线程情况下<code v-pre>HashMap</code>扩容会导致死循环和数据丢失的问题。举个例子：</p>
<ol>
<li>两个线程a，b同时进行put操作，并且发生了哈希冲突。</li>
<li>不同的线程可能在不同的时间片获取CPU的执行机会，当线程a执行完哈希冲突的判断后，由于时间片耗尽挂起了，然后线程b先完成了插入操作。</li>
<li>随后线程a获得时间片，因为之前已经进行过哈希冲突的判断，会直接进行插入，将线程b插入的数据覆盖。</li>
</ol>
</details>
<details class="hint-container details"><summary>17.有什么办法能解决HashMap线程不安全的问题呢？</summary>
<ol>
<li>使用<code v-pre>HashTable</code>：<code v-pre>HashTable</code>的每个方法上都加了synchronized关键字，锁住整个table数组，粒度较大。</li>
<li>使用<code v-pre>ConcurrenyHashMap</code>，<code v-pre>ConcurrenyHashMap</code>在1.7长使用分段锁，1，8中使用了CAS+synchronized/</li>
<li>使用Collections.synchronizedMap()保证HashMap的线程安全。</li>
</ol>
</details>
<details class="hint-container details"><summary>18.ConcurrentHashMap的底层实现原理是什么？</summary>
<blockquote>
<p>ConcurrentHashmap线程安全在jdk1.7版本是基于<code v-pre>分段锁</code>实现，在jdk1.8是基于<code v-pre>CAS+synchronized</code>实现。</p>
<p>ConcurrentHashmap的key和value都不能为空，为了避免二义性。</p>
</blockquote>
<ul>
<li>
<p>1.7分段锁：</p>
<ul>
<li>
<p>从结构上说，1.7版本的ConcurrentHashMap采用分段锁机制，里面包含一个Segment数组，Segment继承于ReentrantLock，Segment则包含HashEntry的数组，HashEntry本身就是一个链表的结构，具有保存key、value的能力能指向下一个节点的指针。</p>
</li>
<li>
<p>实际上就是相当于每个Segment都是一个HashMap，默认的Segment长度是16，也就是支持16个线程的并发写，Segment之间相互不会受到影响。</p>
</li>
<li>
<p>put流程</p>
<p>：整个流程和HashMap非常类似，只不过是先定位到具体的Segment，然后通过ReentrantLock去操作而已，后面的流程，就和HashMap基本上是一样的。</p>
<ol>
<li>计算hash，定位到segment，segment如果是空就先初始化</li>
<li>使用ReentrantLock加锁，如果获取锁失败则尝试自旋，自旋超过次数就阻塞获取，保证一定获取锁成功</li>
<li>遍历HashEntry，就是和HashMap一样，数组中key和hash一样就直接替换，不存在就再插入链表，链表同样操作</li>
</ol>
</li>
<li>
<p><strong>get流程</strong>：get也很简单，key通过hash定位到segment，再遍历链表定位到具体的元素上，需要注意的是value是volatile的，所以get是不需要加锁的。</p>
</li>
</ul>
</li>
<li>
<p>1.8cas+synchronized：</p>
<ul>
<li>jdk1.8实现线程安全不是在数据结构上下功夫，它的数据结构和HashMap是一样的，数组+链表+红黑树。它实现线程安全的关键点在于put流程。</li>
<li><strong>put流程：</strong>
<ol>
<li>首先计算hash，遍历node数组，如果node是空的话，就通过CAS+自旋的方式初始化</li>
<li>如果当前数组位置是空则直接通过CAS自旋写入数据</li>
<li>如果hash==MOVED，说明需要扩容，执行扩容</li>
<li>如果都不满足，就使用synchronized写入数据，写入数据同样判断链表、红黑树，链表写入和HashMap的方式一样，key hash一样就覆盖，反之就尾插法，链表长度超过8就转换成红黑树</li>
</ol>
</li>
<li>**get查询：**get很简单，和HashMap基本相同，通过key计算位置，table该位置key相同就返回，如果是红黑树按照红黑树获取，否则就遍历链表获取。</li>
</ul>
</li>
</ul>
<p>区别：</p>
<ul>
<li><strong>底层实现/Hash 碰撞解决方法</strong> : JDK 1.7 采用拉链法，JDK1.8 采用拉链法结合红黑树（链表长度超过一定阈值时，将链表转换为红黑树）。</li>
<li><strong>线程安全实现方式</strong>：JDK 1.7 采用 <code v-pre>Segment</code> 分段锁来保证安全， <code v-pre>Segment</code> 是继承自 <code v-pre>ReentrantLock</code>。JDK1.8 放弃了 <code v-pre>Segment</code> 分段锁的设计，采用 <code v-pre>Node + CAS + synchronized</code> 保证线程安全，锁粒度更细，<code v-pre>synchronized</code> 只锁定当前链表或红黑二叉树的首节点。</li>
<li><strong>并发度</strong>：JDK 1.7 最大并发度是 Segment 的个数，默认是 16。JDK 1.8 最大并发度是 Node 数组的大小，并发度更大。</li>
</ul>
</details>
<details class="hint-container details"><summary>19.ConcurrentHashMap能保证复合性操作吗？</summary>
<p>复合操作是指由多个基本操作(如<code v-pre>put</code>、<code v-pre>get</code>、<code v-pre>remove</code>、<code v-pre>containsKey</code>等)组成的操作，例如先判断某个键是否存在<code v-pre>containsKey(key)</code>，然后根据结果进行插入或更新<code v-pre>put(key, value)</code>。这种操作在执行过程中可能会被其他线程打断，导致结果不符合预期。</p>
<p><code v-pre>ConcurrentHashMap</code> 提供了一些原子性的复合操作，如 <code v-pre>putIfAbsent</code>、<code v-pre>compute</code>、<code v-pre>computeIfAbsent</code> 、<code v-pre>computeIfPresent</code>、<code v-pre>merge</code>等。这些方法都可以接受一个函数作为参数，根据给定的 key 和 value 来计算一个新的 value，并且将其更新到 map 中。</p>
</details>
<details class="hint-container details"><summary>20.LinkedHashMap 底层实现是什么？</summary>
<p><code v-pre>LinkedHashMap </code>是继承自HashMap的一个类，在HashMap的基础上增加了按照拆入顺序或者访问顺序来维护键值对的顺序。底层结构与HashMap一致，但是增加了一个双向链表来维护顺序。</p>
</details>
<details class="hint-container details"><summary>21.LinkedHashMap和 HashMap 有什么区别？</summary>
<ol>
<li>底层实现结构：都是使用数据+链表+红黑树来实现，只不过LinkedHashMap增加了一个双向链表来维护顺序。</li>
<li>元素顺序的处理：在HashMap中元素的存储是无序的。相比之下LinkedHashMap会按照插入顺序或访问顺序来维护元素的顺序。</li>
<li>性能方面：因为不需要维护顺序所以HashMap的性能会优于LinkedHashMap。</li>
<li>最后其默认大小和负载因子都是想同的，同时两者都是线程不安全的。</li>
</ol>
</details>
</div></template>


