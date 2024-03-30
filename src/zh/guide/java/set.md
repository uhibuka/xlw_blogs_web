---
title: Java 集合
icon: fab fa-markdown
order: 2
category:
  - Java 集合
tag:
  - Markdown
---
## 一、基础

::: details  1.Java集合框架体系

集合相关的类和接口都在java.util中，主要和两家接口相关：Collection、Map。而集合可以分为四种：Collection接口下面的基于单值集合的List（列表）接口、Set（集）接口、Queue（队列），另一种就是Map（映射）接口。
:::

::: details  2.说说 List, Set, Queue, Map 四者的区别？

- List列表（对付顺序的好帮手）：储存的元素是有序的、可重复的。
- Set集合（注重独一无二的性质）：存储的元素是不可重复的。
- Queue（实现排队功能的叫号机）：按特定的排队规则派确定先后顺序，存储的元素是有序的可重复的。
- Map映射（用key来搜索的专家）：使用键值对（key-value），key是无序的、不可重复的，value是无序的、可重复的，每个key只能对应一个value。
:::

::: details  3.无序性和不可重复性的含义是什么？

- 无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数组的哈希值决定的，无序性不等于随机性。
- 不可重复性是指添加元素按照 `equals()`判断是，返回false，需要同时重写`equals()`方法和`hashCode()`方法。
:::

::: details  4.为啥要使用集合，如何挑选合适的集合？

1. 数组存储对象存在一些不足之处不能动态扩容，Java 集合底层是基于Obejct动态数组实现，还是使用了反向，Java 集合更灵活、更有效的方法来存储多个数据对象
2. Java 集合封装了一些了对数据操作的常用方法，减少了工作量，其次关于操作过程中的一些问题，如线程安全，也提供对应符合要求的集合
3. 集合种类多样，可以根据业务情况进行挑选
:::

::: details  5.Comparable 和 Comparator的区别？

这两个接口都是Java中用于排序的接口，用于实例对象之间比较大小、排序等方面发挥了重要作用：

- comparable接口是出自于`java.long`包，他有一个`compareTo(Object obj)`方法来排序。
  - `Comparable` 接口定义了对象自身的排序方式，是对象固有的排序方法
  - 比如一个 `song` 对象中的歌名和歌手名分别采用一种排序方法的话

- `Comparator`接口实际上是出自 `java.util` 包它有一个`compare(Object obj1, Object obj2)`方法用来排序 
  - `Comparator` 接口则是在外部独立定义的排序方式，可以创建多个不同的比较器，并在需要时选择使用。
  - 可以为两个 `Comparator` 来实现歌名排序和歌星名排序
:::

::: details  6.Java里面线程安全的集合

1. **CopyOnWriteArrayList**：是ArrayList的线程安全版本，通过在写操作时复制一份新的数组来实现线程安全，适用于读操作频繁、写操作较少的场景。
2. **ConcurrentHashMap**：是HashMap的线程安全版本，采用分段锁（Segment）来实现高并发的读写操作。
3. **CopyOnWriteArraySet**：是Set接口的线程安全实现，基于CopyOnWriteArrayList实现。\
4. **ConcurrentLinkedQueue**：是一个基于链表实现的线程安全队列，适用于高并发场景下的生产者-消费者模型。
5. **ConcurrentLinkedDeque**：是一个基于链表实现的线程安全双端队列。
6. **ConcurrentSkipListMap**：是一个基于跳表实现的线程安全的有序映射。
7. **ConcurrentSkipListSet**：是一个基于跳表实现的线程安全的有序集合。
:::

## 二、单值集合

::: details  1.说说你对ArrayList的理解

ArrayList是Java基于数组实现的一种动态数组的数据结构。

- 底层实现是基于一个Object数组，会根据实际存储的元素动态的扩容或缩容
- 创建时可以自己定义大小，如果是无参构造则默认大小为10，数组容量满了才会扩容，按原先大小的1.5倍扩容，扩容是创建一个新数组，然后指针指向新数组。

- 由于是一种动态数组的数据结构，且被`RandomAccess` 接口标记了，表明实现该接口的类支持随机访问，可以通过索引进行访问，查询的时间复杂度是O(1)
- 插入可以头部插入、尾部插入、指定位置插入：时间复杂度是 O(n)、时间复杂度是 O(1)、时间复杂度是 O(n)
- 删除可以头部删除、尾部删除、指定位置删除：时间复杂度是 O(n)、时间复杂度是 O(1)、时间复杂度是 O(n)
:::

::: details  2.说说你对LinkedList的理解

LinkedList是Java基于链表实现的一个双向链表的数据结构。

- 底层基于链表实现，是一个个的Node节点，节点包括pre、next指针和data数据，不可扩容。
- 由于是链表数据结构，不可用索引进行访问，访问指定节点只能遍历，查询的使劲按复杂度是O(n)。
- 插入可以头部插入、尾部插入、指定位置插入：时间复杂度是 O(1)、时间复杂度是 O(1)、时间复杂度是 O(1)。
- 删除可以头部删除、尾部删除、指定位置删除：时间复杂度是 O(1)、时间复杂度是 O(1)、时间复杂度是 O(1)。
:::

::: details  3.ArrayList和LinkedList的区别是什么？

底层实现、查询效率、插入和删除效率、扩容方式、遍历方式。
:::

::: details  4.ArrayList怎么序列化？

ArrayList使用的是 `transient`修饰存储元素的 `elementData`的数组，`transient`关键字的作用是让被修饰的成员属性不被序列化。

ArrayList通过两个方法**readObject、writeObject**自定义序列化和反序列化策略，实际直接使用两个流`ObjectOutputStream`和`ObjectInputStream`来进行序列化和反序列化。
:::

::: details  5.ArrayList是线程安全的吗？有哪几种实现ArrayList线程安全的方法？

ArrayList是线程不安全的，以下方案可以解决ArrayList线程不安全的问题：

- 使用Vector代替，不推荐因为，其底层每个方法都用synchronized修饰，效率很差，而且是一个历史遗留类。
- 使用 Collections.synchronizedList 包装 ArrayList，然后操作包装后的 list。
- 使用 CopyOnWriteArrayList 代替 ArrayList。
- 在使用 ArrayList 时，应用程序通过同步机制去控制 ArrayList 的读写。
:::

::: details  6.说一下CopyOnWriteArrayList

CopyOnWriteArrayList 就是线程安全版本的ArrayList ，采用读写分离的并发策略。

- 允许并发读，读操作不加锁，性能很高。
- 写操作时复制一个副本，在这个副本上执行写操作，与此同时其他线程来访问的话访问原先的List，写操作完毕后，将指针指向副本。
:::

::: details  7.HashSet实现原理

HashSet的底层代码就是 `new HashMap<>();`

```java
/**
     * Constructs a new, empty set; the backing {@code HashMap} instance has
     * default initial capacity (16) and load factor (0.75).
     */
public HashSet() {
        map = new HashMap<>();
    }
```
:::
## 三、双值集合

::: details  1.说说你对HashMap的理解

HashMap时Map接口下的一个实现类，存储方式是键值对存储，是Java对Hash表的一种实现。

- jdk1.7中HashMap底层是基于数组+链表的形式，数组做Hash容器，数组存储每个元素对应一个链表，用于解决哈希冲突。

- jdk1.8中HashMap底层是基于数组+链表+红黑树的形式，引入红黑树用于提高查询效率，优化HashMap的性能。

  - 引入红黑树主要是为了让hashmap集合分布的元素更均匀，如果没有红黑树可能会出现元素集中分布，某一个部位链表特别长，其他部位特别短。

- HashMap中kv都可以为null，但是元素不能重复。

- 初始化HashMap，默认大小是16，也可以自定义参数，如果定义的大小不是2的倍数，HashMap会向上寻找离得近的2的倍数。

  1. 这样做的原因是方便哈希取余
  2. 在扩容时，利用扩容后的大小也是2的倍数，将已经产生hash碰撞的元素完美的转移到新的table中去

- HashMap的扩容是根据负载因子（默认为0.75）而决定的，在元素数量超过负载因子与容量的乘积时，HashMap 将自动进行扩容操作，扩容长度为原来的两倍。

  这个过程可能比较耗时，尤其是当元素数量巨大时，需要重新计算所有数量的hash值，并重新分配到新的位置，为了避免频繁扩容，通常在创建时指定合适的初始容量，以及根据情况调整负载因子。

- 数据元素通过hash算法也就是散列函数进行定位，映射到Hash表（桶数组）对应索引的位置，在大多数情况下，已知键，对应查询、删除、修改的效率是O(1)，如果链表非常长，最差情况是O(n)
:::

::: details  2.说一说hash算法

哈希算法（Hash Algorithm）是一种将任意长度的输入数据映射为固定长度的输出数据的算法，也叫散列算法，可以将几个任意长度的二进制数据散列计算成以恶搞定长的二进制数据。常见的hash算法有md5，sha256.也可以自定义一些简单的hash算法，比如Java中有取余、内存地址等。

1、hash表是一种数据结构，通常要结合数组和hash算法来实现，我们利用hash算法可以定位一个元素的位置，并利用数据的随机访问特性快速的元素进行增删查改，他的**最优时间复杂度可以达到O(1)。**

2、但是，他也存在一些问题，比如hash碰撞，如果**数组的元素过少，或者hash算法不太优秀或者存入的元素太多**，可能会经常发生hash碰撞，导致时间复杂度进行退化，最差可能是O(n)。

3、通常情况下，我们可以使用线性探测法、链表法等来解决hash碰撞的问题，同时提供一个负载因子，在必要的时候进行扩容，来保持一个相对较稳定的时间复杂度，比如java中的hashmap的实现。
:::

::: details  3.解决哈希冲突的方法有哪些？

其实HashMap中使用链表就是为了处理哈希冲突，叫做链地址法。

- 链地址法：在冲突的位置拉一个链表，把冲突的元素放进去。

- 开放定址法：从冲突的位置再接着往下找，给冲突元素找个空位

  找空闲位置的方法也有很多

  - 线性探测法：从冲突位置开始，以此判断下一个是否空闲，直到找到空闲位置。
  - 平方探测法：从冲突位置开始，第一次增加1^2个位置，第二次增加2^2…直到找到空闲位置。

- 再哈希法：换一种哈希函数，重新计算冲突元素地址。

- 建立公共溢出区：再建一个数组，把冲突元素放进去。
:::

::: details  4.HashMap的哈希/扰动函数是怎么设计的?

HashMap的哈希函数是先拿到 key 的hashcode，是一个32位的int类型的数值，然后让hashcode的高16位和低16位进行异或操作。

```java
static final int hash(Object key) {
    int h;
    // key的hashCode和key的hashCode右移16位做异或运算
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}

```
:::

::: details  5.HashMap的put()流程

1. 首先进行哈希值的扰动，获取一个新的哈希值。`(key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);`

2. 判断tab是否位空或者长度为0，如果是则进行扩容操作。

3. ```java
   if ((tab = table) == null || (n = tab.length) == 0)
       n = (tab = resize()).length;
   ```

4. 根据哈希值计算下标，如果对应小标正好没有存放数据，则直接插入即可否则需要覆盖。`tab[i = (n - 1) & hash])`

5. 判断tab[i]是否为树节点，否则向链表中插入数据，是则向树中插入节点。

6. 如果链表中插入节点的时候，链表长度大于等于8，则需要把链表转换为红黑树。`treeifyBin(tab, hash);`

7. 最后所有元素处理完成后，判断是否超过阈值；`threshold`，超过则扩容。
:::

::: details  6.为什么HashMap链表转红黑树的阈值为8呢?

- 红黑树节点的大小大概是普通节点大小的两倍，所以转红黑树，牺牲了空间换时间，更多的是一种兜底的策略，保证极端情况下的查找效率。
- 阈值为什么要选8呢？和统计学有关。理想情况下，使用随机哈希码，链表里的节点符合泊松分布，出现节点个数的概率是递减的，节点个数为8的情况，发生概率仅为`0.00000006`。

至于红黑树转回链表的阈值为什么是6，而不是8？是因为如果这个阈值也设置成8，假如发生碰撞，节点增减刚好在8附近，会发生链表和红黑树的不断转换，导致资源浪费.
:::

::: details  7.你对红黑树了解多少？为什么不用二叉树/平衡树？

红黑树本质上就是一种二叉查找树，为了保持平衡，它又在二叉查找树的基础上增加了一些规则：

1. 每个节点要么是红色要么是黑色；
2. 根节点永远是黑色；
3. 所有的叶子节点都是黑色的；
4. 每一个红色节点的两个子节点一定都是黑色；
5. 从任一节点到期子树中每个叶子节点的路径都包含相同数量的黑色节点。

> 之所以不用二叉树：
>
> - 二叉树不平衡，可能出现树枝不均匀的情况；
> - 红黑树是一种平衡的二叉树，插入、删除、查找的最坏时间复杂度都是0(log n),避免了二叉树最坏情况下的0(n)时间复杂度。



> 之所以不用平衡二叉树：
>
> - 平衡二叉树是比红黑树更严格的平衡树，为了保持保持平衡，需要旋转的次数更多，也就是说平衡二叉树保持平衡的效率更低，所以平衡二叉树插入和删除的效率比红黑树要低。

::: details  8.红黑树怎么保持平衡知道吗？

- 旋转和染色。
- 旋转分为左旋和右旋。
:::

::: details  9.HashMap怎么查找元素的呢？

1. **根据key值计算哈希值**
2. **通过哈希值找到对应的值：**内部维护了一个桶数组，用于储存键值对。通过哈希值对桶数组长度取模，得到一个索引值，即可确定该键值对再桶数组的哪个位置。
3. **在桶中查找元素：**在确定了存放元素的桶中，HashMap会遍历桶中的链表（或红黑树），找到对应的键值对。如果有多个键值对的哈希值相同（即发生哈希碰撞），HashMap会通过key的equals()方法来比较具体的key值，确保找到对应的键值对。
4. **返回对应的值。**
:::

::: details  10.jdk1.8对HashMap最主要做了哪些优化？

1. 数据结构：加入了红黑树
   - 原因：发生hash冲突，元素会存入链表，链表过长会转为红黑树，将时间复杂度由0(n)将为0(log n);
2. 链表插入方式：从头插法改成了尾插
   - 原因：因为1.7头插法扩容时，会使链表发生反转，多线程环境下会产生环。
3. 扩容rehash：1.7中扩容时会对原数组中的元素重新hash定位。1.8中采用更简单的判断逻辑，不需要重新hash计算位置，新的位置不变或者是索引+新增容量大小。
   - 原因：提高扩容效率，提高性能
4. 扩容时机：插入数据时，1.7先判断是否需要扩容，再插入，1.8之后先进行插入，插入完成之后在判断是否需要扩容。
5. 散列函数：1.7进行四次移位和四次异或，1.8只做一次
   - 原因：做4次的话，边际效用也不大，改为一次，提升效率。
:::

::: details  11.HashMap 常见的遍历方式

1. 使用`entrySet()`遍历；
2. 使用`keySet()`遍历
3. 通过 `entrySet()` 方法获取键值对的集合，再通过迭代器进行遍历。
:::

::: details  12.hashmap可以按照key来排序吗？如果不可以，有没有可以的实现？

hashMap是无序的，根据key的hash值随即插入，不能用key排序。如果想要排序可以使用TreeMap和LinkedHashMap；

1. `TreeMap`：`TreeMap`是基于红黑树实现的，他会对键进行排序
2. `LinkedHashMap`：`LinkedHashMap`保留了元素插入的顺序，因此按照插入的顺序可以遍历键值对。
:::

::: details  13.HashMap和HashSet的区别？

1. **HashMap**：
   - HashMap是基于哈希表实现的，使用键值对存储数据，通过键来查找值。
   - HashMap允许键和值都为null，并且支持键值对的映射关系。
   - HashMap适用于需要通过键快速查找值的场景，例如通过学生ID查找学生信息。
2. **HashSet**：
   - HashSet是基于HashMap实现的，它只存储集合中的元素（没有键值对的概念），并且保证集合中的元素不重复。
   - HashSet不允许存储重复元素，当尝试添加重复元素时，新元素会被忽略。
   - HashSet适用于需要存储一组不重复元素的场景，例如存储唯一的用户名或数字集合。

总的来说，HashMap适用于需要键值对映射的场景，而HashSet适用于需要存储不重复元素的场景。在实际开发中，根据需求选择合适的集合类可以提高代码的效率和可读性。
:::

::: details  14.HashMap和TreeMap的区别？

`HashMap` 和 `TreeMap` 是 Java 中的两种不同的 Map 实现，它们之间有以下区别：

1. 内部数据结构：
   - `HashMap`是基于哈希表实现的，使用哈希表存储键值对，通过键的哈希值来快速定位存储位置，具有O(1)的常数时间复杂度进行插入、删除和查找操作。
   - `TreeMap`是基于红黑树实现的，他是有序的键值对集合，根据键的自如按顺序或自定义比较器及逆行排序，由于使用红黑树，时间复杂度为O(log n);
2. 存储顺序：
   - `HashMap` 不保证元素的顺序，它是无序的。
   - `TreeMap` 会根据键的顺序进行排序存储，因此它是有序的。
3. 性能和用途：
   - `HashMap`适用于快速查找、插入和删除键值对，且不需要保持顺序的情况，大多数情况下保持更好的性能。
   - `TreeMap`适用于需要按键排序的情况，虽然性能较慢，但是提供了有序性和额外的方法来处理有序映射。
4. null键和排序：
   - `HashMap`允许一个null键和多个null值；
   - `TreeMap`不允许null键，但是允许null值
:::

::: details  15.HashMap和HashTable的区别？

1. 底层数据结构：
   - `HashMap`的底层使用数组+链表+红黑树实现，解决哈希冲突时使用链表+红黑树。
   - `HashTable`的底层使用数组+链表实现，解决哈希冲突时使用链表。
2. 初始容量和扩容策略不同：
   1. 创建时如果不指定容量的话，`HashMap`的默认大小为16，扩容为原来的2倍。`HashTable`的默认大小为11，扩容时变为原来的2n+1倍。
   2. 创建时如果指定了容量初始值的话，`HashTable`就是指定的大小，而 `HashMap`会将其扩容为2的幂次方大小（如果不是2的倍数的情况下）。
3. 存储数据null 键值：
   - `HashMap` 允许有一个 `null` 键和多个 `null` 值，即键和值都可以为 `null`。
   - `Hashtable` 不允许键或值为 `null`，如果尝试将 `null` 作为键或值放入 `Hashtable`，会抛出 `NullPointerException`。
4. 线程安全性：
   - `HashMap`线程不安全。
   - `HashTable`的每个方法都用`synchronized`修饰因此线程安全，但是性能较低。
5. 继承关系：
   - `HashMap`继承自`AbstractMap`类，实现了`Map`接口
   - `HashTable`继承自`Dictionary`类，（已经被淘汰不推荐用），实现了`Map`接口和`HashTable`接口。
:::

::: details  16HashMap为什么线程不安全？

在多线程情况下`HashMap`扩容会导致死循环和数据丢失的问题。举个例子：

1. 两个线程a，b同时进行put操作，并且发生了哈希冲突。
2. 不同的线程可能在不同的时间片获取CPU的执行机会，当线程a执行完哈希冲突的判断后，由于时间片耗尽挂起了，然后线程b先完成了插入操作。
3. 随后线程a获得时间片，因为之前已经进行过哈希冲突的判断，会直接进行插入，将线程b插入的数据覆盖。
:::

::: details  17.有什么办法能解决HashMap线程不安全的问题呢？

1. 使用`HashTable`：`HashTable`的每个方法上都加了synchronized关键字，锁住整个table数组，粒度较大。
2. 使用`ConcurrenyHashMap`，`ConcurrenyHashMap`在1.7长使用分段锁，1，8中使用了CAS+synchronized/
3. 使用Collections.synchronizedMap()保证HashMap的线程安全。
:::

::: details  18.ConcurrentHashMap的底层实现原理是什么？

> ConcurrentHashmap线程安全在jdk1.7版本是基于`分段锁`实现，在jdk1.8是基于`CAS+synchronized`实现。
>
> ConcurrentHashmap的key和value都不能为空，为了避免二义性。

- 1.7分段锁： 

  - 从结构上说，1.7版本的ConcurrentHashMap采用分段锁机制，里面包含一个Segment数组，Segment继承于ReentrantLock，Segment则包含HashEntry的数组，HashEntry本身就是一个链表的结构，具有保存key、value的能力能指向下一个节点的指针。

  - 实际上就是相当于每个Segment都是一个HashMap，默认的Segment长度是16，也就是支持16个线程的并发写，Segment之间相互不会受到影响。

  - put流程

    ：整个流程和HashMap非常类似，只不过是先定位到具体的Segment，然后通过ReentrantLock去操作而已，后面的流程，就和HashMap基本上是一样的。 

    1. 计算hash，定位到segment，segment如果是空就先初始化
    2. 使用ReentrantLock加锁，如果获取锁失败则尝试自旋，自旋超过次数就阻塞获取，保证一定获取锁成功
    3. 遍历HashEntry，就是和HashMap一样，数组中key和hash一样就直接替换，不存在就再插入链表，链表同样操作

  - **get流程**：get也很简单，key通过hash定位到segment，再遍历链表定位到具体的元素上，需要注意的是value是volatile的，所以get是不需要加锁的。

- 1.8cas+synchronized： 

  - jdk1.8实现线程安全不是在数据结构上下功夫，它的数据结构和HashMap是一样的，数组+链表+红黑树。它实现线程安全的关键点在于put流程。
  - **put流程：** 
    1. 首先计算hash，遍历node数组，如果node是空的话，就通过CAS+自旋的方式初始化
    2. 如果当前数组位置是空则直接通过CAS自旋写入数据
    3. 如果hash==MOVED，说明需要扩容，执行扩容
    4. 如果都不满足，就使用synchronized写入数据，写入数据同样判断链表、红黑树，链表写入和HashMap的方式一样，key hash一样就覆盖，反之就尾插法，链表长度超过8就转换成红黑树
  - **get查询：**get很简单，和HashMap基本相同，通过key计算位置，table该位置key相同就返回，如果是红黑树按照红黑树获取，否则就遍历链表获取。

区别：

- **底层实现/Hash 碰撞解决方法** : JDK 1.7 采用拉链法，JDK1.8 采用拉链法结合红黑树（链表长度超过一定阈值时，将链表转换为红黑树）。
- **线程安全实现方式**：JDK 1.7 采用 `Segment` 分段锁来保证安全， `Segment` 是继承自 `ReentrantLock`。JDK1.8 放弃了 `Segment` 分段锁的设计，采用 `Node + CAS + synchronized` 保证线程安全，锁粒度更细，`synchronized` 只锁定当前链表或红黑二叉树的首节点。
- **并发度**：JDK 1.7 最大并发度是 Segment 的个数，默认是 16。JDK 1.8 最大并发度是 Node 数组的大小，并发度更大。
:::

::: details  19.ConcurrentHashMap能保证复合性操作吗？

复合操作是指由多个基本操作(如`put`、`get`、`remove`、`containsKey`等)组成的操作，例如先判断某个键是否存在`containsKey(key)`，然后根据结果进行插入或更新`put(key, value)`。这种操作在执行过程中可能会被其他线程打断，导致结果不符合预期。

`ConcurrentHashMap` 提供了一些原子性的复合操作，如 `putIfAbsent`、`compute`、`computeIfAbsent` 、`computeIfPresent`、`merge`等。这些方法都可以接受一个函数作为参数，根据给定的 key 和 value 来计算一个新的 value，并且将其更新到 map 中。
:::

::: details  20.LinkedHashMap 底层实现是什么？

`LinkedHashMap `是继承自HashMap的一个类，在HashMap的基础上增加了按照拆入顺序或者访问顺序来维护键值对的顺序。底层结构与HashMap一致，但是增加了一个双向链表来维护顺序。
:::

::: details  21.LinkedHashMap和 HashMap 有什么区别？

1. 底层实现结构：都是使用数据+链表+红黑树来实现，只不过LinkedHashMap增加了一个双向链表来维护顺序。
2. 元素顺序的处理：在HashMap中元素的存储是无序的。相比之下LinkedHashMap会按照插入顺序或访问顺序来维护元素的顺序。
3. 性能方面：因为不需要维护顺序所以HashMap的性能会优于LinkedHashMap。
4. 最后其默认大小和负载因子都是想同的，同时两者都是线程不安全的。
:::